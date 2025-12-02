import BlogCard from "@/app/(website)/(components)/blog/blog-card";

import { useState } from "react";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 mt-16">
      {blogs.map((_, i) => (
        <BlogCard key={i} />
      ))}
    </div>
  );
}

export default BlogList;
