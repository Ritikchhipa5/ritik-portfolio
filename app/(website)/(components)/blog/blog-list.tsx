import BlogCard from "@/app/(website)/(components)/blog/blog-card";

function BlogList({ posts }: any) {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 mt-16">
      {posts?.map((post: any, i: number) => (
        <BlogCard {...post} key={i} />
      ))}
    </div>
  );
}

export default BlogList;
