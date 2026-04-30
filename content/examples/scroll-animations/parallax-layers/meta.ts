import type { ExampleMeta } from "@/lib/types";

export const meta: ExampleMeta = {
  slug: "parallax-layers",
  title: "Parallax Layers",
  description: "Three layers move at different speeds in response to input.",
  prompt: `Three stacked layers move at different speeds in response to a positional input: scroll position on a page, or pointer offset within a contained element. Multiply the input by per-layer factors: background 0.06, mid 0.14, foreground 0.22. Distant things move less, near things move more; that's what creates depth. Drive position via motion values so updates are smooth without re-renders. Smoothly return all layers to center on input loss. Respect prefers-reduced-motion by holding all layers stationary at center. Visual: a blurred accent disc behind, a small card mid-layer, a label in front.`,
  tags: ["scroll", "parallax", "depth"],
};
