import type { ExampleMeta } from "@/lib/types";

export const meta: ExampleMeta = {
  slug: "slide-reveal",
  title: "Slide Reveal",
  description: "A panel slides into place from an edge as the route mounts.",
  prompt: `A panel slides into view from the left edge, holds in the center, then exits to the right. Animate translateX through keyframes ['-110%', '0%', '0%', '110%'] over 2.4 seconds, using cubic-bezier (0.32, 0.72, 0, 1). Use times [0, 0.3, 0.7, 1] so the panel spends 30% entering, 40% holding, 30% exiting. Loop with a 0.5s rest between cycles. Use this pattern for route mounts where you want a directional reveal. Respect prefers-reduced-motion by rendering the panel at rest with no animation. Visual: rounded-2xl, accent background, centered title text in accent-foreground.`,
  tags: ["route", "slide", "enter"],
};
