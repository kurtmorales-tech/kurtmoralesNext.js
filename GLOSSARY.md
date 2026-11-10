# Glossary

The vocabulary this studio uses. Agents must use these words in exactly this
sense — especially in customer-facing copy, issue titles, and commit messages.

## Portfolio terms

**Live client work**
A site that is deployed for a paying client and reachable on a real domain.
Listed under `projects` in `lib/data.ts` with a live `link`. Claims about outcomes
are only allowed here, and only when the client supplied them.

**Design concept**
A speculative restaurant website built to demonstrate a direction. It is *not* a
client engagement and has no client, no traffic, and no results. Listed under
restaurant concepts. Never describe a concept as "work for" or "built for" anyone.

**Template**
A reusable, pre-built site sold or offered as a starting point (see `templates` in
`lib/data.ts`). Not client work. It may be demonstrated with its own preview image.

**Preview**
The thumbnail image shown for a template or concept. Lives in
`public/template-previews/` or `public/portfolio/`.

## Commercial terms

**Starting price**
The single advertised entry price, `site.startingPrice` (currently `$299`). It is
"starting at", never a flat rate, and must not be duplicated in components.

**Package**
One of the three offer tiers: Starter, Growth, Custom.

**Custom quote**
The display value for a package with no public price. Preferred over inventing a
number or showing "Contact us for pricing".

## Lead pipeline terms

**Lead**
One submitted contact-form inquiry, stored in the `LEADS` KV namespace as
`lead:<ISO-8601>:<uuid>`.

**Stored lead**
A lead whose KV write succeeded. A stored lead is never lost, even when the
notification email fails.

**`emailStatus`**
`pending` (stored, outcome not yet recorded), `sent` (notification delivered to
Cloudflare), `failed` (email rejected — the lead is still stored and must be
handled manually).

**Notification**
The email sent to the studio inbox for each lead. It is a notification, not the
system of record; the KV entry is the record.

## Avoid

- "Results", "ROI", "conversions" applied to a concept or template.
- "Our client" for anything in the concepts or templates sections.
- "Price" as a synonym for "starting price".
