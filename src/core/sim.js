// Fixed-step paintball simulation. Pure (no DOM, no Math.random). The shell feeds human input; bots come from ai.js.
import { Rng } from './rng.js';
import { BODY_R } from './arena.js';
import { pushOut, segBunker, clamp } from './geom.js';
import { thinkAI, makeBrain } from './ai.js';

export const CFG = {
  DT: 1 / 60, R: BODY_R, HIT_R: BODY_R * 0.85, SPEED: 150, DASH_SPEED: 380, DASH_T: 0.22, DASH_CD: 2.2,
  BALL_SPEED: 520, BALL_R: 4, RANGE: 640, MAG: 28, RELOAD: 1.5, RATE: 7, SPREAD: 0.02,
  ROUND_TIME: 75, END_DELAY: 1.4, PICKUP_AT: 8, PICKUP_R: 20, RAPID_T: 6, RAPID_MULT: 1.7, SPLASH_BALLS: 3, SPLASH_R: 34,
};
export const NONE = { mx: 0, my: 0, aim: null, fire: false, dash: false, reload: false };

/**
 * @param {{arena:object, sizes:[number,number], human:boolean, skill:[number,number]|number, roles?:string[][], seed:string, humanSkill?:number}} o
 */
export function createWorld(o) {
  const { arena } = o, rng = new Rng(`painball:world:${o.seed}`);
  const skills = Array.isArray(o.skill) ? o.skill : [o.skill, o.skill];
  const ents = [];
  for (let team = 0; team < 2; team++) {
    for (let i = 0; i < o.sizes[team]; i++) {
      const sp = arena.spawns[team][i], tgt = arena.spawns[1 - team][Math.min(i, arena.spawns[1 - team].length - 1)] || { x: arena.w / 2, y: arena.h / 2 };
      const human = o.human && team === 0 && i === 0;
      const role = (o.roles && o.roles[team] && o.roles[team][i]) || ROLES[(i + team * 2) % 4];
      ents.push({
        id: ents.length, team, slot: i, human, x: sp.x, y: sp.y, vx: 0, vy: 0, r: CFG.R, aim: Math.atan2(tgt.y - sp.y, tgt.x - sp.x),
        ammo: CFG.MAG, reloadT: 0, cdT: 0, dashT: 0, dashCd: 0, dashDx: 0, dashDy: 0, alive: true, shield: false, rapidT: 0, splashN: 0,
        kills: 0, shots: 0, hits: 0, role, hurtT: 0, moving: 0,
        brain: human ? null : makeBrain(team === 0 && i === 0 && o.humanSkill != null ? o.humanSkill : skills[team], role, rng),   // humanSkill: calibration sims drive slot 0 with a skill model
      });
    }
  }
  return { arena, t: 0, ents, balls: [], pickups: [], events: [], rng, over: null, overT: 0, ballId: 0, pickupsSpawned: false, pickupKind: ['shield', 'rapid', 'splash'][rng.int(3)], cfg: o };
}

const ROLES = ['rusher', 'anchor', 'flanker', 'sniper'];
export const alive = (w, team) => w.ents.filter(e => e.alive && e.team === team);
const emit = (w, ev) => w.events.push(ev);

