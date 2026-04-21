# Halora MVP Landing (Astro + Tailwind)

Static bilingual landing page for Halora investor presentation.

## Stack

- Astro 6
- Tailwind CSS 4
- Lucide icons (`@lucide/astro`)

## Routes

- ` / ` — Russian version
- ` /en ` — English version

## Local Run

```bash
npm install
npm run dev
```

Dev server: `http://localhost:4321`

## Production Build

```bash
npm run build
npm run preview
```

Static output is generated in `dist/`.

## Content and Assets

- Main content dictionary: `src/data/content.ts`
- Shared page component: `src/components/LandingPage.astro`
- Global styles and animations: `src/styles/global.css`
- Investor deck link target: `public/Halora_Investor_Deck.pdf`

Replace `public/Halora_Investor_Deck.pdf` with the final client presentation file when available.

## Deploy

Project is ready for static deployment on:

- Netlify
- Vercel

Both platforms can use default Astro settings (`npm run build`, publish directory `dist`).
