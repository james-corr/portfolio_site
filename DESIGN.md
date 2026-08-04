---
name: Split-Flap Concourse
description: "A career read as a rail concourse departure board: matte flap black, brushed steel frames, amber reserved for live status."
colors:
  flap-black: "#0D0D0F"
  flap-shadow: "#1B1B1E"
  flap-face: "#17171A"
  flap-white: "#F2F2F2"
  amber: "#FFB400"
  amber-bright: "#FFC633"
  amber-dim: "#C98D00"
  amber-ink: "#14100A"
  red: "#D32F2F"
  steel: "#B6BBC2"
  steel-dark: "#7D838C"
  steel-deep: "#4A4E55"
  ink-muted: "#9AA0A8"
  copy-dim: "#D5D8DC"
  lamp-green: "#35D06A"
  seam: "rgba(0, 0, 0, 0.85)"
  cell-edge: "rgba(255, 255, 255, 0.07)"
typography:
  display:
    fontFamily: "Barlow Condensed, ui-sans-serif, sans-serif"
    fontSize: "clamp(1.5rem, 2.9vw, 2.7rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Barlow Condensed, ui-sans-serif, sans-serif"
    fontSize: "clamp(1.3rem, 4.4vw, 3.4rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.02em"
  title:
    fontFamily: "Barlow Condensed, ui-sans-serif, sans-serif"
    fontSize: "clamp(1.15rem, 1.5vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "0.05em"
  data:
    fontFamily: "Barlow Condensed, ui-sans-serif, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.06em"
    fontFeature: "tabular-nums"
  body:
    fontFamily: "Barlow, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Barlow, system-ui, -apple-system, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0.18em"
rounded:
  cell: "1px"
  chrome: "2px"
  panel: "3px"
  frame: "0"
spacing:
  cell-gap: "3px"
  row-gap: "6px"
  row-pad: "0.7rem 0.75rem"
  frame-w: "11px"
  board-pad: "clamp(1rem, 2.4vw, 2rem)"
  gutter: "clamp(1rem, 3.5vw, 3rem)"
  section: "clamp(3.5rem, 8vw, 6.5rem)"
  page-max: "1320px"
components:
  board-frame:
    backgroundColor: "{colors.flap-black}"
    rounded: "{rounded.frame}"
    padding: "{spacing.board-pad}"
  flap-cell:
    textColor: "{colors.flap-white}"
    rounded: "{rounded.chrome}"
    width: "0.72em"
    padding: "0.1em 0"
  flap-cell-ghost:
    textColor: "transparent"
    rounded: "{rounded.chrome}"
    width: "0.72em"
  button-amber:
    backgroundColor: "transparent"
    textColor: "{colors.amber}"
    typography: "{typography.title}"
    rounded: "{rounded.chrome}"
    padding: "0.6rem 1.1rem"
  button-amber-hover:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.amber-ink}"
  button-amber-lg:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.amber-ink}"
    padding: "0.85rem 1.6rem"
  button-amber-lg-hover:
    backgroundColor: "{colors.amber-bright}"
    textColor: "{colors.amber-ink}"
  status-completed:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    rounded: "{rounded.chrome}"
    padding: "0.24rem 0.6rem"
  status-live:
    backgroundColor: "transparent"
    textColor: "{colors.amber}"
    rounded: "{rounded.chrome}"
    padding: "0.24rem 0.6rem"
  status-build:
    backgroundColor: "transparent"
    textColor: "{colors.flap-white}"
    rounded: "{rounded.chrome}"
    padding: "0.24rem 0.6rem"
  board-row:
    backgroundColor: "transparent"
    textColor: "{colors.flap-white}"
    padding: "{spacing.row-pad}"
  board-row-hover:
    backgroundColor: "rgba(255, 255, 255, 0.035)"
    textColor: "{colors.amber}"
  board-row-open:
    backgroundColor: "rgba(255, 180, 0, 0.06)"
    textColor: "{colors.amber}"
  nav-link:
    textColor: "{colors.flap-white}"
    typography: "{typography.title}"
    padding: "0.2rem 0"
  nav-link-hover:
    textColor: "{colors.amber}"
