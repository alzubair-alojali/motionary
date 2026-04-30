import type { ExampleMeta } from "@/lib/types";

export const meta: ExampleMeta = {
  slug: "morph-fade",
  title: "Morph Fade",
  description: "A crossfade with a subtle scale shift between routes.",
  prompt: `Routes crossfade with a small scale shift. Outgoing content fades to opacity 0 and scales up to 1.02. Incoming content fades from opacity 0 to 1 and scales from 0.98 to 1.0. Both transitions take 0.45s with cubic-bezier (0.32, 0.72, 0, 1). Use AnimatePresence in 'wait' mode so the outgoing transition completes before the incoming starts: sequential, not overlapping. The result reads as a soft morph rather than a hard cut. Respect prefers-reduced-motion by removing the scale and shortening the fade to 100ms or less. Visual: large display text, centered, foreground color.`,
  tags: ["route", "fade", "scale"],
};
