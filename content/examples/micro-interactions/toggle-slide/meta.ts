import type { ExampleMeta } from "@/lib/types";

export const meta: ExampleMeta = {
  slug: "toggle-slide",
  title: "Toggle Slide",
  description: "A switch knob slides with a soft spring on flip.",
  prompt: `A toggle switch with a knob that slides between off and on, driven by a soft spring. The track is rounded-full with a transparent-with-foreground-tint background when off and accent color when on. The knob is a circle inside the track that translates ~28px between the two positions. Drive translation with a spring (stiffness 360, damping 28) so the knob lands cleanly without overshoot. The track color crossfades over 200ms during the transition. Respect prefers-reduced-motion by snapping the knob immediately, no spring. Visual: 64px wide track, 28px knob with subtle shadow, the knob uses background color so it reads on either track state.`,
  tags: ["click", "toggle", "spring"],
};
