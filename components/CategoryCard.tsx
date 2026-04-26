import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "@/lib/types";
import { CategoryPreview } from "./CategoryPreview";

export function CategoryCard({ category }: { category: Category }) {
  const count = category.examples.length;
  return (
    <Link
      href={`/${category.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-150 hover:border-accent/40"
    >
      <div className="relative h-36 border-b border-border">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(420px 220px at 50% 30%, color-mix(in oklab, var(--accent) 10%, transparent), transparent 60%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 demo-grid-bg opacity-60"
        />
        <div className="relative flex h-full items-center justify-center">
          <CategoryPreview slug={category.slug} />
        </div>
      </div>

      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {count} patterns
          </span>
          <ArrowUpRight
            size={16}
            className="shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {category.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {category.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
