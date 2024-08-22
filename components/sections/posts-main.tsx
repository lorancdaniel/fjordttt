import * as Craft from "@/components/craft/layout";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface PageProps {
  id: number;
  title: string;
  url: string;
  image: string;
}

const pages: PageProps[] = [
  {
    id: 1,
    title: "Darmowe portale randkowe",
    url: "/darmowe-portale-randkowe",
    image: "/darmowe-portale-randkowe.webp",
  },
  {
    id: 2,
    title: "Ranking portali randkowych",
    url: "/ranking-portali-randkowych",
    image: "/ranking-portali-randkowych.webp",
  },
  {
    id: 3,
    title: "Ranking darmowych serwisów randkowych",
    url: "/ranking-darmowych-serwisow-randkowych",
    image: "/ranking-darmowych-serwisow-randkowych.webp",
  },
  {
    id: 4,
    title: "Portale randkowe dla dorosłych",
    url: "/portale-randkowe-dla-doroslych",
    image: "/portale-randkowe-dla-doroslych.webp",
  },
  {
    id: 5,
    title: "Serwisy randkowe - opinie",
    url: "/serwisy-randkowe-opinie",
    image: "/serwisy-randkowe-opinie.webp",
  },
  {
    id: 6,
    title: "Wszystkie posty",
    url: "/posts",
    image: "/wszystkie-posty.webp",
  },
];

export default function PagesGrid({ className }: { className?: string }) {
  return (
    <Craft.Container>
      <div className="flex flex-col gap-4 ">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 ">
          {pages.map((page) => (
            <Link href={page.url} key={page.id} className="group">
              <div
                className={cn(
                  "p-6",
                  "rounded-t",
                  "transition-all duration-300 ease-in-out",
                  "hover:border-primary",
                  "bg-gray-50 dark:bg-gray-800",
                  "flex items-center justify-between",
                  "border-0"
                )}
              >
                <span
                  className={cn(
                    "text-xs font-bold",
                    "text-gray-700 dark:text-gray-300",
                    "group-hover:text-primary dark:group-hover:text-primary",
                    "transition-colors duration-300"
                  )}
                >
                  {page.title}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn(
                    "h-4 w-4",
                    "text-gray-400 dark:text-gray-500",
                    "group-hover:text-primary dark:group-hover:text-primary",
                    "transition-colors duration-300"
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <Image
                src={page.image}
                alt={`${page.title} logo`}
                width={500}
                height={500}
                className="rounded-md shadow-lg not-prose mb-3 rounded-t-none border-0"
              />
            </Link>
          ))}
        </div>
      </div>
    </Craft.Container>
  );
}
