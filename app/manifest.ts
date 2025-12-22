import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ritik Chhipa — Full-Stack & Mobile App Developer",
    short_name: "Ritik Chhipa — Full-Stack & Mobile App Developer",
    description:
      "Ritik is a full-stack, mobile, and Web3 developer building premium, scalable digital products. Trusted by more than 50+ clients.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#9ae600",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
