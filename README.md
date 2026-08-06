# James Corr | Portfolio

Static, hand-written HTML. No framework, no build step. All CSS and JS are inline in
`index.html` — there is no separate stylesheet or script file.

Visual world: **Monograph** — ultramarine (`#1E2BD6`), chrome yellow (`#FFCE00`), ink
(`#111015`), and chalk (`#F3F0E7`), set in Bricolage Grotesque and Faustina. Two previous
designs are preserved in full: "Split-Flap Concourse" at `../portfolio-original/`, and
earlier explorations in `../z_archive/`.

## Local dev

```
npx serve .
```

or any static file server pointed at this directory. Then open the printed localhost URL.

## Structure

```
index.html   all markup, styles, and script, inline
fonts/       self-hosted woff2: Bricolage Grotesque 600/800, Faustina 400/600
assets/      favicon.svg, og-image.png, and the images referenced in the page
vercel.json  cache headers for fonts/ and assets/
```

## Deploy

Live at `https://jamescorr.com`, deployed on Vercel with Git integration — every push to
`main` on `github.com/james-corr/portfolio_site` auto-deploys. No manual `vercel --prod`
needed day to day; use it only to test a deploy before pushing.

## Content source of truth

Page copy lives directly in `index.html`; there is no separate content file to sync from.

## Restoring a previous design

```
cp -R ../portfolio-original/. .   # Split-Flap Concourse
```
