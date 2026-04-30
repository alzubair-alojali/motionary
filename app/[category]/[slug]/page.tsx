import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CopyPromptButton } from "@/components/CopyPromptButton";
import { DemoFrame } from "@/components/DemoFrame";
import { ReplayButton } from "@/components/ReplayButton";
import {
  getAllExamplePaths,
  getCategory,
  getExample,
} from "@/lib/content";

export function generateStaticParams() {
  return getAllExamplePaths();
}

export async function generateMetadata(
  props: PageProps<"/[category]/[slug]">,
): Promise<Metadata> {
  const { category, slug } = await props.params;
  const example = getExample(category, slug);
  if (!example) {
    return { title: "Specimen not found" };
  }
  return {
    title: example.title,
    description: example.description,
  };
}

export default async function ExamplePage(
  props: PageProps<"/[category]/[slug]">,
) {
  const { category: categorySlug, slug: exampleSlug } = await props.params;
  const example = getExample(categorySlug, exampleSlug);
  const category = getCategory(categorySlug);
  if (!example || !category) notFound();

  const { Demo } = example;

  const allPaths = getAllExamplePaths();
  const idx = allPaths.findIndex(
    (p) => p.category === categorySlug && p.slug === exampleSlug,
  );
  const prev = idx > 0 ? allPaths[idx - 1] : null;
  const next = idx < allPaths.length - 1 ? allPaths[idx + 1] : null;
  const prevExample = prev ? getExample(prev.category, prev.slug) : null;
  const nextExample = next ? getExample(next.category, next.slug) : null;
  const ordinal = String(idx + 1).padStart(2, "0");

  return (
    <div className="px-6 sm:px-12 lg:px-20">
      <section className="mx-auto max-w-5xl pt-32 pb-32 sm:pt-40 sm:pb-40">
        <nav className="flex flex-wrap items-center gap-x-3 font-mono text-[10px] uppercase tracking-[0.22em] text-paper-3">
          <Link
            href="/#fields"
            className="transition-colors hover:text-paper"
          >
            ← FIELD INDEX
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href={`/${category.slug}`}
            className="transition-colors hover:text-paper"
          >
            {category.title}
          </Link>
        </nav>

        <header className="mt-12 border-b border-rule pb-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper-3">
            SPECIMEN {ordinal}
          </p>
          <h1 className="mt-4 font-display text-6xl italic leading-[0.95] tracking-tight text-paper sm:text-8xl lg:text-[112px]">
            {example.title}
          </h1>
          <p className="mt-6 max-w-2xl font-display text-xl italic leading-relaxed text-paper-2">
            {example.description}
          </p>
        </header>

        <div className="mt-20 flex justify-center">
          <DemoFrame
            staticDisc
            className="w-full max-w-[440px]"
            actions={
              <ReplayButton className="absolute -right-2 -top-2 sm:-right-4 sm:-top-4" />
            }
          >
            <Demo />
          </DemoFrame>
        </div>

        <div className="mt-20 flex flex-wrap gap-x-10 gap-y-3 border-y border-rule py-6 font-mono text-[10px] uppercase tracking-[0.22em] text-paper-3">
          <span>
            <span className="text-paper-2">FIELD</span> · {category.title}
          </span>
          <span>
            <span className="text-paper-2">EXP</span> · 800MS
          </span>
          <span>
            <span className="text-paper-2">EASING</span> · cubic-bezier
          </span>
          {example.tags.length > 0 && (
            <span>
              <span className="text-paper-2">TAGS</span> ·{" "}
              {example.tags.join(" · ")}
            </span>
          )}
        </div>

        <section className="mt-24">
          <div className="flex items-end justify-between gap-6 border-b border-rule pb-6">
            <h2 className="font-display text-3xl italic leading-tight tracking-tight text-paper sm:text-4xl">
              Field notes
            </h2>
            <CopyPromptButton prompt={example.prompt} />
          </div>
          <div className="mt-10 max-w-[68ch]">
            <p className="font-display text-lg italic leading-relaxed text-paper-2 sm:text-xl">
              {example.prompt}
            </p>
          </div>
        </section>

        <nav className="mt-32 grid grid-cols-1 gap-8 border-t border-rule pt-10 sm:grid-cols-2">
          <div>
            {prevExample && (
              <Link
                href={`/${prevExample.category}/${prevExample.slug}`}
                className="group flex flex-col gap-2"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper-3 transition-colors group-hover:text-paper">
                  ← PREVIOUS SPECIMEN
                </span>
                <span className="font-display text-xl italic text-paper-2 transition-colors group-hover:text-paper sm:text-2xl">
                  {prevExample.title}
                </span>
              </Link>
            )}
          </div>
          <div className="text-right">
            {nextExample && (
              <Link
                href={`/${nextExample.category}/${nextExample.slug}`}
                className="group flex flex-col items-end gap-2"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper-3 transition-colors group-hover:text-paper">
                  NEXT SPECIMEN →
                </span>
                <span className="font-display text-xl italic text-paper-2 transition-colors group-hover:text-paper sm:text-2xl">
                  {nextExample.title}
                </span>
              </Link>
            )}
          </div>
        </nav>
      </section>
    </div>
  );
}
