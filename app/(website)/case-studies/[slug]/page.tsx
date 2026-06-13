import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getCaseStudySlugs } from "@/api/portfolio";
import CaseStudyDetailClient from "./client";

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
