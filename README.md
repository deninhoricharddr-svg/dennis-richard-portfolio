# Dennis Richard — Economist · Financial Analysis · Data Analytics

This repository contains a professional portfolio platform for Dennis Richard.

## Current development structure

- **[Modern Next.js application](site/)** — the next-generation portfolio with React, TypeScript, Tailwind CSS, structured project pages, an optional server-side contact system, SEO and responsive design.
- **[Modern application setup and deployment guide](site/README.md)** — instructions for Netlify, media, CV, environment variables and quality checks.
- **Legacy static portfolio** — the original root-level `index.html`, `work.html`, `projects.html`, and `assets/` remain intact while the replacement is tested.

**Important:** The modern application has been committed to GitHub, but is not automatically published by GitHub Pages. GitHub Pages supports the old static pages but does not run Next.js server-side API routes.

## Deploy the modern site

1. Import `deninhoricharddr-svg/dennis-richard-portfolio` into Netlify.
2. Set the Netlify **Base directory** to **`site`**.
3. Build command: `npm run build`.
4. After a successful deployment, set `NEXT_PUBLIC_SITE_URL` to the real public HTTPS address, and redeploy.
5. Review all pages on desktop and mobile before replacing links to the previous site.

See [the complete deployment guide](site/README.md). The secure contact endpoint needs additional email and anti-spam credentials and gracefully falls back to direct email until activated.

## Media

The new application reserves space for a real headshot and introduction video. Upload publication-ready assets into `site/public/media/`, then enable their corresponding paths in `site/lib/content.ts`. No artificial portrait or invented professional claims are used.

## Project evidence

Nine high-impact economics, financial analysis and data analytics project briefs are maintained as **planned**. They will be published as completed only when independent analysis, source files, tests and interpretation exist.

This is a professional portfolio and technical learning platform, not a collection of prefilled fake case studies.
