import test from 'node:test';
import assert from 'node:assert/strict';
import { makeArena, validateArena, bunkersFor, BODY_R } from '../../src/core/arena.js';

test('arena generation is deterministic per seed and differs across seeds', () => {
  const a = makeArena({ seed: 'x', level: 7, teamSizes: [2, 2] }), b = makeArena({ seed: 'x', level: 7, teamSizes: [2, 2] }), c = makeArena({ seed: 'y', level: 7, teamSizes: [2, 2] });
  assert.deepEqual(a.bunkers, b.bunkers); assert.deepEqual(a.spawns, b.spawns);
  assert.notDeepEqual(a.bunkers, c.bunkers);
});

test('validity proof: 600 seeds x both orientations x all team sizes are connected, spawn-safe and point-symmetric', () => {
  let n = 0, bunkers = 0;
  for (let i = 0; i < 300; i++) for (const landscape of [false, true]) {
    const size = 1 + (i % 4), a = makeArena({ seed: `seed${i}`, level: 1 + (i % 40), landscape, teamSizes: [size, size] }), bad = validateArena(a);
    assert.deepEqual(bad, [], `seed${i} ${landscape}: ${bad.join(',')}`); n++; bunkers += a.bunkers.length;
  }
  console.log(`# validated ${n} arenas, avg ${(bunkers / n).toFixed(1)} bunkers`);
  assert.equal(n, 600);
});

test('landscape is a rotation: team 0 starts on the left, team 1 on the right; portrait: bottom / top', () => {
  const p = makeArena({ seed: 'o', teamSizes: [2, 2] }), l = makeArena({ seed: 'o', teamSizes: [2, 2], landscape: true });
  assert.ok(p.spawns[0][0].y > p.h / 2 && p.spawns[1][0].y < p.h / 2);
  assert.ok(l.spawns[0][0].x < l.w / 2 && l.spawns[1][0].x > l.w / 2);
  assert.equal(p.w, l.h); assert.equal(p.h, l.w);
});

test('bunker count grows with level but is capped; spawns keep clear of bunkers', () => {
  assert.ok(bunkersFor(1) < bunkersFor(30)); assert.ok(bunkersFor(999) <= 9);
  const a = makeArena({ seed: 'c', level: 30, teamSizes: [4, 4] });
  for (const s of a.spawns.flat()) assert.ok(a.nav.blocked[Math.floor(s.y / a.nav.cell) * a.nav.cols + Math.floor(s.x / a.nav.cell)] === 0, 'spawn cell walkable');
  assert.ok(BODY_R > 0);
});
