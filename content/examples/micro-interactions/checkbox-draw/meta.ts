import type { ExampleMeta } from "@/lib/types";

export const meta: ExampleMeta = {
  slug: "checkbox-draw",
  title: "Checkbox Draw",
  description: "The check mark draws itself in when toggled.",
  prompt: `A checkbox toggles by drawing its check mark in via SVG path-length. Unchecked is an empty rounded square with a subtle border. On check: the background fills with the accent color, the border switches to accent, and the inner SVG check path animates from pathLength 0 to 1 over 0.3s with easeOut. The box wobbles with a brief scale [1, 1.1, 1] for character. On uncheck, reverse: pathLength back to 0, transparent background, neutral border. Respect prefers-reduced-motion by snapping directly to the end state without the draw or wobble. Visual: 48px square, rounded-xl, 2px border, 3px stroke for the check.`,
  tags: ["click", "checkbox", "svg"],
};
