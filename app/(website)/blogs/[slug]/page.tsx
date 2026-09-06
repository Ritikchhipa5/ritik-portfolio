import { getPostBySlug, getTopPosts } from "@/api/articles";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

import { notFound } from "next/navigation";

import { BackButton } from "@/app/(website)/blogs/[slug]/back-button";
import ArticleContent from "@/app/(website)/blogs/[slug]/article-copy-button";
import SectionHeading from "@/app/(website)/(components)/section-heading";
import BlogList from "@/app/(website)/(components)/blog/blog-list";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: any) {
  const { slug } = await params;
  const article = await getPostBySlug(slug);

  if (!article) return {};

  const title = article.title ?? "Blog";
  const description =
    article.description ?? article.title ?? "Read this blog article";
  const image = article.mainImage?.asset?.url ?? "";
  const url = `https://www.ritikchhipa.xyz/blogs/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  if (!slug) {
    notFound();
  }

  const article = await getPostBySlug(slug);

  if (!article) {
    notFound();
  }

  const pageData = {
    body: article.body ?? {},
    title: article.title ?? "",
    slug: article.slug?.current ?? "",
    publishedDate: article.publishedAt ?? "",
    mainImage: article.mainImage?.asset?.url ?? "",
  };

  const allPosts = await getTopPosts();
  const morePosts = (allPosts ?? [])
    .filter((p: any) => p?.slug?.current !== slug)
    .slice(0, 3)
    .map((p: any) => ({
      title: p?.title || "",
      slug: p?.slug?.current || "",
      publishedDate: p?.publishedAt || "",
      description: p?.description || "",
      mainImage: p?.mainImage?.asset?.url || "",
      author: {
        name: p?.author?.name || "",
        image: p?.author?.image?.asset?._ref || "",
      },
    }));

  return (
    <div className="relative w-full     py-20 bg-white overflow-hidden">
      <div className="relative z-10 max-w-2xl mx-auto w-full px-4 text-center">
        <div className=" space-y-16">
          <div className="gap-8 flex-col flex mb-20">
            <BackButton />

            <div className=" space-y-4">
              <h1 className=" font-newsreader text-5xl font-light">
                {pageData?.title}
              </h1>
              <p className="text-muted-foreground font-dm-sans text-sm">
                {moment(pageData?.publishedDate).format("MMM DD, YYYY")}
              </p>
            </div>
          </div>

          <div className=" aspect-[1.6]">
            <Image
              className=" rounded-2xl h-[400px] object-cover object-center"
              alt=""
              width={1000}
              height={1000}
              src={pageData?.mainImage}
            />
          </div>
          <ArticleContent body={pageData?.body} />
        </div>
      </div>

      {morePosts.length > 0 && (
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 mt-24">
          <SectionHeading primaryHeading="Keep Reading" secondHeading="More Posts" />

          <BlogList posts={morePosts} />

          <div className="flex justify-center mt-16">
            <Link
              href="/blogs"
              className="rounded-full h-12 px-8 flex items-center justify-center bg-black text-white font-dm-sans font-medium text-sm hover:opacity-90 transition-opacity"
            >
              View All Posts
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticlePage;
