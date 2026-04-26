import type { ExampleMeta } from "@/lib/types";

export const meta: ExampleMeta = {
  slug: "dot-pulse",
  title: "Dot Pulse",
  description: "Three dots pulse in sequence to indicate progress.",
  prompt: `Three small dots scale up and back down in a wave. Each dot scales between 1 and 1.5 over 0.9 seconds using easeInOut, repeating infinitely. Stagger the dots by 180ms each so the pulse reads as a wave moving left to right. The dots stay at fixed positions — only their scale changes. Use this as a small inline indicator for in-flight operations. Respect prefers-reduced-motion by holding all three at scale 1 with no animation. Visual: three 10px circles, accent color, gap-2.5 horizontal layout, vertically centered.`,
  tags: ["loading", "indicator", "loop"],
};
