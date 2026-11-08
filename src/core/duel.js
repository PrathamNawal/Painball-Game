// Duel mode core: pure (no DOM, no three.js, no Math.random). Metres, y up, player at +z looking toward -z.
// See docs/DUEL_DESIGN.md — constants here and there must agree.
import { Rng } from './rng.js';

export const D = {
  DT: 1 / 60, POST_Z: 9, BUNKER_Z: 1.3, BUNKER_W: 3.2, BUNKER_H: 1.0, BUNKER_D: 1.0, BUNKER_HP: 14,
  BALL_SPEED: 70, G: 6, MAG: 3, RELOAD: 1.1, PEEK: 0.22, DROP: 0.18, SWAP: 0.28, MIN_FIRE_E: 0.65, FIRE_CD: 0.28,
  R_HEAD: 0.25, R_HAND: 0.2, R_TORSO: 0.38, SPREAD: 0.0096, BARREL_R: 0.35, BARREL_H: 0.9, BLAST: 3.0, DISARM: 2.2,
  ROUND_TIME: 40, END_DELAY: 1.6, QUICK: 0.6, BACKSTOP: 15, HAND_DX: 0.32,
};
const zOf = side => (side === 0 ? D.POST_Z : -D.POST_Z), dirZ = side => (side === 0 ? -1 : 1);
const hypot = Math.hypot;
export const postsFor = stage => (stage <= 2 ? [0] : stage <= 6 ? [-4, 4] : [-6, 0, 6]);
export const duelSkill = n => Math.min(0.95, Math.max(0, 0.02 + 0.8 * (1 - Math.exp(-Math.max(1, n) / 28))));

export function createDuel(cfg) {
  const rng = new Rng(`duel:${cfg.seed}`), xs = cfg.posts || postsFor(cfg.stage || 1);
  const s = { cfg, t: 0, rng, xs, balls: [], events: [], over: null, overT: 0, bunkers: [], barrels: [], ballId: 0, tricks: [], hitsTaken: [0, 0], f: [] };
  for (let side = 0; side < 2; side++) {
    xs.forEach((x, i) => s.bunkers.push({ side, post: i, x: side === 0 ? x : -x, z: zOf(side) + dirZ(side) * D.BUNKER_Z, w: D.BUNKER_W, d: D.BUNKER_D, hp: D.BUNKER_HP, max: D.BUNKER_HP, wob: 0 }));
    const ox = xs.length === 1 ? 2.6 : xs[xs.length - 1] + 2.6;      // barrel beside the outermost post
    if (cfg.barrels !== false) s.barrels.push({ side, x: side === 0 ? ox : -ox, z: zOf(side) + dirZ(side) * 0.2, alive: true });
    const mid = Math.floor(xs.length / 2);
    s.f.push({
      side, post: mid, x: side === 0 ? xs[mid] : -xs[mid], z: zOf(side), e: 0, want: false, hold: 0, ammo: D.MAG, reloadT: 0, cdT: 0, disarmT: 0, alive: true,
      shield: !!(cfg.boss && side === 1), swapT: 0, swapFrom: 0, swapTo: 0, riseAt: -9, shots: 0, aimYaw: 0, aimPitch: 0, laser: null, vx: 0,
      ai: side === 1 && !cfg.noAI ? { skill: cfg.skill ?? 0.3, hideT: 1 + rng.next() * 1.5, phase: 'hide', phaseT: 0, burst: 0, burstT: 0, err: { x: 0, y: 0 }, errT: 0, reactT: 0, target: null } : null,
    });
  }
  return s;
}

// ---------- geometry ----------
export const bunkerH = b => D.BUNKER_H * (0.4 + 0.6 * (b.hp / b.max));
function rayBox(o, d, min, max, tmax) {
  let t0 = 0, t1 = tmax;
  for (const a of ['x', 'y', 'z']) {
    if (Math.abs(d[a]) < 1e-9) { if (o[a] < min[a] || o[a] > max[a]) return -1; continue; }
    let a0 = (min[a] - o[a]) / d[a], a1 = (max[a] - o[a]) / d[a]; if (a0 > a1) [a0, a1] = [a1, a0];
    if (a0 > t0) t0 = a0; if (a1 < t1) t1 = a1; if (t0 > t1) return -1;
  }
  return t0;
}
function raySphere(o, d, c, r, tmax) {
  const fx = o.x - c.x, fy = o.y - c.y, fz = o.z - c.z, a = d.x * d.x + d.y * d.y + d.z * d.z, b = 2 * (fx * d.x + fy * d.y + fz * d.z), cc = fx * fx + fy * fy + fz * fz - r * r;
  if (cc <= 0) return 0; const disc = b * b - 4 * a * cc; if (disc < 0) return -1; const t = (-b - Math.sqrt(disc)) / (2 * a); return t >= 0 && t <= tmax ? t : -1;
}
const bunkerBox = b => ({ min: { x: b.x - b.w / 2, y: 0, z: b.z - b.d / 2 }, max: { x: b.x + b.w / 2, y: bunkerH(b), z: b.z + b.d / 2 } });
const barrelBox = b => ({ min: { x: b.x - D.BARREL_R, y: 0, z: b.z - D.BARREL_R }, max: { x: b.x + D.BARREL_R, y: D.BARREL_H, z: b.z + D.BARREL_R } });

