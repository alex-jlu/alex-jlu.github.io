---
title: "Enterprise Design System"
publish: true
visibility: "nda-safe"
company: "B2B SaaS — Enterprise Software"
role: "Design Engineer"
year: 2023
tags: [design-systems, react, typescript, documentation]
featured: true
summary: "Led the creation of a scalable component library and design token architecture that unified a fragmented product suite and significantly reduced designer–developer handoff friction."
heroImage: ""
outcomes:
  - "Reduced average component build time from 3 days to 4 hours through reusable patterns and documented APIs."
  - "Established a shared token system adopted across 4 product teams."
  - "Improved design-to-development handoff with Storybook and Figma integration."
  - "Contributed to a more consistent user experience across 12+ application surfaces."
media: []
---

## Overview

This case study describes a design system project I led at an enterprise software company. Details have been generalised to protect confidentiality.

The product suite had grown organically over several years, resulting in inconsistent UI patterns, duplicated components, and a slow handoff process between design and engineering. My role was to create a unified foundation that both teams could rely on.

## Problem

Teams were operating in silos. Designers were producing specs that differed from what was technically feasible or already built, and engineers were building variations of the same components independently. The result was a fragmented user experience and a significant maintenance burden.

## Approach

I started with an audit — cataloguing existing components across the application and identifying which patterns were duplicated, inconsistent, or broken. This gave us a baseline and helped prioritise what to tackle first.

From there, I worked closely with both the design lead and the engineering lead to define a shared vocabulary: naming conventions, token structure, and component APIs. We chose to build in React with TypeScript, and used Storybook as the primary documentation and development environment.

The work happened in three phases:

**Phase 1 — Tokens and foundations.** We established design tokens for colour, typography, spacing, and border radius. These were defined in Figma and exported as CSS custom properties and JavaScript constants.

**Phase 2 — Core components.** We built the most frequently used components first: buttons, inputs, modals, and navigation. Each component had strict accessibility requirements and was documented with usage guidelines, a props reference, and interactive examples in Storybook.

**Phase 3 — Rollout and adoption.** We ran workshops with product teams, created migration guides, and maintained a public changelog. Adoption was gradual and voluntary, which helped us gather feedback without forcing disruption.

## Reflections

The biggest challenge wasn't technical — it was organisational. Getting teams to trust a shared system requires patience, transparency, and a willingness to accept feedback early. We made sure to treat internal consumers of the design system as customers, and that mindset made a significant difference in adoption rate.