---

# Design System: Split-Flap Concourse

## Overview

**Creative North Star: "Split-Flap Concourse"**

The world is a rail concourse departure board: matte flap black with a real seam through every character cell, brushed steel frames and rivets, paint-white condensed caps in fixed-width cells, amber reserved for live status. A career is read the way a hall reads a schedule, two boards running at once, revenue departing and software arriving. The board is a built object with hardware, not a dark theme with a monospace font.

The direction is recorded on **concept seed key `a9d5223a`** (scope: direction, mode: persuade), dealt as a catalog challenger against the assigned grounded direction and chosen by the user over it. That key is persisted here so a later session can verify the roll rather than re-derive the world.

Density is high and horizontal. Every unit of information is a row in a table, so the page has no cards, no tiles, and no metric grid. Depth comes only from the steel frame and the recess behind it. The refusals are part of the world: no scroll-reveal counters, no terminal boot overlay, no glassmorphism, no gradient mesh, no hover lift.

**Key Characteristics:**
- Matte black panels held in four-sided brushed steel, riveted at the corners and along the rails
- A 1px seam through the middle of every character cell, the single detail that makes the board a board
- Amber is the only saturated color, and it means live, current, or actionable
- Rows are the only container; every dataset is a real semantic table
- Exactly two authored motion beats, both of them the board settling
- Condensed caps for board voice, plain Barlow for anything a human reads as a sentence

## Colors

Two materials and one signal: matte flap black for the panels, brushed steel for the structure, amber for anything live. Everything else is a neutral step between the black and the white.

### Primary
- **Concourse Amber** (`{colors.amber}`): The only saturated color in the system. It marks live status lamps, the primary action, active nav underline, section rules, expanded-row highlight, detail bullets, `dt` labels, and the focus ring. Nothing decorative gets it.
- **Amber Bright** (`{colors.amber-bright}`): Hover-only lift on filled amber (`.btn-lg`) and amber links. Declared as a literal in the component rules, not as a `:root` custom property.
- **Amber Ink** (`{colors.amber-ink}`): The near-black used for text sitting *on* amber. It is the only text color permitted on an amber fill.

### Secondary
- **Brushed Steel** (`{colors.steel}`): The frame material and the outline color of a completed status. Also carries footer status and contact links at rest.
- **Steel Dark** (`{colors.steel-dark}`): Quiet label voice, table headers, nav glosses, `dt` labels in the notice board, the location line.
- **Steel Deep** (`{colors.steel-deep}`): Declared in `:root`; currently unreferenced. It exists as the darkest step of the steel ramp for a deeper frame or a pressed rail state.

### Tertiary
- **Stop Red** (`{colors.red}`): Declared and deliberately used nowhere. It is reserved for a stopped, cancelled, or delayed state. This build has no such state, so red appears zero times in the rendered page.
- **Service Green** (`{colors.lamp-green}`): The one hue outside the stated palette. It exists only as the 0.6rem round service lamp on "Open to new roles" and its footer twin, with a soft 3px halo. It is never text, never a fill, never a border.

### Neutral
- **Flap Black** (`{colors.flap-black}`): Page ground and panel ground. The body also carries a fixed ambience layer: a dim amber wash from above and a steel wash from the upper right, both under 7% opacity.
- **Flap Face** (`{colors.flap-face}`): The unlit cell face used by the wordmark cells.
- **Flap Shadow** (`{colors.flap-shadow}`): Declared in `:root`; currently unreferenced. The lit flap cells author their own two-stop gradient instead.
- **Paint White** (`{colors.flap-white}`): Printed glyphs and lit row text. Never pure `#FFF`; the paint is slightly off.
- **Copy Dim** (`{colors.copy-dim}`): Long-form prose (hero copy, detail lists, case answers, notice paragraphs). One step below paint white so board voice always outranks body voice.
- **Ink Muted** (`{colors.ink-muted}`): Scope column and section sub-copy, the quietest readable text.
- **Seam** (`{colors.seam}`): The 1px black line at 50% height of every flap cell and every wordmark cell.
- **Cell Edge** (`{colors.cell-edge}`): Declared in `:root`; currently unreferenced. Lit cells use `rgba(255,255,255,0.08)` and ghosts `rgba(255,255,255,0.045)` inline.
- **Amber Dim** (`{colors.amber-dim}`): Declared in `:root`; currently unreferenced. Amber states brighten on hover rather than dim, so the dim step has no consumer.

