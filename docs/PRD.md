# Painball — Product Requirements Document
| | |
|---|---|
| **Status** | v1.0 in build |
| **Owner** | PrathamNawal |
| **Last updated** | 2026-11-08 |

## 1. One-liner
Top-down arena paintball in your browser. Pop out of cover, splat the bots, leave the arena covered in your colour.

## 2. Core mechanic (one verb + one noun)
**Splat bots.** Move between inflatable bunkers, shoot paintballs (slow enough to dodge), hide to reload. One hit = out. Last team standing wins the round; first to 2 rounds wins the match.

## 3. Player & context
- Mobile web (portrait, one or two thumbs, 2–4 min per match) and desktop web (keyboard + mouse).
- Single player vs computer. Allies and enemies are bots. No account, no sign-up, no network after first load (PWA).
- Mid/low-end phones must hold 60 fps → Canvas 2D, ≤ 150 KB gz, no assets (everything is drawn / synthesised).

## 4. Goals / non-goals
**Goals (v1.0):** instantly fun first 10 seconds; the arena visibly becomes *your* painting (persistent splats); fair, readable, human-feeling AI; one-thumb-friendly mobile controls; zero-friction launch; offline; accessible.
**Non-goals:** multiplayer, accounts, leaderboards, backend, **advertising of any kind (explicit owner decision — no ad code ships)**, in-app purchases, native wrappers.

## 5. The "10x" experience pillars
| # | Pillar | What it means concretely |
|---|---|---|
| 1 | **Zero to splat in 3 s** | Menu → *Play* → already in a round. 10-second contextual coaching, no tutorial wall. |
| 2 | **Juice everywhere** | Persistent paint splats, droplets, screen shake, hit-stop on elimination, slow-mo on the match-winning splat, synthesised spatial audio, haptics. |
| 3 | **Controls that never fight you** | Mobile: floating twin sticks (move / aim+auto-fire), soft aim-assist, big Dash. Desktop: WASD + mouse, Shift dash, R reload. Both fully remappable-free: they just work. |
| 4 | **AI that feels like people** | Four personalities (Rusher, Anchor, Flanker, Sniper), reaction delay, aim error that scales with distance and movement, peek-and-hide, suppressing fire, ammo discipline. Difficulty = parameters, not cheats. |
| 5 | **Every arena is new but fair** | Seeded, point-symmetric bunker layouts (like a real speedball field), proven connected and spawn-safe over hundreds of seeds. |
| 6 | **Your art, shareable** | End of match shows the painted arena; one tap saves/shares it as an image. |
| 7 | **Reasons to return** | 30-level campaign, daily arena + streak, unlockable paint palettes, stars. |
| 8 | **Inclusive** | Colour-blind-safe team palettes **plus** shape cues (enemy = ringed chevron), reduced-motion, adjustable aim-assist, ≥ 44 px targets, axe clean. |

## 6. Requirements
| ID | Requirement | Pri |
|----|-------------|-----|
| G1 | Full loop: menu → match (best of 3) → result → next | P0 |
| G2 | Seeded symmetric arenas, validated (connectivity, spawn clearance) | P0 |
| G3 | Bots with 4 personalities and tunable skill | P0 |
| C1 | Touch twin-stick + keyboard/mouse; each independently sufficient | P0 |
| F1 | Persistent paint layer, particles, shake, audio, haptics | P0 |
| P1 | PWA offline, icons, sub-path safe | P0 |
| P2 | Versioned save + backup + migration | P0 |
| D1 | Daily arena + streak | P1 |
| S1 | Share arena image | P1 |
| U1 | Palettes unlocked with coins | P1 |
| A1 | axe clean, reduced motion, colour-blind safe | P1 |
| X1 | **No ads, no trackers, no network calls** | P0 |

## 7. Success metrics (soft launch, local-only counters)
Match completion ≥ 70 % of starts · first-session ≥ 3 matches · D1 return via daily · median match 2–4 min. (No telemetry ships; these are for owner-run playtests.)

## 8. Risks
| Risk | Mitigation |
|---|---|
| Thumbs cover the action in portrait | Whole arena always visible, translucent floating sticks, sticks spawn where the thumb lands |
| Bots feel cheaty or dumb | Skill = reaction/aim error parameters; calibration sims vs scripted human models; AI never reads the player's aim |
| Perf on low-end phones | Pre-rendered static layers, pooled particles, adaptive quality governor |
| Unverified on real devices | Stated honestly in TEST_PLAN; owner playtest is the one next step |
