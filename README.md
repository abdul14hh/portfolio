# Abdullah Shaikh — Portfolio v2

A single-page portfolio of selected product visuals (key visuals, packaging
stories and social campaigns) for Jaquar, Soft Care, Crew, Born Good and
Perky Jerky.

Built from the Claude Design project **"Portfolio with product visuals"**
(`Abdullah Shaikh - Portfolio v2.dc.html`) as a plain, dependency-free static
site.

## Stack

- Semantic HTML5 — one `index.html`
- Vanilla CSS with custom properties and fluid `clamp()` type/spacing — `assets/css/styles.css`
- ~90 lines of vanilla JS, no libraries — `assets/js/main.js`
  - accent-colour custom property (`?accent=olive|plum|slate|#hex` or `<html data-accent>`)
  - reveal-on-scroll via `IntersectionObserver`
  - subtle vertical parallax on framed images (the frame drifts; the artwork
    never scales, so visuals stay uncropped)
- Respects `prefers-reduced-motion`
- Progressive enhancement: content is fully visible with JS disabled (`no-js` guard)

## Fonts

Instrument Serif + Instrument Sans, loaded from Google Fonts.

## Local preview

Any static server, e.g.:

```sh
python -m http.server 8000
# then open http://localhost:8000
```

## Images

The files in `assets/img/` are **placeholders**. See
[`MISSING-ASSETS.md`](MISSING-ASSETS.md) for the mapping to the original
Claude Design uploads and how to drop the real files in.

## Structure

```
portfolio-v2/
├── index.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── img/                 # 11 product visuals (currently placeholders)
├── MISSING-ASSETS.md
└── README.md
```