export const eHeight = e => ({ head: 0.78 + 0.82 * e, hand: 0.7 + 1.0 * e, torso: 0.5 + 0.5 * e });
/** Hit spheres for a fighter (inflated radii for fingers). */
export function zones(f) {
  const h = eHeight(f.e);
  return [
    { type: 'head', x: f.x, y: h.head, z: f.z, r: D.R_HEAD },
    { type: 'hand', x: f.x + D.HAND_DX, y: h.hand, z: f.z + dirZ(f.side) * 0.25, r: D.R_HAND },
    { type: 'torso', x: f.x, y: h.torso + 0.12, z: f.z, r: D.R_TORSO },
    { type: 'torso', x: f.x, y: h.torso - 0.18, z: f.z, r: D.R_TORSO },
  ];
}
export const markerPos = f => ({ x: f.x + D.HAND_DX, y: eHeight(f.e).hand, z: f.z + dirZ(f.side) * 0.6 });

/** First thing a ray hits: {t, kind:'bunker'|'barrel'|'zone'|'ground'|'back', ...}. `skipSide` = shooter's own fighter is ignored. */
export function castRay(s, o, d, skipSide, tmax = 80) {
  let best = { t: tmax, kind: 'none' };
  const consider = (t, h) => { if (t >= 0 && t < best.t) best = { t, ...h }; };
  for (const b of s.bunkers) { const bb = bunkerBox(b); consider(rayBox(o, d, bb.min, bb.max, best.t), { kind: 'bunker', b }); }
  for (const b of s.barrels) if (b.alive) { const bb = barrelBox(b); consider(rayBox(o, d, bb.min, bb.max, best.t), { kind: 'barrel', b }); }
  for (const f of s.f) if (f.alive && f.side !== skipSide) for (const z of zones(f)) consider(raySphere(o, d, z, z.r, best.t), { kind: 'zone', f, zone: z.type });
  if (d.y < 0) consider(-o.y / d.y, { kind: 'ground' });
  if (d.z !== 0) { const bz = d.z > 0 ? D.BACKSTOP : -D.BACKSTOP; consider((bz - o.z) / d.z, { kind: 'back' }); }
  return best;
}

// ---------- camera model (shared by renderer + aiming) ----------
export function playerCamera(f, yaw = f.aimYaw, pitch = f.aimPitch) {
  const e = f.e, pos = { x: f.x - 0.95 * (1 - e), y: 1.8 + 0.4 * e, z: f.z + 3.8 - 2.6 * e };
  const p = pitch - 0.1 * (1 - e), cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(p), sp = Math.sin(p);
  return { pos, dir: { x: sy * cp, y: sp, z: -cy * cp }, fov: 62 - 38 * e };
}
/** Where the crosshair is pointing in the world (the player's aim point). */
export function playerAimPoint(s, f = s.f[0]) {
  const c = playerCamera(f), hit = castRay(s, c.pos, c.dir, 0), t = hit.kind === 'none' ? 40 : hit.t;
  return { x: c.pos.x + c.dir.x * t, y: c.pos.y + c.dir.y * t, z: c.pos.z + c.dir.z * t, hit };
}

