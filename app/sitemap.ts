import type { MetadataRoute } from "next";
import { getAllExamplePaths, getCategories } from "@/lib/content";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://motionary.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const home: MetadataRoute.Sitemap[number] = {
    url: SITE_URL,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1.0,
  };

  const categories = getCategories().map((category) => ({
    url: `${SITE_URL}/${category.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const examples = getAllExamplePaths().map(({ category, slug }) => ({
    url: `${SITE_URL}/${category}/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [home, ...categories, ...examples];
}
