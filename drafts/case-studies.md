# Case study drafts — for review

Status: **draft**. Nothing here is on the site yet.

Everything below is sourced from the repositories, the live sites, and Lighthouse
runs I executed on 2026-11-10. Where a number is measured, the date and method are
stated. Where something is unknown, it says so rather than guessing.

---

## 1. Ravfia Line Striping

**Type:** Client website · **Live:** https://ravfiastrategic0perations.com/
**Client:** Ravfia Strategic Operations LLC, Las Vegas, NV
**Stack:** Vite, React 19, TypeScript, Tailwind CSS 4, Motion, Lucide
**Hosting:** Cloudflare

### The brief

A commercial parking-lot striping contractor needed a site that ranks for the
work it actually does — restriping, new layout striping, ADA markings, fire
lanes, arrows, stencils and wheel stops — across Las Vegas and the surrounding
valley. The buyer is a property manager, not a consumer, so the site had to read
as a compliant commercial contractor and make it trivial to request a written
bid.

### What I built

- Eight routes: home, services, service areas, who-we-serve, about, field notes,
  free estimate, plus individual service pages.
- Service-area pages covering Enterprise, Southwest Las Vegas, Las Vegas,
  Henderson, North Las Vegas, Summerlin, Spring Valley, Paradise and Clark County.
- A free-estimate path with a sticky call bar, so the phone number is reachable
  from any scroll position on mobile.
- Hand-built SVG pavement diagrams explaining striping layouts, instead of stock
  photography.
- A ⌘K site search modal, which most contractor sites do not bother with.
- A compliance checklist and a transparent-rates section — the two objections a
  property manager raises before requesting a bid.

### How I built it

The architectural decision that matters most for a local service business is
**one source of truth for the business identity**. Name, address, phone and
service areas all live in `src/data/business.ts` and are consumed everywhere, so
the name/address/phone data stays byte-identical across every page — which is
exactly what local search rewards.

SEO metadata is handled by a `useSEO` hook that sets the title, description and
structured data per route, plus a `LocalBusinessSchema` component. The site is a
single-page React app, so this is the part that has to be right: without per-route
metadata, a SPA collapses to one indexable page.

### Measured (Lighthouse mobile, 2026-11-10)

| Metric | Result |
| --- | --- |
| SEO | **100** |
| Accessibility | 96 |
| Performance | 88 |
| LCP | 2.7 s |
| CLS | 0 |
| Page weight | 3.9 MB |

SEO at 100 and CLS at 0 are the two that matter commercially here. The honest
read on the rest: 3.9 MB of imagery is too heavy, and it is the reason LCP sits at
2.7 s rather than under 1 s. Compressing the photo set to WebP and lazy-loading
below-the-fold images is the next win, and I would not ship a case study claiming
otherwise.

---

## 2. RavFia SecurePass

**Type:** Desktop application · **Repo:** `ravfia-secure-pass`
**Stack:** Electron, React, TypeScript, Vite, Rust
**Web presence:** https://securepass.ravfia.online/

### The brief

A password manager that does not ask you to trust a server. No account, no cloud
sync, no telemetry, no AI service, and no recovery backdoor — if the master
password is lost, the vault is lost. That constraint is the product.

### What I built

- A local vault for creating, editing, deleting and searching credentials.
- Password generation using Rust randomness, not `Math.random`.
- QR code images generated locally with a bundled library rather than a remote
  image service.
- Encrypted, authenticated backups with an explicit confirm-to-replace restore.
- A legacy importer that only accepts a file the user selects by hand.
- Idle lock after five minutes, plus lock on OS lock or suspend.
- Clipboard clearing after 30 seconds.

### How I built it

The security boundary is the interesting part, and it is deliberately boring.

The renderer never touches Node, arbitrary file paths, or raw IPC. A sandboxed
Electron preload exposes six allowlisted commands and nothing else. The main
process validates sender, payload shape and size, owns the clipboard and the
native file dialogs, and restricts navigation, network and permissions.