/** yaw/pitch (rad) that put the crosshair on a world point from the fully-risen camera. */
export function solveAim(p, z) {
  const c = playerCamera({ ...p, e: 1 }, 0, 0), dx = z.x - c.pos.x, dy = z.y - c.pos.y, dz = z.z - c.pos.z;
  return { yaw: Math.atan2(dx, -dz), pitch: Math.atan2(dy, Math.hypot(dx, dz)) };
}
/** Soft aim assist: pull yaw/pitch toward the best *visible* enemy zone when already close (strength 0..1). Never aims at what the player can't see. */
export function assistDuel(s, yaw, pitch, strength) {
  const p = s.f[0], e = s.f[1]; if (strength <= 0 || !e.alive) return { yaw, pitch };
  const M = markerPos({ ...p, e: 1 }); let best = null, bd = 1e9;
  for (const zn of zones(e)) {
    const h = castRay(s, M, { x: zn.x - M.x, y: zn.y - M.y, z: zn.z - M.z }, 0, 1); if (h.kind !== 'zone' || h.f !== e) continue;
    const a = solveAim(p, zn), d = Math.hypot(a.yaw - yaw, a.pitch - pitch), pri = zn.type === 'head' ? 0.7 : zn.type === 'hand' ? 0.85 : 1; if (d * pri < bd) { bd = d * pri; best = { a, d }; }
  }
  if (!best || best.d > 0.12 + 0.12 * strength) return { yaw, pitch };
  const k = Math.min(1, strength * 0.5); return { yaw: yaw + (best.a.yaw - yaw) * k, pitch: pitch + (best.a.pitch - pitch) * k };
}

// ---------- balls ----------
function fireBall(s, f, P, spread = 0) {
  const M = markerPos(f), rng = s.rng, g = () => (rng.next() + rng.next() + rng.next() - 1.5) * 2;
  let dx = P.x - M.x, dy = P.y - M.y, dz = P.z - M.z; const len = hypot(dx, dy, dz) || 1;
  P = { x: P.x + g() * spread * len, y: P.y + g() * spread * len * 0.7, z: P.z };
  dx = P.x - M.x; dy = P.y - M.y; dz = P.z - M.z;
  const dist = hypot(dx, dy, dz) || 1, T = dist / D.BALL_SPEED;
  s.balls.push({ id: s.ballId++, side: f.side, x: M.x, y: M.y, z: M.z, vx: dx / T, vy: dy / T + 0.5 * D.G * T, vz: dz / T, born: s.t, quick: s.t - f.riseAt <= D.QUICK });
  f.ammo--; f.shots++; f.cdT = D.FIRE_CD;
  s.events.push({ type: 'shot', side: f.side, x: M.x, y: M.y, z: M.z });
  if (f.ammo === 0) { f.reloadT = D.RELOAD; s.events.push({ type: 'reload', side: f.side }); }   // magazine empty: forced reload (the opening for the other side)
}
export const canFire = f => f.alive && f.cdT <= 0 && f.ammo > 0 && f.reloadT <= 0 && f.disarmT <= 0 && f.e >= D.MIN_FIRE_E && f.swapT <= 0;

function splash(s, side, x, y, z, nx, ny, nz, surf, size = 1) { s.events.push({ type: 'splat', side, x, y, z, nx, ny, nz, surf, size }); }

function eliminate(s, v, by, zone, quick) {
  if (!v.alive) return; v.alive = false; v.deadAt = s.t; s.hitsTaken[v.side]++;
  s.events.push({ type: 'elim', victim: v.side, by, zone, quick });
  if (by === 0 && !s.over) s.tricks.push({ zone, quick });
}

