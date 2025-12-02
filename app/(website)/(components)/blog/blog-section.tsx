"use client";

import SectionHeading from "@/app/(website)/(components)/section-heading";
import BlogList from "@/app/(website)/(components)/blog/blog-list";
export async function BlogSection() {
  // const posts = await getPosts();

  // console.log(posts, "");
  return (
    <div className="relative py-10 md:py-20 w-full bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          primaryHeading="My Blog"
          secondHeading="Thoughts & Tutorials"
        />

        {/* Blog Grid */}
        <BlogList />
      </div>
    </div>
  );
}

const BLOG_POSTS = [
  {
    title: "How I Build Fast, Scalable Apps",
    description: "My workflow for creating modern web & mobile applications.",
    link: "/blog/post-1",
    image:
      "https://platform.theverge.com/wp-content/uploads/sites/2/2025/11/258010_Black_friday_cyber_monday_CVirginia_BF5.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400",
  },
  {
    title: "Designing Clean UI with Shadcn",
    description:
      "Tips to build beautiful, modern UI using shadcn UI + Tailwind.",
    link: "/blog/post-2",
    image:
      "https://platform.theverge.com/wp-content/uploads/sites/2/2025/11/258010_Black_friday_cyber_monday_CVirginia_BF5.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400",
  },
  {
    title: "Making MVPs That Actually Work",
    description: "How to build MVPs quickly without sacrificing quality.",
    link: "/blog/post-3",
    image:
      "https://platform.theverge.com/wp-content/uploads/sites/2/2025/11/258010_Black_friday_cyber_monday_CVirginia_BF5.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400",
  },
];
