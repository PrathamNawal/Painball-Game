# PAINBALL
**Splat the bots. Own the arena.** Top-down arena paintball for mobile and desktop web — single player vs computer, no ads, no sign-up, works offline.

▶ **Play:** https://prathamnawal.github.io/Painball-Game/

## NEW in v2 — Duel (3D)
Crouch behind an inflatable bunker 18 m from a rival. **Hold** to rise and aim through the scope (drag), **release** to fire and drop. Watch the enemy's red **laser sight** — that's your cue to duck. Shoot the head (MASK SHOT), knock the marker out of their hand (HANDSHOT), pop an explosive paint barrel beside them (BARREL SHOT). Bunkers deflate under fire, so cover runs out. Best of 3, endless stages across 5 themed areas with a boss every 5th. Controls: hold anywhere (mouse: hold left button, drag, release), second finger / Space = extra shot, ◀ ▶ or A/D = swap cover.

The original top-down **Arena** team mode lives on the Arena tab.

## How the Arena plays
- Duck between inflatable bunkers, pop out, splat. **One hit = out.** Paintballs are slow enough to dodge. Hide to reload.
- Best of 3 rounds, 1v1 up to 4v4 with bot allies. Campaign (endless, boss every 5th level) + a Daily Arena with streak.
- Every splat stays on the floor — at the end you get **your painted arena** as an image to share.
- Power-ups mid-field: Shield, Rapid fire, Splash balls.

| | Mobile (portrait) | Desktop (landscape) |
|---|---|---|
| Move | left thumb (floating stick) | WASD / arrows |
| Aim + fire | right thumb: drag to aim, hold to fire, tap = quick shot | mouse, click / Space |
| Dash | double-tap left side or DASH button | Shift |
| Reload | auto when empty, or button | R |
| Pause | ⏸ | P / Esc |

Aim assist (Off/Low/Med/High), left-handed layout, reduced motion, colour-blind-safe palettes (enemies also have dashed rings) are in Settings.

## Develop
```bash
npm install
npm run dev              # dev build + http://localhost:8080
npm test                 # 50 unit tests incl. 600-arena validity proof, duel AI fairness proof and calibration
npm run build && npm run e2e   # production-build browser tests (needs playwright + Chromium)
npm run calibrate        # Arena difficulty table · node scripts/sim/calibrate-duel.mjs for Duel
npm run publish:pages    # build and copy the site to / and /docs for GitHub Pages (branch: main)
```
Debug URL params: `?debug` (exposes `window.__game`), `&auto` (autopilot plays for you), `&fast`, `&speed=N`, `&q=low`.

## Architecture (see docs/DECISIONS.md)
`src/core` pure logic (rng, arena generator, sim, AI, **duel**, match rules, save — runs in Node) · `src/game` Arena renderer/input/audio · `src/game3d` three.js duel stage/characters/fx/input · `src/ui` DOM overlays.
Docs: [PRD](docs/PRD.md) · [Arena design](docs/GAME_DESIGN.md) · [Duel design + calibration](docs/DUEL_DESIGN.md) · [Roadmap](docs/ROADMAP.md) · [Decisions](docs/DECISIONS.md) · [Test plan](docs/TEST_PLAN.md) · [Launch checklist](docs/LAUNCH_CHECKLIST.md) · [Dev log](docs/DEVLOG.md)

## Deploy
GitHub Pages **Deploy from a branch → `main`**. `npm run publish:pages` commits the built site to the repo root (and `/docs`). CI fails if the committed site is stale.
