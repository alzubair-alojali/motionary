"use client";

import { Check, Copy } from "lucide-react";
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
      toast.success("Prompt copied");
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      toast.error("Couldn't copy — select the text and copy manually");
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy prompt to clipboard"
      className={cn(
        "inline-flex h-9 items-center gap-2 rounded-full",
        "bg-accent px-4 text-sm font-medium text-accent-foreground",
        "transition-transform duration-150 hover:scale-[1.02]",
        "active:scale-[0.98]",
        className,
      )}
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      <span>{copied ? "Copied" : "Copy prompt"}</span>
    </button>
  );
}
