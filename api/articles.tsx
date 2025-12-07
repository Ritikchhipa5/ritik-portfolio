import { client } from "@/sanity/lib/client";

export async function getPostBySlug(slug: string) {
  const query = `
    *[_type == "post" && slug.current == $slug][0]{
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
    }
  `;
  return await client.fetch(query, { slug });
}

export async function getTopPosts() {
  const query = `
    *[_type == "post"]{
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
    }
  `;
  return await client.fetch(query);
}
