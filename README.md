# James Corr | Portfolio

Static, hand-written HTML/CSS/JS. No framework, no build step.

Visual world: **Split-Flap Concourse**. A career read as a rail departure board.
DEPARTURES is the career, ARRIVALS is what has shipped. The previous "Growth Signal"
design is preserved in full at `../portfolio-original/`.

## Local dev

```
npx serve .
```

or any static file server pointed at this directory. Then open the printed localhost URL.

## Structure

```
index.html   all markup. The direction contract is the HTML comment at the top of <body>.
styles.css   design tokens (split-flap palette), board frames, layout, responsive
main.js      the flap engine (character settling) and expandable board rows
fonts/       self-hosted woff2: Barlow Condensed 600, Barlow 400/500/600 (latin subset)
assets/      favicon.svg, og-image.png
vercel.json  cache headers for fonts/ and assets/
```

## Deploy

```
npx vercel --prod
```

Run from this directory. Deployment is James's call, not automatic.

Before deploying:

- Confirm which Vercel subdomain was actually secured and update `<link rel="canonical">`,
  `og:url`, `og:image`, and `twitter:image` in `index.html`.
- **`assets/og-image.png` is still the old design's share image.** Replace it before
  sharing the link anywhere that renders a preview card.

## Content source of truth

Every factual claim on the page traces back to `../exp.md`. If experience details change,
update `exp.md` first, then re-sync the copy here by hand.

Durable product context lives in `../PRODUCT.md`; the recorded visual system lives in `DESIGN.md`.

## Restoring the previous design

```
cp -R ../portfolio-original/. .
```
