import type { ExampleMeta } from "@/lib/types";

export const meta: ExampleMeta = {
  slug: "glitch-reveal",
  title: "Glitch Reveal",
  description: "Text reveals with an RGB-split glitch that settles into clean type.",
  prompt: `Text reveals with an RGB-split glitch effect that settles into clean type. Render the same text three times stacked in the same position: a base copy in foreground color (always solid), and two ghost copies (one red #ef4444, one blue #3b82f6) using mix-blend-mode: screen. The ghosts start offset on the X axis (-4px and +4px) at 80% opacity, then animate through decaying keyframes (X: [-4, 2, -3, 1, 0] and the mirror; opacity: [0.8, 0.6, 0.4, 0.2, 0]) over 0.8s with easeOut. After ~2.4s, restart the cycle. Respect prefers-reduced-motion by hiding the ghost copies entirely. Visual: monospace, bold, large display size.`,
  tags: ["text", "glitch", "reveal"],
};
