import type { MetadataRoute } from "next";
import { getCaseStudySlugs } from "@/api/portfolio";

const BASE_URL = "https://www.ritikchhipa.xyz";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const caseStudySlugs: { slug: string }[] = await getCaseStudySlugs().catch(() => []);

  const caseStudyEntries: MetadataRoute.Sitemap = caseStudySlugs.map(({ slug }) => ({
    url: `${BASE_URL}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...caseStudyEntries,
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/resume`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
