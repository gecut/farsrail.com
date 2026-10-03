import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://farsrail.com";
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}/`,
          tr: `${baseUrl}/tr/`,
        },
      },
    },
    {
      url: `${baseUrl}/tr/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/`,
          tr: `${baseUrl}/tr/`,
        },
      },
    },
  ];
}
