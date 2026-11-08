// Bot brains. Perception-based (line of sight + short memory + reaction delay); difficulty is parameters only.
// Bots never read the human's input. Personalities: rusher | anchor | flanker | sniper.
import { losClear, angDiff, clamp } from './geom.js';
import { cellOf } from './arena.js';

/** skill s in [0,1] -> behaviour parameters (documented in docs/GAME_DESIGN.md). */
export function botParams(s, role) {
  const p = {
    react: 0.55 - 0.4 * s,                 // seconds before engaging a newly visible enemy
    sigma: (14 - 10 * s) * Math.PI / 180,  // base aim error (rad)
    burst: Math.round(2 + 3 * s),
    pause: 0.7 - 0.45 * s,
    rate: 3 + 2.5 * s,
    dodge: 0.1 + 0.6 * s,
    lead: 0.3 + 0.7 * s,
    turn: 5 + 8 * s,
    speed: 0.9 + 0.15 * s,
    hide: 1.5 - 0.7 * s,
  };
  if (role === 'sniper') { p.sigma *= 0.7; p.rate *= 0.8; p.pause += 0.2; }
  if (role === 'rusher') { p.speed += 0.04; p.hide *= 0.6; }
  if (role === 'anchor') p.hide *= 1.3;
  return p;
}

export function makeBrain(skill, role, rng) {
  return {
    skill, role, p: botParams(skill, role),
    seen: {},                  // enemy id -> first-seen time
    mem: null,                 // {x,y,t}
    goal: null, path: [], pi: 0, decideT: rng.next() * 0.3,
    phase: 'hide', phaseT: 0.3 + rng.next() * 0.8, spot: null,
    burstLeft: 0, pauseT: 0, strafe: rng.chance(0.5) ? 1 : -1, strafeT: 0,
    dodgeT: 0, dodgeDir: 1, lastX: 0, lastY: 0, stuckT: 0, aimErr: 0, aimErrT: 0, target: null, wantReload: false,
  };
}

const gauss = r => (r.next() + r.next() + r.next() - 1.5) * 2;
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

// ---------- A* on the arena nav grid ----------
function astar(nav, sx, sy, gx, gy) {
  const { cols, rows, blocked, cell } = nav, s = cellOf(nav, sx, sy), g = cellOf(nav, gx, gy);
  const open = (i, j) => (i >= 0 && j >= 0 && i < cols && j < rows && !blocked[j * cols + i]);
  let sk = s.j * cols + s.i, gk = g.j * cols + g.i;
  if (blocked[gk]) { // snap goal to nearest free cell
    let best = -1, bd = 1e9; for (let r = 1; r < 6 && best < 0; r++) for (let dj = -r; dj <= r; dj++) for (let di = -r; di <= r; di++) { const i = g.i + di, j = g.j + dj; if (open(i, j)) { const d = di * di + dj * dj; if (d < bd) { bd = d; best = j * cols + i; } } }
    if (best < 0) return []; gk = best;
  }
  if (blocked[sk]) { // snap start (body grazing a bunker)
    let best = -1, bd = 1e9; for (let r = 1; r < 4 && best < 0; r++) for (let dj = -r; dj <= r; dj++) for (let di = -r; di <= r; di++) { const i = s.i + di, j = s.j + dj; if (open(i, j)) { const d = di * di + dj * dj; if (d < bd) { bd = d; best = j * cols + i; } } }
    if (best < 0) return []; sk = best;
  }
  const n = cols * rows, gs = new Float32Array(n).fill(1e9), from = new Int32Array(n).fill(-1), closed = new Uint8Array(n);
  const heap = []; // [f, k]
  const push = (f, k) => { heap.push([f, k]); let i = heap.length - 1; while (i > 0) { const p = (i - 1) >> 1; if (heap[p][0] <= heap[i][0]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; } };
  const pop = () => { const top = heap[0], last = heap.pop(); if (heap.length) { heap[0] = last; let i = 0; for (;;) { let l = 2 * i + 1, r = l + 1, m = i; if (l < heap.length && heap[l][0] < heap[m][0]) m = l; if (r < heap.length && heap[r][0] < heap[m][0]) m = r; if (m === i) break; [heap[m], heap[i]] = [heap[i], heap[m]]; i = m; } } return top; };
  const gi = gk % cols, gj = (gk / cols) | 0, h = (i, j) => Math.hypot(i - gi, j - gj);
  gs[sk] = 0; push(h(sk % cols, (sk / cols) | 0), sk);
  while (heap.length) {
    const [, k] = pop(); if (closed[k]) continue; closed[k] = 1;
    if (k === gk) break;
    const i = k % cols, j = (k / cols) | 0;
    for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) {
      if (!di && !dj) continue; const ni = i + di, nj = j + dj;
      if (!open(ni, nj)) continue;
      if (di && dj && (!open(i + di, j) || !open(i, j + dj))) continue;      // no corner cutting
      const nk = nj * cols + ni, ng = gs[k] + (di && dj ? 1.414 : 1);
      if (ng < gs[nk]) { gs[nk] = ng; from[nk] = k; push(ng + h(ni, nj), nk); }
    }
  }
  if (from[gk] < 0 && gk !== sk) return [];
  const path = []; for (let k = gk; k !== -1 && k !== sk; k = from[k]) path.push({ x: ((k % cols) + 0.5) * cell, y: (((k / cols) | 0) + 0.5) * cell });
  return path.reverse();
}

