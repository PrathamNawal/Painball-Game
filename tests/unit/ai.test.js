import test from 'node:test';
import assert from 'node:assert/strict';
import { makeArena } from '../../src/core/arena.js';
import { createWorld, step, CFG } from '../../src/core/sim.js';
import { astar } from '../../src/core/ai.js';
import { distToBunker } from '../../src/core/geom.js';

function play(seed, sk0, sk1, n = 2, level = 6) {
  const arena = makeArena({ seed, level, teamSizes: [n, n] }), w = createWorld({ arena, sizes: [n, n], human: false, skill: [sk0, sk1], seed });
  let t = 0; while (!w.over && t++ < 60 * 80) { step(w, CFG.DT); w.events.length = 0; }
  return { win: w.over.winner, time: w.t, reason: w.over.reason, shots: w.ents.reduce((a, e) => a + e.shots, 0) };
}
const rate = (a, b, n = 50, size = 2) => { let wins = 0, draws = 0, to = 0, time = 0; for (let i = 0; i < n; i++) { const r = play(`ai${a}${b}${i}`, a, b, size); if (r.win === 0) wins++; else if (r.win === -1) draws++; if (r.reason === 'timeout') to++; time += r.time; } return { wins, draws, to, avgTime: time / n, n }; };

test('A* paths stay clear of bunkers and reach the goal', () => {
  for (let i = 0; i < 40; i++) {
    const a = makeArena({ seed: `path${i}`, level: 10, teamSizes: [2, 2] }), s = a.spawns[0][0], g = a.spawns[1][0], p = astar(a.nav, s.x, s.y, g.x, g.y);
    assert.ok(p.length > 5, 'path exists');
    for (const q of p) for (const b of a.bunkers) assert.ok(distToBunker(q.x, q.y, b) > 14, 'waypoint clear of bunker');
    assert.ok(Math.hypot(p.at(-1).x - g.x, p.at(-1).y - g.y) < 24);
  }
});

test('equal skill is fair (no side advantage): 30-70% win rate for team 0 over 80 mirrored matches', () => {
  const r = rate(0.6, 0.6, 80); console.log('# equal-skill', JSON.stringify(r));
  const decided = r.n - r.draws; assert.ok(r.wins / decided > 0.3 && r.wins / decided < 0.7, `win rate ${r.wins}/${decided}`);
});

test('difficulty is monotonic: higher skill beats lower skill >= 70% of decided matches (both directions)', () => {
  const hi = rate(0.9, 0.3, 50), lo = rate(0.3, 0.9, 50); console.log('# hi-vs-lo', JSON.stringify(hi), 'lo-vs-hi', JSON.stringify(lo));
  assert.ok(hi.wins / (hi.n - hi.draws) >= 0.7, 'strong team 0 wins'); assert.ok((lo.n - lo.draws - lo.wins) / (lo.n - lo.draws) >= 0.7, 'strong team 1 wins');
});

test('bots actually fight: rounds end by elimination, average 8-45 s, <= 20% timeouts, shots fired', () => {
  const r = rate(0.5, 0.5, 40, 3); console.log('# 3v3', JSON.stringify(r));
  assert.ok(r.avgTime > 8 && r.avgTime < 45, `avg ${r.avgTime}`); assert.ok(r.to / r.n <= 0.2, `timeouts ${r.to}`);
});

test('skill parameters are monotonic and bounded', async () => {
  const { botParams } = await import('../../src/core/ai.js');
  const lo = botParams(0, 'anchor'), hi = botParams(1, 'anchor');
  assert.ok(hi.react < lo.react && hi.sigma < lo.sigma && hi.rate > lo.rate && hi.dodge > lo.dodge);
  assert.ok(hi.react > 0.1 && lo.react < 0.7);
});