### Named Rules
**The Reserved Red Rule.** Red is declared and spent on nothing. It belongs to a stopped state only. No error text, no destructive button, and no accent may claim it; if red appears anywhere other than a halted row, the system has been broken.

**The Amber Scarcity Rule.** Amber means live, current, or actionable, and nothing else. A completed row is steel outline; an in-build row is steel outline with white text. If a screen has more than one amber region competing for the eye, one of them is decorative and must be demoted to steel.

**The Two Materials Rule.** Surfaces are matte flap black; structure is brushed steel. There is no third material. The only translucency in the system is the sticky header's near-opaque scrim (`rgba(13,13,15,0.94)` with a 10px backdrop blur); nothing else is frosted, glassy, or tinted.

## Typography

**Display Font:** Barlow Condensed (self-hosted latin subset, weights 600 and 700, `ui-sans-serif` fallback)
**Body Font:** Barlow (self-hosted latin subset, weights 400, 500, 600, `system-ui` fallback)

Both faces are self-hosted from `fonts/` as woff2 latin subsets with `font-display: swap`; the 700 condensed and the 400 body are preloaded. There is no Google Fonts link and no system display face.

**Character:** Condensed caps are the painted glyph on a flap leaf: tall, tight, letterspaced, always uppercase. Barlow is the paper timetable next to the board: neutral, sentence-case, comfortable at 1.6 line height. The pairing is one family in two widths, so the board and the prose read as the same institution.

### Hierarchy
- **Display** (700, `clamp(1.5rem, 2.9vw, 2.7rem)` at ≥1081px, `clamp(0.9rem, 5.4vw, 2.6rem)` below, `4.8vw` below 360px, line-height 1): The hero flap matrix only. Four rows: the name and a three-row thesis, all at one size.
- **Headline** (700, `clamp(1.3rem, 4.4vw, 3.4rem)`, line-height 1): Section flap headings (DEPARTURES, ARRIVALS, SERVICE INFO).
- **Title** (600 by font matching, `clamp(1.15rem, 1.5vw, 1.5rem)`, letter-spacing 0.05em, uppercase): The destination column of a board row: the role or product name.
- **Data** (600, 1.25rem, letter-spacing 0.06em, `tabular-nums`): Time and reference columns. Numbers must align down the column, so `font-variant-numeric: tabular-nums` is set on the table, not on the cell.
- **Body** (400, 1rem / 1.6; hero copy `clamp(1.02rem, 1.15vw, 1.15rem)`): Prose. Measure capped at 60ch (hero), 62ch (section sub), 70ch (notice), 78ch (detail panel).
- **Label** (500, 0.7rem, letter-spacing 0.18em, uppercase): Table headers, nav glosses, notice `dt`. `dt` inside a detail case runs at 600 / 0.7rem / 0.2em in amber.

### Named Rules
**The Two Weights Rule.** The condensed face ships only 600 and 700. Flap-voice elements that declare no weight inherit 400 and resolve to 600 by font matching, which is the intended board weight. Never author condensed at 400, 500, or 800; there is no file to serve it and synthesis will not match the painted glyph.

**The One Matrix Rule.** A flap panel has one cell size. The hero name and the thesis rows share a single `font-size` because a board has a single matrix; a headline with a smaller caption underneath is a poster, not a board. The size floor is set by the longest row fitting its panel, not by a comfortable reading size.

**The Board Voice Rule.** Condensed is always uppercase and always letterspaced (0.05em to 0.24em). Barlow is always sentence case. A condensed lowercase word or an uppercase paragraph of Barlow is out of world.

## Layout

The page is a single centered column capped at `{spacing.page-max}` with a fluid `{spacing.gutter}`, and it is built from boards stacked down that column: hero board, departures board, arrivals board, notice board, contact board. Sections are separated by `{spacing.section}` of top padding and nothing else; there are no dividers between sections because the frames already separate them.

