# Test plan & results
_Last run: see DEVLOG for the commit. Everything below was run in CI-like conditions: Node 22, headless Chromium with **software GL (SwiftShader)** — a floor, not a device._

## Automated (all green before deploy)
| Layer | What | Count |
|---|---|---|
| Unit — arena | determinism; **600 arenas** (300 seeds × portrait/landscape × 1–4 per side × levels 1–40) validated: bunkers inside, spawns clear & mutually reachable, pickups reachable, point-symmetric; rotation mapping; caps | 4 |
| Unit — sim | bounds & bunker collision in 8 directions; speed caps; hit/elimination/credit; bunkers block balls; no friendly fire; ammo/reload; dash cooldown; shield; rapid; pickups; timeout/draw; **determinism** | 12 |
| Unit — AI | A* paths clear of bunkers; **equal-skill fairness**; **skill monotonic both seat orders**; rounds end (avg 8–45 s, ≤ 20 % timeout); parameter bounds | 5 |
| Unit — match | campaign scaling, bosses, stars, rewards, daily streak incl. leap/DST/month boundaries, palettes | 6 |
| Unit — save | roundtrip, corrupt→backup→defaults, clamping hostile values, v0 migration, newer-version refusal, throwing storage, **no ad/tracking fields** | 6 |
| Unit — assist/perf | aim-assist cone/strength/LOS; quality governor | 3 |
| E2E (production build) | boot + live attract match · **no third-party requests / no ad DOM** · desktop WASD/mouse/Shift/R through HUD · mobile touch sticks, auto-fire, double-tap dash, **real tap through HUD**, buttons · win flow + save · defeat flow · **unattended autopilot match** · pause (button/P/hidden tab) · settings persist · shop · levels · daily streak · share PNG · **320 px children-inside-bounds on every screen** · **axe on 7 screens (0 violations)** · reduced motion · **offline reload** · **sub-path `/games/x/`** | 18 |
| Sim — calibration | `npm run calibrate` (see GAME_DESIGN) | script |

## Performance (measured, software GL — not a device)
- Bundle: **~28 KB gz JS** (budget 400 KB), 15 KB CSS, no images/audio assets (all drawn/synthesised).
- Frame cost: single pre-composited arena layer ⇒ **1 large blit/frame**. Before: 4 blits ≈ 56 ms/frame on SwiftShader; after ≈ 5 ms. (Real GPUs are far faster; weak phones benefit most.) `backdrop-filter` removed everywhere (blur over a 60 fps canvas was a measured cost).
- Sim: 6 bots + A* at 3 Hz well under 1 ms/tick in Node.
- Adaptive quality governor drops to Low once if the average frame > 30 ms.

## NOT verified (honest list)
- 🔗 **Real iPhone / Android feel**: twin-stick comfort, thumb occlusion, dash gesture discoverability, aim-assist strength. Synthetic pointer events and `touchscreen.tap` only.
- 🔗 Real audio output on devices (WebAudio is synthesised; autoplay unlock is exercised but not heard).
- 🔗 Haptics (`navigator.vibrate`, Android only; iOS Safari has none).
- 🔗 Human difficulty (bots ≠ people), battery/thermal on long sessions, Safari-specific canvas quirks.
- 🔗 Live Pages page was not loaded from the build sandbox (proxy blocks `*.github.io`); deploy proven via GitHub's `pages build and deployment` run conclusion.
