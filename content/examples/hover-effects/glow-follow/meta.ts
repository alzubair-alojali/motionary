import type { ExampleMeta } from "@/lib/types";

export const meta: ExampleMeta = {
  slug: "glow-follow",
  title: "Glow Follow",
  description: "A radial highlight that tracks the cursor inside a card.",
  prompt: `Create a card with a soft radial glow that follows the cursor. Track pointer position relative to the card's bounds, expressed as a 0–100% value on each axis. Paint the card's background with a 280px radial gradient at that percentage position, using a translucent accent color (around 22% opacity) fading to transparent at 60% radius. Update the gradient as the cursor moves; the card itself stays still. Respect prefers-reduced-motion: keep the gradient centered and stationary. Visual: rounded-2xl card, subtle border, raised dark surface, small caption inside.`,
  tags: ["hover", "card", "gradient"],
};
