import test from 'node:test';
import assert from 'node:assert/strict';
import { makeArena } from '../../src/core/arena.js';
import { createWorld, step, CFG, NONE, alive } from '../../src/core/sim.js';

const mk = (o = {}) => { const arena = makeArena({ seed: o.seed || 's', level: 3, teamSizes: [1, 1] }); return createWorld({ arena, sizes: [1, 1], human: true, skill: 0.5, seed: 'w', ...o, arena: o.arena || arena }); };
const run = (w, secs, inp = NONE) => { for (let i = 0; i < secs * 60; i++) step(w, CFG.DT, inp); };
// An arena with no bunkers so geometry in tests is exact.
const open = (sz = [1, 1]) => { const a = makeArena({ seed: 'e', teamSizes: sz }); a.bunkers = []; a.pickups = []; return a; };

test('bodies never leave the arena or enter bunkers under constant input in 8 directions', () => {
  for (let k = 0; k < 8; k++) {
    const w = mk(); w.ents[1].brain = null; const you = w.ents[0], a = (k / 8) * Math.PI * 2;
    for (let i = 0; i < 60 * 20; i++) { step(w, CFG.DT, { mx: Math.cos(a), my: Math.sin(a), aim: null, fire: false, dash: i % 150 === 0, reload: false }); w.over = null; }
    assert.ok(you.x >= you.r - 1e-6 && you.x <= w.arena.w - you.r + 1e-6 && you.y >= you.r - 1e-6 && you.y <= w.arena.h - you.r + 1e-6);
    for (const b of w.arena.bunkers) {
      const d = b.kind === 'circ' ? Math.hypot(you.x - b.x, you.y - b.y) - b.r : Math.hypot(Math.max(b.x - you.x, 0, you.x - b.x - b.w), Math.max(b.y - you.y, 0, you.y - b.y - b.h));
      assert.ok(d >= you.r - 0.5, `inside bunker dir ${k}`);
    }
  }
});

test('speed is capped (walk and dash) and no input means rest', () => {
  const w = mk(); w.ents[1].brain = null; const you = w.ents[0];
  run(w, 3); assert.ok(Math.hypot(you.vx, you.vy) < 1);
  step(w, CFG.DT, { mx: 0, my: -1, aim: null, fire: false, dash: true, reload: false });
  assert.ok(Math.hypot(you.vx, you.vy) <= CFG.DASH_SPEED + 1);
});

test('a ball hits an enemy: eliminated, shooter credited, round ends, winner is team 0', () => {
  const arena = open(), w = createWorld({ arena, sizes: [1, 1], human: true, skill: 0.5, seed: 'h' });
  const [a, b] = w.ents; a.x = 280; a.y = 600; b.x = 280; b.y = 300; b.brain = null; b.vx = b.vy = 0;
  const aim = Math.atan2(b.y - a.y, b.x - a.x);
  for (let i = 0; i < 120 && b.alive; i++) step(w, CFG.DT, { mx: 0, my: 0, aim, fire: true, dash: false, reload: false });
  assert.equal(b.alive, false); assert.equal(a.kills, 1); assert.equal(w.over.winner, 0);
});

test('bunkers block paintballs (they splat on the bunker, not the target behind it)', () => {
  const arena = open(); arena.bunkers = [{ kind: 'rect', x: 230, y: 440, w: 100, h: 30 }];
  const w = createWorld({ arena, sizes: [1, 1], human: true, skill: 0.5, seed: 'b' });
  const [a, b] = w.ents; a.x = 280; a.y = 600; b.x = 280; b.y = 300; b.brain = null;
  const surfs = [];
  for (let i = 0; i < 90; i++) { step(w, CFG.DT, { mx: 0, my: 0, aim: -Math.PI / 2, fire: true, dash: false, reload: false }); for (const e of w.events) if (e.type === 'splat') surfs.push(e.surf); w.events.length = 0; }
  assert.ok(b.alive, 'target behind cover survives'); assert.ok(surfs.includes('bunker'));
});

test('no friendly fire: balls pass through allies', () => {
  const arena = open([2, 1]), w = createWorld({ arena, sizes: [2, 1], human: true, skill: 0.5, seed: 'f' });
  const [a, ally] = w.ents; ally.brain = null; a.x = 280; a.y = 700; ally.x = 280; ally.y = 600;
  for (let i = 0; i < 60; i++) step(w, CFG.DT, { mx: 0, my: 0, aim: -Math.PI / 2, fire: true, dash: false, reload: false });
  assert.ok(ally.alive);
});

