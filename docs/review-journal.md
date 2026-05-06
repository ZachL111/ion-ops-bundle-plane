# Review Journal

The cases below are the review handles I would use before changing the implementation.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its automation focus without claiming live deployment or external usage.

## Cases

- `baseline`: `dry-run spread`, score 178, lane `ship`
- `stress`: `rename risk`, score 79, lane `hold`
- `edge`: `operator cost`, score 188, lane `ship`
- `recovery`: `idempotence`, score 145, lane `ship`
- `stale`: `dry-run spread`, score 234, lane `ship`

## Note

A future change should add new cases before it changes the scoring rule.
