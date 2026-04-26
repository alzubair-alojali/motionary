import type { ExampleMeta } from "@/lib/types";

export const meta: ExampleMeta = {
  slug: "skeleton-shimmer",
  title: "Skeleton Shimmer",
  description: "A gradient slides across placeholder shapes while data loads.",
  prompt: `Three placeholder bars with a translucent gradient sweeping across each one. Each bar is a rounded pill with a low-opacity foreground tint as its base. Inside each bar, a 50%-wide gradient strip (transparent → accent at ~38% opacity → transparent) translates from translateX -100% to 200% over 1.6 seconds, linearly, infinitely. Stagger the bars by 180ms each so the wave reads as organic, not synced. Respect prefers-reduced-motion by keeping the bars solid (no shimmer animation). Visual: three bars with descending widths (100%, 78%, 56%), gap-3 vertical layout, contained max-width.`,
  tags: ["loading", "skeleton", "gradient"],
};
