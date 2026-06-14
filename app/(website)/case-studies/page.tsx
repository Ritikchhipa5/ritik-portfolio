import { getCaseStudies } from "@/api/portfolio";
import CaseStudiesPageClient from "./client";

export const metadata = {
  title: "Case Studies — Deep Dives into Real Projects",
  description:
    "Detailed case studies from Ritik Chhipa's work — how real client problems were solved with AI SaaS, React, Next.js, and React Native. Results, process, and tech stack included.",
  alternates: { canonical: "https://www.ritikchhipa.xyz/case-studies" },
  openGraph: {
    title: "Case Studies — Deep Dives into Real Projects",
    description:
      "How Ritik Chhipa solved real client problems with AI SaaS, React, Next.js, and React Native. Results included.",
    url: "https://www.ritikchhipa.xyz/case-studies",
    type: "website",
  },
};

async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();
  return <CaseStudiesPageClient caseStudies={caseStudies} />;
}

export default CaseStudiesPage;
