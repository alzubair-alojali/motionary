import type { ExampleMeta } from "@/lib/types";

export const meta: ExampleMeta = {
  slug: "magnetic-button",
  title: "Magnetic Button",
  description: "A button that subtly pulls toward the cursor on hover.",
  prompt: `Build a button with a "magnetic" hover effect. As the cursor moves within ~140px of the button's center, translate the button by 25% of the cursor's offset from the center, on both axes. Drive the translation with a soft spring (stiffness 150, damping 15, mass 0.5) so the motion lags slightly behind the pointer and overshoots gently. When the cursor leaves the area, return to origin with the same spring. Keep travel under ~10px in normal use. Respect prefers-reduced-motion by skipping the translation entirely and leaving the button centered. Visual: rounded-full, accent-colored background, comfortable padding, soft accent shadow underneath.`,
  tags: ["hover", "button", "spring"],
};
