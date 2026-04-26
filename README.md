# Motionary

A reference library of motion patterns for developers — transitions, hover
effects, scroll animations, loading states, micro-interactions, and text
animations. Each entry pairs a live demo with a copy-ready AI prompt you can
hand to a coding agent (Claude, Cursor, v0) and get the effect rebuilt in your
own stack.

## Why

AI coding agents struggle to produce nuanced motion without a precise
description. Existing animation galleries either show only finished UI (no
spec) or only code (locked to a framework). Motionary closes the gap — every
pattern has a framework-agnostic effect description ready to paste.

## Stack

- Next.js 16 · App Router · TypeScript · Tailwind 4
- [`motion`](https://motion.dev) (motion.dev's React lib, formerly Framer
  Motion)
- `lucide-react` icons · `sonner` toasts · `clsx` + `tailwind-merge` utility

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export — 26 prerendered pages
npm run lint
```

## Categories

| Slug                  | Patterns                                                |
| --------------------- | ------------------------------------------------------- |
| `hover-effects`       | Magnetic Button · Glow Follow · Lift + Shadow           |
| `page-transitions`    | Slide Reveal · Curtain Wipe · Morph Fade                |
| `scroll-animations`   | Parallax Layers · Reveal on Scroll · Sticky Pin         |
| `loading-states`      | Skeleton Shimmer · Dot Pulse · Progress Morph           |
| `micro-interactions`  | Heart Pop · Checkbox Draw · Toggle Slide                |
| `text-animations`     | Typewriter · Stagger Fade · Glitch Reveal               |

## Adding a new pattern

1. Pick a category folder under `content/examples/`.
2. Create a new directory: `content/examples/<category>/<slug>/`.
3. Add `meta.ts` with the `ExampleMeta` shape (title, description, prompt,
   tags) and `demo.tsx` (a `'use client'` component that fills its container).
4. Register it in `content/registry.ts` — import the meta and demo, add an
   entry to the category's array.

Every demo:

- Is a Client Component (`'use client'`).
- Honors `useReducedMotion()` from `motion/react` — collapse to a sensible
  static end-state when reduced.
- Uses palette tokens (`bg-accent`, `text-foreground`, etc.) instead of
  hard-coded colors.
- Sized to fill its container (`h-full w-full`).

## Design context

The full brand and aesthetic guidelines are at [`.impeccable.md`](./.impeccable.md).
TL;DR: technical, premium, modern · violet accent on near-black · quiet
surfaces, loud motion · developer-direct copy.

## License

MIT.
