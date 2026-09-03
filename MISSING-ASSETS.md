# Image assets — action needed

The 11 product visuals currently in `assets/img/` are **lightweight placeholders**
(flat cream frames at the correct aspect ratio). They exist only so the layout
holds together.

They are placeholders because the source images live in a private Claude Design
project and the `DesignSync` download API caps every file read at ~192&nbsp;KiB —
each of these PNGs is larger than that, so it can only be pulled truncated.

## How to drop in the real files

Export / download the originals from the Claude Design project
("Portfolio with product visuals" → `uploads/`) and replace the placeholder in
`assets/img/` with the **same filename**. Keep them as `.png` (or swap to
`.webp`/`.avif` and update the `src` + `<source>` in `index.html`).

| Design source (`uploads/`)        | Save as (`assets/img/`)            | Native size | Used in        |
| --------------------------------- | --------------------------------- | ----------- | -------------- |
| `pasted-1788366779915-0.png`      | `jaquar-medley-hero.png`          | 1944×1200*  | Jaquar         |
| `pasted-1788366827942-0.png`      | `jaquar-medley-lifestyle.png`     | 1944×1200*  | Jaquar         |
| `pasted-1788366867021-0.png`      | `softcare-antibacterial.png`      | 1944×1200   | Soft Care      |
| `pasted-1788366934332-0.png`      | `softcare-blossom-refill.png`     | 1944×1200   | Soft Care      |
| `pasted-1788366912786-0.png`      | `crew-citrus-floor.png`           | 1944×1200   | Crew           |
| `pasted-1788366893901-0.png`      | `crew-furniture-cleaner.png`      | 1944×1200   | Crew           |
| `pasted-1788366954854-0.png`      | `crew-stainless-steel.png`        | 1944×1200   | Crew           |
| `pasted-1788366972343-0.png`      | `borngood-basket.png`             | 600×600     | Born Good      |
| `pasted-1788366983018-0.png`      | `borngood-lineup.png`             | 600×600     | Born Good      |
| `pasted-1788367915215-0.png`      | `borngood-flatlay.png`            | 600×600     | Born Good      |
| `pasted-1788368039930-0.png`      | `perkyjerky-sweet-snappy.png`     | 4608×3456   | Perky Jerky    |

\* The two Jaquar files report a 972×600 IHDR in the truncated header but share
the 1.62 aspect ratio of the rest; the `width`/`height` attributes in
`index.html` only need to match the real file's ratio to avoid layout shift.

## After replacing

No code change is required if you keep the filenames. Optionally re-check the
`width`/`height` attributes on each `<img>` in `index.html` against the real
pixel dimensions so the browser reserves the exact aspect box.
