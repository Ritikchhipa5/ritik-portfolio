"use client";

import SectionHeading from "@/app/(website)/(components)/section-heading";
import BlogList from "@/app/(website)/(components)/blog/blog-list";
export async function BlogSection() {
  return <></>;
  return (
    <div className="relative py-10 md:py-20 w-full bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          primaryHeading="My Blog"
          secondHeading="Thoughts & Tutorials"
        />

        <BlogList />
      </div>
    </div>
  );
}
