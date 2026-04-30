---
name: Motionary
description: An observational field guide to interface motion.
colors:
  plate-black: "#0B0D12"
  astrograph: "#11141A"
  halo-well: "#161922"
  field-cream: "#F4EFE3"
  aged-cream: "#C9C2B0"
  telemetry: "#8C8878"
  hairline: "#2A2E36"
  underrule: "#1E2128"
  cool-star: "oklch(0.86 0.06 220)"
  safelight-amber: "oklch(0.62 0.10 50)"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(3.5rem, 8vw, 7rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.02em"
    fontStyle: "italic"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.25rem, 5vw, 4rem)"
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: "-0.015em"
    fontStyle: "italic"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.2
    fontStyle: "italic"
  body:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    fontStyle: "italic"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.22em"
  metadata:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: "0"
  full: "9999px"
spacing:
  hairline: "1px"
  micro: "8px"
  small: "16px"
  medium: "24px"
  large: "48px"
  section: "80px"
  hero: "128px"
components:
  button-command:
    backgroundColor: "transparent"
    textColor: "{colors.field-cream}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
    height: "44px"
  button-command-hover:
    backgroundColor: "transparent"
    textColor: "{colors.cool-star}"
  button-replay:
    backgroundColor: "{colors.halo-well}"
    textColor: "{colors.aged-cream}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "8px 12px"
    height: "40px"
  specimen-disc:
    backgroundColor: "{colors.astrograph}"
    rounded: "{rounded.full}"
  specimen-disc-hover:
    backgroundColor: "{colors.astrograph}"
  field-plate:
    backgroundColor: "transparent"
    textColor: "{colors.field-cream}"
    padding: "48px 0"
  toast:
    backgroundColor: "{colors.halo-well}"
    textColor: "{colors.field-cream}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
---

# Design System: Motionary

## 1. Overview

**Creative North Star: "The Long Exposure"**

Motionary's surface is a long-exposure photographic plate. The dark plate
(plate-black) is loaded into the camera back; the wordmark, viewfinder
markers, and editorial body sit on top of it as if developed in cool paper
ink. Each motion pattern is collected as a circular specimen disc,
stamped, telemetry-tagged, and held against the plate the way a botanical
illustration sits in a 19th-century field guide. The Atacama corner stamp,
the sidereal LST clock ticking at one Hertz, the drifting starfield, and
the warp transition between routes all serve one image: a working
observatory, recording motion at the limits of sensitivity.

The system rejects the usual dev-tool reflexes. Slate-on-cyan, pill-shaped
nav, neon halos, glassmorphism, generic Tailwind starters, AI-orb chrome,
gradient text, and "AI startup landing-page template" energy are
prohibited by name in PRODUCT.md and prohibited again here. Two
typefaces, one cool-blue interactive accent, hairline rules, square
corners on every chrome button. Surfaces stay quiet; motion is loud.

**Key Characteristics:**

- Paper-cream type on a near-black photographic plate, no light mode
- One cool-blue accent (`cool-star`) used sparingly for hover, focus,
  active state, and a single tracking dot
- Italic Fraunces display set against JetBrains Mono small caps
  metadata, like a science journal
- Circular specimen discs frame every motion pattern; nothing is rectangular
- Hairline 1px rules between sections, never harsh borders
- Square-cornered chrome buttons (`rounded: 0`); the only `rounded-full`
  surface is the specimen disc itself
- A drifting starfield, a sidereal LST clock, and corner telemetry stamps
  run as ambient observatory layer behind every page
- Route changes cue a warp transition: blur, dim, and a "TRANSITION ·
  LOCKED" overlay; reduced motion collapses it to an opacity dip

## 2. Colors

A photographic palette: a near-black plate, paper cream foreground, hairline
rules, and a single cool-blue accent that earns its placement. The two
accents are stored as OKLCH because they live as OKLCH in the production
CSS; everything else is hex.

### Primary

- **Cool Star** (`oklch(0.86 0.06 220)`): The interactive accent.
  Hover-state borders on field plates and specimen discs, focus rings on
  every focusable element, the small live dot beside `TRACKING` in the
  telemetry footer, the hairline above the warp overlay. Reserved use,
  measured in single percent of any given screen.

### Secondary

