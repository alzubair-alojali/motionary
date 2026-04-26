import type { ExampleMeta } from "@/lib/types";

export const meta: ExampleMeta = {
  slug: "sticky-pin",
  title: "Sticky Pin",
  description: "A section pins in place while content scrolls past it.",
  prompt: `A label or section element pins to a position while neighboring content scrolls past it vertically. Use position sticky (or absolute, in a contained demo) so the pinned element stays anchored while its container scrolls. The neighboring content column animates translateY from +20% to -110% over ~6 seconds, linearly, repeating. The juxtaposition of stationary vs. moving content makes the pin read as anchored to the user's viewport. Respect prefers-reduced-motion by holding the content stationary. Visual: pinned label card on the left, scrolling rows of placeholder text on the right.`,
  tags: ["scroll", "sticky", "pin"],
};
