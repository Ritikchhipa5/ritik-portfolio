import { sanityFetch } from "@/sanity/lib/live";

export async function getPostBySlug(slug: string) {
  const { data } = await sanityFetch({
    query: `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      description,
      slug,
      author->{
        name,
        image
      },
      mainImage{
        asset->{
          url
        },
        alt
      },
      categories[]->{
        title
      },
      publishedAt,
      body
    }`,
    params: { slug },
  });
  return data;
}

export async function getTopPosts() {
  const { data } = await sanityFetch({
    query: `*[_type == "post"]{
      _id,
      title,
      description,
      slug,
      author->{
        name,
        image{
        _type,
        asset,
        crop,
        hotspot
      }
      },
      mainImage{
        asset->{
          url
        },
        alt
      },
      categories[]->{
        title
      },
      publishedAt,
      body
    }`,
  });
  return data;
}
