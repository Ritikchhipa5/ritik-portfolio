import BlogCard from "@/app/(website)/(components)/blog/blog-card";
import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonBlogPost() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="w-full aspect-[16/10] rounded-2xl" />
      <div className="flex items-center gap-2">
        <Skeleton className="w-5 h-5 rounded-full shrink-0" />
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-3 w-16" />
      </div>
      <Skeleton className="h-4 w-[85%]" />
      <Skeleton className="h-4 w-[60%]" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-[80%]" />
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
