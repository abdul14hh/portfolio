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

The 11 product visuals in `assets/img/` are the real campaign artworks,
renamed from the Claude Design project's `uploads/` folder:

| `uploads/`                    | `assets/img/`                 | Section     |
| ----------------------------- | ----------------------------- | ----------- |
| `pasted-1788366779915-0.png`  | `jaquar-medley-hero.png`      | Jaquar      |
| `pasted-1788366827942-0.png`  | `jaquar-medley-lifestyle.png` | Jaquar      |
| `pasted-1788366867021-0.png`  | `softcare-antibacterial.png`  | Soft Care   |
| `pasted-1788366934332-0.png`  | `softcare-blossom-refill.png` | Soft Care   |
| `pasted-1788366912786-0.png`  | `crew-citrus-floor.png`       | Crew        |
| `pasted-1788366893901-0.png`  | `crew-furniture-cleaner.png`  | Crew        |
| `pasted-1788366954854-0.png`  | `crew-stainless-steel.png`    | Crew        |
| `pasted-1788366972343-0.png`  | `borngood-basket.png`         | Born Good   |
| `pasted-1788366983018-0.png`  | `borngood-lineup.png`         | Born Good   |
| `pasted-1788367915215-0.png`  | `borngood-flatlay.png`        | Born Good   |
| `pasted-1788368039930-0.png`  | `perkyjerky-sweet-snappy.png` | Perky Jerky |

## Structure

```
portfolio-v2/
├── index.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── img/                 # 11 product visuals
└── README.md
```
