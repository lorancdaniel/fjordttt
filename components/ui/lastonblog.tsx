import React from "react";
import fjord from "@/fjord.config";
import * as Craft from "@/components/craft/layout";
import PostCard from "@/components/content/post-card";
import ContentGrid from "@/components/content/content-grid";
import { fetchPosts } from "@/lib/data";

const OstatnieWpisy = async () => {
  const { data } = await fetchPosts(9, 0); // Pobieramy 9 najnowszych wpisów

  return (
    <Craft.Container>
      <h2 className="text-2xl font-bold text-center">
        Ostatnie wpisy na blogu
      </h2>
      <ContentGrid id="ostatnie-wpisy">
        {data.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            tags={post._embedded["wp:term"]?.[0] ?? []}
          />
        ))}
      </ContentGrid>
    </Craft.Container>
  );
};

export default OstatnieWpisy;
