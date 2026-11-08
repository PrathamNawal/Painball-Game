import test from 'node:test';
import assert from 'node:assert/strict';
import { makeArena } from '../../src/core/arena.js';
import { createWorld } from '../../src/core/sim.js';
import { assistAim } from '../../src/core/assist.js';
import { QualityGovernor } from '../../src/game/perf.js';

const setup = () => { const arena = makeArena({ seed: 'as', teamSizes: [1, 1] }); arena.bunkers = []; const w = createWorld({ arena, sizes: [1, 1], human: true, skill: 0.5, seed: 'a' }); const [a, b] = w.ents; a.x = 280; a.y = 700; b.x = 340; b.y = 300; b.vx = b.vy = 0; return { w, a, b, ideal: Math.atan2(b.y - a.y, b.x - a.x) }; };

test('assist pulls aim toward a visible enemy inside the cone, more with higher strength', () => {
  const { w, a, ideal } = setup(), off = ideal + 0.12;
  const low = assistAim(w, a, off, 0.35), high = assistAim(w, a, off, 0.85);
  assert.ok(Math.abs(high - ideal) < Math.abs(low - ideal) && Math.abs(low - ideal) < Math.abs(off - ideal));
});
test('assist does nothing when off, outside the cone, or when line of sight is blocked', () => {
  const { w, a, ideal } = setup();
  assert.equal(assistAim(w, a, ideal + 0.1, 0), ideal + 0.1);
  assert.equal(assistAim(w, a, ideal + 1.2, 0.85), ideal + 1.2);
  w.arena.bunkers = [{ kind: 'rect', x: 200, y: 450, w: 300, h: 40 }];
  assert.equal(assistAim(w, a, ideal + 0.1, 0.85), ideal + 0.1);
});
test('quality governor downgrades once on sustained slowness, ignores warm-up and tab-switch spikes', () => {
  const g = new QualityGovernor(); let r = null; for (let i = 0; i < 200; i++) r = g.push(i < 30 ? 0.2 : 0.05) || r; assert.equal(r, 'downgrade');
  const ok = new QualityGovernor(); r = null; for (let i = 0; i < 200; i++) r = ok.push(i === 40 ? 2 : 0.016) || r; assert.equal(r, null);
});