Cryptography lives in a separate Rust executable, `securepass-core`, which the
main process spawns at a fixed path. They exchange bounded newline-delimited JSON
over stdin/stdout with request IDs and a lock event. Secrets are never passed in
`argv` or environment variables, so they never appear in a process listing.

Rust owns key derivation, encryption and authentication, vault CRUD, random
generation, backup/restore and the idle-lock timer. On lock, the renderer discards
credential, form, QR and generator state, with an epoch guard against stale
responses arriving after the lock. If the sidecar fails, pending requests are torn
down and the renderer locks rather than continuing in a degraded state.

The vault is written to a private directory (`0700` on Unix) under the app's
userData path — not a path the renderer supplies.

### Quality gates

`npm run typecheck`, Vitest and Playwright suites, a packaged-app smoke test
running against a disposable `XDG_CONFIG_HOME` so it can never touch a real
vault, and Rust gates: `cargo fmt --check`, `cargo clippy --all-targets -D
warnings`, `cargo test`.

### What it is not

It is **not audited security software**, and the README says so plainly. Only
Linux x64 packaging was exercised. I would rather publish that limitation than
imply a level of assurance the project does not have.

---

## 3. Kacm1Network

**Type:** Platform + marketing site · **Live:** https://kacm1network-dev.pages.dev/
**Stack:** Bun, React 19, Tailwind CSS 4, Radix UI · **Hosting:** Cloudflare

### The brief

An AI-assisted workspace where a written brief becomes a production-shaped
full-stack app: plan, build, preview, deploy, iterate — without losing the thread
of what you are building between each stage.

### What I built

The **workspace** is a browser-based development surface with resizable panels:

- File explorer over the generated tree — React app, Worker API, Durable Object,
  `wrangler.jsonc`.
- Live preview iframe with desktop / tablet / mobile widths.
- Line-numbered, syntax-highlighted code viewer.
- A plan panel showing the brief, personas, routing tree and SQLite schema.
- Agent chat with a visible pipeline tracker: `$ plan app` → `$ write files` →
  `$ deploy preview`.
- Streaming console plus a Problems view.
- Restore points: automatic snapshots after every agent run with one-click
  rollback.

Every separator is keyboard-operable, and double-clicking resets a panel — small
details that matter in a tool you sit inside all day.

The **marketing site** is separately built and deployed on Cloudflare: the
"Your idea. Made real." landing page with the four-step process, capability
sections, pricing, FAQ and demo request.

### How I built it

The workspace is a **UI prototype**: the agent pipeline, preview deploys and file
edits are simulated in the client. That was a deliberate sequencing choice —
validate the interaction model end to end before wiring it to Workers, Durable
Objects and the AI Gateway, because the expensive mistakes in an agent product
are in the interaction design, not the plumbing.

Building it with Bun and React 19 kept the iteration loop fast, and Tailwind v4
plus Radix gave a consistent, keyboard-accessible shell without hand-rolling
primitives.

### Measured (marketing site, Lighthouse mobile, 2026-11-10)

| Metric | Result |
| --- | --- |
| Performance | **100** |
| SEO | **100** |
| Best practices | 96 |
| Accessibility | 95 |
| LCP | 0.9 s |
| CLS | 0 |
| Page weight | 169 KB |

A 169 KB page with a 0.9 s LCP is the direct result of shipping pre-rendered HTML
with almost no client JavaScript for the site shell.

---

## Open questions before publishing

1. **`lib/data.ts` says SecurePass uses "Gemini", but the repo README states
   there is no AI service.** One of them is stale. Which is accurate?
2. **Dates.** No repo has a reliable "shipped" date I can cite. Do you want them
   on the pages, and if so which dates?
3. **Client permission.** Ravfia Line Striping and SecurePass are your own
   companies; confirm you want the performance numbers published, including the
   88/3.9 MB result for line striping.
4. **Screenshots.** Each page wants a real screenshot. I can capture them.
