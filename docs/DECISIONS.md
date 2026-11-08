# Architecture Decision Records
**ADR-001 Canvas 2D, no engine.** Top-down 2D with persistent paint needs one big offscreen canvas, not a scene graph. ~10 KB gz base vs 100+ KB engines; fastest on low-end phones.
**ADR-002 Pure core, thin shell.** `src/core/` has no DOM. Arena generation, simulation and AI run in Node → validity proof + AI calibration sims + deterministic tests.
**ADR-003 Fixed-step 1/60 sim, dt clamped, substeps capped.** Slow device = slow motion, never tunnelling.
**ADR-004 Whole arena always visible.** No camera scroll: readable on phones, no motion sickness, simpler input.
**ADR-005 Point-symmetric seeded arenas.** Fairness by construction; same generator for campaign and daily.
**ADR-006 One-hit elimination.** Short tense rounds suit mobile sessions; compensated by dodgeable ball speed, forgiving own hitbox (0.85×) and shield pickup.
**ADR-007 Bots use perception, not omniscience.** LOS + memory + reaction delay. Difficulty is parameters only; no hidden aim cheats, no rubber-banding.
**ADR-008 NO ADS, no analytics, no network.** Owner directive. All ad code deleted (not just disabled). CSP `connect-src 'self'`.
**ADR-009 Deploy from `main` (branch-based Pages).** Owner enabled Pages from the main branch. The built site is committed at the repo root by `npm run publish` (Actions-based deploy needs a different Pages source). All URLs relative → works on the `/Painball-Game/` sub-path.
**ADR-010 Cosmetics only for coins.** Never gate gameplay.
