import test from 'node:test';
import assert from 'node:assert/strict';
import { SaveStore, MemoryStorage, defaultSave, sanitize, migrate, SAVE_KEY, BACKUP_KEY } from '../../src/core/save.js';

test('roundtrip: save then load gives the same state', () => {
  const st = new MemoryStorage(), a = new SaveStore(st); a.state.coins = 77; a.state.level = 5; a.state.stars[3] = 2; a.save();
  const b = new SaveStore(st); assert.equal(b.state.coins, 77); assert.equal(b.state.level, 5); assert.equal(b.state.stars[3], 2);
});
test('corrupt main falls back to backup, then to defaults', () => {
  const st = new MemoryStorage(), a = new SaveStore(st); a.state.coins = 50; a.save(); a.state.coins = 60; a.save();
  st.setItem(SAVE_KEY, '{not json'); assert.equal(new SaveStore(st).state.coins, 50);
  st.setItem(BACKUP_KEY, 'garbage'); assert.deepEqual(new SaveStore(st).state, defaultSave());
});
test('hostile values are clamped; unknown palettes dropped; classic always owned', () => {
  const s = sanitize({ coins: -5, level: 1e12, stars: { 1: 9, x: 3, 2: 2 }, palettes: ['neon', 'hax'], settings: { assist: 99, quality: 'ultra', palette: 'gold' }, stats: { matches: 'NaN' } });
  assert.equal(s.coins, 0); assert.equal(s.level, 1_000_000); assert.deepEqual(s.stars, { 2: 2 }); assert.deepEqual(s.palettes, ['classic', 'neon']);
  assert.equal(s.settings.assist, 3); assert.equal(s.settings.quality, 'high'); assert.equal(s.settings.palette, 'classic'); assert.equal(s.stats.matches, 0);
});
test('v0 migrates; save from a newer build is refused', () => {
  assert.equal(migrate({ coins: 9, level: 2 }).version, 1); assert.equal(migrate({ version: 99 }), null); assert.equal(migrate(null), null);
});
test('throwing/blocked storage degrades to memory without crashing', () => {
  const bad = { getItem() { throw new Error('x'); }, setItem() { throw new Error('x'); }, removeItem() { throw new Error('x'); } };
  const s = new SaveStore(bad); assert.equal(s.persistent, false); s.state.coins = 3; assert.equal(s.save(), true);
  assert.equal(new SaveStore(null).persistent, false);
});
test('no ad/tracking fields exist in the save schema', () => {
  const j = JSON.stringify(defaultSave()); assert.ok(!/ads?|track|analytics/i.test(j.replace(/palettes|shares/g, '')));
});
