# THE LOCKED STUDY
A 2-minute 3D investigation for **Halloran & Finch Detective Agency** (an invented brand: navy, brass, paper, signal red). The study is locked with a 4-digit code. Collect four brass case tokens, one per room; each carries a note that points at a clue in *another* room — a stopped clock, a count of candles, portrait dots or coat hooks. Every clue also has a look-alike **decoy** in a different room, so read the room name in the note. Find all four digits, enter them at the keypad beside the study door.

**Standalone.** This folder shares no code, assets or styles with the Painball game in the rest of the repo. No build step; the only dependency is the vendored `three.module.min.js` (MIT, `vendor/THREE-LICENSE.txt`).

```bash
cd locked-study
npm start        # http://localhost:8099
npm test         # puzzle logic: 600 generated cases proven solvable + unambiguous
npm run e2e      # headless-Chromium playthrough (needs the server running + playwright)
```

## Play
| | Desktop | Phone |
|---|---|---|
| Move | ↑ ↓ (A D strafe, Shift runs) | left thumb (floating stick) |
| Turn / look | ← → or mouse (click the view to lock the pointer) | right thumb drag |
| Inspect / keypad | E / Space / click | Inspect button |
| Collect token | walk into it | walk into it |
| Notebook · Hint · Restart | N · H · R (or buttons) | buttons |

- **Today's case** is the same for everyone (seeded by date). **Random case** is a fresh one. `?seed=anything` plays a specific case.
- Score = 100 per token + 500 for opening the study + a time bonus (3 pts per second under 5:00 of score time). Score time = time + 10 s per hint + 5 s per wrong code; 3 stars at ≤ 2:00. Best score is kept in the browser.
- Look: open-roof estate, flat-shaded low-poly, sky gradient and soft sun shadows, all drawn in code (no image files). Phones get a smaller shadow map and a capped pixel ratio.

## How a case is built (`src/core.js`)
Seeded RNG → shuffle the rooms and the four clue kinds → digit *i*'s note lives in room *i* and points at the evidence in room *i+1* (so walking the cycle solves it, but you can start anywhere) → each clue kind gets one decoy with a different value in a different room. Tests prove for 600 seeds that following the notes always yields the code, ids are unambiguous, and no decoy can produce a true digit.

## Files
`src/core.js` pure logic · `src/world.js` procedural 3D house (primitives only) · `src/main.js` loop, input, UI · `tests/` unit + e2e.
Debug: add `?debug` to expose `window.__study`.
