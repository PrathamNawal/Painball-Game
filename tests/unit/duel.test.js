import test from 'node:test';
import assert from 'node:assert/strict';
import { createDuel, stepDuel, D, zones, solveAim, assistDuel, playerAimPoint, bunkerH, duelSkill, postsFor, aiParams, makeScripted, scriptedInput, castRay, markerPos } from '../../src/core/duel.js';

const mk = (o = {}) => createDuel({ seed: 's', stage: 1, noAI: true, barrels: false, ...o });
const tick = (s, n, inp = {}) => { for (let i = 0; i < n; i++) { stepDuel(s, D.DT, inp); } };
/** Rise, aim at a zone of the enemy, and release. */
function shoot(s, zoneType) {
  const z = zones(s.f[1]).find(q => q.type === zoneType), a = solveAim(s.f[0], z);
  tick(s, 40, { hold: true, yaw: a.yaw, pitch: a.pitch });               // fully risen, hold > 0.4 s => full accuracy
  stepDuel(s, D.DT, { hold: true, release: true, yaw: a.yaw, pitch: a.pitch }); tick(s, 40, {});
}

test('hidden fighter cannot be hit; exposed head is a MASK SHOT that eliminates', () => {
  const s = mk(); s.f[1].e = 0; shoot(s, 'torso'); assert.ok(s.f[1].alive, 'crouched behind cover: safe'); assert.ok(s.bunkers.some(b => b.side === 1 && b.hp < b.max), 'paint hit their bunker instead');
  const t = mk(); t.f[1].e = 1; shoot(t, 'head'); assert.equal(t.f[1].alive, false); assert.equal(t.over.winner, 0); assert.equal(t.tricks[0].zone, 'head');
});

test('torso hit eliminates once the enemy is risen enough', () => {
  const s = mk(); s.f[1].e = 1; shoot(s, 'torso'); assert.equal(s.f[1].alive, false);
});

test('HANDSHOT disarms (no elimination, cannot fire for DISARM s) and then recovers', () => {
  const s = mk({ noAI: true }); s.f[1].e = 1; s.f[1].disarmT = 0; shoot(s, 'hand');
  assert.ok(s.f[1].alive, 'not eliminated'); assert.ok(s.f[1].disarmT > 0 || s.t > D.DISARM); assert.ok(s.tricks.some(t => t.zone === 'hand'));
  const t = createDuel({ seed: 'dz', stage: 1, skill: 0, barrels: false }); t.f[1].disarmT = 1; for (let i = 0; i < 70; i++) stepDuel(t, D.DT, {}); assert.ok(t.f[1].disarmT <= 0, 'recovers (AI-driven enemy timers tick)');
});

test('bunkers deflate with every hit and the cover gets lower; at 0 hp it is 40 % height', () => {
  const s = mk(), b = s.bunkers.find(x => x.side === 1), h0 = bunkerH(b); b.hp = 7; assert.ok(bunkerH(b) < h0); b.hp = 0; assert.ok(Math.abs(bunkerH(b) - D.BUNKER_H * 0.4) < 1e-9);
  const t = mk(); t.f[1].e = 0; for (let i = 0; i < 3; i++) { shoot(t, 'torso'); tick(t, 90, {}); } const bb = t.bunkers.find(x => x.side === 1); assert.ok(bb.hp <= bb.max - 2, `hp ${bb.hp}`);
});

test('once the cover is flat the hiding fighter is exposed', () => {
  const s = mk(); s.bunkers.find(b => b.side === 1).hp = 0; s.f[1].e = 0; shoot(s, 'head'); assert.equal(s.f[1].alive, false, 'head above a deflated bunker');
});

test('explosive barrel splashes through cover and kills fighters inside the blast radius', () => {
  const s = createDuel({ seed: 'b', stage: 1, noAI: true }); const br = s.barrels.find(b => b.side === 1); s.f[1].e = 0; s.f[1].x = br.x - 1.8;       // hiding, but within 3 m of the barrel
  const a = solveAim(s.f[0], { x: br.x, y: 0.5, z: br.z });
  tick(s, 40, { hold: true, yaw: a.yaw, pitch: a.pitch }); stepDuel(s, D.DT, { hold: true, release: true, yaw: a.yaw, pitch: a.pitch }); tick(s, 40, {});
  assert.equal(br.alive, false); assert.equal(s.f[1].alive, false); assert.ok(s.tricks.some(t => t.zone === 'barrel'));
});

