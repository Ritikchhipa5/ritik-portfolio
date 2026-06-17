import { sanityFetch } from "@/sanity/lib/live";
import { client } from "@/sanity/lib/client";

// ── Case Studies ────────────────────────────────────────────────────────────

export async function getCaseStudies() {
  const { data } = await sanityFetch({
    query: `*[_type == "portfolio" && isCaseStudy == true] | order(order asc) {
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
      "images": images[]{
        "src": asset->{ "url": url }.url,
        "label": alt
      },
      "testimonial": testimonial{ quote, author, role }
    }`,
  });
  return data;
}

export async function getFeaturedCaseStudies() {
  const { data } = await sanityFetch({
    query: `*[_type == "portfolio" && isCaseStudy == true && featured == true] | order(order asc) [0...3]
    {
      _id,
      title,
      "slug": slug.current,
      client,
      description
    }`,
  });
  return data;
}

export async function getCaseStudyBySlug(slug: string) {
  const { data } = await sanityFetch({
    query: `*[_type == "portfolio" && isCaseStudy == true && slug.current == $slug][0] {
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
      "images": images[]{
        "src": asset->{ "url": url }.url,
        "label": alt
      },
      "testimonial": testimonial{ quote, author, role }
    }`,
    params: { slug },
  });
  return data;
}

// Uses client.fetch directly — called only from generateStaticParams (no request context)
export async function getCaseStudySlugs() {
  return client.fetch(
    `*[_type == "portfolio" && isCaseStudy == true]{ "slug": slug.current }`,
  );
}

// ── Portfolio ───────────────────────────────────────────────────────────────

export async function getTopPortfolios() {
  const { data } = await sanityFetch({
    query: `*[_type == "portfolio" && enabled == true]{
      _id,
      title,
      description,
      enabled,
      tags,
      isCaseStudy,
      siteUrl,
      "slug": coalesce(
        slug.current,
        select(
          isCaseStudy == true =>
            *[_type == "portfolio" && isCaseStudy == true && title == ^.title && defined(slug.current)][0].slug.current
        )
      ),
      images[]{
        asset->{
          url
        },
        alt
      }
    }`,
  });
  return data;
}

export async function getPortfolios() {
  const { data } = await sanityFetch({
    query: `*[_type == "portfolio"]{
      _id,
      title,
      description,
      tags,
      siteUrl,
      isCaseStudy,
      "slug": slug.current,
      images[]{
        asset->{
          url
        },
        alt
      }
    }`,
  });
  return data;
}