- **Safelight Amber** (`oklch(0.62 0.10 50)`): The warm reserve. Available
  for alert states, critical highlights, or future warning chrome. Not used
  in default UI today; held in the palette so future work doesn't reach
  for a foreign hue.

### Neutral

- **Plate Black** (`#0B0D12`): The page surface. The photographic plate.
  Read against `field-cream` ink; never holds an inset.
- **Astrograph** (`#11141A`): One step above the plate. Specimen disc
  background; the slightly raised surface where a motion pattern lives.
- **Halo Well** (`#161922`): The deepest inset, used by the toast surface
  and the replay-button background. Reads as something dropped down a step,
  not raised.
- **Field Cream** (`#F4EFE3`): The primary foreground ink. Display
  italic, body italic, the bright wordmark line in corner stamps. Never
  pure white; always tinted toward warm.
- **Aged Cream** (`#C9C2B0`): Secondary text. Italic body paragraphs,
  hover-state telemetry, the second tier of corner stamps.
- **Telemetry** (`#8C8878`): Mono labels at rest. Field/specimen
  ordinals, observation logs, tag rows, the `TRANSITION · LOCKED` overlay
  text. The default voice of every label on the site. Tuned to 5.44 : 1
  contrast against `plate-black` so 10 px small caps clear WCAG AA at
  normal-text sensitivity.
- **Hairline** (`#2A2E36`): The 1px rule between sections, the rule
  beneath section headers, the border on specimen discs at rest.
- **Underrule** (`#1E2128`): A quieter division for double-stacked
  hairlines or the inner edge of a square button.

### Named Rules

**The Cool-Star Rule.** The accent (`cool-star`) appears only as a
*response* to user intent: hover, focus, active, currently-selected
state, or the live tracking indicator. It never colors a default
surface. If you can't justify it as a state response, remove it.

**The Pure-Black Ban.** `#000` is forbidden on every surface. The plate
is `#0B0D12`, never absolute black. The same applies to the warm side:
no `#FFF` ever, only `field-cream`.

## 3. Typography

**Display Font:** Fraunces (with Georgia, serif fallback).
**Body Font:** Fraunces (italic, serif).
**Label / Mono Font:** JetBrains Mono (with ui-monospace, monospace fallback).

**Character:** A printed science journal pairing. Fraunces italic carries
every piece of expressive content (titles, descriptions, field-note
prompts) at large display sizes; JetBrains Mono carries every label,
ordinal, telemetry stamp, and chrome button in 10-12px small caps with
0.18-0.22em letter-spacing. The contrast between massive italic display
(60-112px on detail pages) and 10px small-caps mono is the personality.

### Hierarchy

- **Display** (Fraunces italic, 400, `clamp(3.5rem, 8vw, 7rem)`,
  line-height 0.95): Specimen titles on detail pages. The largest single
  thing on any page; nothing competes.
- **Headline** (Fraunces italic, 400, `clamp(2.25rem, 5vw, 4rem)`,
  line-height 1.0): Field titles, the home wordmark inside the
  viewfinder.
- **Title** (Fraunces italic, 500, 1.5rem): Specimen entry names in
  field index lists, "Field notes" section heading.
- **Body** (Fraunces italic, 400, 1.125rem, line-height 1.6, max
  68ch): The eyebrow tagline ("Eighteen specimens, set in the dark"),
  the field-note prompt blocks, italic descriptions on cards. Capped at
  68ch for comfortable reading.
- **Label** (JetBrains Mono, 400, 0.625rem, letter-spacing 0.22em,
  small caps): Every chrome label. Field ordinals, observation log
  rows, breadcrumbs, button text, the telemetry footer, the corner
  station stamp.
- **Metadata** (JetBrains Mono, 400, 0.75rem, letter-spacing 0.18em):
  Specimen tag rows, the metadata band on detail pages.

### Named Rules

**The Italic-Display Rule.** Display, headline, title, and body roles
are *always* italic Fraunces. Roman Fraunces is forbidden in this
system. The italic register is the editorial voice; switching to roman
reads as a missing decision.

**The Small-Caps Mono Rule.** Every JetBrains Mono usage is uppercase
(via `text-transform: uppercase` or capital letters in source) with at
least 0.18em letter-spacing. Lowercase mono reads as a code listing,
not a telemetry stamp.

## 4. Elevation

