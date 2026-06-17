import { defineCollection, z } from 'astro:content';

const mediaItem = z.object({
  type: z.enum(['image', 'video']),
  src: z.string(),
  alt: z.string().optional(),
  caption: z.string().optional(),
  poster: z.string().optional(),
});

/**
 * "cases" collection — one Markdown file per case study.
 *
 * To add a new case:
 *   1. Create src/content/cases/your-slug.md
 *   2. Fill in all required frontmatter fields below
 *   3. Work through docs/CONTENT_GUIDE.md IP checklist
 *   4. Set publish: true once the checklist passes
 *   5. git push → site updates in ~2 minutes
 */
const cases = defineCollection({
  type: 'content',
  schema: z.object({
    /** Page title and card heading */
    title: z.string(),

    /** Set to true only after passing the IP checklist in docs/CONTENT_GUIDE.md */
    publish: z.boolean().default(false),

    /**
     * public        — full case narrative, real visuals
     * nda-safe      — generalised narrative, sanitised visuals
     * private-draft — stays out of the build entirely
     */
    visibility: z
      .enum(['public', 'nda-safe', 'private-draft'])
      .default('public'),

    /** Generalise if the client name is confidential, e.g. "B2B SaaS — Enterprise" */
    company: z.string().optional(),

    role: z.string(),
    year: z.number(),

    /** Used for filtering on the Work page and card tags */
    tags: z.array(z.string()).default([]),

    /** Show in the "Selected work" section on the home page */
    featured: z.boolean().default(false),

    /** One-line outcome-focused blurb shown on cards */
    summary: z.string(),

    /**
     * Path to the hero image.
     * Use an absolute path from public/, e.g. /cases/my-project/hero.jpg
     * Or a full https:// URL for externally hosted images.
     */
    heroImage: z.string().optional(),

    /** Key results — shown in the Outcomes callout box on the case page */
    outcomes: z.array(z.string()).default([]),

    /**
     * Additional media shown in the gallery section.
     * image src / video src follow the same rules as heroImage.
     */
    media: z.array(mediaItem).default([]),
  }),
});

export const collections = { cases };
