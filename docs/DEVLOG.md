# Dev log (newest last). Every entry says what was *measured*.

## 2026-11-08 — M0/M1: plan + pure core
- Read the browser-game-playbook; scaffolded from its starter (baseline green: 5 unit, build 10 KB gz). Owner directive: **no ads** → deleted the ad adapter entirely, removed `__ADS_MODE__`, save schema has no ad fields (unit-tested).
- Wrote PRD, GAME_DESIGN, ROADMAP, ADRs *before* code. Decision: 2D canvas, whole arena always visible, one-hit elimination, point-symmetric seeded arenas.
- Core: `arena.js` (canonical portrait frame; landscape = rotation), `sim.js` (fixed 1/60 step), `ai.js` (LOS + memory + reaction delay; A* on 14-unit nav grid; cover spots; 4 personalities).
- Measured: 800 arena variants valid, 0 failures. Equal-skill 2v2: 26–24 wins (fair), 0.9 vs 0.3: 52–4; rounds avg 22 s but 15 % timed out → added stalemate breaker (anchors/snipers push after 18 s) → timeouts 3/60, avg 18 s.

## 2026-11-08 — M2/M3: shell, renderer, UI
- Renderer: persistent paint (splat blobs + droplets that stamp where they land), droplet physics, shake, slow-mo on the match-winning splat, confetti, share-as-PNG.
- Input: floating twin sticks (move/aim, hold-to-fire, tap = assisted shot, double-tap = dash) + keyboard/mouse; soft aim assist in `core/assist.js` (LOS-only, testable).
- Attract mode: a live bot match renders behind the menu (the menu *is* the game).
- **Perf finding:** screenshots took 10–25 s on SwiftShader. Cause was GPU backlog from 4 full-size blits/frame (≈56 ms) — JS-side timing showed 0.5 ms, which hid it. Fix: pre-composite floor + bunkers + paint into ONE layer (floor paint clipped around bunkers by even-odd hole-punch) → ≈5 ms. Also removed `backdrop-filter`. Lesson: measure with a forced canvas flush (`getImageData`), not `performance.now()` around draw calls.
- Bug: `[hidden]` lost to `display:grid` on icon buttons → fast-forward showed while alive. Added global `[hidden]{display:none!important}`.
- Bug: `setPointerCapture` throws for inactive pointer ids and aborted the touch handler → wrapped in try/catch (found by the e2e touch test).

## 2026-11-08 — M4: verification
- 36 unit tests green. Calibration table recorded in GAME_DESIGN (casual 73–80 % on L1–3 falling to 13 % at L30; expert 100 % → 38 %).
- E2E suite (18 tests) on the production build; autopilot plays full matches unattended (`?auto&speed=6`).

## 2026-11-08 — M5: deploy
- Pages is "Deploy from branch: main". Removed the Actions Pages workflow (it can't work with a branch source). `npm run publish:pages` copies the build to `/` and `/docs` (+ `.nojekyll`); CI `--check` fails on a stale publish.
- E2E findings fixed on the way to 18/18: (1) drawn round replayed with the *same seed* → deterministic stalemate forever (autopilot hung) → seed salted with attempt counter; (2) menu `.stack` grid overflowed at 320 px (content-sized track, playbook pitfall 1.3) → `minmax(0,1fr)`; (3) flaky input tests because bots shot the player during slow software-GL frames → enemies made static dummies in input tests.
- Result: unit 36/36, e2e 18/18, axe 0 violations on 7 screens, 28 KB gz JS.
