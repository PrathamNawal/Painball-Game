# Duel mode — design (code and doc must agree)

## Fantasy
You are crouched behind an inflatable bunker on a paintball field, 18 m from a rival doing the same. Pop up, line up the shot, splat them — or get splatted. Tense, readable, 20–40 s per duel, best of 3.

## Loop
1. **Hidden** behind your bunker (camera behind your shoulder). You carry **3 pods**; only when the magazine is **empty** does a forced 1.1 s reload start — that is the opening for the other side (HUD says ENEMY IS RELOADING).
2. **Hold** to rise (0.22 s) → camera pushes into a zoomed aim view; **drag** to aim. Accuracy tightens the longer you hold (spread ×3 → ×1 over 0.4 s).
3. **Release** to fire one paintball and drop back down. A **second finger tap** fires again without dropping (risky).
4. **Swipe sideways** while hidden to dash to the neighbouring cover (0.28 s, exposed while crossing).
5. First splat wins the duel; first to 2 duels wins the match.

## World (metres)
Field 18 m long (posts at z = ±9), lateral posts x ∈ {0} / {-4,4} / {-6,0,6} by stage. Bunker 3.2 × 1.0 × 1.0, **deflates** (height ×(0.4+0.6·hp/14)) under paint — when it sinks below head level you can no longer hide. Explosive paint **barrels** (r .35) beside posts: a hit splashes 3 m (kills fighters inside, through cover).

## Fighter
Head centre y = 0.78 + 0.82·e (e = exposure 0..1), hand (marker) y = 0.7 + 1.0·e at x ±0.32, torso y = 0.5 + 0.5·e. Hit radii are inflated for fat fingers: head .25, hand .20, torso .38 (pure ray tests; bunker blocks first).
- **Head** = *MASK SHOT* (win, +10 coins) · **Torso** = *SPLAT* (win) · **Hand** = *HANDSHOT*: marker knocked away, can't fire for 2.2 s (+5) · **Barrel** = *BARREL SHOT* (+15) · kill within 0.6 s of the target rising = *QUICK DRAW* (+5) · match won without being hit = *UNTOUCHABLE* (+10).
- Marker clears your own bunker only when e ≥ 0.65 (else the ball splats on your own cover — crosshair shows ✕).

## Ball
70 m/s (≈ 0.26 s across the field → dodgeable), gravity 6 m/s², **launch is gravity-compensated** so the crosshair is where it lands if nothing moves. Spread σ = 0.55° · (1 + 2·max(0, 0.4 − hold)/0.4).

## Enemy AI (skill s ∈ [0,1])
hide = U(1.0−0.6s, 2.2−1.2s) s × time-pressure (down to ×0.35 as a round drags past 10 s) · **laser telegraph** = 0.95−0.70s s (never < 0.25 s) · aim σ = 3.6°−3.1°s · burst 1–3 balls @ 0.28 s · reaction to your rising = 0.35−0.2s s · repositions between posts · shoots your bunker to deflate it when you hide · at s > 0.6 may shoot barrels beside you.
Boss (every 5th stage): shield bubble absorbs one torso/hand hit.

## Campaign
Stage n → skill = 0.02 + 0.80·(1−e^(−n/28)), posts 1→3, areas rotate every 5 stages: Sunset Desert, Candy Beach, Frost Park, Neon Night (blacklight), Jungle Ruins. Rewards: win 20 + tricks, loss 4. Trophies: +30 win / −15 loss (floor 0).

## Controls
Touch: described above. Desktop: **hold left mouse** = rise/aim, move mouse to aim, **release** = fire; **Space** while holding = extra shot; **A/D or ←/→** swap cover; **P/Esc** pause.

## Calibration (measured, `node scripts/sim/calibrate-duel.mjs`)
Scripted player models (reaction delay + aim error scale with skill: casual 0.45 · decent 0.55 · good 0.75 · expert 0.9) play best-of-3 duels vs the campaign AI, N = 30 per cell. Boss stages (5, 10, …) carry a shield.

| Stage | Posts | Foe skill | casual | decent | good | expert |
|---|---|---|---|---|---|---|
| 1 | 1 | 0.05 | 93% | 93% | 100% | 97% |
| 3 | 2 | 0.10 | 100% | 87% | 100% | 100% |
| 5 (boss) | 2 | 0.15 | 83% | 80% | 87% | 97% |
| 8 | 3 | 0.22 | 97% | 100% | 97% | 100% |
| 10 (boss) | 3 | 0.26 | 63% | 80% | 80% | 87% |
| 15 | 3 | 0.35 | 40% | 70% | 67% | 70% |
| 20 | 3 | 0.43 | 13% | 27% | 73% | 80% |
| 30 | 3 | 0.55 | 0% | 0% | 50% | 90% |

Reading: stages 1–8 are forgiving onboarding; difficulty tightens from ~10; stage 30 needs real skill. **Scripted bots ≠ people**: no thumb occlusion, no touch noise, no learning; the model has no aim assist. Re-tune `duelSkill()` from real win rates (rule of thumb: stage win-rate < 25 % or > 90 % for typical players → nudge ±0.04).
Unit-tested AI fairness: across 396 sampled enemy bursts at skills 0–0.95 the laser sight was visible ≥ 0.27 s before the first ball.