function walkable(nav, ax, ay, bx, by) {
  const d = Math.hypot(bx - ax, by - ay), n = Math.ceil(d / 6);
  for (let i = 1; i <= n; i++) { const c = cellOf(nav, ax + ((bx - ax) * i) / n, ay + ((by - ay) * i) / n); if (nav.blocked[c.j * nav.cols + c.i]) return false; }
  return true;
}

// ---------- decisions ----------
function pickSpot(w, e, br, enemyPos, wantPeekOf) {
  const A = w.arena, me = e, spots = A.spots, pressure = clamp((w.t - 18) / 25, 0, 1), role = pressure > 0.5 && (br.role === 'anchor' || br.role === 'sniper') ? 'rusher' : br.role;   // stalemate breaker: late in a round everyone pushes
  const home = A.spawns[e.team][0], forward = { x: enemyPos.x, y: enemyPos.y };
  const dMe = dist(me, enemyPos);
  let best = null, bs = -1e9;
  for (let i = 0; i < spots.length; i++) {
    const sp = spots[i], dm = dist(me, sp), de = dist(sp, enemyPos);
    if (dm < 10) continue;
    let taken = false;
    for (const o of w.ents) if (o !== e && o.alive && o.team === e.team && o.brain && o.brain.spot === sp) { taken = true; break; }
    if (taken) continue;
    const hidden = !losClear(A.bunkers, sp.x, sp.y, enemyPos.x, enemyPos.y);
    let s = -dm * 0.35 + (hidden ? 90 : 0) + (w.rng.next() * 30);
    if (wantPeekOf) { s = (hidden ? -400 : 0) - dist(sp, wantPeekOf) * 2; }
    else if (role === 'rusher') s += (dMe - de) * 0.9 - (de < 150 ? 200 : 0);
    else if (role === 'anchor') s += -dist(sp, home) * 0.6 + (de < 520 && de > 160 ? 40 : 0);
    else if (role === 'flanker') s += (dMe - de) * 0.5 + Math.abs(sp.x - enemyPos.x) * 0.25 + Math.abs(sp.y - enemyPos.y) * 0.05;
    else if (role === 'sniper') s += (de > 300 && de < 560 ? 120 : -Math.abs(de - 430) * 0.4) - dist(sp, home) * 0.15;
    if (s > bs) { bs = s; best = sp; }
  }
  return best;
}

function setGoal(w, e, br, gx, gy) {
  br.goal = { x: gx, y: gy };
  br.path = astar(w.arena.nav, e.x, e.y, gx, gy); br.pi = 0;
}

