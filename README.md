# ion-ops-bundle-plane

`ion-ops-bundle-plane` explores automation with a small JavaScript codebase and local fixtures. The technical goal is to develop a JavaScript command-oriented project for bundle scenarios with bounded scenario files, conflict explanations, and bounded memory input sets.

## Why It Exists

This is intentionally local and self-contained so it can be inspected without credentials, services, or seeded history.

## Ion Ops Bundle Plane Review Notes

The first comparison I would make is `dry-run spread` against `rename risk` because it shows where the rule is most opinionated.

## Features

- `fixtures/domain_review.csv` adds cases for dry-run spread and rename risk.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/ion-ops-bundle-walkthrough.md` walks through the case spread.
- The JavaScript code includes a review path for `dry-run spread` and `rename risk`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Architecture Notes

The core code exposes a scoring path and the added review layer uses `signal`, `slack`, `drag`, and `confidence`. The domain terms are `dry-run spread`, `rename risk`, `operator cost`, and `idempotence`.

The added JavaScript path is deliberately direct, with fixtures doing most of the explaining.

## Usage

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Tests

The verifier is intentionally local. It should fail if the fixture score math, lane assignment, or language-specific test drifts.

## Limitations And Roadmap

No external service is required. A deeper version would add more negative cases and a clearer boundary around invalid input.
