import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: siteConfig.url,
          es: `${siteConfig.url}/es`,
        },
      },
    },
    {
      url: `${siteConfig.url}/es`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: siteConfig.url,
          es: `${siteConfig.url}/es`,
        },
      },
    },
  ];
}
