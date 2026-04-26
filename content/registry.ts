import type { CategoryMeta, ExampleMeta } from "@/lib/types";
import { categories } from "./categories";

import { meta as magneticButtonMeta } from "./examples/hover-effects/magnetic-button/meta";
import { meta as glowFollowMeta } from "./examples/hover-effects/glow-follow/meta";
import { meta as liftShadowMeta } from "./examples/hover-effects/lift-shadow/meta";

import { meta as slideRevealMeta } from "./examples/page-transitions/slide-reveal/meta";
import { meta as curtainWipeMeta } from "./examples/page-transitions/curtain-wipe/meta";
import { meta as morphFadeMeta } from "./examples/page-transitions/morph-fade/meta";

import { meta as parallaxLayersMeta } from "./examples/scroll-animations/parallax-layers/meta";
import { meta as revealOnScrollMeta } from "./examples/scroll-animations/reveal-on-scroll/meta";
import { meta as stickyPinMeta } from "./examples/scroll-animations/sticky-pin/meta";

import { meta as skeletonShimmerMeta } from "./examples/loading-states/skeleton-shimmer/meta";
import { meta as dotPulseMeta } from "./examples/loading-states/dot-pulse/meta";
import { meta as progressMorphMeta } from "./examples/loading-states/progress-morph/meta";

import { meta as heartPopMeta } from "./examples/micro-interactions/heart-pop/meta";
import { meta as checkboxDrawMeta } from "./examples/micro-interactions/checkbox-draw/meta";
import { meta as toggleSlideMeta } from "./examples/micro-interactions/toggle-slide/meta";

import { meta as typewriterMeta } from "./examples/text-animations/typewriter/meta";
import { meta as staggerFadeMeta } from "./examples/text-animations/stagger-fade/meta";
import { meta as glitchRevealMeta } from "./examples/text-animations/glitch-reveal/meta";

export interface RegistryExample extends ExampleMeta {
  category: string;
}

export interface RegistryEntry extends CategoryMeta {
  examples: RegistryExample[];
}

const examplesByCategory: Record<string, ExampleMeta[]> = {
  "hover-effects": [magneticButtonMeta, glowFollowMeta, liftShadowMeta],
  "page-transitions": [slideRevealMeta, curtainWipeMeta, morphFadeMeta],
  "scroll-animations": [parallaxLayersMeta, revealOnScrollMeta, stickyPinMeta],
  "loading-states": [skeletonShimmerMeta, dotPulseMeta, progressMorphMeta],
  "micro-interactions": [heartPopMeta, checkboxDrawMeta, toggleSlideMeta],
  "text-animations": [typewriterMeta, staggerFadeMeta, glitchRevealMeta],
};

export const registry: RegistryEntry[] = categories.map((category) => ({
  ...category,
  examples: (examplesByCategory[category.slug] ?? []).map((meta) => ({
    ...meta,
    category: category.slug,
  })),
}));
