import { getCaseStudies } from "@/api/portfolio";
import CaseStudiesPageClient from "./client";

async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();
  return <CaseStudiesPageClient caseStudies={caseStudies} />;
}

export default CaseStudiesPage;
