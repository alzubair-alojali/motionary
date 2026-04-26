import { CategoryCard } from "@/components/CategoryCard";
import { getCategories } from "@/lib/content";

export default function Home() {
  const categories = getCategories();
  const totalExamples = categories.reduce((sum, c) => sum + c.examples.length, 0);

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] demo-glow"
      />
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="max-w-3xl">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {totalExamples} patterns · prompt-ready · MIT
          </p>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            Motion patterns
            <br />
            <span className="text-accent">for developers.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            A reference library of transitions, hover effects, scroll
            animations, and micro-interactions — each paired with a copy-ready
            AI prompt for your coding agent.
          </p>
        </div>

        <section id="categories" className="mt-24 scroll-mt-20">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Browse categories
            </h2>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {String(categories.length).padStart(2, "0")} categories
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
