import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CategoryCard } from "@/components/CategoryCard";
import { DemoFrame } from "@/components/DemoFrame";
import { getCategories, getExample } from "@/lib/content";

export default function Home() {
  const categories = getCategories();
  const totalExamples = categories.reduce(
    (sum, c) => sum + c.examples.length,
    0,
  );

  const featured = getExample("loading-states", "dot-pulse");
  const FeaturedDemo = featured?.Demo;

  return (
    <div className="px-4 sm:px-8 lg:px-12">
      <section className="pt-20 pb-24 sm:pt-24 sm:pb-32">
        <div className="fade-rise grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-sm">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              Motion library / v1
            </div>

            <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-[88px]">
              Motion patterns
              <br />
              <span className="relative inline-block text-accent">
                for developers.
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-2 -z-10 h-12 blur-2xl"
                  style={{
                    background:
                      "color-mix(in oklab, var(--accent) 40%, transparent)",
                  }}
                />
              </span>
            </h1>

            <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
              A reference library of transitions, hover effects, scroll
              animations, and micro-interactions — each paired with a
              copy-ready AI prompt for your coding agent.
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/#categories"
                className="group relative inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.02] active:scale-[0.99]"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 rounded-full bg-accent opacity-50 blur-2xl"
                />
                Browse patterns
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
              <a
                href="https://github.com/alzubair-alojali/motionary"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center rounded-full border border-border bg-surface/60 px-5 text-sm text-foreground backdrop-blur-md transition-colors hover:bg-surface"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Link
              href={
                featured
                  ? `/${featured.category}/${featured.slug}`
                  : "/#categories"
              }
              className="group block"
            >
              <DemoFrame className="h-56 transition-colors duration-150 group-hover:border-accent/40">
                {FeaturedDemo ? <FeaturedDemo /> : null}
              </DemoFrame>
              <div className="mt-4 flex flex-col gap-1">
                <span className="text-sm font-medium tracking-tight text-foreground">
                  {featured?.title ?? "Loading"}
                </span>
                <span className="text-xs text-muted-foreground">
                  {featured?.description ?? "A live demo from the catalog."}
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-end gap-x-12 gap-y-8 border-t border-border pt-10 sm:gap-x-20">
          <Stat
            value={String(totalExamples).padStart(2, "0")}
            label="patterns"
          />
          <Stat
            value={String(categories.length).padStart(2, "0")}
            label="categories"
          />
          <Stat value="MIT" label="open source" mono />
          <Stat value="A11Y" label="built in" mono />
        </div>
      </section>

      <section id="categories" className="scroll-mt-24 pb-24 sm:pb-32">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              03 / Catalog
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Browse categories
            </h2>
          </div>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            {String(categories.length).padStart(2, "0")} sections ·{" "}
            {totalExamples} patterns
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
}

function Stat({
  value,
  label,
  mono,
}: {
  value: string;
  label: string;
  mono?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span
        className={`text-4xl font-semibold tracking-tight text-foreground sm:text-5xl ${mono ? "font-mono" : ""}`}
      >
        {value}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

