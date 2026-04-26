"use client";

import { RotateCcw } from "lucide-react";
import { useDemoFrame } from "./DemoFrame";
import { cn } from "@/lib/utils";

export function ReplayButton({ className }: { className?: string }) {
  const { replay } = useDemoFrame();
  return (
    <button
      type="button"
      onClick={replay}
      aria-label="Replay demo"
      title="Replay"
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-full",
        "border border-border bg-background/70 text-muted-foreground",
        "backdrop-blur-sm transition-colors duration-150",
        "hover:bg-background hover:text-foreground",
        className,
      )}
    >
      <RotateCcw size={14} />
    </button>
  );
}
