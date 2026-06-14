import SectionHeading from "@/app/(website)/(components)/section-heading";
import { getTopPosts } from "@/api/articles";
import BlogList from "@/app/(website)/(components)/blog/blog-list";

export const metadata = {
  title: "Blog — Insights on AI, React & Full-Stack Development",
  description:
    "Articles by Ritik Chhipa on AI SaaS, React, Next.js, React Native, system design, and freelancing. Practical insights from 50+ real-world projects.",
  alternates: { canonical: "https://www.ritikchhipa.xyz/blogs" },
  openGraph: {
    title: "Blog — Insights on AI, React & Full-Stack Development",
    description:
      "Practical articles on AI SaaS, React, Next.js, React Native, and freelancing by Ritik Chhipa.",
    url: "https://www.ritikchhipa.xyz/blogs",
    type: "website",
  },
};

async function BlogPage() {
  const posts = await getTopPosts();
  const postsData = posts?.map((article: any) => ({
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
