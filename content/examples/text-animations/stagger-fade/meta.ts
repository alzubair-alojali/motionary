import type { ExampleMeta } from "@/lib/types";

export const meta: ExampleMeta = {
  slug: "stagger-fade",
  title: "Stagger Fade",
  description: "Words rise and fade in one after another.",
  prompt: `A sentence reveals word by word; each word rises and fades into place sequentially. Split the text into words by space. Each word starts at opacity 0, translateY +12px, and animates to opacity 1, translateY 0 over 0.45s using cubic-bezier (0.32, 0.72, 0, 1). Stagger the words by 80ms each. After the full sentence appears, hold ~2 seconds, then re-key the parent container to restart the animation. Respect prefers-reduced-motion by showing all words at rest immediately, no stagger. Visual: body-size text, wrapped on space, modest gap-x between words, gap-y for line wrapping.`,
  tags: ["text", "stagger", "fade"],
};
