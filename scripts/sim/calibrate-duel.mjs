// Duel calibration: scripted human models (reaction delay + aim error scale with skill) play best-of-3 matches vs the campaign AI.
// Usage: node scripts/sim/calibrate-duel.mjs [matchesPerCell=30]. Bots are a FLOOR for human difficulty — re-tune from real play data.
import { createDuel, stepDuel, D, duelSkill, postsFor, makeScripted, scriptedInput } from '../../src/core/duel.js';

export function playDuelMatch(stage, humanSkill, tag) {
  const sc = [0, 0]; let r = 0, guard = 0;
  while (sc[0] < 2 && sc[1] < 2 && guard++ < 12) {
    r++; const s = createDuel({ seed: `cal:${stage}:${tag}:${r}`, stage, skill: duelSkill(stage), boss: stage % 5 === 0, posts: postsFor(stage) }), br = makeScripted(humanSkill, `${tag}${r}`);
    let k = 0; while (!s.over && k++ < 60 * 45) { stepDuel(s, D.DT, scriptedInput(s, br, D.DT)); s.events.length = 0; }
    if (s.over.winner >= 0) sc[s.over.winner]++;
  }
  return sc[0] >= 2;
}
if (import.meta.url === `file://${process.argv[1]}`) {
  const N = Number(process.argv[2] || 30), models = [['casual', 0.45], ['decent', 0.55], ['good', 0.75], ['expert', 0.9]];
  console.log(`win% of best-of-3 duels by stage (N=${N}/cell)\nstage posts foeSkill  ${models.map(m => m[0].padEnd(8)).join('')}`);
  for (const st of [1, 3, 5, 8, 10, 15, 20, 30]) {
    let line = `${String(st).padStart(4)}  ${postsFor(st).length}     ${duelSkill(st).toFixed(2)}      `;
    for (const [, h] of models) { let w = 0; for (let i = 0; i < N; i++) if (playDuelMatch(st, h, `c${i}`)) w++; line += `${Math.round((w / N) * 100)}%`.padEnd(8); }
    console.log(line);
  }
}
