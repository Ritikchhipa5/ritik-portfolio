import SectionHeading from "@/app/(website)/(components)/section-heading";
import { getTopPosts } from "@/api/articles";
import BlogList from "@/app/(website)/(components)/blog/blog-list";

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
