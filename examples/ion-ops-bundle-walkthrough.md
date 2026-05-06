# Ion Ops Bundle Plane Walkthrough

I use this file as a small checklist before changing the JavaScript implementation.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | dry-run spread | 178 | ship |
| stress | rename risk | 79 | hold |
| edge | operator cost | 188 | ship |
| recovery | idempotence | 145 | ship |
| stale | dry-run spread | 234 | ship |

Start with `stale` and `stress`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

If `stress` becomes less cautious without a clear reason, I would inspect the drag input first.