function stepBalls(s, dt) {
  for (let i = s.balls.length - 1; i >= 0; i--) {
    const b = s.balls[i], o = { x: b.x, y: b.y, z: b.z };
    b.vy -= D.G * dt;
    const d = { x: b.vx * dt, y: b.vy * dt, z: b.vz * dt }, hit = castRay(s, o, d, b.side, 1);
    if (hit.kind === 'none') { b.x += d.x; b.y += d.y; b.z += d.z; continue; }
    const px = o.x + d.x * hit.t, py = o.y + d.y * hit.t, pz = o.z + d.z * hit.t; s.balls.splice(i, 1);
    if (hit.kind === 'zone') {
      const v = hit.f; splash(s, b.side, px, py, pz, 0, 0, -dirZ(v.side), 'body', 1.1);
      if (v.shield && hit.zone !== 'head') { v.shield = false; s.events.push({ type: 'shieldpop', side: v.side, x: px, y: py, z: pz }); }
      else if (hit.zone === 'hand') { v.disarmT = D.DISARM; v.want = false; s.events.push({ type: 'disarm', victim: v.side, by: b.side, x: px, y: py, z: pz }); if (b.side === 0) s.tricks.push({ zone: 'hand', quick: false }); }
      else if (v.shield && hit.zone === 'head') { v.shield = false; s.events.push({ type: 'shieldpop', side: v.side, x: px, y: py, z: pz }); }
      else eliminate(s, v, b.side, hit.zone, b.quick);
    } else if (hit.kind === 'bunker') {
      const bk = hit.b; bk.hp = Math.max(0, bk.hp - 1); bk.wob = 1;
      const nz = o.z > bk.z ? 1 : -1; splash(s, b.side, px, py, bk.z + nz * (bk.d / 2 + 0.01), 0, 0, nz, 'bunker', 1);
      s.events.push({ type: 'bunkerhit', side: bk.side, post: bk.post, hp: bk.hp });
    } else if (hit.kind === 'barrel') {
      const br = hit.b; br.alive = false; s.events.push({ type: 'barrel', x: br.x, z: br.z, by: b.side });
      splash(s, b.side, br.x, 0.02, br.z, 0, 1, 0, 'ground', 3);
      for (const v of s.f) if (v.alive && hypot(v.x - br.x, v.z - br.z) < D.BLAST) {
        if (v.shield) { v.shield = false; s.events.push({ type: 'shieldpop', side: v.side, x: v.x, y: 1, z: v.z }); } else eliminate(s, v, b.side, 'barrel', false);
      }
    } else if (hit.kind === 'ground') splash(s, b.side, px, 0.02, pz, 0, 1, 0, 'ground', 1);
    else splash(s, b.side, px, py, pz > 0 ? D.BACKSTOP - 0.02 : -D.BACKSTOP + 0.02, 0, 0, pz > 0 ? -1 : 1, 'back', 1.4);
  }
}

// ---------- fighters ----------
function stepFighter(s, f, dt, input) {
  f.cdT = Math.max(0, f.cdT - dt); f.disarmT = Math.max(0, f.disarmT - dt);
  if (f.reloadT > 0) { f.reloadT -= dt; if (f.reloadT <= 0) { f.reloadT = 0; f.ammo = D.MAG; s.events.push({ type: 'reloaded', side: f.side }); } }
  if (f.swapT > 0) {                                           // dashing between posts: exposed while crossing
    f.swapT -= dt; const k = 1 - Math.max(0, f.swapT) / D.SWAP, sx = f.side === 0 ? 1 : -1;
    f.x = (f.swapFrom + (f.swapTo - f.swapFrom) * k) * sx; f.e += (0.55 - f.e) * Math.min(1, dt * 14); f.want = false; return;
  }
  if (input.swap && !f.want && f.e < 0.2) {
    const to = f.post + input.swap;
    if (to >= 0 && to < s.xs.length) { const sx = f.side === 0 ? 1 : -1; f.swapFrom = f.x * sx; f.swapTo = s.xs[to]; f.post = to; f.swapT = D.SWAP; s.events.push({ type: 'swap', side: f.side }); return; }
  }
  f.want = input.hold && f.alive && f.disarmT <= 0;
  const prev = f.e; f.e = f.want ? Math.min(1, f.e + dt / D.PEEK) : Math.max(0, f.e - dt / D.DROP);
  if (prev < 0.35 && f.e >= 0.35) { f.riseAt = s.t; f.hold = 0; s.events.push({ type: 'rise', side: f.side }); }
  if (f.e > 0.9) f.hold += dt; else if (!f.want) f.hold = 0;
  f.aimYaw = input.yaw ?? f.aimYaw; f.aimPitch = input.pitch ?? f.aimPitch;
}