function applyInput(w, e, inp, dt) {
  const A = w.arena;
  e.hurtT = Math.max(0, e.hurtT - dt);
  e.cdT = Math.max(0, e.cdT - dt); e.dashCd = Math.max(0, e.dashCd - dt); e.rapidT = Math.max(0, e.rapidT - dt);
  if (inp.aim != null) e.aim = inp.aim;
  // reload
  if (e.reloadT > 0) { e.reloadT -= dt; if (e.reloadT <= 0) { e.reloadT = 0; e.ammo = CFG.MAG; emit(w, { type: 'reloaded', id: e.id }); } }
  else if ((inp.reload && e.ammo < CFG.MAG) || e.ammo === 0) { e.reloadT = CFG.RELOAD; emit(w, { type: 'reload', id: e.id, x: e.x, y: e.y }); }
  // movement
  let mx = inp.mx, my = inp.my; const m = Math.hypot(mx, my);
  if (m > 1) { mx /= m; my /= m; }
  if (inp.dash && e.dashCd <= 0 && e.dashT <= 0) {
    let dx = mx, dy = my; if (Math.hypot(dx, dy) < 0.2) { dx = Math.cos(e.aim); dy = Math.sin(e.aim); }
    const dl = Math.hypot(dx, dy) || 1; e.dashDx = dx / dl; e.dashDy = dy / dl; e.dashT = CFG.DASH_T; e.dashCd = CFG.DASH_CD;
    emit(w, { type: 'dash', id: e.id, x: e.x, y: e.y, dx: e.dashDx, dy: e.dashDy });
  }
  const sp = (e.brain ? e.brain.p.speed : 1) * CFG.SPEED;
  let tx = mx * sp, ty = my * sp;
  if (e.dashT > 0) { e.dashT -= dt; tx = e.dashDx * CFG.DASH_SPEED; ty = e.dashDy * CFG.DASH_SPEED; e.vx = tx; e.vy = ty; }
  else { const k = Math.min(1, 14 * dt); e.vx += (tx - e.vx) * k; e.vy += (ty - e.vy) * k; }
  e.x += e.vx * dt; e.y += e.vy * dt; e.moving = Math.hypot(e.vx, e.vy);
  for (let it = 0; it < 2; it++) {
    for (const b of A.bunkers) pushOut(e, b);
    e.x = clamp(e.x, e.r, A.w - e.r); e.y = clamp(e.y, e.r, A.h - e.r);
  }
  // fire
  if (inp.fire && e.cdT <= 0 && e.ammo > 0 && e.reloadT <= 0) {
    const rate = (e.brain ? e.brain.p.rate : CFG.RATE) * (e.rapidT > 0 ? CFG.RAPID_MULT : 1);
    e.cdT = 1 / rate; e.ammo--; e.shots++;
    const a = e.aim + (w.rng.next() - 0.5) * 2 * CFG.SPREAD, dx = Math.cos(a), dy = Math.sin(a), mz = e.r + 3;
    const splash = e.splashN > 0; if (splash) e.splashN--;
    w.balls.push({ id: w.ballId++, team: e.team, owner: e.id, x: e.x + dx * mz, y: e.y + dy * mz, ox: e.x, oy: e.y, vx: dx * CFG.BALL_SPEED, vy: dy * CFG.BALL_SPEED, dist: 0, splash });
    emit(w, { type: 'shot', id: e.id, team: e.team, x: e.x, y: e.y, a, splash });
  }
}

function stepBalls(w, dt) {
  const A = w.arena;
  for (let i = w.balls.length - 1; i >= 0; i--) {
    const b = w.balls[i], nx = b.x + b.vx * dt, ny = b.y + b.vy * dt;
    let hit = null, ht = 2;
    // vs bodies (enemy team only; no friendly fire)
    for (const e of w.ents) {
      if (!e.alive || e.team === b.team) continue;
      const fx = b.x - e.x, fy = b.y - e.y, dx = nx - b.x, dy = ny - b.y, a = dx * dx + dy * dy;
      const rr = CFG.HIT_R + CFG.BALL_R, cq = fx * fx + fy * fy - rr * rr;
      let t = -1;
      if (cq <= 0) t = 0;
      else if (a > 1e-9) { const bq = 2 * (fx * dx + fy * dy), disc = bq * bq - 4 * a * cq; if (disc >= 0) { const tt = (-bq - Math.sqrt(disc)) / (2 * a); if (tt >= 0 && tt <= 1) t = tt; } }
      if (t >= 0 && t < ht) { ht = t; hit = { kind: 'body', e }; }
    }
    // vs bunkers
    for (const bk of A.bunkers) { const t = segBunker(b.x, b.y, nx, ny, bk); if (t >= 0 && t < ht) { ht = t; hit = { kind: 'bunker' }; } }
    // vs arena walls
    if (nx < 0 || ny < 0 || nx > A.w || ny > A.h) {
      let t = 2;
      if (nx < 0) t = Math.min(t, b.x / (b.x - nx)); if (nx > A.w) t = Math.min(t, (A.w - b.x) / (nx - b.x));
      if (ny < 0) t = Math.min(t, b.y / (b.y - ny)); if (ny > A.h) t = Math.min(t, (A.h - b.y) / (ny - b.y));
      if (t < ht) { ht = t; hit = { kind: 'wall' }; }
    }
    const step = Math.hypot(b.vx, b.vy) * dt;
    if (!hit && b.dist + step >= CFG.RANGE) { ht = (CFG.RANGE - b.dist) / step; hit = { kind: 'floor' }; }
    if (!hit) { b.x = nx; b.y = ny; b.dist += step; continue; }
    const hx = b.x + (nx - b.x) * ht, hy = b.y + (ny - b.y) * ht;
    w.balls.splice(i, 1);
    const shooter = w.ents[b.owner];
    if (hit.kind === 'body') {
      const v = hit.e;
      if (v.shield) { v.shield = false; emit(w, { type: 'shieldpop', id: v.id, x: hx, y: hy }); emit(w, { type: 'splat', x: hx, y: hy, team: b.team, surf: 'floor', size: 1.1 }); continue; }
      v.alive = false; v.deadAt = w.t; v.hurtT = 1; v.vx = b.vx * 0.15; v.vy = b.vy * 0.15; shooter.kills++; shooter.hits++;
      emit(w, { type: 'hit', victim: v.id, shooter: b.owner, x: v.x, y: v.y, team: b.team, vteam: v.team, a: Math.atan2(b.vy, b.vx) });
      emit(w, { type: 'splat', x: v.x, y: v.y, team: b.team, surf: 'floor', size: 2.2 });
    } else {
      const size = b.splash ? 1.9 : 1;
      emit(w, { type: 'splat', x: hx, y: hy, team: b.team, surf: hit.kind === 'bunker' ? 'bunker' : 'floor', size, a: Math.atan2(b.vy, b.vx) });
      if (b.splash) for (const e of w.ents) if (e.alive && e.team !== b.team && Math.hypot(e.x - hx, e.y - hy) < CFG.SPLASH_R + CFG.HIT_R) {
        if (e.shield) { e.shield = false; continue; }
        e.alive = false; e.deadAt = w.t; shooter.kills++; shooter.hits++;
        emit(w, { type: 'hit', victim: e.id, shooter: b.owner, x: e.x, y: e.y, team: b.team, vteam: e.team, a: 0 });
        emit(w, { type: 'splat', x: e.x, y: e.y, team: b.team, surf: 'floor', size: 2.2 });
      }
    }
  }
}

