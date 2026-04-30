import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Category } from "@/lib/types";
import { CategoryDisc } from "./CategoryDisc";

interface CategoryCardProps {
  category: Category;
  index?: number;
}

export function CategoryCard({ category, index = 1 }: CategoryCardProps) {
  const flip = index % 2 === 0;
  const ordinal = String(index).padStart(2, "0");
  const count = String(category.examples.length).padStart(2, "0");

  return (
    <Link href={`/${category.slug}`} className="group block py-12 sm:py-16">
      <div
        className={cn(
          "grid items-center gap-10 lg:gap-20",
          "lg:grid-cols-[1fr_minmax(280px,360px)]",
          flip && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1",
        )}
      >
        <div
          className={cn(
            "flex flex-col gap-4",
            flip && "lg:items-end lg:text-right",
          )}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper-3">
            FIELD {ordinal} · {count} SPECIMENS
          </span>
          <h3 className="font-display text-5xl italic leading-[0.95] tracking-tight text-paper sm:text-6xl lg:text-7xl">
            {category.title}
          </h3>
          <p className="max-w-md font-display text-lg italic leading-relaxed text-paper-2">
            {category.description}
          </p>
          <span className="mt-3 inline-flex items-center gap-2 self-start font-mono text-[10px] uppercase tracking-[0.2em] text-paper-3 transition-colors duration-300 group-hover:text-star sm:self-auto">
            Enter field
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
        <div className="mx-auto">
          <CategoryDisc seed={index} />
        </div>
      </div>
    </Link>
  );
}
