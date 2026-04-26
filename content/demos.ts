import dynamic from "next/dynamic";
import type { ComponentType } from "react";

/**
 * Each entry uses next/dynamic so the demo's JS is split into its own
 * chunk and only loaded when the component is actually rendered. A page
 * that renders one demo loads one chunk; the other 17 stay on disk.
 */
const demos: Record<string, ComponentType> = {
  "hover-effects/magnetic-button": dynamic(
    () => import("./examples/hover-effects/magnetic-button/demo"),
  ),
  "hover-effects/glow-follow": dynamic(
    () => import("./examples/hover-effects/glow-follow/demo"),
  ),
  "hover-effects/lift-shadow": dynamic(
    () => import("./examples/hover-effects/lift-shadow/demo"),
  ),

  "page-transitions/slide-reveal": dynamic(
    () => import("./examples/page-transitions/slide-reveal/demo"),
  ),
  "page-transitions/curtain-wipe": dynamic(
    () => import("./examples/page-transitions/curtain-wipe/demo"),
  ),
  "page-transitions/morph-fade": dynamic(
    () => import("./examples/page-transitions/morph-fade/demo"),
  ),

  "scroll-animations/parallax-layers": dynamic(
    () => import("./examples/scroll-animations/parallax-layers/demo"),
  ),
  "scroll-animations/reveal-on-scroll": dynamic(
    () => import("./examples/scroll-animations/reveal-on-scroll/demo"),
  ),
  "scroll-animations/sticky-pin": dynamic(
    () => import("./examples/scroll-animations/sticky-pin/demo"),
  ),

  "loading-states/skeleton-shimmer": dynamic(
    () => import("./examples/loading-states/skeleton-shimmer/demo"),
  ),
  "loading-states/dot-pulse": dynamic(
    () => import("./examples/loading-states/dot-pulse/demo"),
  ),
  "loading-states/progress-morph": dynamic(
    () => import("./examples/loading-states/progress-morph/demo"),
  ),

  "micro-interactions/heart-pop": dynamic(
    () => import("./examples/micro-interactions/heart-pop/demo"),
  ),
  "micro-interactions/checkbox-draw": dynamic(
    () => import("./examples/micro-interactions/checkbox-draw/demo"),
  ),
  "micro-interactions/toggle-slide": dynamic(
    () => import("./examples/micro-interactions/toggle-slide/demo"),
  ),

  "text-animations/typewriter": dynamic(
    () => import("./examples/text-animations/typewriter/demo"),
  ),
  "text-animations/stagger-fade": dynamic(
    () => import("./examples/text-animations/stagger-fade/demo"),
  ),
  "text-animations/glitch-reveal": dynamic(
    () => import("./examples/text-animations/glitch-reveal/demo"),
  ),
};

export function getDemoComponent(
  category: string,
  slug: string,
): ComponentType {
  const demo = demos[`${category}/${slug}`];
  if (!demo) {
    throw new Error(`Demo not registered for ${category}/${slug}`);
  }
  return demo;
}
