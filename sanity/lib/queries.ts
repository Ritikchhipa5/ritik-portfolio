import { groq } from "next-sanity";

// All case studies ordered by display order
export const CASE_STUDIES_QUERY = groq`
  *[_type == "portfolio" && isCaseStudy == true] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    categories,
    categoryColor,
    client,
    headline,
    metric,
    metricLabel,
    description,
    tags,
    featured,
    overview,
    challenge,
    solution,
    results,
    techStack,
    siteUrl,
    "images": images[] {
      "src": asset->url,
      "label": alt
    },
    "testimonial": testimonial {
      quote,
      author,
      role
    }
  }
`;

// Featured only — for the homepage section (max 3)
export const FEATURED_CASE_STUDIES_QUERY = groq`
  *[_type == "portfolio" && isCaseStudy == true && featured == true] | order(order asc) [0...3] {
    _id,
    title,
    "slug": slug.current,
    categories,
    categoryColor,
    client,
    metric,
    metricLabel,
    description,
    featured
  }
`;

// Single case study by slug — for the detail page
export const CASE_STUDY_BY_SLUG_QUERY = groq`
  *[_type == "portfolio" && isCaseStudy == true && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    categories,
    categoryColor,
    client,
    headline,
    metric,
    metricLabel,
    description,
    tags,
    featured,
    overview,
    challenge,
    solution,
    results,
    techStack,
    siteUrl,
    "images": images[] {
      "src": asset->url,
      "label": alt
    },
    "testimonial": testimonial {
      quote,
      author,
      role
    }
  }
`;

// All slugs — for generateStaticParams
export const CASE_STUDY_SLUGS_QUERY = groq`
  *[_type == "portfolio" && isCaseStudy == true] {
    "slug": slug.current
  }
`;
