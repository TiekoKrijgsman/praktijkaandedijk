import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://praktijkaandedijk.com",
      lastModified: "2026-04-08",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://praktijkaandedijk.com/contact",
      lastModified: "2026-04-08",
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ]
}
