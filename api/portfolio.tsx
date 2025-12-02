import { client } from "@/sanity/lib/client";

export async function getTopPortfolios() {
  const query = `
    *[_type == "portfolio" && enabled == true]{
      _id,
      title,
      description,
      enabled,
      tags,
      images[]{
        asset->{
          url
        },
        alt
      }
    }
  `;
  return await client.fetch(query);
}

export async function getPortfolios() {
  const query = `
    *[_type == "portfolio"]{
      _id,
      title,
      description,
      tags,
      images[]{
        asset->{
          url
        },
        alt
      }
    }
  `;
  return await client.fetch(query);
}
