import type { Category, Example } from "@/lib/types";
import { categories } from "./categories";

// Hover Effects
import { meta as magneticButtonMeta } from "./examples/hover-effects/magnetic-button/meta";
import MagneticButtonDemo from "./examples/hover-effects/magnetic-button/demo";
import { meta as glowFollowMeta } from "./examples/hover-effects/glow-follow/meta";
import GlowFollowDemo from "./examples/hover-effects/glow-follow/demo";
import { meta as liftShadowMeta } from "./examples/hover-effects/lift-shadow/meta";
import LiftShadowDemo from "./examples/hover-effects/lift-shadow/demo";

// Page Transitions
import { meta as slideRevealMeta } from "./examples/page-transitions/slide-reveal/meta";
import SlideRevealDemo from "./examples/page-transitions/slide-reveal/demo";
import { meta as curtainWipeMeta } from "./examples/page-transitions/curtain-wipe/meta";
import CurtainWipeDemo from "./examples/page-transitions/curtain-wipe/demo";
import { meta as morphFadeMeta } from "./examples/page-transitions/morph-fade/meta";
import MorphFadeDemo from "./examples/page-transitions/morph-fade/demo";

// Scroll Animations
import { meta as parallaxLayersMeta } from "./examples/scroll-animations/parallax-layers/meta";
import ParallaxLayersDemo from "./examples/scroll-animations/parallax-layers/demo";
import { meta as revealOnScrollMeta } from "./examples/scroll-animations/reveal-on-scroll/meta";
import RevealOnScrollDemo from "./examples/scroll-animations/reveal-on-scroll/demo";
import { meta as stickyPinMeta } from "./examples/scroll-animations/sticky-pin/meta";
import StickyPinDemo from "./examples/scroll-animations/sticky-pin/demo";

// Loading States
import { meta as skeletonShimmerMeta } from "./examples/loading-states/skeleton-shimmer/meta";
import SkeletonShimmerDemo from "./examples/loading-states/skeleton-shimmer/demo";
import { meta as dotPulseMeta } from "./examples/loading-states/dot-pulse/meta";
import DotPulseDemo from "./examples/loading-states/dot-pulse/demo";
import { meta as progressMorphMeta } from "./examples/loading-states/progress-morph/meta";
import ProgressMorphDemo from "./examples/loading-states/progress-morph/demo";

// Micro-interactions
import { meta as heartPopMeta } from "./examples/micro-interactions/heart-pop/meta";
import HeartPopDemo from "./examples/micro-interactions/heart-pop/demo";
import { meta as checkboxDrawMeta } from "./examples/micro-interactions/checkbox-draw/meta";
import CheckboxDrawDemo from "./examples/micro-interactions/checkbox-draw/demo";
import { meta as toggleSlideMeta } from "./examples/micro-interactions/toggle-slide/meta";
import ToggleSlideDemo from "./examples/micro-interactions/toggle-slide/demo";

// Text Animations
import { meta as typewriterMeta } from "./examples/text-animations/typewriter/meta";
import TypewriterDemo from "./examples/text-animations/typewriter/demo";
import { meta as staggerFadeMeta } from "./examples/text-animations/stagger-fade/meta";
import StaggerFadeDemo from "./examples/text-animations/stagger-fade/demo";
import { meta as glitchRevealMeta } from "./examples/text-animations/glitch-reveal/meta";
import GlitchRevealDemo from "./examples/text-animations/glitch-reveal/demo";

const examplesByCategory: Record<string, Array<Omit<Example, "category">>> = {
  "hover-effects": [
    { ...magneticButtonMeta, Demo: MagneticButtonDemo },
    { ...glowFollowMeta, Demo: GlowFollowDemo },
    { ...liftShadowMeta, Demo: LiftShadowDemo },
  ],
  "page-transitions": [
    { ...slideRevealMeta, Demo: SlideRevealDemo },
    { ...curtainWipeMeta, Demo: CurtainWipeDemo },
    { ...morphFadeMeta, Demo: MorphFadeDemo },
  ],
  "scroll-animations": [
    { ...parallaxLayersMeta, Demo: ParallaxLayersDemo },
    { ...revealOnScrollMeta, Demo: RevealOnScrollDemo },
    { ...stickyPinMeta, Demo: StickyPinDemo },
  ],
  "loading-states": [
    { ...skeletonShimmerMeta, Demo: SkeletonShimmerDemo },
    { ...dotPulseMeta, Demo: DotPulseDemo },
    { ...progressMorphMeta, Demo: ProgressMorphDemo },
  ],
  "micro-interactions": [
    { ...heartPopMeta, Demo: HeartPopDemo },
    { ...checkboxDrawMeta, Demo: CheckboxDrawDemo },
    { ...toggleSlideMeta, Demo: ToggleSlideDemo },
  ],
  "text-animations": [
    { ...typewriterMeta, Demo: TypewriterDemo },
    { ...staggerFadeMeta, Demo: StaggerFadeDemo },
    { ...glitchRevealMeta, Demo: GlitchRevealDemo },
  ],
};

export const registry: Category[] = categories.map((category) => ({
  ...category,
  examples: (examplesByCategory[category.slug] ?? []).map((example) => ({
    ...example,
    category: category.slug,
  })),
}));
