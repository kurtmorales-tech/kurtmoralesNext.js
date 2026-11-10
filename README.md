# KM Web Design — Next.js

A clean, standalone rebuild of the KM Web Design portfolio site in
**Next.js (App Router) + TypeScript + Tailwind CSS v4**.

This is a from-scratch implementation of the same design that lives in
the `modern-kurtmorales` monorepo (`apps/web`, React/Vite) — same warm
cream/orange design system, same copy, same sections — without the
monorepo, the backend, or the duplicated `migrated/` tree. All content
is local: there is no backend and the site makes no API calls.

## Run it

```bash
npm install      # or: bun install
npm run dev      # http://localhost:3000
npm run build    # static export → ./out
npm run preview  # serve ./out locally in workerd
npm run deploy   # build + deploy to Cloudflare Workers
```

## Deployment

The site is a static export (`output: 'export'` in `next.config.ts`) served by
Cloudflare Workers static assets, with a small Worker in `worker/index.ts` that
handles `POST /api/contact`. `npm run deploy` builds `./out`, bundles the
Worker, uploads both, and attaches the `kmwebdesign.xyz` and
`www.kmwebdesign.xyz` custom domains.

Every page is prerendered HTML; the Worker only runs for `/api/*`. `app/sitemap.ts`
and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt` at build time.

## Routes

| Route       | What it is                                                        |
| ----------- | ----------------------------------------------------------------- |
| `/`         | Full homepage (hero, concepts, portfolio lab, services, process, reviews, projects, packages, templates, skills, platforms, contact CTA) |
| `/services` | Services overview reusing the Services / Process / Packages sections |
| `/projects` | Restaurant concepts, all projects, and all templates             |
| `/blog`     | Blog archive listing every post from `lib/data.ts`                |
| `/contact`  | Contact details + form                                            |

## Structure

```
app/                  Next.js App Router pages + globals.css (design system)
  services/  projects/  blog/  contact/
components/
  Header.tsx          Sticky nav, More menu, light/dark theme toggle
  Footer.tsx
  SiteAssistant.tsx   Corner "Plan your project" card
  sections/           One component per homepage section
worker/
  index.ts            POST /api/contact — validates and emails leads
lib/
  data.ts             ALL site content lives here
  seo.ts              Per-page canonical + social metadata helper
public/
  portfolio/          Restaurant concept artwork (.webp)
  template-previews/  Template thumbnails (.webp)
```

## Editing content

Everything on the site — services, process steps, reviews, projects,
packages, templates, skills, platforms, and blog posts — is defined in
**`lib/data.ts`**. Edit that file and the pages update; no other code
changes are needed.

The design system (colors `--km-*`, fonts, `.km-button`, `.km-pill`,
`.km-panel`) lives in `app/globals.css`, using Tailwind v4's CSS-first
`@theme` config, matching the original build.

## Notes

- **Contact form:** `POST /api/contact` is handled by `worker/index.ts`, which
  validates the fields and emails the lead through the Cloudflare Email Service
  `send_email` binding configured in `wrangler.jsonc`. It sends to the verified
  destination address on that binding. To change the inbox, update
  `destination_address` in `wrangler.jsonc` and the `to:` value in
  `worker/index.ts`.
- **Blog posts** are listed from `lib/data.ts` (titles, excerpts, dates,
  tags carried over from the original site's fallback data). Individual
  post pages are not part of this rebuild.
- **Images** are the original site's own artwork, served statically
  from `public/`.
