import type { ExampleMeta } from "@/lib/types";

export const meta: ExampleMeta = {
  slug: "heart-pop",
  title: "Heart Pop",
  description: "A heart icon scales and bursts particles when tapped.",
  prompt: `On tap, a heart icon scales up and back, while six small particles burst outward radially. The heart scales through keyframes [0.9, 1.3, 1] over 0.55s using cubic-bezier (0.32, 0.72, 0, 1) with times [0, 0.4, 1]. Six particles start at the heart's center with opacity 1 and animate outward 32px in evenly-spaced angles (every 60°), fading to opacity 0 and shrinking to scale 0.5 over 0.6s with easeOut. Each tap re-triggers; in a card preview, auto-replay every 2.5s. Respect prefers-reduced-motion by skipping the scale animation and not emitting particles. Visual: 48px heart filled with accent, 6px particle dots in accent.`,
  tags: ["click", "like", "particles"],
};
