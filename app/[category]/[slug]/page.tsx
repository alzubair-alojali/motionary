import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import type { Metadata } from "next";
import { DemoFrame } from "@/components/DemoFrame";
import { ReplayButton } from "@/components/ReplayButton";
import { CopyPromptButton } from "@/components/CopyPromptButton";
import { getAllExamplePaths, getCategory, getExample } from "@/lib/content";

export function generateStaticParams() {
  return getAllExamplePaths();
}

export async function generateMetadata(
  props: PageProps<"/[category]/[slug]">,
): Promise<Metadata> {
  const { category, slug } = await props.params;
  const example = getExample(category, slug);
  if (!example) {
    return { title: "Pattern not found" };
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
  const transitionName = `demo-${category.slug}-${example.slug}`;
  const titleName = `title-${category.slug}-${example.slug}`;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href={`/${category.slug}`}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft size={14} />
        {category.title}
      </Link>

      <div className="mt-8 flex flex-col gap-3">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {category.title}
        </p>
        <ViewTransition name={titleName}>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {example.title}
          </h1>
        </ViewTransition>
        <p className="max-w-2xl text-base text-muted-foreground">
          {example.description}
        </p>
      </div>

      <div className="relative mt-10">
        <ViewTransition name={transitionName}>
          <DemoFrame className="h-[420px] sm:h-[480px]">
            <Demo />
            <ReplayButton className="absolute right-3 top-3" />
          </DemoFrame>
        </ViewTransition>
      </div>

      <section className="mt-12">
        <div className="flex items-center justify-between gap-4">
          <h2
            id="ai-prompt-heading"
            className="text-base font-medium tracking-tight text-foreground"
          >
            AI prompt
          </h2>
          <CopyPromptButton prompt={example.prompt} />
        </div>
        <pre
          tabIndex={0}
          aria-labelledby="ai-prompt-heading"
          className="mt-4 overflow-auto whitespace-pre-wrap rounded-2xl border border-border bg-surface p-5 font-mono text-sm leading-relaxed text-foreground"
        >
          {example.prompt}
        </pre>
      </section>

      {example.tags.length > 0 && (
        <section className="mt-8 flex flex-wrap items-center gap-2">
          {example.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </section>
      )}
    </div>
  );
}
