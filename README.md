# One Drive Realty Landing Experience

This repo hosts the One Drive Realty landing experience built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui. All navigation and content blocks are powered by structured data collected from the original ODR document.

## Tech Stack

- Vite + React + TypeScript
- Tailwind CSS with shadcn/ui primitives
- Radix UI components for navigation menus and sheets
- Lucide icons

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:5173 by default.

## Key Files

- `src/data/odrSections.json` – raw numbered section content from the brief.
- `src/data/odrStructure.ts` – slug generation, grouped navigation data, and helpers.
- `src/components` – shared UI like the header, hero, footer, and shadcn/ui exports.
- `src/pages/Index.tsx` – renders the data-driven sections.

## Building & Previewing

```bash
npm run build
npm run preview
```

`npm run build` emits production assets to `dist/`, and `npm run preview` serves them locally for final QA.

## Deployment

Deploy the `dist/` folder to any static host (Vercel, Netlify, S3/CloudFront, etc.). Automate builds with `npm ci && npm run build` in your CI workflow.
