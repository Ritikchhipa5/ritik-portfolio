import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getCaseStudySlugs } from "@/api/portfolio";
import CaseStudyDetailClient from "./client";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = await getCaseStudyBySlug(slug);
  if (!cs) return {};
  const title = `${cs.title} — Case Study`;
  const description = cs.description ?? `How Ritik Chhipa built ${cs.title} — tech stack, process, and results.`;
  const image = cs.images?.[0]?.src ?? "https://www.ritikchhipa.xyz/og-image.png";
  const url = `https://www.ritikchhipa.xyz/case-studies/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article", images: [{ url: image, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await getCaseStudySlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = await getCaseStudyBySlug(slug);
  if (!cs) notFound();
  return <CaseStudyDetailClient cs={cs} />;
}

export default CaseStudyDetailPage;
