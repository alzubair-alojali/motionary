import { CategoryCard } from "@/components/CategoryCard";
import { Viewfinder } from "@/components/Viewfinder";
import { getCategories } from "@/lib/content";

export default function Home() {
  const categories = getCategories();
  const totalExamples = categories.reduce(
    (sum, c) => sum + c.examples.length,
    0,
  );

  return (
    <div className="px-6 sm:px-12 lg:px-20">
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center pt-32 pb-24 text-center sm:pt-40 sm:pb-32">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper-3">
          AN OBSERVATIONAL FIELD GUIDE
        </p>

        <Viewfinder className="mt-10 w-full max-w-[480px] sm:mt-14">
          <h1 className="font-display text-5xl italic leading-none tracking-tight text-paper break-words sm:text-7xl lg:text-8xl">
            Motionary
          </h1>
        </Viewfinder>

        <p className="mt-10 font-display text-xl italic leading-relaxed text-paper-2 sm:text-2xl">
          Eighteen specimens, set in the dark.
        </p>
        <p className="mt-6 max-w-md font-display text-base italic leading-relaxed text-paper-2 sm:text-lg">
          A long-exposure catalogue of interface motion patterns,
          observed at the limits of sensitivity, with the prompts that
          produce each one preserved as field notes.
        </p>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.22em] text-paper-3 sm:gap-x-10">
          <span>
            <span className="text-paper-2">FIELDS</span> ·{" "}
            {String(categories.length).padStart(2, "0")}
          </span>
          <span aria-hidden="true">·</span>
          <span>
            <span className="text-paper-2">OBJECTS</span> ·{" "}
            {String(totalExamples).padStart(2, "0")}
          </span>
          <span aria-hidden="true">·</span>
          <span>
            <span className="text-paper-2">EDITION</span> · I
          </span>
          <span aria-hidden="true">·</span>
          <span>
            <span className="text-paper-2">STATION</span> · ATACAMA
          </span>
        </div>

        <a
          href="#fields"
          className="mt-16 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-paper-3 transition-colors hover:text-paper"
        >
          <span>SCROLL · OR SELECT FIELD</span>
          <span aria-hidden="true" className="animate-bounce text-base">
            ↓
          </span>
        </a>
      </section>

      <section
        id="fields"
        className="mx-auto max-w-6xl scroll-mt-32 pb-40 pt-12 sm:pb-48"
      >
        <div className="mb-12 flex items-end justify-between gap-6 border-b border-rule pb-6 sm:mb-16">
          <h2 className="font-mono text-[10px] font-normal uppercase tracking-[0.22em] text-paper-3">
            THE SIX FIELDS
          </h2>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper-3">
            06 / 18
          </p>
        </div>
        <div className="divide-y divide-rule">
          {categories.map((category, i) => (
            <CategoryCard
              key={category.slug}
              category={category}
              index={i + 1}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
