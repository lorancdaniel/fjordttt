import * as Craft from "@/components/craft/layout";
import Image from "next/image";
import Link from "next/link";

// Definiujemy typ dla strony
interface PageProps {
  id: number;
  title: string;
  image: string;
  url: string;
}

// Tablica z danymi stron
const pages: PageProps[] = [
  { id: 1, title: "Strona główna", image: "/images/home.jpg", url: "/" },
  { id: 2, title: "O nas", image: "/images/about.jpg", url: "/about" },
  { id: 3, title: "Usługi", image: "/images/services.jpg", url: "/services" },
  { id: 4, title: "Produkty", image: "/images/products.jpg", url: "/products" },
  { id: 5, title: "Blog", image: "/images/blog.jpg", url: "/blog" },
  { id: 6, title: "Kontakt", image: "/images/contact.jpg", url: "/contact" },
];

export default function PagesGrid({ className }: { className?: string }) {
  return (
    <Craft.Section>
      <Craft.Container>
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl">Nasze strony</h2>
          <div className="m-auto grid max-w-6xl gap-6 sm:grid-cols-2 md:grid-cols-3 mt-6 md:mt-12">
            {pages.map((page) => (
              <Link href={page.url} key={page.id} className="group">
                <div className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl">
                  <Image
                    src={page.image}
                    alt={page.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {page.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
}