The hero is a two-panel case: `minmax(0, 1.15fr)` headline against `minmax(0, 1fr)` boards, stretched to equal height, divided by a steel mullion. Both columns carry `min-width: 0` because the fixed-width flap matrix would otherwise push past the grid's min-content floor. The headline column is a flex column so the amber action settles on the bottom rail instead of floating mid-board. The notice board runs `minmax(0, 1.55fr)` copy against `minmax(0, 1fr)` metadata, divided by a 1px steel rule.

Vertical rhythm inside a board is table rhythm: `{spacing.row-pad}` per cell, 1px dividers at 6% white, no divider under the last row. Flap rows are separated by `{spacing.row-gap}` and cells within a row by `{spacing.cell-gap}`.

Six breakpoints, each one a designed break rather than a reflow:
- **1279px** The status strip's system lamp leaves the fact baseline and takes its own ruled row rather than orphaning at the end of four facts.
- **1080px** The hero stacks to one column; the mullion rotates from a left border to a top border, still steel.
- **860px** The header rewraps: nav drops to a full-width third row above a top rule, the CTA pushes right, and the nav glosses are dropped.
- **720px** Full boards restack to labeled records (`display: block` on table, rows, and cells; `thead` hidden); hero boards keep their table shape but stop negotiating for width via `table-layout: fixed` with 3.3rem time/ref tracks and a 5rem status track. Contact address and body copy step down.
- **480px** Status facts gain wrap spacing and the fact value steps up to 1.15rem.
- **359px** The headline drops to a flat `4.8vw` because the narrowest phones cannot carry a 16-cell row at the larger step.

### Named Rules
**The Row Rule.** Rows are the only container. Any new dataset is a table with real `th` and a caption, not a card grid, not tiles, not a stat row. If a piece of content cannot be expressed as a row, it belongs in the notice board's prose column.

**The Designed Break Rule.** Columns never reflow mid-row. At 720px a board restacks into whole labeled records the way a platform sign does. A layout that merely wraps its cells is a bug, not a breakpoint.

## Elevation & Depth

Depth is hardware, not shadow language. A board is a panel recessed behind a four-sided steel frame, and the entire depth vocabulary exists to sell that one relationship. Content inside a board is perfectly flat: no card shadows, no hover lift, no translate on interaction.

### Shadow Vocabulary
- **Frame seat** (`box-shadow: 0 0 0 1px rgba(0,0,0,0.85), 0 26px 60px -30px rgba(0,0,0,0.95)`): A hairline dark seat around the steel plus a wide, very soft drop. Applied to `.board-frame` only.
- **Panel recess** (`box-shadow: 0 3px 14px -4px rgba(0,0,0,0.9) inset`): A `::after` overlay inside the frame so the flap panel reads as sitting behind the steel.
- **Rivet dome** (`--rivet`, a five-stop radial gradient at a fixed 7px): Highlight at the upper left through steel to a dark ring, so the bolt reads as domed. Fixed size at any tile pitch.
- **Service lamp halo** (`box-shadow: 0 0 0 3px rgba(53,208,106,0.16)`): The only glow in the system, on the 0.6rem status lamp.
- **Cell seam** (1px `{colors.seam}` at 50% height): Not a shadow, but the depth cue that matters most. Every flap cell and every wordmark cell has one.

### Named Rules
**The Recess Rule.** Depth belongs to the frame. Panels sit behind steel and everything inside them is flat. A shadow on a row, a status pill, or a button is out of world.

**The Real Surface Rule.** Steel is an authored surface, not a gradient. `--steel-plate` is a 32px SVG data URI: `feTurbulence` fractal noise at `baseFrequency 0.035 0.9` with `stitchTiles: stitch`, desaturated, at 0.4 opacity over a flat `#A9AFB6` base. No baked gradient, because a roll baked into the tile resets at every repeat and puts a ladder of seams down the side rails. The tile is seamless in both axes and the brush direction is real.

## Shapes

Corners are functionally square. The system's radii are 0 on frames, 1px on wordmark cells, 2px on flap cells and all lit chrome (buttons, status lamps), and 3px on the two soft panels (status strip, notice board). Nothing in this world is pill-shaped, and nothing exceeds 3px.

