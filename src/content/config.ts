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

    /**
     * industry          — professional/commercial work
     * academic-personal — university, personal, side projects
     */
    category: z
      .enum(['industry', 'academic-personal'])
      .default('industry'),

    /** Manual display order within the category (lower = shown first) */
    order: z.number().default(99),

    company: z.string().optional(),
    role: z.string(),
    year: z.number(),

    tags: z.array(z.string()).default([]),

    /** true = appears on home page */
    featured: z.boolean().default(false),

    summary: z.string(),

    heroImage: z.string().optional(),

    outcomes: z.array(z.string()).default([]),

    media: z.array(mediaItem).default([]),
  }),
});

export const collections = { cases };
