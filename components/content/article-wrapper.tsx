"use client";
// Next Imports
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

// Component Imports
import * as Craft from "@/components/craft/layout";
import BackButton from "../global/elements/back-button";
import AboutAuthor from "./about-author";
import TableOfContents from "../ui/toc";

const Article = ({ post, date, author }: ArticleProps) => {
  const [headings, setHeadings] = useState<Array<{ id: string; text: string }>>(
    []
  );

  useEffect(() => {
    // Wyodrębnij nagłówki z treści artykułu
    const extractedHeadings =
      post.content.rendered
        .match(/<h[1-6] id="([^"]+)">([^<]+)<\/h[1-6]>/g)
        ?.map((heading) => {
          const idMatch = heading.match(/id="([^"]+)"/);
          const textMatch = heading.match(/>([^<]+)<\/h[1-6]>/);

          if (idMatch && textMatch) {
            const id = idMatch[1];
            const text = textMatch[1];
            return { id, text };
          }
          return null;
        })
        .filter(
          (heading): heading is { id: string; text: string } => heading !== null
        ) || [];

    // Ustaw nagłówki w stanie
    setHeadings(extractedHeadings);
  }, [post.content.rendered]);

  return (
    <Craft.Section>
      <Craft.Container className="flex flex-col md:flex-row">
        <div className="md:w-3/4">
          <Craft.Article>
            <h1
              className="max-w-none !leading-[1.1]"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            ></h1>

            <div className="flex not-prose gap-2 mb-6">
              <p>{date.toDateString()}</p> |
              {author && (
                <Link
                  className="transition-all hover:opacity-70"
                  href={`/posty/autorzy/${author.slug}`}
                >
                  {author.name}
                </Link>
              )}
            </div>

            <p
              dangerouslySetInnerHTML={{
                __html:
                  post.excerpt.rendered.split(". ").slice(0, 2).join(". ") +
                  ".",
              }}
            ></p>

            <BackButton />

            {post._embedded?.["wp:featuredmedia"] &&
              post._embedded["wp:featuredmedia"][0]?.media_details?.sizes?.full
                ?.source_url && (
                <div className="relative my-12 h-96 w-full md:h-[500px]">
                  <Image
                    src={author?.avatar_urls?.["96"] || "/default-avatar.png"}
                    alt={author?.name || "Autor"}
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                </div>
              )}
            <div
              className="pt-6 md:pt-12"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            ></div>
          </Craft.Article>

          <AboutAuthor {...{ post, date, author }} />
        </div>
        <aside className="md:w-1/4 md:pl-6">
          <TableOfContents headings={headings} />
        </aside>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Article;
