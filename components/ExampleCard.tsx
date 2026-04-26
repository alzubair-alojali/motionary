import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DemoFrame } from "./DemoFrame";
import type { Example } from "@/lib/types";

export function ExampleCard({ example }: { example: Example }) {
  const { Demo } = example;
  return (
    <Link
      href={`/${example.category}/${example.slug}`}
      className="group flex flex-col gap-4"
    >
      <DemoFrame className="h-[220px] transition-colors duration-150 group-hover:border-accent/40">
        <Demo />
      </DemoFrame>
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-sm font-medium tracking-tight text-foreground">
            {example.title}
          </h3>
          <p className="text-xs leading-relaxed text-muted-foreground">
            {example.description}
          </p>
        </div>
        <ArrowUpRight
          size={14}
          className="mt-1 shrink-0 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </div>
    </Link>
  );
}
