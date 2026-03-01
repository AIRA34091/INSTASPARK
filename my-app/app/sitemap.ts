import { MetadataRoute } from "next"
import { TOOLS, BRAND_NAME } from "@/lib/constants"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://instaspark.com"

  // Static pages
  const staticPages = [
    "",
    "tools/",
    "about/",
    "contact/",
    "privacy/",
    "terms/",
    "disclaimer/",
    "blog/",
  ]

  const staticRoutes = staticPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page === "" ? 1 : 0.8,
  }))

  // Tool pages
  const toolRoutes = TOOLS.map((tool) => ({
    url: `${baseUrl}${tool.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }))

  return [...staticRoutes, ...toolRoutes]
}
