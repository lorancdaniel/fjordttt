"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { useTheme } from "next-themes";
import { AnyARecord } from "dns";

interface ProductProps {
  id: number;
  name: string;
  logo: string;
  description: string;
  userRating: number;
  ourRating: number;
  link: string;
  ranking?: number;
  portalDescription: string;
}

interface TextsProps {
  expandButton: string;
  collapseButton: string;
  userRatingLabel: string;
  ourRatingLabel: string;
  goToPortalButton: string;
  portalDescriptionTitle: string;
  goToPortalButtonExpanded: string;
}

interface LoanCardProps {
  productId: any;
  className?: string;
  overrideRanking?: number;
}

const LoanCard: React.FC<LoanCardProps> = ({
  productId,
  className,
  overrideRanking,
}) => {
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [texts, setTexts] = useState<TextsProps | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [accordionHeight, setAccordionHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/dating-sites/${productId}`);
        if (!response.ok) {
          throw new Error("Nie udało się pobrać danych");
        }
        const data = await response.json();

        if (data && typeof data === "object" && data.name && data.texts) {
          setProduct(data as ProductProps);
          setTexts(data.texts as TextsProps);
        } else {
          throw new Error("Nieprawidłowa struktura danych");
        }
      } catch (err) {
        setError("Wystąpił błąd podczas ładowania danych");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  useEffect(() => {
    if (contentRef.current) {
      setAccordionHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  const toggleAccordion = () => setIsOpen(!isOpen);

  const renderHearts = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < Math.floor(rating)
              ? "text-red-500"
              : "text-gray-300 dark:text-gray-600"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      ));
  };

  if (isLoading) return <div className="text-center py-4">Ładowanie...</div>;
  if (error)
    return <div className="text-center py-4 text-red-500">{error}</div>;
  if (!product || !texts) return null;

  const displayRanking =
    overrideRanking !== undefined ? overrideRanking : product.ranking;

  return (
    <div
      className={`bg-gray-50 dark:bg-gray-800 my-6 rounded-xl shadow-lg relative ${
        className || ""
      }`}
    >
      {displayRanking !== undefined && (
        <div className="absolute top-0 left-0 bg-red-500 text-white px-3 py-1 rounded-tl-xl rounded-br-xl text-sm font-bold z-10">
          #{displayRanking}
        </div>
      )}
      <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center">
        <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 w-full sm:w-auto flex justify-center">
          <Image
            src={product.logo}
            alt={`${product.name} logo`}
            width={100}
            height={100}
            className="rounded-md shadow-lg"
          />
        </div>
        <div className="flex-grow mb-4 sm:mb-0">
          <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-2">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {product.description}
          </p>
          <button
            onClick={toggleAccordion}
            className="text-sm text-red-300 hover:underline font-medium"
          >
            {isOpen ? texts.collapseButton : texts.expandButton}
          </button>
        </div>
        <div className="flex-shrink-0 w-full sm:w-auto sm:ml-6 text-center bg-gray-700 dark:bg-gray-600 p-4 rounded-lg">
          <div className="mb-2">
            <p className="text-xs text-white mb-1">{texts.userRatingLabel}</p>
            <div className="flex justify-center">
              {renderHearts(product.userRating)}
            </div>
          </div>
          <div className="mb-4">
            <p className="text-xs text-white mb-1">{texts.ourRatingLabel}</p>
            <div className="flex justify-center">
              {renderHearts(product.ourRating)}
            </div>
          </div>
          <Link href={product.link}>
            <Button variant="destructive" className="w-full">
              {texts.goToPortalButton}
            </Button>
          </Link>
        </div>
      </div>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? `${accordionHeight}px` : "0px" }}
      >
        <div
          ref={contentRef}
          className="p-4 bg-gray-200 dark:bg-gray-700 border-t border-gray-300 dark:border-gray-600"
        >
          <h4 className="text-lg font-semibold mb-2 dark:text-white">
            {texts.portalDescriptionTitle}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-5">
            {product.portalDescription}
          </p>
          <Link href={product.link}>
            <Button variant="destructive" className="w-full">
              {texts.goToPortalButtonExpanded}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoanCard;
