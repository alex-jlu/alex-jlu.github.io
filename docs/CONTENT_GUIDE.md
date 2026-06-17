# Content Guide

How to add a new case study, and how to make sure it's IP-safe before it goes live.

For detailed legal guidance by employer type (Bosch contract clauses, agency clients, startup work, illustrative images), see **[LEGAL_PORTFOLIO_GUIDE.md](./LEGAL_PORTFOLIO_GUIDE.md)**.

---

## Adding a new case study

**Time required:** 15–30 minutes once you have your content ready.

### 1. Create the file

Create a new Markdown file in `src/content/cases/`. The filename becomes the URL slug:

```
src/content/cases/my-project-name.md  →  /work/my-project-name
```

Copy this template and fill it in:

```markdown
---
title: "Your project title"
publish: false                        # Keep false until IP checklist passes
visibility: "nda-safe"                # public | nda-safe | private-draft
company: "Client name or generalise"  # e.g. "B2B SaaS — Fintech"
role: "Design Engineer"
year: 2025
tags: [design-systems, prototyping]   # Pick from existing tags for consistency
featured: false                       # true = shown on home page
summary: "One outcome-focused sentence for cards."
heroImage: "/cases/my-project/hero.jpg"  # or "" if no image yet
outcomes:
  - "Specific, measurable result."
  - "Another result."
media: []
---

## Overview

...
```

### 2. Add your assets

Place images and poster frames in `public/cases/<your-slug>/`:

```
public/
└── cases/
    └── my-project-name/
        ├── hero.jpg
        ├── screen-1.jpg
        └── demo-poster.jpg
```

Reference them in frontmatter and media using absolute paths: `/cases/my-project-name/hero.jpg`.

For videos, either:
- Self-host: put the `.mp4` file in `public/cases/<slug>/` (see Git LFS note below)
- Embed: use an unlisted Vimeo or YouTube URL as the `src`

### 3. Work through the IP checklist below

Do not change `publish: true` until every item is checked.

### 4. Publish

Set `publish: true` in frontmatter, then:

```bash
git add .
git commit -m "Add case study: <title>"
git push
```

The site rebuilds and deploys automatically in ~2 minutes via GitHub Actions.

---

## IP checklist

Work through this before every `publish: true`. Keep a personal note (not in git) of any written approvals you received.

### Ownership and permission

- [ ] The work was done by me, or I have written permission from the rights holder to share it
- [ ] I am not under a non-disclosure agreement that prohibits sharing this project, OR I have reviewed what is permitted under the NDA
- [ ] If the project is under NDA: `visibility: "nda-safe"` is set, and I have followed the NDA-safe rules below

### Content and visuals

- [ ] No unreleased product features, internal tooling, or production dashboards visible
- [ ] No identifiable customer data, internal metrics, or confidential business information
- [ ] Client and competitor names are either approved for publication or have been generalised (e.g. "Enterprise SaaS" instead of the actual company name)
- [ ] Any partner or client logos are either in public marketing materials or have been removed
- [ ] Screenshots show publicly visible interfaces only, or have been recreated/redacted in Figma

### Your contribution

- [ ] The case describes **your** role and decisions, not confidential product strategy
- [ ] Outcome metrics are either public or expressed in relative/approximate terms ("reduced by ~40%", not exact internal figures)

### Final check

- [ ] I would be comfortable if a former employer or client saw this case study
- [ ] `publish: true` is set

---

## NDA-safe rules

When `visibility: "nda-safe"`:

**Do:**
- Describe your design process, methods, and decisions
- Use approximate or relative outcome metrics
- Show recreated mockups (rebuilt in Figma from memory, not screenshots)
- Reference industry/sector ("enterprise healthcare platform") without the company name
- Describe team structure and collaboration patterns

**Do not:**
- Screenshot or photograph live internal UI
- Share prototypes or Figma files that contain real product screens
- Name the client, product, or identifiable internal tools
- Quote internal documents, roadmaps, or OKRs

---

## Media guidelines

### Images

- Format: JPEG or WebP for photos, PNG for screenshots with text
- Maximum width: 2400px (crop or export at 1x–1.5x for retina)
- Maximum file size: 500 KB per image (compress with [Squoosh](https://squoosh.app) or similar)
- Place in `public/cases/<slug>/` and reference as `/cases/<slug>/filename.jpg`

### Videos

- Prefer short looping MP4/WebM clips over GIFs (same visual impact, 10–50× smaller)
- Always provide a `poster` image (screenshot of first frame) to avoid blank white flashes
- Maximum duration: 2–3 minutes for case study demos
- For sensitive demos: use an **unlisted** Vimeo or YouTube embed instead of committing the file

```markdown
media:
  - type: video
    src: "https://player.vimeo.com/video/XXXXXXX"   # or /cases/slug/demo.mp4
    poster: "/cases/slug/demo-poster.jpg"
    caption: "Optional caption"
```

### GIFs

Avoid unless the loop is very short (< 3 seconds, < 1 MB). Use MP4 with `autoplay muted loop playsinline` instead.

### Large files and Git LFS

If you have many video files, set up Git LFS to avoid bloating the repo:

```bash
git lfs install
git lfs track "*.mp4" "*.webm"
git add .gitattributes
```

---

## Visibility reference

| Value | What it means | Safe for |
|---|---|---|
| `public` | Full narrative, real visuals | Publicly launched work, side projects, open-source |
| `nda-safe` | Generalised narrative, no real screenshots | Industry work under NDA (follow rules above) |
| `private-draft` | Never built or deployed | WIP drafts, anything not yet reviewed |

Setting `publish: false` excludes the case from the build entirely regardless of visibility.

---

## Keeping the site updated

There is no CMS or admin panel. Everything is a file in this repo.

| Task | What to do |
|---|---|
| Add a case study | New `.md` file in `src/content/cases/` |
| Update your bio / experience | Edit `src/pages/about.astro` |
| Change your email or links | Edit `src/components/Nav.astro` and `src/components/Footer.astro` |
| Change colours or fonts | Edit `src/styles/tokens.css` |
| Change the hero copy | Edit `src/pages/index.astro` |

After any change: `git push` → live in ~2 minutes.