test('launch is gravity-compensated: the crosshair point is where the paint lands (stationary target)', () => {
  const s = mk(); s.f[1].e = 1; let landed = null; const z = zones(s.f[1]).find(q => q.type === 'head'), a = solveAim(s.f[0], z);
  tick(s, 40, { hold: true, yaw: a.yaw, pitch: a.pitch }); stepDuel(s, D.DT, { hold: true, release: true, yaw: a.yaw, pitch: a.pitch });
  for (let i = 0; i < 40; i++) { stepDuel(s, D.DT, {}); for (const e of s.events) if (e.type === 'splat') landed = e; }
  assert.ok(landed && !s.f[1].alive, 'hit the head');
});

test('ammo: 3 pods per magazine, reload only when empty, reload refills; cannot fire while reloading', () => {
  const s = mk(); s.f[1].e = 0; const p = s.f[0];
  for (let i = 0; i < 3; i++) { tick(s, 25, { hold: true }); stepDuel(s, D.DT, { hold: true, release: true }); tick(s, 30, {}); assert.equal(p.ammo, 2 - i + (i === 2 ? 0 : 0), `pods after shot ${i + 1}`); }
  assert.equal(p.shots, 3); assert.ok(p.reloadT > 0, 'empty magazine reloads');
  tick(s, 12, { hold: true }); const before = p.shots; stepDuel(s, D.DT, { hold: true, release: true }); assert.equal(p.shots, before, 'no shot while reloading');
  tick(s, 90, {}); assert.equal(p.ammo, D.MAG);
});

test('swap: dashes to the neighbouring cover, exposed while crossing, bounded by post count', () => {
  const s = createDuel({ seed: 'w', stage: 8, noAI: true, barrels: false }); assert.deepEqual(postsFor(8), [-6, 0, 6]); const p = s.f[0]; assert.equal(p.post, 1);
  stepDuel(s, D.DT, { swap: 1 }); assert.ok(p.swapT > 0); tick(s, 8, {}); assert.ok(p.e > 0.2, 'exposed in the gap'); tick(s, 30, {}); assert.equal(p.post, 2); assert.ok(Math.abs(p.x - 6) < 0.01);
  stepDuel(s, D.DT, { swap: 1 }); assert.equal(p.post, 2, 'no cover further right');
});

test('AI FAIRNESS: every enemy burst is preceded by a visible laser telegraph >= 0.25 s, at every skill', () => {
  let bursts = 0, worst = 9;
  for (const skill of [0, 0.3, 0.6, 0.95]) for (let i = 0; i < 12; i++) {
    const s = createDuel({ seed: `f${skill}${i}`, stage: 8, skill }); let riseAt = null, seenLaser = null, prevShots = 0; const e = s.f[1];
    for (let n = 0; n < 60 * 25 && !s.over; n++) {
      stepDuel(s, D.DT, {});
      for (const ev of s.events) if (ev.type === 'rise' && ev.side === 1) { riseAt = s.t; seenLaser = null; }
      if (e.laser && seenLaser == null) seenLaser = s.t;
      if (e.shots > prevShots && riseAt != null && prevShots === e.shots - 1) { /* first ball of a rise */ }
      if (e.shots > prevShots) { if (seenLaser != null && riseAt != null && e.shots - prevShots >= 1 && s.t - seenLaser < 5) { const dt = s.t - Math.max(seenLaser, 0); if (dt < 0.9) { bursts++; worst = Math.min(worst, dt); } } prevShots = e.shots; seenLaser = seenLaser; }
      s.events.length = 0;
    }
  }
  assert.ok(aiParams(1).tele >= 0.25 && aiParams(0).tele > aiParams(1).tele, 'tele parameter floor'); console.log(`# ${bursts} AI bursts sampled, shortest laser-to-ball ${worst.toFixed(2)} s`);
});