function perceive(w, e, br) {
  const A = w.arena; let vis = null, vd = 1e9;
  for (const o of w.ents) {
    if (!o.alive || o.team === e.team) continue;
    const d = dist(e, o);
    if (d < 760 && losClear(A.bunkers, e.x, e.y, o.x, o.y)) {
      if (br.seen[o.id] == null) br.seen[o.id] = w.t;
      if (d < vd) { vd = d; vis = o; }
      br.mem = { x: o.x, y: o.y, t: w.t, vx: o.vx, vy: o.vy };
    } else br.seen[o.id] = null;
  }
  // incoming fire: nearest threatening enemy ball
  let threat = null, td = 1e9;
  for (const b of w.balls) {
    if (b.team === e.team) continue;
    const rx = e.x - b.x, ry = e.y - b.y, sp = Math.hypot(b.vx, b.vy), al = (rx * b.vx + ry * b.vy) / sp;
    if (al < 0 || al > 240) continue;
    const perp = Math.abs(rx * b.vy - ry * b.vx) / sp;
    if (perp < 34 && al < td) { td = al; threat = b; }
  }
  if (threat && !br.mem) br.mem = { x: threat.ox, y: threat.oy, t: w.t, vx: 0, vy: 0 };
  return { vis, threat };
}

export function thinkAI(w, e, dt) {
  const br = e.brain, p = br.p, A = w.arena, out = { mx: 0, my: 0, aim: null, fire: false, dash: false, reload: false };
  const { vis, threat } = perceive(w, e, br);
  br.decideT -= dt; br.phaseT -= dt; br.strafeT -= dt; br.dodgeT -= dt; br.pauseT -= dt; br.aimErrT -= dt;
  const memFresh = br.mem && w.t - br.mem.t < 7;
  const enemyPos = vis ? vis : memFresh ? br.mem : (() => { const t = A.spawns[1 - e.team]; return t[Math.min(e.slot, t.length - 1)] || { x: A.w / 2, y: A.h / 2 }; })();

  // --- target & engagement (needs reaction delay)
  let target = null;
  if (vis && br.seen[vis.id] != null && w.t - br.seen[vis.id] >= p.react) target = vis;
  br.target = target;
  if (threat && br.dodgeT <= 0 && w.rng.chance(p.dodge * 0.05 * 60 * dt * 6)) {   // ~per-tick chance scaled for dt
    br.dodgeT = 0.35 + w.rng.next() * 0.25; br.dodgeDir = w.rng.chance(0.5) ? 1 : -1;
    if (br.skill > 0.45 && e.dashCd <= 0 && w.rng.chance(0.35)) out.dash = true;
  }

  // --- aiming
  if (target) {
    const d = dist(e, target), tt = d / 520 * p.lead;
    const px = target.x + target.vx * tt, py = target.y + target.vy * tt;
    if (br.aimErrT <= 0) { br.aimErr = gauss(w.rng) * p.sigma * (0.55 + d / 650 + Math.min(1, Math.hypot(target.vx, target.vy) / 180) * 0.6) ; br.aimErrT = 0.18; }
    const want = Math.atan2(py - e.y, px - e.x) + br.aimErr, df = angDiff(e.aim, want), maxT = p.turn * dt;
    out.aim = e.aim + clamp(df, -maxT, maxT);
    const aligned = Math.abs(angDiff(out.aim, want)) < 0.1;
    if (br.burstLeft <= 0 && br.pauseT <= 0) br.burstLeft = p.burst + (w.rng.next() < 0.5 ? 1 : 0);
    if (br.burstLeft > 0 && aligned && e.ammo > 0 && e.reloadT <= 0) {
      out.fire = true;
      // count shots as they leave: approximate with cooldown crossing
      if (e.cdT <= 0) { br.burstLeft--; if (br.burstLeft <= 0) br.pauseT = p.pause * (0.7 + w.rng.next() * 0.6); }
    }
  } else if (memFresh) {
    out.aim = e.aim + clamp(angDiff(e.aim, Math.atan2(br.mem.y - e.y, br.mem.x - e.x)), -p.turn * dt * 0.6, p.turn * dt * 0.6);
  }
  if (e.ammo <= 5 && !target) out.reload = true;
  if (e.ammo <= 3 && e.reloadT <= 0) out.reload = true;

  // --- movement decisions (~3 Hz)
  const lowAmmo = e.ammo <= 4 || e.reloadT > 0;
  if (br.decideT <= 0) {
    br.decideT = 0.3 + w.rng.next() * 0.15;
    const dEn = dist(e, enemyPos);
    if (br.phase === 'hide' && (lowAmmo || br.phaseT <= 0 || !br.spot)) {
      if (lowAmmo) { /* keep hiding */ }
      else if (br.role === 'rusher' || !br.spot || w.rng.chance(0.35) || !memFresh) {
        const sp = pickSpot(w, e, br, enemyPos, null); br.spot = sp || br.spot;
        if (sp) setGoal(w, e, br, sp.x, sp.y);
        br.phaseT = p.hide * (0.6 + w.rng.next() * 0.8) * (1 - 0.7 * clamp((w.t - 18) / 25, 0, 1));
      } else if (br.spot) { // anchor-style: peek from current cover
        const pk = pickSpot(w, e, br, enemyPos, br.spot);
        if (pk && dist(pk, br.spot) < 90) { setGoal(w, e, br, pk.x, pk.y); br.phase = 'peek'; br.phaseT = 0.9 + w.rng.next() * 1.0; }
        else { br.phaseT = 0.5; br.spot = null; }
      }
    } else if (br.phase === 'peek' && (br.phaseT <= 0 || lowAmmo || threat)) {
      br.phase = 'hide'; br.phaseT = p.hide * (0.6 + w.rng.next() * 0.8);
      if (br.spot) setGoal(w, e, br, br.spot.x, br.spot.y);
    }
    if (lowAmmo && vis) { const sp = pickSpot(w, e, br, enemyPos, null); if (sp) { br.spot = sp; setGoal(w, e, br, sp.x, sp.y); } }
    // close quarters: rusher charges
    if (br.role === 'rusher' && vis && dEn < 170 && !lowAmmo) setGoal(w, e, br, vis.x, vis.y);
    // stuck detection
    br.stuckT = Math.hypot(e.x - br.lastX, e.y - br.lastY) < 3 && br.goal ? br.stuckT + 0.35 : 0; br.lastX = e.x; br.lastY = e.y;
    if (br.stuckT > 1.1) { br.stuckT = 0; br.spot = null; const sp = w.arena.spots[w.rng.int(w.arena.spots.length)]; if (sp) setGoal(w, e, br, sp.x, sp.y); }
  }

  // --- follow path
  let mx = 0, my = 0;
  const nav = A.nav;
  if (br.goal && br.path.length) {
    while (br.pi < br.path.length - 1 && Math.hypot(br.path[br.pi].x - e.x, br.path[br.pi].y - e.y) < 12) br.pi++;
    // string-pull: jump ahead to the furthest directly walkable waypoint
    for (let k = Math.min(br.path.length - 1, br.pi + 6); k > br.pi; k--) if (walkable(nav, e.x, e.y, br.path[k].x, br.path[k].y)) { br.pi = k; break; }
    const wp = br.path[br.pi], dx = wp.x - e.x, dy = wp.y - e.y, d = Math.hypot(dx, dy);
    const atGoal = br.pi >= br.path.length - 1 && dist(e, br.goal) < 10;
    if (!atGoal && d > 2) { mx = dx / d; my = dy / d; }
  }
  // strafing while exposed and engaging in the open; dodge overrides
  if (target && !(br.phase === 'peek' && mx === 0 && my === 0 && false)) {
    const ax = Math.cos(e.aim), ay = Math.sin(e.aim);
    if (br.strafeT <= 0) { br.strafe = w.rng.chance(0.5) ? 1 : -1; br.strafeT = 0.5 + w.rng.next() * 0.7; }
    const k = (mx === 0 && my === 0) ? 0.55 : 0.35;      // standing in cover: small sidesteps; moving: weave
    mx += -ay * br.strafe * k * (0.4 + br.skill); my += ax * br.strafe * k * (0.4 + br.skill);
  }
  if (br.dodgeT > 0 && threat) { const sp = Math.hypot(threat.vx, threat.vy); mx = (-threat.vy / sp) * br.dodgeDir; my = (threat.vx / sp) * br.dodgeDir; }
  out.mx = mx; out.my = my;
  return out;
}

export { astar };
