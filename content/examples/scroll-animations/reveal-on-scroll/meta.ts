import type { ExampleMeta } from "@/lib/types";

export const meta: ExampleMeta = {
  slug: "reveal-on-scroll",
  title: "Reveal on Scroll",
  description: "Items fade and rise into view as they enter the viewport.",
  prompt: `A list of items fades in and rises into place as the group enters the viewport. Each item starts at opacity 0, translateY +16px. On reveal, animate to opacity 1, translateY 0 over 0.55s using cubic-bezier (0.32, 0.72, 0, 1). Stagger the children by 160ms each, with a 50ms initial delay. Use parent variants with staggerChildren so all timing is declarative on the parent rather than per-child. Trigger on viewport enter (whileInView with once: true is sufficient for a typical page). Respect prefers-reduced-motion by showing items at rest immediately. Visual: vertical stack, small accent dots and body-weight text rows.`,
  tags: ["scroll", "fade", "stagger"],
};
