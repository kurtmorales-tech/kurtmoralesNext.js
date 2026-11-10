# ADR-0003: No crypto or x402 payments

- **Status:** Accepted
- **Date:** 2026-11-10

## Context

x402 — the revived HTTP `402 Payment Required` protocol — was evaluated as a way
for the studio to take payment. It is a real protocol: spec v2 since December
2025, now governed by the Linux Foundation's x402 Foundation with 40 members
including Coinbase, Stripe, Cloudflare, AWS, Visa, and Mastercard. Cloudflare AI
Gateway already sells inference through it, so this was not a dismissal of a
toy.

The evidence at evaluation time:

- **196M lifetime transactions totalling $42M** — roughly 21¢ per transaction.
- **October 2026: 5.1M transactions for $274K**, down from 75M/$24.2M in August.
- **90.8% of payments were under $0.01.**
- Roughly **94K buyers and 22K sellers** in a 30-day window — on the order of
  $1.1K average per seller per month, heavily skewed toward a few winners.
- The protocol has **no invoicing, no escrow, no refunds, and no chargebacks**;
  settlement is request-scoped and irreversible.
- `@x402/next` requires **Next ≥ 16.4.1**, which would force a major framework
  upgrade for no revenue.
- August 2026: 25 vulnerabilities across the x402 SDKs, 3 critical, including no
  default spend cap — patched without a public advisory.

## Decision

**Do not accept crypto or x402 payments.** Payment for website builds goes
through conventional invoicing (Stripe), where cards, ACH, refunds, and
reconciliation already work.

x402 is not added to the product, and no dependency on it is introduced. The
decision is recorded here so future sessions do not reopen it without new
evidence.

## Alternatives considered

- **x402 for website builds.** Rejected. The buyer is a restaurant owner paying
  by card or check over a multi-week engagement with revisions and a deposit.
  x402 is designed for machines paying per request; it has no concept of a
  deposit, a revision round, or a refund.
- **x402 for template sales.** Rejected as a *primary* rail. Stripe, Lemon
  Squeezy, and Polar already handle sales tax, refunds, licensing, and fraud for
  downloadable goods. x402 would move all of that onto the operator and require
  every buyer to hold a USDC wallet.
- **x402 for a paid API.** The only defensible fit, because it matches the
  protocol's actual use case. Deferred: there is no API, and no distribution to
  drive agent traffic to one. Revisit only if such a product exists.

## Consequences

- No wallet, no stablecoin accounting, and no OFAC screening burden is carried.
  (Selling one's own services for USDC would generally not be money transmission
  under FinCEN's 2019 guidance, but OFAC screening is strict-liability on the
  merchant and USDC is treated as property for tax. That is real overhead for
  zero incremental sales.)
- Any future proposal to add crypto checkout must cite concrete demand — a
  client asking to pay that way — and should supersede this ADR rather than
  work around it.
