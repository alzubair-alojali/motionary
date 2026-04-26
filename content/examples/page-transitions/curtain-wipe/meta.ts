import type { ExampleMeta } from "@/lib/types";

export const meta: ExampleMeta = {
  slug: "curtain-wipe",
  title: "Curtain Wipe",
  description: "A colored panel sweeps across the screen during navigation.",
  prompt: `A full-bleed colored panel wipes across the screen during navigation. The panel starts off-screen left (translateX -100%), enters to cover the viewport (0%), holds briefly, then continues off-screen right (100%). Animate over 2.4 seconds using cubic-bezier (0.65, 0, 0.35, 1) with keyframe times [0, 0.4, 0.6, 1] — 40% entering, 20% holding, 40% exiting. Behind the curtain, page content sits unchanged so the curtain reveals the new state cleanly when it leaves. Respect prefers-reduced-motion by hiding the curtain entirely. Visual: solid accent color, no rounding, full-bleed.`,
  tags: ["route", "wipe", "full-bleed"],
};