The recurring silhouette is the fixed cell: a `0.72em`-wide box that never resizes to its glyph, bordered at 8% white, seamed at the middle, laid in a row with a 3px gap. Rows of cells run to the edge of their panel; the matrix is rectangular by construction.

Borders carry the structure. The frame is `border-image` steel at `{spacing.frame-w}` on all four sides with `border-image-slice: 8` and `background-clip: padding-box` so the panel fill stops at the frame's inner edge. Rules inside content are 1px steel at 14% to 22% opacity, or 1px white at 6% between table rows.

Icons are line-drawn at `stroke-width: 1.75` with `stroke-linecap: square` and `stroke-linejoin: miter`, 1rem inline and 1.25rem standalone, always `fill: none`. Square caps and mitered joins because the world is fabricated metal, not a rounded UI kit. Glyph icons and icon fonts do not exist here.

### Named Rules
**The Square Corner Rule.** Max radius is 3px, and only on the two non-frame panels. Frames are 0. If a shape needs a radius to look finished, it is the wrong shape for this world.

## Components

### Board Frame (signature)
A panel held in a steel frame on all four sides, riveted at the corners and along the rails. The frame is the object; the flaps sit inside it.
- **Border:** `{spacing.frame-w}` solid transparent with `border-image-source: var(--steel-plate)`, `border-image-slice: 8`, `border-image-repeat: repeat`; `background-clip: padding-box` keeps the black fill inside the frame.
- **Rivets:** a `::before` inset by `-{spacing.frame-w}`, six stacked `--rivet` layers. Four are `no-repeat` corner bolts at 7px, inset 2px from each corner. Two are `repeat-x` rails at `112px 7px`, starting at 58px: the tile carries the pitch so the bolt itself stays 7px instead of stretching into a smear.
- **Recess:** an `::after` inset shadow line so the panel reads as behind the frame.
- **Padding:** `{spacing.board-pad}` (hero board `clamp(1.25rem, 3vw, 2.5rem)`, contact board `clamp(2rem, 5vw, 4rem)` vertical).
- **Mullion:** `.hero-board-col` carries the same `border-image` steel as a left-only border at `{spacing.frame-w}`, becoming a top-only border below 1080px. A concourse board is separate cases bolted into one frame.

### Flap Cell (signature)
The atom of the system.
- **Shape:** fixed `width: 0.72em`, `padding: 0.1em 0`, `border-radius: 2px`, 1px border at 8% white, `overflow: hidden`, `transform-origin: center top`.
- **Face:** a two-stop gradient with a hard 50% break (`#202024` over `#131316`) plus a `::after` 1px `{colors.seam}` rule at 50%. The break and the seam together are the leaf.
- **Variants:** `.flap-space` is a word space, still a cell, just unprinted. `.flap-ghost` is an unlit cell past the end of a row: a darker gradient (`#191A1D` over `#101013`), border at 4.5% white, transparent glyph.
- **Row:** `.flap-line` is `display: flex; flex-wrap: nowrap; gap: 3px; overflow: hidden`. Rows never wrap; they are clipped by the panel.
- **Padding to the edge:** `main.js` measures a probe cell and the parent panel on `document.fonts.ready` and on a 140ms-debounced resize, computes `cols = floor((avail + 3) / (cellW + 3))`, and appends or removes `.flap-ghost` cells so the matrix always runs to the panel edge. Only rows inside `.flap-headline` or `.flap-heading` are padded; the contact address is a single centered row, not a matrix.
- **Accessibility:** every cell is `aria-hidden="true"` and each row carries a `.visually-hidden` real text node built from `data-flap`. This is deliberate: `aria-label` on a generic span is not reliably exposed, which would leave these headings with no accessible name.

