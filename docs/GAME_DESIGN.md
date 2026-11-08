# Painball — Game Design (code and doc must agree)

## Arena
- Logical units. **Portrait 560×880** (phones) or **landscape 880×560** (desktop), chosen from the viewport at match start; whole arena always on screen.
- Teams spawn at opposite short ends. Bunkers are **point-symmetric** around the centre (rotate 180°) so neither side has an advantage.
- Bunker shapes: rectangles (blocks, walls) and circles (cylinders). They stop bodies *and* paintballs.
- Generation: seeded; N bunkers per half grows with level (4→9); each placed with ≥ 2×body gap to other bunkers/walls and ≥ 90 units from spawn zones. Validated by grid BFS: every spawn point can reach every other.

## Entities
| | value |
|---|---|
| Body radius | 16 |
| Move speed | 150 u/s (bots scale 0.9–1.05 by skill) |
| Dash | +220 u/s for 0.22 s, cooldown 2.2 s (no invulnerability — pure repositioning) |
| Paintball | speed 520 u/s, radius 4, range 640 → splat on floor where it dies |
| Fire rate | 7 shots/s (player), bots 3–5.5/s by skill |
| Hopper | 28 balls, reload 1.5 s (auto when empty, manual R / button) |
| Hit | 1 splat = eliminated. Shield pickup absorbs one hit. |

## Round / match
- Round ends when one team has no one alive (or at 75 s timeout → team with more alive wins, tie → draw replayed).
- Match = first to 2 round wins. Between rounds the paint stays; the arena only gets messier and prettier.
- Eliminated player: watch with **Fast-forward ×3** button.

## Pickups (symmetric pair, appear 8 s into a round)
Shield (absorbs one hit) · Rapid (×1.7 fire rate, 6 s) · Splash (next 3 balls burst in a small AoE, bigger splat).

## Bots
Skill `s∈[0,1]`: reaction delay `0.55−0.4s` s · aim error σ `14°−10°s` + distance term + target-speed term · burst length `2+3s` · dodge chance `0.1+0.6s`.
Personalities: **Rusher** (advance bunker-to-bunker, close range), **Anchor** (hold cover, peek), **Flanker** (opposite lateral lane), **Sniper** (long-range cover, patient burst). Bots never read the human's input; they perceive via line-of-sight with a short memory.

## Campaign
Level n → team size 1v1 (1–3), 2v2 (4–9), 3v3 (10–19), 4v4 (20+); skill `0.15 + 0.8·(1−e^(−n/14))`; bunker count grows; every 5th level is a *boss arena* (max personalities mix). 30 authored seeds, endless beyond.
Stars: ★ win · ★★ win 2–0 · ★★★ win 2–0 **and** never eliminated.

## Economy & cosmetics
Coins: +3 per round win, +1 per elimination, +10 match win, +25 first 3-star. Palettes cost 40–120. Free players progress fully; cosmetics only.

## Controls
Mobile: left half = floating move stick; right half = floating aim stick (fires while held past deadzone; soft aim-assist snaps ≤ 14° toward nearest visible enemy); DASH and RELOAD buttons bottom-right. Desktop: WASD/arrows, mouse aim, LMB/Space fire, Shift dash, R reload, P/Esc pause.

## Calibration (measured, `npm run calibrate`)
Headless best-of-3 campaign matches (N = 40 per cell). "Human model" = ONE bot in the human's slot at skill h + allies at the campaign ally skill, vs the level's enemies. Skill models: casual 0.25 · decent 0.45 · good 0.65 · expert 0.85.

| Level | Teams | Foe skill | casual | decent | good | expert |
|---|---|---|---|---|---|---|
| 1 | 1v1 | 0.15 | 73% | 88% | 98% | 100% |
| 3 | 1v1 | 0.20 | 80% | 88% | 93% | 88% |
| 5 | 2v2 | 0.33 | 43% | 57% | 75% | 80% |
| 8 | 2v2 | 0.32 | 23% | 55% | 38% | 60% |
| 10 | 3v3 | 0.44 | 65% | 70% | 88% | 93% |
| 15 | 3v3 | 0.53 | 50% | 48% | 78% | 70% |
| 20 | 4v4 | 0.59 | 28% | 28% | 48% | 55% |
| 30 | 4v4 | 0.69 | 13% | 23% | 28% | 38% |

Reading: early levels are winnable by a casual player, the curve rises smoothly, late levels need skill. Per-level variance (e.g. L8) is arena + personality luck — intentional variety. **These are bots, not people**: humans use cover better and aim worse than the model, aim-assist helps them, and nothing here measures touch-control feel. Re-tune `enemySkill()` from real play data. Rule of thumb until then: a level whose measured human win-rate is < 25 % or > 90 % gets its skill nudged ±0.05.

AI validation (unit tests, 50–80 mirrored matches each): equal skill is fair (team 0 wins 30–70 % of decided matches), 0.9 beats 0.3 in ≥ 70 % of decided matches in both seat orders, rounds average 8–45 s, ≤ 20 % timeouts. A "stalemate breaker" makes anchors/snipers push after 18 s so rounds end.