function stepPickups(w) {
  const A = w.arena;
  if (!w.pickupsSpawned && w.t >= CFG.PICKUP_AT && A.pickups.length) {
    w.pickupsSpawned = true;
    for (const p of A.pickups) w.pickups.push({ x: p.x, y: p.y, kind: w.pickupKind, born: w.t });
    emit(w, { type: 'pickupspawn' });
  }
  for (let i = w.pickups.length - 1; i >= 0; i--) {
    const p = w.pickups[i];
    for (const e of w.ents) {
      if (!e.alive || Math.hypot(e.x - p.x, e.y - p.y) > CFG.PICKUP_R + e.r * 0.5) continue;
      if (p.kind === 'shield') e.shield = true; else if (p.kind === 'rapid') e.rapidT = CFG.RAPID_T; else e.splashN = CFG.SPLASH_BALLS;
      emit(w, { type: 'pickup', id: e.id, kind: p.kind, x: p.x, y: p.y });
      w.pickups.splice(i, 1); break;
    }
  }
}

/** Advance one fixed tick. `humanInput` may be omitted for all-bot sims. */
export function step(w, dt, humanInput = NONE) {
  w.t += dt;
  const live = !w.over;
  for (const e of w.ents) {
    if (!e.alive) { e.x += e.vx * dt; e.y += e.vy * dt; e.vx *= 0.9; e.vy *= 0.9; continue; }
    const inp = e.human ? humanInput : (live && e.brain ? thinkAI(w, e, dt) : NONE);   // brain-less non-human = static dummy (tests)
    applyInput(w, e, live || e.human ? inp : NONE, dt);
  }
  // soft separation between living bodies
  for (let i = 0; i < w.ents.length; i++) for (let j = i + 1; j < w.ents.length; j++) {
    const a = w.ents[i], b = w.ents[j]; if (!a.alive || !b.alive) continue;
    const dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy), need = a.r + b.r;
    if (d > 0 && d < need) { const p = (need - d) / 2 / d; a.x -= dx * p; a.y -= dy * p; b.x += dx * p; b.y += dy * p; }
  }
  stepBalls(w, dt); stepPickups(w);
  if (!w.over) {
    const a0 = alive(w, 0).length, a1 = alive(w, 1).length;
    if (a0 === 0 || a1 === 0) { w.over = { winner: a0 === 0 && a1 === 0 ? -1 : a0 === 0 ? 1 : 0, at: w.t, reason: 'elimination' }; emit(w, { type: 'roundover', winner: w.over.winner }); }
    else if (w.t >= CFG.ROUND_TIME) { w.over = { winner: a0 === a1 ? -1 : a0 > a1 ? 0 : 1, at: w.t, reason: 'timeout' }; emit(w, { type: 'roundover', winner: w.over.winner }); }
  } else w.overT += dt;
}

export const roundDone = w => !!w.over && w.overT >= CFG.END_DELAY;