Flat by default. There are no shadows in the chrome. Depth is conveyed
exclusively through hairline rules and a three-step tonal stack
(`plate-black` → `astrograph` → `halo-well`). The system reads as a
photographic print: ink on paper, not a glossy app surface.

State changes do not introduce shadows either. Hover on a specimen disc
shifts the border from `hairline` to `cool-star/70` and scales the
disc 1.03; no new shadow appears. The warp transition modifies blur and
brightness on `<main>`, never adds a shadow.

### Named Rules

**The Flat-By-Default Rule.** No `box-shadow` on any chrome surface.
Specimen discs, field plates, buttons, toasts, viewfinders all live at
the surface plane. If you reach for a shadow, you are about to write
a different design system.

**The Tonal-Stack Rule.** When two surfaces sit on top of each other
(toast over plate, specimen disc over field plate), step the shade in
the direction of the relationship: raised goes one step lighter
(`astrograph`), inset goes one step darker (`halo-well`). Never use
the same tone for stacked surfaces; the eye will lose them.

## 5. Components

### Buttons

Two button types, both square-cornered, both running JetBrains Mono small
caps. Buttons never round.

- **Shape:** Square corners (`rounded: 0`). 1px hairline border.
  Minimum hit area 44 × 44 px (HIG / Material).
- **Command (primary, used as `Copy field notes`):** Transparent
  background, `field-cream` text, 12 × 20 px padding, 44 px height.
  Hover: text shifts to `cool-star`, border shifts to `cool-star`. No
  scale, no shadow.
- **Replay (overlay, used as `Re-observe`):** `halo-well`/70 background
  with backdrop-blur, `aged-cream` text, 8 × 12 px padding, 40 px
  height. Hover behaves like the command button.
- **Active:** Translates 1 px down. Brief and quiet.
- **Disabled:** N/A in current chrome; if needed, drop opacity to 0.4
  and remove hover transitions.

### Specimen Disc (signature component)

The system's hero element. Every motion pattern lives inside one.

- **Shape:** Perfect circle (`aspect-square` + `rounded-full`).
- **Border:** 1 px `hairline`-equivalent stroke at 40% opacity.
- **Background:** `astrograph`, no shadow, no gradient.
- **Demo content:** Centered. The container clips the corners of any
  rectangular demo content, which is the intended specimen-on-plate
  reading.
- **Hover (when in a `group`):** Scale 1.03, border tint to
  `cool-star/70`. Transition 500ms with `cubic-bezier(0.65, 0, 0.35, 1)`.
- **Detail-page variant (`staticDisc`):** Hover-scale disabled. The
  disc is the focal element; movement comes from the demo inside, not
  from the disc itself.

### Field Plate (CategoryCard)

A category presented as one large editorial spread.

- **Shape:** No card chrome. The "plate" is a typographic block plus a
  circular `category-disc` (a smaller version of the specimen disc seeded
  with a per-field constellation).
- **Layout:** Two-column at lg, alternating left/right by 1-based index.
  Stacks vertically below lg.
- **Background:** Transparent. The `plate-black` page surface is the
  background.
- **Hover:** The category disc scales 1.03, border shifts to
  `cool-star/70`. The `Enter field →` arrow translates 4 px right.
- **Internal padding:** 48 px vertical between plates; hairline rule
  separating each.

### Specimen Entry (ExampleCard)

A single pattern inside a field's index.

- **Shape:** Horizontal row at sm+, vertical stack on mobile. No
  surrounding card; just a 220 px specimen disc, a column of text, and a
  trailing `→` glyph at the right.
- **Background:** Transparent. Hairline rule above each row.
- **Hover:** Hairline rule shifts from `hairline` to `telemetry`; the
  specimen disc inside scales (group-hover); the trailing arrow
  translates 4 px right and shifts to `cool-star`.

### Toast

Square-cornered telemetry stamp.

- **Shape:** Zero radius. 1 px `hairline` border on all four sides, no
  side-stripe.
- **Status indicator:** A leading 8 × 8 px square dot before the
  message, set in `cool-star` for success or `safelight-amber` for
  error. The colored square echoes the `TRACKING` dot in the footer
  telemetry; status comes from the dot, not from a colored edge.
- **Background:** `halo-well`.
- **Text:** `field-cream`, `label` typography (mono small caps).
- **Padding:** 12 × 16 px.

### Viewfinder (signature component)

The N/E/S/W bezel that frames the home hero and (in smaller sizes)
appears on the detail-page specimen disc.

