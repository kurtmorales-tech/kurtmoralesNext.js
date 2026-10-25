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
npm install     # or: bun install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
```

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
  Reveal.tsx          Scroll-reveal activator (IntersectionObserver)
  sections/           One component per homepage section
lib/
  data.ts             ALL site content lives here
public/
  portfolio/          Restaurant concept artwork (.webp)
  template-previews/  Template thumbnails (.png)
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

- **Contact form:** the form on `/contact` is UI only — there is no
  backend in this build. On submit it points visitors to
  `hello@kmwebdesign.xyz`. To make it live, wire
  `app/contact/ContactForm.tsx` to an API route, a form service, or a CRM.
- **Blog posts** are listed from `lib/data.ts` (titles, excerpts, dates,
  tags carried over from the original site's fallback data). Individual
  post pages are not part of this rebuild.
- **Images** are the original site's own artwork, served statically
  from `public/`.
