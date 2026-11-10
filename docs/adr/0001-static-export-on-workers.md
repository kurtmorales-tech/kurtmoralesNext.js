# ADR-0001: Serve the site as a static export on Workers

- **Status:** Accepted
- **Date:** 2026-11-09

## Context

The site is a Next.js App Router project in which every route is fully
determined at build time: `/`, `/services`, `/projects`, `/blog`, `/contact`,
plus `/sitemap.xml` and `/robots.txt`. There is no personalization, no auth, and
no per-request data. Lighthouse mobile performance is a business requirement —
the audience is restaurant owners on phones, frequently on weak connections.

Cloudflare's current recommendation for new Next.js work is `vinext` (or
OpenNext), which runs the Next.js runtime on Workers.

## Decision

Ship the site as a **static export** (`output: 'export'` in `next.config.ts`),
uploaded as **Workers static assets** by `wrangler deploy`. One small Worker
handles `POST /api/contact`, and `run_worker_first` is scoped to `["/api/*"]` so
every other request is served directly from the asset store.

## Alternatives considered

- **vinext on Workers.** The Cloudflare default, and the right answer if the site
  needed RSC, server actions, ISR, or per-request rendering. It adds a runtime
  the site does not use, plus framework-specific build tooling, and invites
  regressions that only appear in production.
- **OpenNext on Workers.** Same reasoning, heavier migration surface.
- **Cloudflare Pages.** Was the original target; Workers static assets now cover
  the same ground with the same custom-domain and cache behaviour, so there is no
  reason to run two products.

## Consequences

- Zero cold starts and no runtime for page requests; the Worker only wakes for
  `/api/*`.
- `next start` cannot serve the output — `npm run start` was removed. Use
  `npm run preview` (`wrangler dev`) to exercise the production build locally.
- No SSR-only APIs: no `cookies()`, `headers()`, `searchParams` rendering, or
  dynamic routes without `generateStaticParams`.
- No image optimization server. Artwork must ship pre-sized, in WebP, from
  `public/`. `images.unoptimized` is set deliberately.
- If the site ever needs authenticated or per-request content, this ADR must be
  revisited rather than quietly bolted around.