/** @param {{hold:boolean, release?:boolean, fire?:boolean, swap?:number, yaw?:number, pitch?:number}} pin player input */
export function stepDuel(s, dt, pin = {}) {
  s.t += dt; pin = { ...pin };
  const live = !s.over;
  const p = s.f[0], e = s.f[1];
  const px = p.x;
  // player fire first: a release while exposed fires then drops; `fire` fires while staying up (uses the exposure the player saw)
  const shootNow = () => { const ap = playerAimPoint(s, p), t = Math.max(0, 0.4 - p.hold); fireBall(s, p, ap, D.SPREAD * (1 + (2 * t) / 0.4)); };
  if (live && p.alive) {
    if ((pin.release || pin.fire) && canFire(p)) shootNow();
    else if ((pin.release || pin.fire) && p.cdT > 0 && p.ammo > 0 && p.reloadT <= 0 && p.disarmT <= 0 && p.swapT <= 0) p.queue = { rel: !!pin.release, t: 0.4 };   // input buffer: a release during the fire cooldown must not be lost
    else if (p.queue) { p.queue.t -= dt; if (canFire(p)) { shootNow(); p.queue = null; } else if (p.queue.t <= 0) p.queue = null; }
    if (p.queue && p.queue.rel && !pin.hold) pin = { ...pin, hold: true };                   // stay risen until the queued shot leaves
  }
  stepFighter(s, p, dt, live && p.alive ? pin : {}); p.vx = (p.x - px) / dt;
  if (e.ai) { const ex = e.x; stepFighter(s, e, dt, live && e.alive ? aiStep(s, e, dt) : {}); e.vx = (e.x - ex) / dt; }
  for (const b of s.bunkers) b.wob = Math.max(0, b.wob - dt * 3);
  stepBalls(s, dt);
  if (!s.over) {
    if (!p.alive || !e.alive) { s.over = { winner: !p.alive && !e.alive ? -1 : !p.alive ? 1 : 0, at: s.t }; s.events.push({ type: 'over', winner: s.over.winner }); }
    else if (s.t >= D.ROUND_TIME) { s.over = { winner: -1, at: s.t, timeout: true }; s.events.push({ type: 'over', winner: -1 }); }
  } else s.overT += dt;
}
export const duelDone = s => !!s.over && s.overT >= D.END_DELAY;

// ---------- enemy AI ----------
const gauss = r => (r.next() + r.next() + r.next() - 1.5) * 2;
export function aiParams(sk) {
  return { hideMin: 1.0 - 0.6 * sk, hideMax: 2.2 - 1.2 * sk, tele: Math.max(0.25, 0.95 - 0.7 * sk), sigma: (3.6 - 3.1 * sk) * Math.PI / 180, react: 0.35 - 0.2 * sk, lead: 0.3 + 0.6 * sk, burstMax: sk < 0.25 ? 1 : sk < 0.6 ? 2 : 3 };
}
const pressure = s => 1 - 0.65 * Math.min(1, Math.max(0, (s.t - 10) / 18));   // stalemate breaker: the AI gets bolder as the round drags on
function aiStep(s, f, dt) {
  const a = f.ai, P = aiParams(a.skill), pl = s.f[0], rng = s.rng, out = { hold: false, swap: 0 };
  a.phaseT += dt; a.errT -= dt; a.reactT = Math.max(0, a.reactT - dt);
  if (a.errT <= 0) { a.err = { x: gauss(rng) * P.sigma, y: gauss(rng) * P.sigma * 0.6 }; a.errT = 0.2; }
  // reaction: player pops up while we are exposed and haven't started shooting -> duck
  if (f.e > 0.4 && pl.alive && pl.e > 0.4 && a.phase !== 'fire' && a.reactT <= 0 && rng.next() < a.skill * 0.02) { a.phase = 'hide'; a.phaseT = 0; a.hideT = 0.6 + rng.next(); }
  const M = markerPos(f);
  const pickTarget = () => {                                  // visible zone of the player, else their bunker top
    for (const zn of ['head', 'hand', 'torso']) {
      const z = zones(pl).find(q => q.type === zn); const lead = pl.vx * (Math.hypot(z.x - M.x, z.z - M.z) / D.BALL_SPEED) * P.lead;
      const tgt = { x: z.x + lead, y: z.y, z: z.z }, d = { x: tgt.x - M.x, y: tgt.y - M.y, z: tgt.z - M.z }, h = castRay(s, M, d, f.side, 1);
      if (h.kind === 'zone' && h.f === pl) return { ...tgt, zone: zn };
    } return null;
  };
  switch (a.phase) {
    case 'hide':
      if (f.disarmT > 0) { a.phaseT = 0; break; }
      if (a.phaseT >= a.hideT && f.ammo > 0 && f.reloadT <= 0) {
        if (s.xs.length > 1 && rng.next() < 0.35) { const to = f.post + (rng.next() < 0.5 ? -1 : 1); if (to >= 0 && to < s.xs.length) { out.swap = (f.side === 0 ? 1 : -1) * 0 + (to - f.post); a.phaseT = a.hideT - 0.2; break; } }
        a.phase = 'tele'; a.phaseT = 0; a.burst = 1 + rng.int(P.burstMax); a.reactT = P.react;
      }
      break;
    case 'tele': {
      out.hold = true; const t = pickTarget() || a.target; a.target = t;
      f.laser = t ? { x: t.x + a.err.x * 8, y: t.y + a.err.y * 8, z: t.z } : { x: f.x, y: 1.1, z: -f.z * 0.2 };
      if (a.phaseT >= P.tele && f.e >= 0.95) { a.phase = 'fire'; a.phaseT = 0; a.burstT = 0; }
      break;
    }
    case 'fire': {
      out.hold = true; a.burstT -= dt; const t = pickTarget();
      if (t) a.target = t;
      const tg = t || a.target, aimAt = tg ? { x: tg.x, y: tg.y, z: tg.z } : { x: pl.x, y: 1.0, z: pl.z - 1.3 };
      f.laser = { x: aimAt.x + a.err.x * 8, y: aimAt.y + a.err.y * 8, z: aimAt.z };
      if (a.burstT <= 0 && canFire(f) && a.burst > 0) {
        const hide = !t && pl.e < 0.2;                         // nothing visible: suppress their bunker to deflate it
        if (!t && !hide) { a.burst = 0; break; }
        const bunk = s.bunkers.find(b => b.side === 0 && b.post === pl.post), P = t ? { x: t.x + a.err.x * Math.hypot(t.x - M.x, t.z - M.z), y: t.y + a.err.y * Math.hypot(t.y - M.y, t.z - M.z), z: t.z } : { x: bunk.x, y: bunkerH(bunk) * 0.6, z: bunk.z };
        fireBall(s, f, P, 0); a.burst--; a.burstT = D.FIRE_CD;
      }
      if (a.burst <= 0 && a.burstT <= 0.05 || f.ammo === 0) { a.phase = 'hide'; a.phaseT = 0; a.hideT = (P.hideMin + rng.next() * (P.hideMax - P.hideMin)) * pressure(s); f.laser = null; }
      if (a.phaseT > 2.2) { a.phase = 'hide'; a.phaseT = 0; a.hideT = P.hideMin; f.laser = null; }
      break;
    }
    default: break;
  }
  if (a.phase === 'hide') f.laser = null;
  // high-skill bots shoot barrels beside the player
  if (a.skill > 0.6 && a.phase === 'fire' && s.barrels.some(b => b.side === 0 && b.alive && Math.hypot(b.x - pl.x, b.z - pl.z) < D.BLAST - 0.3) && canFire(f) && rng.next() < 0.1) {
    const br = s.barrels.find(b => b.side === 0 && b.alive); fireBall(s, f, { x: br.x, y: 0.4, z: br.z }, P.sigma * 0.5);
  }
  return out;
}