### Buttons
Amber outline at rest, amber fill on hover, amber-ink text on any fill.
- **Shape:** 2px radius, 1px amber border.
- **Amber (default):** transparent ground, amber text, `0.6rem 1.1rem`, condensed 1rem, 0.14em tracking, uppercase, with a 1rem arrow icon at 0.55rem gap.
- **Amber large (`.btn-lg`):** amber fill from the start, amber-ink text, `0.85rem 1.6rem`, 1.2rem. Used once, as the hero action.
- **Hover / focus:** outline variant fills amber; filled variant brightens to amber-bright. Transition `background 0.18s` and `color 0.18s` on `--ease-out`. No transform, no shadow.
- **Row button (`.row-btn`):** an unstyled full-width grid inside a table cell carrying `aria-expanded` and `aria-controls`. Two lines: `.dest-main` (condensed caps, paint white) over `.dest-sub` (Barlow 500, 0.76rem, 0.13em, steel-dark).

### Board Tables (signature)
Real semantic tables. `<caption class="visually-hidden">` on every one, `<th scope="col">` on every header, `font-variant-numeric: tabular-nums` on the table.
- **Header:** Barlow 500, 0.7rem, 0.18em, uppercase, steel-dark, on a 1px steel rule at 20%.
- **Cells:** `{spacing.row-pad}`, 1px white divider at 6%, `vertical-align: middle`, none under the last row.
- **Columns:** `.col-time` / `.col-ref` are `width: 1%` and `white-space: nowrap` so they shrink-wrap; `.col-status` is right-aligned and shrink-wrapped; `.col-dest` takes the slack; `.col-scope` is ink-muted 0.9rem. Column type styling is scoped to `tbody` so `thead` labels keep their quieter voice instead of inheriting the flap face.
- **Hero variant (`.board-table-hero`):** the same table, stated quieter: 0.64rem headers, 1.02rem steel time/ref, `clamp(1rem, 1.2vw, 1.15rem)` destinations, 0.78rem status. The hero states the shape; the sections carry the detail.
- **Expandable rows:** `.board-row` toggles `aria-expanded` on its button and `hidden` on the following `.detail-row`, plus an `.is-open` class for the amber wash. Hover, focus-within, and open all raise `.dest-main` to amber. The global `[hidden] { display: none !important }` rule exists because rows go `display: block` below 720px, which would otherwise defeat the UA `[hidden]` rule and leave collapsed panels open.
- **Detail panel:** black at 40% behind a 78ch column. Either a `.detail-list` (dash-bulleted with a 0.6rem amber rule set at `top: 0.62em`) or a `.case` definition list (amber `dt` labels: Problem, Decision, Outcome), optionally closed by a `.detail-link` with an amber underline and an external-link icon.

### Status Lamps
The state vocabulary of the whole page, expressed as a bordered chip in condensed caps.
- **Shape:** 2px radius, 1px border, `0.24rem 0.6rem`, 0.92rem, 0.12em tracking, uppercase.
- **Completed (default):** steel border at 40%, steel text. Everything finished.
- **Live (`.status-live`):** amber border, amber text. In service, live, in daily use.
- **In build (`.status-build`):** steel border at full, paint-white text. Started, not shipped.
- **Stopped:** reserved to `{colors.red}`, unbuilt and unused.
- **Service lamp (`.lamp`):** a 0.6rem green circle with a 3px halo, `aria-hidden`, paired with a condensed caps phrase. Appears twice: the status strip and the footer.

### Navigation
A sticky header at 94% opacity black with a 10px backdrop blur and a 1px steel bottom rule at 18%.
- **Wordmark:** ten `.wordmark-cell` boxes, 1.05rem wide, flap-face ground, 1px radius, each with its own seam, plus a 0.4rem gap cell between the names. The board's own alphabet as the logo.
- **Links:** stacked pairs, condensed caps word (1rem, 0.14em) over a Barlow gloss (0.68rem, 0.1em, steel-dark) that names the plain-English section. 2px transparent bottom border that becomes amber on hover or focus, word turning amber with it.
- **Mobile (≤860px):** header wraps to three rows; nav becomes a full-width `space-between` row under a steel rule; glosses are hidden; CTA pushes right.

### Status Strip
A ruled service strip under the hero: white at 2.5%, 1px steel border at 14%, 3px radius. Facts are list items in condensed 700 caps divided by 1px steel left-borders (first item unruled), amber value against steel label. The system status pushes right with `margin-left: auto` until 1279px, where it takes its own row above a steel top rule.

