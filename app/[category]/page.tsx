import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ExampleCard } from "@/components/ExampleCard";
import { getCategories, getCategory } from "@/lib/content";

export function generateStaticParams() {
  return getCategories().map((category) => ({ category: category.slug }));
}

export async function generateMetadata(
  props: PageProps<"/[category]">,
): Promise<Metadata> {
  const { category: categorySlug } = await props.params;
  const category = getCategory(categorySlug);
  if (!category) {
    return { title: "Category not found" };
  }
  return {
    title: category.title,
    description: category.description,
  };
}

export default async function CategoryPage(props: PageProps<"/[category]">) {
  const { category: categorySlug } = await props.params;
  const category = getCategory(categorySlug);
  if (!category) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/#categories"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft size={14} />
        All categories
      </Link>

      <div className="mt-8 flex flex-col gap-3">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {category.examples.length} patterns
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {category.title}
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          {category.description}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {category.examples.map((example) => (
          <ExampleCard key={example.slug} example={example} />
        ))}
      </div>
    </div>
  );
}
