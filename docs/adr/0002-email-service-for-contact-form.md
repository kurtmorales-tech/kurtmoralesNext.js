# ADR-0002: Cloudflare Email Service for contact-form delivery

- **Status:** Accepted
- **Date:** 2026-11-09

## Context

The site needs to accept project inquiries. An inquiry is the single most
valuable event the site produces — losing one costs between $299 and several
thousand dollars, and the loss is invisible.

Earlier states of the site were worse than they looked:

1. The form was UI only and submitted nowhere.
2. A later version composed a `mailto:` link, which depends on the visitor having
   a configured mail client and reaching "send" themselves.
3. `hello@kmwebdesign.xyz` had **no Email Routing rule** while the catch-all was
   set to `drop`, so mail to the site's only published address was silently
   discarded.

## Decision

Deliver inquiries through a Worker endpoint backed by Cloudflare's Email Service
`send_email` binding:

- `POST /api/contact` validates input, then **writes the lead to the `LEADS` KV
  namespace before attempting email**.
- The notification is sent with the visitor's address as `Reply-To`.
- The outcome is written back as `emailStatus` (`pending` → `sent` / `failed`).
- The endpoint returns 502 only when *both* the KV write and the email fail.
- An explicit Email Routing rule forwards `hello@kmwebdesign.xyz` to the studio
  inbox; the catch-all stays `drop` on purpose.

## Alternatives considered

- **mailto: composition.** No infrastructure, but it loses submissions and
  produces no record. Rejected.
- **A form SaaS (Formspree, Basin, Netlify Forms).** Adds a third party, a
  recurring cost, and another script or network hop on a page that currently
  ships almost no JavaScript.
- **Resend / Postmark.** Well-run products, but they would require an API key
  secret and DNS work that Cloudflare already provides natively here.
- **D1 for the lead log.** Preferred on the merits — SQL, indexes, easy export.
  Blocked at the time of writing: `wrangler d1 create` returns a 401 on this
  account's OAuth token even though `wrangler d1 execute` works. KV was chosen to
  ship the durability guarantee now.

## Consequences

- Leads survive mail failure. That is the whole point of the ordering.
- KV has no query language. Reading the inbox means `wrangler kv key list` /
  `key get`, or a future admin route. Keys are `lead:<ISO-8601>:<uuid>` so
  listing is chronological.
- Email Sending is in public beta; first sends may land in spam.
- A lead stuck at `emailStatus: "pending"` means the Worker terminated mid-flight
  and should be investigated.
- Move the log to D1 once the token can create databases, and update this ADR.