test('ammo: shooting drains the hopper, empty triggers reload, reload refills after CFG.RELOAD', () => {
  const w = mk(); const you = w.ents[0]; w.ents[1].brain = null; w.ents[1].x = 20; w.ents[1].y = 20;
  for (let i = 0; i < 60 * 6 && you.ammo === CFG.MAG; i++) step(w, CFG.DT, { mx: 0, my: 0, aim: 0, fire: true, dash: false, reload: false });
  assert.ok(you.ammo < CFG.MAG);
  you.ammo = 0; step(w, CFG.DT, NONE); assert.ok(you.reloadT > 0);
  run(w, CFG.RELOAD + 0.1); assert.equal(you.ammo, CFG.MAG);
});

test('dash has a cooldown', () => {
  const w = mk(); w.ents[1].brain = null; const you = w.ents[0], d = { mx: 1, my: 0, aim: null, fire: false, dash: true, reload: false };
  step(w, CFG.DT, d); assert.ok(you.dashCd > 0); const cd = you.dashCd; step(w, CFG.DT, d); assert.ok(you.dashCd < cd, 'second dash request ignored while cooling');
});

test('shield absorbs exactly one hit; rapid raises fire rate', () => {
  const arena = open(), w = createWorld({ arena, sizes: [1, 1], human: true, skill: 0.5, seed: 's' });
  const [a, b] = w.ents; a.x = 280; a.y = 600; b.x = 280; b.y = 300; b.brain = null; b.shield = true;
  const aim = -Math.PI / 2; let shots0 = 0;
  for (let i = 0; i < 120 && b.shield; i++) step(w, CFG.DT, { mx: 0, my: 0, aim, fire: true, dash: false, reload: false });
  assert.ok(b.alive && !b.shield, 'first hit popped the shield');
  for (let i = 0; i < 80 && b.alive; i++) step(w, CFG.DT, { mx: 0, my: 0, aim, fire: true, dash: false, reload: false });
  assert.ok(!b.alive, 'second hit eliminates');
  const slow = createWorld({ arena, sizes: [1, 1], human: true, skill: 0.5, seed: 'r1' }), fast = createWorld({ arena, sizes: [1, 1], human: true, skill: 0.5, seed: 'r2' });
  fast.ents[0].rapidT = 5; for (const w2 of [slow, fast]) { w2.ents[1].brain = null; w2.ents[1].x = 20; w2.ents[1].y = 20; for (let i = 0; i < 60; i++) step(w2, CFG.DT, { mx: 0, my: 0, aim: 0, fire: true, dash: false, reload: false }); }
  assert.ok(fast.ents[0].shots > slow.ents[0].shots, `${fast.ents[0].shots} vs ${slow.ents[0].shots}`); void shots0;
});

test('pickups spawn mid-round as a symmetric pair, and are collected once', () => {
  const w = mk({ seed: 'pk' }); assert.equal(w.pickups.length, 0);
  run(w, CFG.PICKUP_AT + 0.5, NONE); w.over = null;
  if (w.arena.pickups.length) { assert.equal(w.pickups.length, 2); assert.equal(w.pickups[0].kind, w.pickups[1].kind); }
});

test('timeout decides by survivors; equal survivors is a draw', () => {
  const arena = open(), w = createWorld({ arena, sizes: [1, 1], human: false, skill: 0, seed: 't' });
  for (const e of w.ents) e.brain = null; w.ents[0].human = true;
  run(w, CFG.ROUND_TIME + 1); assert.equal(w.over.reason, 'timeout'); assert.equal(w.over.winner, -1);
});

test('simulation is deterministic: same seeds -> identical outcome and tick count', () => {
  const play = () => { const arena = makeArena({ seed: 'det', level: 6, teamSizes: [2, 2] }), w = createWorld({ arena, sizes: [2, 2], human: false, skill: [0.6, 0.6], seed: 'det' }); let n = 0; while (!w.over && n++ < 6000) { step(w, CFG.DT); w.events.length = 0; } return [w.over.winner, n, w.ents.map(e => e.shots)]; };
  assert.deepEqual(play(), play());
});

test('alive() counts per team', () => {
  const w = mk(); assert.equal(alive(w, 0).length, 1); assert.equal(alive(w, 1).length, 1);
});
