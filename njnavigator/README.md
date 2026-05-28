# NJNavigator — v0

A practical and cultural guide for international faculty in Nanjing.
Final domain: **njnavigator.site**

This repository contains **v0**, the website's visual and structural foundation.
v0 is not the final content version — real photos, verified facts, and final
bilingual copy will be added in later rounds.

---

## How to open locally

No build step is required.

1. Open the project folder.
2. Double-click `index.html`, or open it in any modern browser
   (Chrome, Edge, Safari, Firefox).
3. Optional (recommended for testing fetch/relative paths):
   serve the folder with any static server, e.g.
   ```
   python -m http.server 8000
   ```
   then open `http://localhost:8000/`.

---

## File structure

```
njnavigator/
├── index.html          single-page site with all sections
├── css/
│   └── style.css       design system, glass surfaces, responsive rules
├── js/
│   └── main.js         i18n dictionary, carousel, nav, reveal-on-scroll
├── assets/
│   ├── images/
│   │   ├── placeholders/   drop in placeholder visuals here later
│   │   └── final/          final group photos / official images go here
│   ├── icons/              future favicon and UI icons
│   ├── maps/               exported map images / iframe snippets
│   └── qr/                 final QR images
└── README.md
```

---

## v0 status

Implemented:

- Single-page layout with six top-nav anchors: Home, Survival, Campus, Story, Routes, Appendix.
- Sticky glass top navigation, mobile hamburger menu, active-section highlighting.
- Hero section with auto-rotating, dot- and arrow-controlled image carousel
  (5 numbered slides: `IMG-HERO-01` … `IMG-HERO-05`).
- Full English / 中文 toggle via a single JS dictionary (`i18n` in `js/main.js`).
  All visible v0 strings switch; no duplicate stacking.
- Glassmorphism surfaces over a soft Nanjing-inspired SVG texture
  (brick lattice + Qinhuai-style wave lines + mist gradient).
- Palette: navy `#0B1F3A`, soft blue `#6F95BD`, brick `#9E3F35`,
  warm beige `#F4EFE7`.
- Replaceable logo placeholder (path-like "N" SVG) ready to swap.
- Numbered image, campus point, route, map, phrase, and reference placeholders.
- Three embedded-map-ready containers: `MAP-01`, `MAP-02`, `MAP-03`.
- Reveal-on-scroll, soft hover-lift on cards, fade transition on language switch.
- Mobile-first responsive layout — no horizontal overflow at 320 px width.
- Reduced-motion support via `prefers-reduced-motion`.

---

## Placeholder replacement notes

Every unverified factual field is marked with one of:

- `[TO BE VERIFIED]` — needs group-verified information (e.g. campus security
  phone, recommended hospital).
- `[PLACEHOLDER]` — copy to be written in a later round.
- `[TO BE WRITTEN]` — sensory description fields for food cards.

Other replaceable IDs are visible directly on the page:

| Area              | IDs                                                                 |
|-------------------|---------------------------------------------------------------------|
| Hero carousel     | `IMG-HERO-01` … `IMG-HERO-05`                                       |
| Campus images     | `IMG-CAMPUS-01`, `IMG-CAMPUS-02`                                    |
| Story images      | `IMG-STORY-01`, `IMG-STORY-02`                                      |
| Route images      | `IMG-ROUTE-A-01`, `IMG-ROUTE-B-01`, `IMG-FOOD-01`                   |
| Campus points     | `CAMPUS-POINT-01` … `CAMPUS-POINT-05`                               |
| Food (campus)     | `FOOD-CAMPUS-01` … `FOOD-CAMPUS-03`                                 |
| Timeline          | `TIME-01`, `TIME-02`, `TIME-03`                                     |
| Maps              | `MAP-01`, `MAP-02`, `MAP-03`                                        |
| Phrases           | `PHRASE-01` … `PHRASE-10`                                           |
| References        | `REF-01` … `REF-05`                                                 |
| QR code           | `QR-01`                                                             |

To replace a placeholder image:

1. Drop the real image into `assets/images/final/`.
2. In `index.html`, replace the corresponding `<div class="img-ph" …>` with
   `<img src="assets/images/final/<filename>" alt="…">` and keep similar
   styling on a wrapper if needed.

To replace the logo:

- Swap the inline `<svg>` inside `.brand-mark` with the final logo SVG or
  `<img>`. The brand text is in `.brand-text`.

To extend or edit i18n strings:

- All text strings live in the `i18n` object at the top of `js/main.js`,
  with parallel keys for `en` and `zh`.
- Add a new key under both `en` and `zh`, then attach `data-i18n="your.key"`
  to the target HTML element.

---

## Next-step checklist

- [ ] Replace hero carousel placeholders with real / official images.
- [ ] Confirm and fill **Campus Security** phone number.
- [ ] Confirm and fill **Nearby Hospital** (English-capable).
- [ ] Replace `CAMPUS-POINT-01..05` placeholders with verified locations.
- [ ] Write final sensory descriptions for `FOOD-CAMPUS-01..03` and Foodie Corner.
- [ ] Write final historical paragraphs for Timeline and Deep Dives.
- [ ] Fill `PHRASE-01..10` with phrase + pinyin + usage context.
- [ ] Fill `REF-01..05` with official, citable sources.
- [ ] Replace `QR-01` with the real QR image.
- [ ] Each student fills the **AI Usage Disclosure**.
- [ ] Replace `MAP-01..03` placeholders with verified iframe / image maps.
- [ ] Replace the path-style "N" logo placeholder with the final logo.
- [ ] Final favicon in `assets/icons/`.
- [ ] Deploy to GitHub Pages and connect to `njnavigator.site`.

---

## Browser support

Designed for modern evergreen browsers (Chrome, Edge, Safari, Firefox).
The site uses `backdrop-filter`, CSS custom properties, and `IntersectionObserver`,
all widely supported as of 2026.

No build tools, no backend, no database, no login system, no CMS.
