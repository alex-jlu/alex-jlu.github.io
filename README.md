# alex-jlu.github.io

Personal portfolio for [Alexander Ludwig](https://alex-jlu.github.io) — Design Engineer.

Built with [Astro](https://astro.build), deployed to GitHub Pages via GitHub Actions.

---

## Local development

```bash
npm install
npm run dev        # starts at http://localhost:4321
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

Node 20+ required.

## Adding a case study

See **[docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md)** for:
- Step-by-step instructions for adding a new case
- IP checklist to run before publishing
- Media guidelines (images, video, GIFs)
- NDA-safe rules

See **[docs/LEGAL_PORTFOLIO_GUIDE.md](docs/LEGAL_PORTFOLIO_GUIDE.md)** for:
- Legal considerations by employer type (Bosch, agency, startup)
- Bosch contract clause reference and portfolio effects
- Traffic-light summary and pre-publish checklist

Short version: create `src/content/cases/your-slug.md`, fill in frontmatter, pass the IP checklist, set `publish: true`, and push.

## Updating personal info

| What | Where |
|---|---|
| Email and social links | `src/components/Nav.astro` and `src/components/Footer.astro` |
| Bio and experience | `src/pages/about.astro` |
| Hero copy | `src/pages/index.astro` |
| Colours, fonts, spacing | `src/styles/tokens.css` |

## Deployment

Every push to `main` triggers a GitHub Actions build and deploys to GitHub Pages.

**One-time setup (if not already done):**

1. Go to repo **Settings → Pages**
2. Set **Source** to **GitHub Actions**
3. Push to `main` — the first deploy will run automatically

## Impressum

If you are based in Germany, Austria, or another country that requires a legal notice:
add an `src/pages/impressum.astro` page with your name, address, and contact email,
and link to it from the footer.

## Structure

```
src/
├── components/      Nav, Footer, CaseCard, MediaGallery, TagList
├── layouts/         BaseLayout, CaseStudyLayout
├── pages/           index, about, work/index, work/[slug]
├── content/
│   ├── config.ts    Content Collections schema
│   └── cases/       One .md file per case study
└── styles/
    ├── tokens.css   All design tokens (colours, type, spacing)
    └── global.css   Reset and base styles
public/
└── cases/           Media assets for case studies
docs/
└── CONTENT_GUIDE.md IP checklist and how-to
```
