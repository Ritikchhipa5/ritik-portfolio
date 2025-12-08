"use client";

import SectionHeading from "@/app/(website)/(components)/section-heading";
import BlogList from "@/app/(website)/(components)/blog/blog-list";
import { getTopPosts } from "@/api/articles";
import { useEffect, useMemo, useState } from "react";

function BlogPage() {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const data = await getTopPosts();
      setPosts(data);
    })();
  }, []);

  const postsData = useMemo(() => {
    if (!posts?.length) {
      return [];
    }

    return posts?.map((article: any) => ({
      body: article?.body || {},
      title: article?.title || "",
      slug: article?.slug?.current || "",
      publishedDate: article?.publishedAt || "",
      description: article?.description || "",
      mainImage: article?.mainImage?.asset?.url || "",
      author: {
        name: article?.author?.name || "",
        image: article?.author?.image?.asset?._ref || "",
      },
    }));
  }, [posts]);

  return (
    <div className="relative py-10 md:py-20 w-full bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          primaryHeading="My Blog"
          secondHeading="Thoughts & Tutorials"
        />

        <BlogList posts={postsData} />
      </div>
    </div>
  );
}

export default BlogPage;
