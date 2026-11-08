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
| Unit — **duel** | hidden/exposed hit zones (MASK/hand/torso), HANDSHOT disarm + recovery, bunker deflation & flat cover, barrel splash through cover, gravity-compensated launch, 3-pod ammo + forced reload, swap cover, **input buffer**, aim assist, boss shield, determinism, **AI fairness (396 sampled bursts, laser ≥ 0.27 s before the first ball)**, stage/skill difficulty curve | 15 |
| E2E (production build, software WebGL) | boot with **live 3D showcase** · **no third-party requests / no ad DOM** · **Duel: real-mouse hold/drag/release, touch hold + second-finger shot + swap buttons, full win/defeat flows with callouts, unattended autopilot duel + WebGL memory bound across 3 matches, pause/P key/hidden tab, area carousel + locks, gear/skins purchases, share PNG snapshot** · Arena: desktop + mobile input through the HUD layer, match flows, autopilot, daily streak/levels · settings persist · **320 px children-inside-bounds on every screen** · **axe on 7 screens (0 violations)** · reduced motion · **offline reload** · **sub-path `/games/x/`** | 22 |
| Sim — calibration | `npm run calibrate` (see GAME_DESIGN) | script |

## Performance (measured, software GL — not a device)
- Bundle: **179 KB gz JS** incl. tree-shaken three.js (budget 400 KB; was 28 KB before Duel), 28 KB CSS, **no image/audio/model assets** (everything procedural).
- 3D: toon materials + inverted-hull outlines, blob shadows (no shadow maps), ≤ 220 decals, particle pools, pixel ratio ≤ 1.75 (1 on Low), post pass skipped on Low; GPU memory check: geometries 90→92, textures 16→18 across 3 consecutive matches (a leak of per-match canvas textures was found and fixed).
- Frame cost: single pre-composited arena layer ⇒ **1 large blit/frame**. Before: 4 blits ≈ 56 ms/frame on SwiftShader; after ≈ 5 ms. (Real GPUs are far faster; weak phones benefit most.) `backdrop-filter` removed everywhere (blur over a 60 fps canvas was a measured cost).
- Sim: 6 bots + A* at 3 Hz well under 1 ms/tick in Node.
- Adaptive quality governor drops to Low once if the average frame > 30 ms.

## Findings fixed during v2 (all caught by tests/CI, not by eyeballing)
shader `#include` placement (black screen) · banner animation dropping its centring transform · reload-after-every-shot made the magazine meaningless · release during fire cooldown silently lost the shot (now buffered) · both Arena and Duel handled the P key (pause flicker) · menu opened on Area 1 instead of the current area · per-match texture leak · 320 px overflow of button rows · BOSS tag contrast · failed tests leaking WebGL contexts into the next test.

## NOT verified (honest list)
- 🔗 **Real iPhone / Android feel**: Duel hold/drag sensitivity, aim-assist strength, swap-button reach; Arena twin-stick comfort. Synthetic pointer events and `touchscreen.tap` only.
- 🔗 **Real-GPU frame rate and thermals** for the 3D mode (tests use SwiftShader software GL, a floor). Low-quality path + adaptive governor exist but are unmeasured on devices.
- 🔗 Visual polish judged from software-rendered screenshots only; no real-device art review.
- 🔗 Real audio output on devices (WebAudio is synthesised; autoplay unlock is exercised but not heard).
- 🔗 Haptics (`navigator.vibrate`, Android only; iOS Safari has none).
- 🔗 Human difficulty (bots ≠ people), battery/thermal on long sessions, Safari-specific canvas quirks.
- 🔗 Live Pages page was not loaded from the build sandbox (proxy blocks `*.github.io`); deploy proven via GitHub's `pages build and deployment` run conclusion.
