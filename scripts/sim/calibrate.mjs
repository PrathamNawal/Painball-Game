// Calibration: simulated "human" skill levels play full best-of-3 campaign matches headlessly.
// Usage: node scripts/sim/calibrate.mjs [matchesPerCell=40]
// Human model = ONE bot (the human's slot) at skill h plus allies at the campaign's ally skill, vs the level's enemy team. It under-states human cleverness
// (humans use cover better) and over-states consistency, so treat results as a FLOOR to re-tune from real play data.
import { makeArena } from '../../src/core/arena.js';
import { createWorld, step, CFG } from '../../src/core/sim.js';
import { levelConfig } from '../../src/core/match.js';

export function playMatch(cfg, humanSkill, tag) {
  const arena = makeArena({ seed: cfg.seed, level: cfg.level, teamSizes: cfg.sizes });
  const sc = [0, 0]; let round = 0, rounds = 0, time = 0;
  while (sc[0] < cfg.winRounds && sc[1] < cfg.winRounds && rounds < 12) {
    round++; rounds++;
    const w = createWorld({ arena, sizes: cfg.sizes, human: false, skill: cfg.skill, humanSkill, roles: cfg.roles, seed: `${cfg.seed}:${tag}:r${round}` });
    let n = 0; while (!w.over && n++ < 60 * 80) { step(w, CFG.DT); w.events.length = 0; }
    time += w.t;
    if (w.over.winner >= 0) sc[w.over.winner]++; else round--;
  }
  return { won: sc[0] >= cfg.winRounds, lost: sc[1], secs: time };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const N = Number(process.argv[2] || 40), models = [['casual', 0.25], ['decent', 0.45], ['good', 0.65], ['expert', 0.85]];
  const levels = [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 30];
  console.log(`win% of best-of-3 by level (N=${N}/cell). Columns: human skill model`);
  console.log('lvl size foeSkill  ' + models.map(m => m[0].padEnd(8)).join(''));
  const rows = [];
  for (const n of levels) {
    const cfg = levelConfig(n); let line = `${String(n).padStart(3)}  ${cfg.sizes[0]}v${cfg.sizes[1]}  ${cfg.skill[1].toFixed(2)}     `;
    const row = { n, size: cfg.sizes[0], foe: +cfg.skill[1].toFixed(2) };
    for (const [name, h] of models) {
      let wins = 0, secs = 0; for (let i = 0; i < N; i++) { const r = playMatch(cfg, h, `c${i}`); if (r.won) wins++; secs += r.secs; }
      line += `${Math.round((wins / N) * 100)}%`.padEnd(8); row[name] = Math.round((wins / N) * 100); row[name + 'Secs'] = Math.round(secs / N);
    }
    rows.push(row); console.log(line);
  }
  console.log('\navg match length (s) casual/expert at L1, L10, L30:', [1, 10, 30].map(n => { const r = rows.find(x => x.n === n); return r ? `${r.casualSecs}/${r.expertSecs}` : ''; }).join('  '));
}