- **Shape:** SVG circular frame at the parent's `aspect-square` width.
- **Markers:** Compass-like text labels (`N · 00°`, `E · 90°`, `S ·
  180°`, `W · 270°`) at the cardinal points, in `telemetry` color at
  75% opacity.
- **Inner ring:** Dashed concentric ring at ~72% radius with crosshair
  ticks at the cardinals.
- **No fill.** The viewfinder is pure stroke; the demo or wordmark
  inside lives independently in its own grid cell.

### Corner Telemetry / Header

Three-line corner stamps at top-left and top-right of every page,
plus a two-side telemetry footer at the bottom edge.

- **Position:** Fixed, never scrolls. Outside `<main>`, so the warp
  transition does not blur it.
- **Typography:** Mono, 10 px, 0.18em letter-spacing, lowercase
  `telemetry` text with one brighter `aged-cream` line per stamp.
- **Top-left stamp (Header):** "MOTIONARY / VOL. I · MMXXVI / FIELD
  GUIDE TO INTERFACE MOTION", clickable, links home.
- **Top-right stamp (CornerTelemetry):** "OBSERVATORY · ATACAMA STATION
  / SEEING 0.6" · CLEAR / SIDEREAL `<sidereal-clock>`".
- **Bottom telemetry (Footer):** RA/DEC stamps + EXP T on the left;
  PLATE / STACK / TRACKING on the right with a `cool-star` 1.5 px live
  dot beside the `TRACKING` line.

## 6. Do's and Don'ts

### Do:

- **Do** keep `cool-star` reserved for state response (hover, focus,
  active, live tracking). Never use it on a default surface.
- **Do** set every chrome button at 44 × 44 minimum hit area. iOS HIG /
  Material 44 dp is the floor.
- **Do** use square corners on every chrome button (`rounded: 0`). The
  specimen disc is the only `rounded-full` element in the system.
- **Do** use 1 px hairline rules between sections, never thicker borders.
- **Do** italicize every Fraunces usage. Roman Fraunces does not exist
  in this system.
- **Do** uppercase every JetBrains Mono usage with at least 0.18em
  letter-spacing.
- **Do** honor `prefers-reduced-motion` in every motion: the starfield
  pauses, the warp transition collapses to a 200ms opacity fade, every
  demo collapses to its `useReducedMotion()` static end-state.
- **Do** keep body copy at 65-75ch. Field-note prompts cap at 68ch on the
  detail page.
- **Do** vary spacing rhythm: 8 / 16 / 24 / 48 / 80 / 128. Same padding
  everywhere reads as monotony.

### Don't:

- **Don't** use light mode. The long-exposure register is fundamentally
  paper-on-void; light mode would dilute the metaphor. PRODUCT.md names
  this directly.
- **Don't** use `#000` or `#fff`. The plate is `plate-black`
  (`#0B0D12`); the ink is `field-cream` (`#F4EFE3`).
- **Don't** ship gradient text. PRODUCT.md flags this; it is forbidden
  here too. Use a single solid color and emphasize via weight or size.
- **Don't** apply glassmorphism decoratively. Backdrop-blur exists on
  the replay button and the warp overlay; nowhere else.
- **Don't** use `box-shadow` anywhere in the chrome. The Flat-By-Default
  Rule applies. State changes use border tint and scale, not new shadows.
- **Don't** use side-stripe borders greater than 1 px on any surface.
  The toast carries status via a leading 8 × 8 px square dot, not a
  colored side edge. There are no exceptions to this ban.
- **Don't** ship "AI startup landing-page template" energy: chrome 3D
  blobs, neon halos, gradient meshes behind hero text, identical
  card grids of feature bullets. PRODUCT.md flags every one of these
  by name.
- **Don't** use "Tailwind starter" defaults: `slate-900 + indigo-500`,
  rounded-2xl cards, pill nav, badges in the corners of every component.
  PRODUCT.md flags this; it is forbidden here too.
- **Don't** add em dashes to copy. Use commas, semicolons, periods, or
  parentheses. Also not `--`.
- **Don't** wrap demos in nested cards. The specimen disc is the disc;
  it is not inside another card. Nested cards are always wrong.
- **Don't** introduce a third typeface. Fraunces italic + JetBrains Mono
  is the entire system. A third face is a different system.