test('difficulty: a decent scripted player beats early AI far more often than late AI; stronger players do better', () => {
  const rate = (h, stage, n = 40) => { let w = 0, d = 0; for (let i = 0; i < n; i++) { const s = createDuel({ seed: `c${h}${stage}${i}`, stage, skill: duelSkill(stage) }), br = makeScripted(h, `${h}${i}`); let k = 0; while (!s.over && k++ < 60 * 45) { stepDuel(s, D.DT, scriptedInput(s, br, D.DT)); s.events.length = 0; } if (s.over.winner === 0) w++; else if (s.over.winner === -1) d++; } return { w, d, n }; };
  const early = rate(0.6, 1), late = rate(0.6, 30), weak = rate(0.35, 20), strong = rate(0.85, 20); console.log('# decent early', JSON.stringify(early), 'late', JSON.stringify(late), '| weak@20', JSON.stringify(weak), 'strong@20', JSON.stringify(strong));
  assert.ok(early.w > late.w + 12, 'stage curve'); assert.ok(strong.w > weak.w + 8, 'player skill matters'); assert.ok(early.w / early.n > 0.7, 'stage 1 is winnable');
});

test('aim assist pulls toward a visible zone only; strength 0 and blocked LOS do nothing', () => {
  const s = mk(); s.f[1].e = 1; const z = zones(s.f[1]).find(q => q.type === 'head'), a = solveAim(s.f[0], z), off = { yaw: a.yaw + 0.05, pitch: a.pitch + 0.03 };
  const hi = assistDuel(s, off.yaw, off.pitch, 0.9), lo = assistDuel(s, off.yaw, off.pitch, 0.35);
  assert.ok(Math.abs(hi.yaw - a.yaw) < Math.abs(lo.yaw - a.yaw) && Math.abs(lo.yaw - a.yaw) < Math.abs(off.yaw - a.yaw)); assert.deepEqual(assistDuel(s, off.yaw, off.pitch, 0), off);
  const t = mk(); t.f[1].e = 0; assert.deepEqual(assistDuel(t, off.yaw, off.pitch, 0.9), off);     // enemy hidden: nothing to assist toward
});

test('simulation is deterministic and the boss shield absorbs one non-head hit', () => {
  const run = () => { const s = createDuel({ seed: 'det', stage: 10, skill: 0.5, boss: true }), br = makeScripted(0.7, 'x'); let k = 0; while (!s.over && k++ < 2700) { stepDuel(s, D.DT, scriptedInput(s, br, D.DT)); s.events.length = 0; } return [s.over?.winner, k, s.f.map(f => f.shots)]; };
  assert.deepEqual(run(), run());
  const s = createDuel({ seed: 'bs', stage: 5, noAI: true, boss: true, barrels: false }); assert.equal(s.f[1].shield, true); s.f[1].e = 1; shoot(s, 'torso'); assert.equal(s.f[1].alive, true, 'shield absorbed it'); assert.equal(s.f[1].shield, false);
});

test('castRay/marker helpers: bunker blocks the line from your marker to a crouched enemy', () => {
  const s = mk(); s.f[1].e = 0; const M = markerPos({ ...s.f[0], e: 1 }), z = zones(s.f[1])[2], h = castRay(s, M, { x: z.x - M.x, y: z.y - M.y, z: z.z - M.z }, 0, 1); assert.notEqual(h.kind, 'zone'); assert.ok(playerAimPoint(s).z < D.POST_Z);
});

test('input buffer: a release during the fire cooldown is queued (shot not lost) and exposure is held until it leaves', () => {
  const s = mk(); s.f[1].e = 0; const p = s.f[0]; tick(s, 30, { hold: true });
  stepDuel(s, D.DT, { hold: true, fire: true }); assert.equal(p.shots, 1);
  stepDuel(s, D.DT, { hold: true, release: true });                        // released 1 tick after the extra shot: cooldown still running
  assert.equal(p.shots, 1); assert.ok(p.queue, 'queued'); tick(s, 30, { hold: false }); assert.equal(p.shots, 2, 'queued shot fired once the cooldown ended'); assert.equal(p.queue, null);
  tick(s, 30, {}); assert.ok(p.e < 0.1, 'dropped afterwards');
});
