"use client";

import { useDemoFrame } from "./DemoFrame";
import { cn } from "@/lib/utils";

export function ReplayButton({ className }: { className?: string }) {
  const { replay } = useDemoFrame();
  return (
    <button
      type="button"
      onClick={replay}
      aria-label="Re-observe specimen — replay the demonstration"
      className={cn(
        "inline-flex h-11 min-w-11 items-center gap-2 border border-paper-3/50 bg-void-3/70 px-4",
        "font-mono text-[10px] uppercase tracking-[0.2em] text-paper-2 backdrop-blur-sm",
        "transition-colors duration-200",
        "hover:border-star hover:text-star",
        className,
      )}
    >
      <span aria-hidden="true">⟲</span>
      Re-observe
    </button>
  );
}
