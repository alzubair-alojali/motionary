import Link from "next/link";
import { DemoFrame } from "./DemoFrame";
import type { Example } from "@/lib/types";

interface ExampleCardProps {
  example: Example;
  index?: number;
}

export function ExampleCard({ example, index = 1 }: ExampleCardProps) {
  const { Demo } = example;
  const ordinal = String(index).padStart(2, "0");

  return (
    <Link
      href={`/${example.category}/${example.slug}`}
      className="group flex flex-col items-start gap-8 border-t border-rule py-10 transition-colors duration-300 hover:border-paper-3 sm:flex-row sm:items-center sm:gap-16"
    >
      <div className="shrink-0">
        <DemoFrame size={220}>
          <Demo />
        </DemoFrame>
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-3">
          SPECIMEN {ordinal}
        </div>
        <h3 className="font-display text-3xl italic leading-tight tracking-tight text-paper sm:text-4xl">
          {example.title}
        </h3>
        <p className="max-w-md font-display text-base italic leading-relaxed text-paper-2">
          {example.description}
        </p>
        {example.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.2em] text-paper-3">
            {example.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>
      <span
        aria-hidden="true"
        className="hidden font-mono text-base text-paper-3 transition-all duration-300 group-hover:translate-x-1 group-hover:text-star sm:inline"
      >
        →
      </span>
    </Link>
  );
}
