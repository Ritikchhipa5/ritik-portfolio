"use client";

import BlogCard from "@/app/(website)/(components)/blog/blog-card";

function BlogList() {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 mt-16">
      {[].map((_, i) => (
        <BlogCard key={i} />
      ))}
    </div>
  );
}

export default BlogList;