### Motion
- **The two beats:** the hero board settles on arrival (after `document.fonts.ready`), and the contact board settles when reached (IntersectionObserver at 0.4 threshold, unobserved after firing, with a direct-settle fallback where IntersectionObserver is absent). Nothing else animates on scroll.
- **Settle:** per cell, `4 + (index % 5)` turns at 110ms, staggered `index * 55`ms. Each turn swaps the glyph to a random character from `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.@+$%/:&`, then lands on the target. Cells settle once; `_flapDone` guards re-entry.
- **`flap-turn`:** `rotateX(0) → -88deg at 55% → +88deg at 56% → 0`, 110ms on `--ease-out` (`cubic-bezier(0.16, 1, 0.3, 1)`), with `perspective: 90px` on the parent cell and `transform-origin: center top` on the glyph. The leaf is hinged at its top edge and falls. It does not squash.
- **State transitions:** 0.18s on `--ease-out`, color and background only.
- **Reduced motion:** `settleFlapLine` returns before animating, so text is simply present; the keyframe animation is set to `none`; all transitions drop to 0.01ms; smooth scrolling reverts to auto. The board sets instantly.

### Named Rules
**The Two Beats Rule.** There are exactly two authored motion moments on the page: the board settling on arrival and the last board settling at the close. Not one per section. Anything legible before the motion runs must stay legible if the motion never runs.

**The Top Hinge Rule.** A leaf hinges at its top edge and falls through `rotateX` with real perspective. No `scaleY` squash, no fade-in-up, no scroll-triggered reveal, no counter tick.

## Do's and Don'ts

### Do:
- **Do** put every new dataset in a real `<table>` with a `visually-hidden` caption, `scope="col"` headers, and `tabular-nums`.
- **Do** wrap any new board in `.board-frame` so it inherits the steel, the rivets, and the recess. The frame is what makes a surface part of this world.
- **Do** keep amber to live, current, and actionable states, plus the focus ring.
- **Do** build display text out of fixed `0.72em` flap cells with a seam, and pad the row with `.flap-ghost` cells so the matrix reaches the panel edge.
- **Do** mark every flap cell `aria-hidden` and give its row a `.visually-hidden` text node carrying the real string.
- **Do** hold radii at 0 (frames), 1px (wordmark), 2px (cells and chrome), 3px (soft panels).
- **Do** self-host any new weight as a latin-subset woff2 in `fonts/` with `font-display: swap`.
- **Do** design the breakpoint: restack whole records, move an element to its own ruled row, or drop a gloss. Six breaks exist (1279, 1080, 860, 720, 480, 359) and each one is a decision.
- **Do** make every new motion legible before it runs and instant under `prefers-reduced-motion`.
- **Do** use `[hidden]` for collapsed panels and keep the `display: none !important` override, because board rows become `display: block` below 720px.

### Don't:
- **Don't** spend `{colors.red}`. It is reserved for a stopped state and is used zero times in this build.
- **Don't** introduce cards, tiles, metric grids, or stat boxes. Rows are the only container.
- **Don't** add a third authored motion beat, a scroll-reveal, a counter tick, or a terminal boot overlay.
- **Don't** put a shadow on anything inside a board. Depth belongs to the frame.
- **Don't** author Barlow Condensed at any weight other than 600 or 700; no other file is served.
- **Don't** set condensed type in lowercase or run Barlow prose in uppercase.
- **Don't** size a headline and a caption differently inside the same flap panel. One panel, one matrix, one cell size.
- **Don't** fake steel with a linear-gradient. The frame is the `--steel-plate` turbulence tile, and a baked gradient bands at every repeat.
- **Don't** stretch a rivet to fit a pitch. The bolt is 7px; the pitch is the 112px tile.
- **Don't** add glass, frost, or gradient-mesh surfaces. The header scrim is the only translucent element in the system.
- **Don't** use glyph icons or an icon font. Icons are inline SVG at 1.75 stroke with square caps and mitered joins.
- **Don't** rely on `aria-label` on a generic span for an accessible name; render real text into a `.visually-hidden` node.