// ---------- scripted player (calibration "human" model + ?auto autopilot) ----------
export function makeScripted(skill, seed = 'p') {
  return { skill, rng: new Rng(`scripted:${seed}`), phase: 'wait', t: 0, react: 0.55 - 0.4 * skill, sigma: (7 - 5.5 * skill) * Math.PI / 180, seen: 0 };
}
/** Returns a player input for this tick. Behaves like a decent human: wait for the laser/peek, react, rise, aim at head/hand, release. */
export function scriptedInput(s, br, dt) {
  const p = s.f[0], e = s.f[1], inp = { hold: false, release: false, swap: 0, yaw: p.aimYaw, pitch: p.aimPitch };
  br.t += dt;
  const target = () => { for (const zn of ['head', 'hand', 'torso']) { const z = zones(e).find(q => q.type === zn), M = markerPos({ ...p, e: 1 }), h = castRay(s, M, { x: z.x - M.x, y: z.y - M.y, z: z.z - M.z }, 0, 1); if (h.kind === 'zone') return z; } return null; };
  const aimAtZone = z => { const a = solveAim(p, z); inp.yaw = a.yaw + gauss(br.rng) * br.sigma * 0.5; inp.pitch = a.pitch + gauss(br.rng) * br.sigma * 0.4; };
  const tgt = e.alive && e.e > 0.35 ? target() : null;
  if (tgt) br.seen += dt; else br.seen = 0;
  switch (br.phase) {
    case 'wait':
      if (p.reloadT > 0 || p.ammo === 0) break;
      if (br.seen > br.react) { br.phase = 'rise'; br.t = 0; }
      break;
    case 'rise':
      inp.hold = true; if (tgt) aimAtZone(tgt);
      if (p.e >= 0.95 && br.t > 0.25 + 0.15 * (1 - br.skill)) { br.phase = 'shoot'; br.t = 0; }
      if (br.t > 1.2) { br.phase = 'wait'; }
      break;
    case 'shoot':
      inp.hold = true; if (tgt) aimAtZone(tgt); inp.release = true; br.phase = 'cool'; br.t = 0; break;
    case 'cool': if (br.t > 0.5) br.phase = 'wait'; break;
    default: break;
  }
  return inp;
}
