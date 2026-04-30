"use client";

import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface CopyPromptButtonProps {
  prompt: string;
  className?: string;
}

export function CopyPromptButton({ prompt, className }: CopyPromptButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      toast.success("Field notes copied");
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      toast.error("Could not copy — select the text manually");
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy field notes (AI prompt) to clipboard"
      className={cn(
        "inline-flex h-11 items-center gap-2 border border-paper-3/50 bg-transparent px-5",
        "font-mono text-[11px] uppercase tracking-[0.2em] text-paper",
        "transition-colors duration-200",
        "hover:border-star hover:text-star",
        "active:translate-y-[1px]",
        className,
      )}
    >
      <span aria-hidden="true">[ {copied ? "✓" : "↵"} ]</span>
      <span>{copied ? "Copied" : "Copy field notes"}</span>
    </button>
  );
}
