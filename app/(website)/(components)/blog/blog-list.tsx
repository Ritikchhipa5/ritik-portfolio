import BlogCard from "@/app/(website)/(components)/blog/blog-card";
import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonBlogPost() {
  return (
    <div className="flex flex-col  space-y-4">
      <Skeleton className="w-full  h-[220px]" />
      <Skeleton className="h-4 w-[70%] " />
      <Skeleton className="h-4 w-full " />
      <Skeleton className="h-4 w-full " />
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  );
}

function BlogList({ posts, loading = false }: any) {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 mt-16">
      {loading ? (
        <>
          <SkeletonBlogPost />
          <SkeletonBlogPost />
          <SkeletonBlogPost />
        </>
      ) : (
        <>
          {posts?.map((post: any, i: number) => (
            <BlogCard {...post} key={i} />
          ))}
        </>
      )}
    </div>
  );
}

export default BlogList;
