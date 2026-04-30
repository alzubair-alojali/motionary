import Link from "next/link";
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
    return { title: "Field not found" };
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

  const all = getCategories();
  const ordinal = String(
    all.findIndex((c) => c.slug === category.slug) + 1,
  ).padStart(2, "0");
  const count = String(category.examples.length).padStart(2, "0");

  return (
    <div className="px-6 sm:px-12 lg:px-20">
      <section className="mx-auto max-w-5xl pt-32 pb-32 sm:pt-40 sm:pb-40">
        <Link
          href="/#fields"
          className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper-3 transition-colors hover:text-paper"
        >
          ← FIELD INDEX
        </Link>

        <header className="mt-12 flex flex-col gap-6 border-b border-rule pb-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper-3">
            FIELD {ordinal} · {count} SPECIMENS
          </p>
          <h1 className="font-display text-6xl italic leading-[0.95] tracking-tight text-paper sm:text-7xl lg:text-8xl">
            {category.title}
          </h1>
          <p className="max-w-2xl font-display text-xl italic leading-relaxed text-paper-2 sm:text-2xl">
            {category.description}
          </p>
          <div className="mt-2 flex flex-wrap gap-x-8 gap-y-1 font-mono text-[10px] uppercase tracking-[0.22em] text-paper-3">
            <span>
              <span className="text-paper-2">OBSERVATION LOG</span> · ATACAMA
            </span>
            <span>
              <span className="text-paper-2">STACK</span> · 1×
            </span>
            <span>
              <span className="text-paper-2">EXP</span> · 800MS
            </span>
          </div>
        </header>

        <div>
          {category.examples.map((example, i) => (
            <ExampleCard
              key={example.slug}
              example={example}
              index={i + 1}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
