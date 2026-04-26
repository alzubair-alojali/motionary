import type { ExampleMeta } from "@/lib/types";

export const meta: ExampleMeta = {
  slug: "progress-morph",
  title: "Progress Morph",
  description: "A progress bar fills, then morphs into a checkmark.",
  prompt: `A progress bar fills from 0% to 100% width, then morphs into a circular checkmark. During loading, animate the inner bar's width from 0 to 100 over 1.4 seconds with cubic-bezier (0.32, 0.72, 0, 1). On completion, swap to a circle (40px) containing an SVG checkmark. The checkmark's path-length animates from 0 to 1 over 0.4s with a small delay, reading as drawn-in. Use AnimatePresence in 'wait' mode for a clean swap; the circle scales in from 0.6 with a soft spring (stiffness 280, damping 18). Respect prefers-reduced-motion by jumping straight to the completed state. Visual: 56px wide bar, accent fill, accent circle on completion.`,
  tags: ["loading", "progress", "checkmark"],
};
