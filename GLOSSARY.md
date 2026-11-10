# Glossary

The vocabulary this studio uses. Agents must use these words in exactly this
sense — especially in customer-facing copy, issue titles, and commit messages.

**Everything in this portfolio is Kurt's own work.** The categories below
describe *what kind* of project something is. They are not authenticity
caveats, and they must never be written as if they were.

## Portfolio terms

**Client work**
A site designed and built by the studio for a paying client and launched on a
real domain — for example Ravfia Cleaning Service and Ravfia Line Striping.
Labelled `Client Website` in `lib/data.ts`.

**Own product / platform**
A system Kurt built and operates himself — Kacm1Network, the RavFia platform,
RavFia SecurePass, the 3D portfolio. Real, shipped work with real users and real
code. Not a client engagement, and not lesser for it.

**Concept**
A design direction Kurt built to show what a project could look like, such as the
restaurant concepts. It is real design and real front-end work, made by the
studio. What it is *not* is a client engagement, so it should not be described as
"built for" a named restaurant that never hired the studio. Describe the work,
not a fictional relationship.

**Template**
A reusable starting point Kurt built and offers for others to launch from (see
`templates` in `lib/data.ts`). Real work. It may be demonstrated with its own
preview image.

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

## The one real rule

**Do not invent outcomes.** Traffic figures, conversion rates, revenue numbers,
awards, and testimonials must come from Kurt or from a source he provided. If a
project has no measured result to cite, describe what was built and how — never
fill the gap with a plausible-sounding number.

This rule protects credibility. It is not a statement about whether the work is
real; the work is real.
