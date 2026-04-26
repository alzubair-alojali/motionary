import type { ExampleMeta } from "@/lib/types";

export const meta: ExampleMeta = {
  slug: "lift-shadow",
  title: "Lift + Shadow",
  description: "A card lifts and deepens its shadow on hover.",
  prompt: `Build a card that lifts and deepens its shadow on hover. At rest, use a shallow shadow (4px blur, low opacity). On hover, translate the card -6px on the Y axis and shift to a longer, deeper shadow (around 18px blur, 32px spread, ~22% opacity). Drive both transform and shadow with a stiff spring (stiffness 300, damping 25) so the response is immediate but settled. On mouse leave, return to rest with the same spring. Respect prefers-reduced-motion by skipping the transform and shadow change entirely. Visual: rounded-2xl, subtle border, comfortable padding, an accent dot, a title and a small description.`,
  tags: ["hover", "card", "depth"],
};
