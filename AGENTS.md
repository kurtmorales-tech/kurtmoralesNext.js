# AGENTS.md

Operating notes for anyone (human or agent) changing this repository. Read this
before touching code. It records decisions that were expensive to reach and are
easy to re-break.

## What this is

The KM Web Design marketing site: a solo Las Vegas studio that builds restaurant
websites starting at **$299**. The site is a **static export** of a Next.js App
Router project, served by **Cloudflare Workers static assets**, plus one small
Worker that handles the contact form.

There is no CMS, no database server, and no server-rendered page. Every page is
prerendered HTML at build time.

## Non-negotiables

1. **Every portfolio item is Kurt's own work.** The client sites, the platforms
   and apps he built, the restaurant design concepts, and the templates were all
   made by this studio. The `type` label in `lib/data.ts` (`Client Website`,
   `Platform`, `Web App`, `Concept`, `Template`) says what *kind* of project it
   is — it is never a caveat about whether the work is real, and must never be
   written as one. See `GLOSSARY.md`.

   The only thing that may not be invented is an **outcome**: no fabricated
   traffic, conversion, or revenue figures, and no testimonials that a client did
   not give. If there is no measured result, describe what was built and how.
2. **`$299` has one home:** `site.startingPrice` in `lib/data.ts`. Never hardcode
   the price in a component or in metadata. Growth and Custom packages are
   "Custom quote" until real numbers exist.
3. **Don't add third-party scripts casually.** The site scores 99–100 on
   Lighthouse mobile largely because it ships almost no client JavaScript. Any
   analytics or widget must be justified against that budget.
4. **Assets ship pre-sized.** Static export means no image optimizer. New
   artwork goes into `public/` as WebP, already at display resolution.

## Commands

```bash
npm run dev       # next dev on :3000
npm run build     # static export → ./out
npm run preview   # wrangler dev (serves ./out + the Worker in workerd)
npm run deploy    # npm run build && wrangler deploy
npx tsc --noEmit  # typecheck (run before every commit)
```

There is **no `npm run start`**. `next start` cannot serve a static export; that
script was removed on purpose. Do not add it back.

## Deploy model

- `next.config.ts` sets `output: 'export'`. `npm run build` emits `./out`.
- `wrangler.jsonc` uploads `./out` as Workers static assets.
- `run_worker_first` is scoped to `["/api/*"]`. **Do not widen it.** If it
  covered `/*`, every page request would invoke the Worker instead of being
  served straight from the asset store — the whole performance story depends on
  that boundary.
- Custom domains: `kmwebdesign.xyz` and `www.kmwebdesign.xyz`, both attached as
  Workers Custom Domains. Canonicals point at the apex.
- Cloudflare prepends a managed "content signals" block to `robots.txt`. The
  real rules come from `app/robots.ts`; don't create `public/robots.txt`.

## Contact form and lead pipeline

`POST /api/contact` → `worker/index.ts`:

1. Rejects non-POST, malformed JSON, missing fields, oversized fields, invalid
   email, and honeypot submissions.
2. Writes the lead to the `LEADS` KV namespace **before** attempting email.
   This is the durability guarantee: a mail failure must never lose an inquiry.
3. Sends a notification through the `EMAIL` binding (Cloudflare Email Service),
   with the visitor's address as `Reply-To`.
4. Writes `emailStatus` (`pending` → `sent` / `failed`) back onto the stored lead.
5. Returns 502 only if **both** the KV write and the email failed.

Read the lead log:

```bash
npx wrangler kv key list --namespace-id 6e190b0067c045d3aaef08ad485c1cf5 --remote
npx wrangler kv key get "<key>" --namespace-id 6e190b0067c045d3aaef08ad485c1cf5 --remote
```

Keys are `lead:<ISO-8601>:<uuid>`, so listing them is already chronological.
A lead that says `emailStatus: "pending"` was stored but the Worker died before
recording an outcome — investigate it.

Email routing: `hello@`, `admin@`, `kurt@`, and `email@kmwebdesign.xyz` forward
to real inboxes. The catch-all is **drop**, so a new address must be added
explicitly or mail to it disappears silently.

## Layout

| Path | What lives there |
| --- | --- |
| `app/` | `layout.tsx`, metadata routes (`sitemap.ts`, `robots.ts`), `globals.css`, 404 |
| `app/(site)/` | Every marketing route. This group is what gets the studio header, footer and assistant |
| `app/demos/[slug]/` | Live demo restaurant sites — deliberately outside `(site)`, so they render with no studio chrome |
| `components/demos/` | One component per demo direction, the shared demo bar, and the optional photo band |
| `components/sections/` | One component per homepage section |
| `lib/data.ts` | **All** site content: prices, packages, projects, templates, posts, demo restaurant copy |
| `lib/demo-photos.ts` | Photography for the demo sites. Empty by default — see below |
| `lib/seo.ts` | `pageMetadata()` — canonical + Open Graph/Twitter per page |
| `worker/index.ts` | `POST /api/contact` |
| `wrangler.jsonc` | Worker name, assets, bindings, custom domains |
| `docs/agents/` | Issue tracker + triage conventions for agent skills |
| `docs/adr/` | Architecture decision records |

## Gotchas

- `wrangler d1 create` returns a 401 on this account's current OAuth token even
  though `wrangler d1 execute` works. Lead storage therefore uses KV. Re-run
  `wrangler login` if you want to move the lead log to D1.
- The reveal animations are pure CSS (`@keyframes` + `animationDelay`). They were
  moved off JavaScript deliberately so above-the-fold content paints without
  waiting for hydration. Do not reintroduce an IntersectionObserver gate.
- `components/SiteAssistant.tsx` is hidden below the `sm` breakpoint because it
  covered the hero CTA on mobile.
- All portfolio and template imagery must exist in `public/`; a 404 there costs
  real conversions and Lighthouse points.
- Demo restaurant pages (`/demos/[slug]`) are `noindex, follow` on purpose and
  stay out of `sitemap.xml`. They describe menus and hours for businesses that
  do not exist; indexing them would put fake local businesses in search results.
  Only the `/demos` picker is indexable.
- The demo pages must keep their `(site)`-free chrome. Do not move them into the
  route group or add `Header`/`Footer`/`SiteAssistant` — the whole effect is that
  the visitor is looking at a restaurant site, not a page of the studio site.

## Demo photography

The demos ship with no photography, and that is a valid finished state — type
and colour carry the identity. Photos are additive:

1. Export at 1600px on the long edge, WebP, ideally under 200 KB. Static export
   has no image optimizer, so the file you save is the file that ships.
2. Put it in `public/demos/<slug>/`.
3. Add `{ src, alt }` to that demo's list in `lib/demo-photos.ts`.
4. `npm run build`.

`components/demos/DemoGallery.tsx` renders nothing when a demo's list is empty,
so an unfilled slot can never leave a hole in the page. The first photo becomes
a wide lead image, the next two sit beside it, and the same first photo becomes
the background of that demo's plate on `/demos`. Desert Bloom's decorative
hero circle is a placeholder for photography and hides itself once a photo
exists — the other two demos have non-photographic hero art and keep it.

Alt text describes the photograph, not the restaurant: "Table by the window at
dusk", not "Ember & Vine".

## Agent skills

### Issue tracker

Issues live in GitHub Issues on `kurtmorales-tech/kurtmoralesNext.js`, driven by
the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Five canonical triage labels, using the default names. See
`docs/agents/triage-labels.md`.

### Domain docs

Single-context: `GLOSSARY.md` at the root plus `docs/adr/`. See
`docs/agents/domain.md`.
