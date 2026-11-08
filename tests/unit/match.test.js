import test from 'node:test';
import assert from 'node:assert/strict';
import { levelConfig, dailyConfig, matchStars, rewards, prevDayKey, dateKey, claimDaily, sizeFor, enemySkill, PALETTES, paletteOf, arenaName } from '../../src/core/match.js';

test('campaign scales team size and skill; bosses every 5th level', () => {
  assert.equal(sizeFor(1), 1); assert.equal(sizeFor(5), 2); assert.equal(sizeFor(10), 3); assert.equal(sizeFor(25), 4);
  let prev = 0; for (let n = 1; n <= 60; n++) { const s = enemySkill(n); assert.ok(s >= prev && s <= 1); prev = s; }
  assert.equal(levelConfig(5).boss, true); assert.equal(levelConfig(6).boss, false);
  assert.ok(levelConfig(5).skill[1] > enemySkill(5));
  assert.deepEqual(levelConfig(7), levelConfig(7));
  assert.equal(levelConfig(0).n, 1);
});

test('stars: win=1, 2-0 win=2, 2-0 never eliminated=3, loss=0', () => {
  assert.equal(matchStars({ won: false, lostRounds: 2, eliminated: true }), 0);
  assert.equal(matchStars({ won: true, lostRounds: 1, eliminated: true }), 1);
  assert.equal(matchStars({ won: true, lostRounds: 0, eliminated: true }), 2);
  assert.equal(matchStars({ won: true, lostRounds: 0, eliminated: false }), 3);
});

test('rewards: win pays more; perfect bonus only on first 3-star; daily bonus', () => {
  const base = rewards({ won: true, roundsWon: 2, kills: 3, stars: 2 }), lose = rewards({ won: false, roundsWon: 1, kills: 2, stars: 0 });
  assert.equal(base, 6 + 3 + 10); assert.ok(lose < base);
  assert.equal(rewards({ won: true, roundsWon: 2, kills: 3, stars: 3, firstStars: true }), base + 25);
  assert.equal(rewards({ won: true, roundsWon: 2, kills: 3, stars: 3, firstStars: false }), base);
  assert.equal(rewards({ won: true, roundsWon: 2, kills: 0, stars: 1, daily: true }), 6 + 10 + 15);
});

test('daily: streak continues on consecutive days, resets after a gap, never double-claims', () => {
  const d = { last: null, streak: 0, bestStreak: 0, done: [] };
  assert.deepEqual(claimDaily(d, '2026-11-08'), { first: true, streak: 1 });
  assert.deepEqual(claimDaily(d, '2026-11-08'), { first: false, streak: 1 });
  assert.deepEqual(claimDaily(d, '2026-11-09'), { first: true, streak: 2 });
  assert.deepEqual(claimDaily(d, '2026-11-12'), { first: true, streak: 1 }); assert.equal(d.bestStreak, 2);
});
test('prevDayKey handles month, year, leap-day and DST boundaries', () => {
  assert.equal(prevDayKey('2026-03-01'), '2026-02-28'); assert.equal(prevDayKey('2028-03-01'), '2028-02-29');
  assert.equal(prevDayKey('2027-01-01'), '2026-12-31'); assert.equal(prevDayKey('2026-03-30'), '2026-03-29'); assert.equal(prevDayKey('2026-11-02'), '2026-11-01');
  assert.match(dateKey(new Date(2026, 0, 5)), /^2026-01-05$/);
});
test('daily config is a function of the date only; palettes are unique & free default', () => {
  assert.deepEqual(dailyConfig('2026-11-08'), dailyConfig('2026-11-08')); assert.notEqual(dailyConfig('2026-11-08').seed, dailyConfig('2026-11-09').seed);
  assert.equal(PALETTES[0].cost, 0); assert.equal(new Set(PALETTES.map(p => p.id)).size, PALETTES.length); assert.equal(paletteOf('zzz').id, 'classic');
  assert.ok(arenaName('a').length > 3);
});
