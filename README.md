# Abdullah Shaikh — Portfolio v2

**Live: https://abdul14hh.github.io/portfolio/** — deployed from `main`.

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

**TeX Gyre Heros**, self-hosted from `assets/fonts/` — Regular, Bold and Bold
Italic, subset to Latin, ~68 KB total.

Heros is a clone of Helvetica (via URW's Nimbus Sans) under the [GUST Font
License](assets/fonts/GUST-FONT-LICENSE.txt), which permits redistribution.
Helvetica itself is a licensed Monotype typeface — it ships with macOS but
cannot legally be served as a webfont, and Windows and Android have never
included it, so a plain `font-family: Helvetica` silently degrades to Arial
for most visitors. Self-hosting the clone gives everyone the same letterforms.

Only Regular and Bold exist in this family, so avoid `font-weight: 500` — the
browser will synthesise a fake medium.

## Local preview

Any static server, e.g.:

```sh
python -m http.server 8000
# then open http://localhost:8000
```

## Images

Served as **WebP** (quality 85), converted from the original PNGs at their
existing dimensions — 11.1 MB → 1.1 MB, a 90% saving with no visible loss and
no change to the `width`/`height` attributes. The PNGs were removed from the
tree; they remain in git history (`git show <sha>:assets/img/<name>.png`).

Note the sources are only 972×600 (600×600 for Born Good) but display at up to
~1300 px wide, so they are already being upscaled slightly. Re-exporting from
the original artwork at 2× would sharpen the site — the WebP step deliberately
did not resize, since shrinking would make that worse.

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
│   ├── fonts/               # TeX Gyre Heros woff2 + licence
│   ├── img/                 # 11 product visuals, portrait, og-cover
│   └── abdullah-shaikh-resume.pdf
└── README.md
```

The `.png` extensions in the table above are the original filenames; the files
served are `.webp`.
