# Dennis Richard — Professional Portfolio Platform (v2)

This is the modern, full-stack-ready application inside the [dennis-richard-portfolio](https://github.com/deninhoricharddr-svg/dennis-richard-portfolio) repository. It **does not replace the legacy static GitHub Pages site until deployment is confirmed**.

## Why this architecture?

- **Next.js 16, React 19, TypeScript**: reusable pages, data-driven project components, nested project routes, metadata, sitemap and server-side features.
- **Tailwind CSS 4 + custom design system**: mobile-first responsive editorial appearance, accessible focus states and reduced-motion support.
- **Content model** in \`lib/content.ts\`: nine project briefs, current status, source datasets, featured writing, public profile links.
- **Real back-end route**: \`app/api/contact/route.ts\` validates input with Zod, verifies Cloudflare Turnstile on the server, and sends enquiries using Resend's email API. This endpoint is disabled until secrets are set.
- **Hosting target**: Netlify, connected to the same GitHub repository. It runs Next.js SSR and API routes through serverless functions. GitHub Pages cannot run those server-side features.
- **No database yet**: there is no user account, searchable private dataset or ongoing transactional state requiring one. Add Postgres/Supabase only after a specific data-backed feature is justified. This avoids needless cost, data retention and attack surface.
- **No content editing dashboard yet**: work and project entries are typed, version-controlled data. A CMS/admin login can be added later if frequent nontechnical editing becomes important.

## Run locally
Install Node.js 22 or later and use:
\`\`\`bash
cd site
npm install
npm run dev
\`\`\`
Open http://localhost:3000. To check the work:
\`\`\`bash
npm run typecheck
npm run lint
npm run build
\`\`\`
GitHub Actions quality checks are defined at \`../.github/workflows/site-quality.yml\`.

## Deploy on Netlify
1. In Netlify, choose **Add new project → Import an existing project → GitHub**.
2. Authorize your GitHub and choose \`deninhoricharddr-svg/dennis-richard-portfolio\`.
3. Set **Base directory** to \`site\`.
4. Build command: \`npm run build\`. Next.js is detected automatically; do not configure the old GitHub Pages static artifact as the publish directory.
5. Deploy. Once Netlify gives you a domain, set \`NEXT_PUBLIC_SITE_URL\` to that complete HTTPS origin (without trailing slash) and redeploy so metadata and sitemap are accurate.
6. Confirm the site and each project detail URL before changing any public LinkedIn/CV links.
7. Optionally purchase and connect a professional custom domain.

**You must authorize the Netlify account yourself.** Source code committed to GitHub is not itself a successful Netlify deployment.

## Contact form back end
By default, the contact page offers a working \`mailto:\` link. To enable the form, configure these environment variables under the Netlify site settings:

\`\`\`
RESEND_API_KEY=your-private-resend-key
CONTACT_FROM_EMAIL=Portfolio <hello@your-verified-domain.example>
CONTACT_TO_EMAIL=your-professional-email
NEXT_PUBLIC_TURNSTILE_SITE_KEY=public-cloudflare-turnstile-site-key
TURNSTILE_SECRET_KEY=private-cloudflare-turnstile-secret
\`\`\`
Create and verify a sender domain in Resend, create a Turnstile site for the eventual domain in Cloudflare, then redeploy. Never put credentials in Git or share tokens in a public chat. The form returns an error if either verification or delivery fails. It does **not** store message content in a database. A honeypot and basic request restrictions supplement Turnstile. Before high-traffic use, also add provider-level rate limiting and monitor abuse.

## Add your professional picture
1. Upload a real JPEG to \`site/public/media/dennis-richard-headshot.jpg\` (a clean, well-lit portrait, ideally 1200 pixels wide or larger).
2. Edit \`site/lib/content.ts\`: set \`profile.photo\` to \`"/media/dennis-richard-headshot.jpg"\`.
3. Commit both changes. The homepage circle automatically displays the portrait.

A monogram is shown until a genuine photograph is supplied.

## Add your introduction video
1. Record a 45–75-second **landscape** video with clear audio. Export optimized H.264 MP4.
2. Upload to \`site/public/media/dennis-richard-introduction.mp4\`. Prefer a streaming platform for large videos.
3. Set \`profile.video\` in \`site/lib/content.ts\` to \`"/media/dennis-richard-introduction.mp4"\`.
4. Add captions/transcript and check video accessibility before promotion.

The homepage has a clear video placeholder until you record it.

## Public CV
Only after you approve a current, public-facing CV, upload it under \`site/public/media/\` and set \`profile.cv\` in \`site/lib/content.ts\`, for example to \`"/media/Dennis_Richard_CV.pdf"\`. Until then, the site uses **Request CV**.

## Publishing a completed analytical project
Project briefs are stored as \`Project\` objects in \`site/lib/content.ts\`. Keep \`status:"planned"\` until actual analysis, code, tests, charts, and interpretation exist. Publish completed projects in their own GitHub repositories and add case-study links and results to the site after review.

The website is not intended to fabricate project outcomes or expose confidential institutional, client or participant-level records.

## Privacy and licensing
No analytics cookies or user database are enabled. Contact processing, when configured, passes submitted fields to the email delivery provider. Public professional contact links are intentional. External font files are retrieved via Next.js build tooling.

## Architecture map
\`\`\`
GitHub repository
├── legacy static HTML site (root; preserved during migration)
└── site/
    ├── app/                    Next.js App Router
    │   ├── page.tsx            homepage
    │   ├── work/               selected experience and publications
    │   ├── about/              professional background
    │   ├── projects/           project listing and [slug] pages
    │   ├── contact/            contact page
    │   └── api/contact/        secure serverless email endpoint
    ├── components/             reusable React UI
    ├── lib/content.ts          typed project and profile records
    ├── public/media/           user-approved picture, video and CV
    └── globals styling in app/globals.css
\`\`\`

All changes are versioned in GitHub. The first deployment should be tested before directing recruiters to it.
