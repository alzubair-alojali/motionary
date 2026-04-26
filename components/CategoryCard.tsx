import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "@/lib/types";

export function CategoryCard({ category }: { category: Category }) {
  const count = category.examples.length;
  return (
    <Link
      href={`/${category.slug}`}
      className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 transition-colors duration-150 hover:border-accent/50 hover:bg-surface-raised"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span>{String(count).padStart(2, "0")}</span>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-muted-foreground/60" />
          <span>patterns</span>
        </div>
        <ArrowUpRight
          size={16}
          className="shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          {category.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {category.description}
        </p>
      </div>
    </Link>
  );
}
