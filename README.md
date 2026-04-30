# Motionary

> An observational field guide to interface motion.

A reference library of 18 motion patterns for developers: transitions, hover
effects, scroll animations, loading states, micro-interactions, text
animations. Each pattern shows a live demo and ships a **field-note prompt**
you can paste into a coding agent (Claude, Cursor, v0) to recreate the effect
in your own stack.

The catalog is presented as a long-exposure observatory log: paper-cream
typography on a near-black plate, with a drifting starfield, a sidereal
clock, and circular specimen discs that frame each motion as a collected
object.

## Why

AI coding agents struggle to produce nuanced motion without a precise
description. Existing animation galleries either show only finished UI (no
spec) or only code (locked to a framework). Motionary closes the gap; every
pattern carries a framework-agnostic effect description ready to paste.

## Stack

- Next.js 16 · App Router · TypeScript · Tailwind 4
- [`motion`](https://motion.dev) (motion.dev's React lib, formerly Framer
  Motion)
- [Fraunces](https://fonts.google.com/specimen/Fraunces) (display, italic) +
  [JetBrains Mono](https://www.jetbrains.com/lp/mono/) (mono body)
- [`sonner`](https://sonner.emilkowal.ski/) for the field-notes copy toast
- `clsx` + `tailwind-merge` for class composition

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export, ~28 prerendered pages
npm run lint
```

## Catalog

| Field | Specimens |
| --- | --- |
| `hover-effects` | Magnetic Button · Glow Follow · Lift + Shadow |
| `page-transitions` | Slide Reveal · Curtain Wipe · Morph Fade |
| `scroll-animations` | Parallax Layers · Reveal on Scroll · Sticky Pin |
| `loading-states` | Skeleton Shimmer · Dot Pulse · Progress Morph |
| `micro-interactions` | Heart Pop · Checkbox Draw · Toggle Slide |
| `text-animations` | Typewriter · Stagger Fade · Glitch Reveal |

## Adding a specimen

1. Pick a field folder under `content/examples/`.
2. Create a new directory: `content/examples/<field>/<slug>/`.
3. Add `meta.ts` with the `ExampleMeta` shape (slug, title, description,
   prompt, tags) and `demo.tsx` (a `'use client'` component that fills its
   container).
4. Register the demo in `content/demos.ts` (lazy-loaded `next/dynamic`
   wrapper) and the meta in `content/registry.ts`.

Every demo:

- Is a Client Component (`'use client'`)
- Honors `useReducedMotion()` from `motion/react`: collapse to a sensible
  static end-state when reduced
- Uses palette tokens (legacy aliases like `bg-accent` still resolve to the
  D4 tokens, so existing demos keep working)
- Sized to fill its container (now a circular specimen disc)

## Architecture

| Surface | Description |
| --- | --- |
| `/` | Viewfinder hero with the "Motionary" wordmark, ledger bar of catalog stats, and the six fields stacked below |
| `/[category]` | A field's specimen list: title, observation log, three specimens with disc previews |
| `/[category]/[slug]` | Specimen detail: large title, centered disc with replay control, metadata band, "Field notes" prompt block, prev/next pager |

Page transitions use a CSS-class warp (`body.warping`) that blurs and
darkens `<main>` for ~360 ms while a centered "TRANSITION · LOCKED" overlay
fades in. Reduced motion collapses this to a brief opacity dip.

## Design context

The full brand and aesthetic guidelines are at
[`.impeccable.md`](./.impeccable.md).

TL;DR: technical, premium, modern · paper on void · single cool-blue
accent · italic Fraunces display + JetBrains Mono telemetry · quiet
surfaces, loud motion.

## License

MIT.
