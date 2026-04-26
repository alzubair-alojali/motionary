import { registry } from "@/content/registry";
import { getDemoComponent } from "@/content/demos";
import type { Category, Example } from "./types";

let cachedCategories: Category[] | null = null;

function buildCategories(): Category[] {
  return registry.map((category) => ({
    ...category,
    examples: category.examples.map((meta) => ({
      ...meta,
      Demo: getDemoComponent(meta.category, meta.slug),
    })),
  }));
}

export function getCategories(): Category[] {
  if (!cachedCategories) {
    cachedCategories = buildCategories();
  }
  return cachedCategories;
}

export function getCategory(slug: string): Category | undefined {
  return getCategories().find((category) => category.slug === slug);
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
