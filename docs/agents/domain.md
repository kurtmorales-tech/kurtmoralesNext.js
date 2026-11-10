# Domain Docs

How the engineering skills should consume this repo's domain documentation when
exploring the codebase.

## Before exploring, read these

- **`GLOSSARY.md`** at the repo root.
- **`docs/adr/`**: read ADRs that touch the area you're about to work in.
- **`AGENTS.md`**: operating rules, deploy model, and hard constraints.

If any of these files don't exist, **proceed silently**. Don't flag their absence
and don't suggest creating them upfront.

## File structure

Single-context repo:

```
/
├── AGENTS.md
├── GLOSSARY.md
├── docs/
│   ├── adr/
│   │   ├── 0001-static-export-on-workers.md
│   │   ├── 0002-email-service-for-contact-form.md
│   │   └── 0003-no-crypto-payments.md
│   └── agents/
│       ├── domain.md
│       ├── issue-tracker.md
│       └── triage-labels.md
├── app/
├── components/
├── lib/
└── worker/
```

## Use the glossary's vocabulary

When output names a domain concept — in an issue title, a refactor proposal, a
test name, or customer-facing copy — use the term as defined in `GLOSSARY.md`.
Do not drift to the synonyms it explicitly avoids (notably: never attach invented
results to a project, and never describe a concept as work-for-hire for a client
who does not exist).

If the concept you need isn't in the glossary yet, that's a signal: either you're
inventing language the project doesn't use (reconsider) or there's a real gap
(note it for `/domain-modeling`).

## Flag ADR conflicts

If output contradicts an existing ADR, surface it explicitly rather than
silently overriding:

> _Contradicts ADR-0003 (no crypto payments), but worth reopening because…_
