import { getFeaturedCaseStudies } from "@/api/portfolio";
import CaseStudiesSectionClient from "./case-studies-section-client";

async function CaseStudiesSection() {
  const featured = await getFeaturedCaseStudies();
  return <CaseStudiesSectionClient featured={featured} />;
}

export default CaseStudiesSection;
