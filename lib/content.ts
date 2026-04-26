import { registry } from "@/content/registry";
import type { Category, Example } from "./types";

export function getCategories(): Category[] {
  return registry;
}

export function getCategory(slug: string): Category | undefined {
  return registry.find((category) => category.slug === slug);
}

export function getExample(
  categorySlug: string,
  exampleSlug: string,
): Example | undefined {
  const category = getCategory(categorySlug);
  return category?.examples.find((example) => example.slug === exampleSlug);
}

export function getAllExamplePaths(): Array<{ category: string; slug: string }> {
  return registry.flatMap((category) =>
    category.examples.map((example) => ({
      category: category.slug,
      slug: example.slug,
    })),
  );
}
