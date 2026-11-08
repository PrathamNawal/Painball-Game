// Seeded, point-symmetric arena generation + validation. Pure (no DOM).
// Canonical frame is PORTRAIT (short side W, long side H); landscape is a rotation of that frame, so both
// orientations share one generator and one validity proof. Team 0 starts at the bottom (portrait) / left (landscape).
import { Rng } from './rng.js';
import { distToBunker, losClear, clamp } from './geom.js';

export const BODY_R = 16;
export const SHORT = 560, LONG = 880;
const GAP = BODY_R * 2 + 8;          // min free corridor between obstacles/walls: two bodies can pass
const SPAWN_CLEAR = 120;             // no bunkers within this distance of either short end
const CELL = 14;

/** Bunker count per half for a level (1..). */
export const bunkersFor = level => Math.min(9, 4 + Math.floor(level / 5));

function overlapGap(a, b, gap) {
  // Conservative: distance between shapes < gap
  const pa = a.kind === 'circ' ? a : null;
  if (pa) return distToBunker(a.x, a.y, b) - a.r < gap;
  if (b.kind === 'circ') return distToBunker(b.x, b.y, a) - b.r < gap;
  const dx = Math.max(a.x - (b.x + b.w), b.x - (a.x + a.w), 0), dy = Math.max(a.y - (b.y + b.h), b.y - (a.y + a.h), 0);
  return Math.hypot(dx, dy) < gap;
}
const mirror = (b, W, H) => (b.kind === 'circ' ? { kind: 'circ', x: W - b.x, y: H - b.y, r: b.r } : { kind: 'rect', x: W - b.x - b.w, y: H - b.y - b.h, w: b.w, h: b.h });
const inside = (b, W, H, m) => (b.kind === 'circ'
  ? b.x - b.r >= m && b.x + b.r <= W - m && b.y - b.r >= SPAWN_CLEAR && b.y + b.r <= H - SPAWN_CLEAR
  : b.x >= m && b.x + b.w <= W - m && b.y >= SPAWN_CLEAR && b.y + b.h <= H - SPAWN_CLEAR);

function canonical(seed, level, teamSizes) {
  const rng = new Rng(`painball:arena:${seed}`), W = SHORT, H = LONG, want = bunkersFor(level), list = [];
  // Optional self-symmetric centre bunker for a strong focal point.
  if (rng.chance(0.65)) {
    list.push(rng.chance(0.5) ? { kind: 'circ', x: W / 2, y: H / 2, r: rng.range(28, 44) } : { kind: 'rect', x: W / 2 - 40, y: H / 2 - 22, w: 80, h: 44 });
  }
  let tries = 0, placed = 0;
  while (placed < want && tries++ < 600) {
    let b;
    const kind = rng.next();
    if (kind < 0.3) b = { kind: 'circ', x: rng.range(70, W - 70), y: rng.range(SPAWN_CLEAR + 30, H / 2 - 20), r: rng.range(22, 38) };
    else {
      const wall = kind < 0.55, w = wall ? rng.range(110, 190) : rng.range(46, 96), h = wall ? rng.range(22, 30) : rng.range(36, 70);
      const [bw, bh] = rng.chance(wall ? 0.35 : 0.5) ? [h, w] : [w, h];
      b = { kind: 'rect', x: rng.range(GAP, W - GAP - bw), y: rng.range(SPAWN_CLEAR + 20, H / 2 - bh / 2), w: bw, h: bh };
    }
    if (!inside(b, W, H, GAP)) continue;
    const m = mirror(b, W, H);
    // keep the half-plane clean: original must stay on its side of centre, and never touch its own mirror
    if (list.some(o => overlapGap(b, o, GAP)) || list.some(o => overlapGap(m, o, GAP)) || overlapGap(b, m, GAP)) continue;
    list.push(b, m); placed++;
  }
  const spawn = (team, n) => Array.from({ length: n }, (_, i) => {
    const x = (W * (i + 1)) / (n + 1);
    return team === 0 ? { x, y: H - 46 } : { x: W - x, y: 46 };      // point-symmetric
  });
  const spawns = [spawn(0, teamSizes[0]), spawn(1, teamSizes[1])];
  // One symmetric pickup pair near the middle band, clear of bunkers.
  let pick = null;
  for (let k = 0; k < 200 && !pick; k++) {
    const p = { x: rng.range(80, W - 80), y: rng.range(H / 2 - 190, H / 2 - 40) };
    if (list.every(b => distToBunker(p.x, p.y, b) > BODY_R + 20)) pick = [p, { x: W - p.x, y: H - p.y }];
  }
  return { W, H, bunkers: list, spawns, pickups: pick || [] };
}

// Portrait -> landscape: (x,y) -> (H - y, x). Team 0 (bottom) ends up on the left.
function rotate(c) {
  const H = c.H, P = p => ({ x: H - p.y, y: p.x });
  return {
    W: c.H, H: c.W,
    bunkers: c.bunkers.map(b => (b.kind === 'circ' ? { kind: 'circ', ...P(b), r: b.r } : { kind: 'rect', x: H - b.y - b.h, y: b.x, w: b.h, h: b.w })),
    spawns: c.spawns.map(t => t.map(P)), pickups: c.pickups.map(P),
  };
}

/**
 * @param {{seed:string, level?:number, landscape?:boolean, teamSizes?:[number,number]}} o
 */
export function makeArena({ seed, level = 1, landscape = false, teamSizes = [1, 1] }) {
  let c = canonical(seed, level, teamSizes);
  if (landscape) c = rotate(c);
  const arena = { seed, level, landscape, w: c.W, h: c.H, bunkers: c.bunkers, spawns: c.spawns, pickups: c.pickups };
  arena.nav = buildNav(arena);
  arena.spots = coverSpots(arena);
  return arena;
}

// ---------- navigation grid ----------
export function buildNav(arena) {
  const cols = Math.ceil(arena.w / CELL), rows = Math.ceil(arena.h / CELL), blocked = new Uint8Array(cols * rows), need = BODY_R + 2;
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
    const x = (i + 0.5) * CELL, y = (j + 0.5) * CELL;
    let bad = x < BODY_R || y < BODY_R || x > arena.w - BODY_R || y > arena.h - BODY_R;
    for (let k = 0; !bad && k < arena.bunkers.length; k++) if (distToBunker(x, y, arena.bunkers[k]) < need) bad = true;
    blocked[j * cols + i] = bad ? 1 : 0;
  }
  return { cols, rows, cell: CELL, blocked };
}
export const cellOf = (nav, x, y) => ({ i: clamp(Math.floor(x / nav.cell), 0, nav.cols - 1), j: clamp(Math.floor(y / nav.cell), 0, nav.rows - 1) });

/** Grid flood fill from (x,y); returns the set of reachable cell indices. */
export function reachable(nav, x, y) {
  const { cols, rows, blocked } = nav, seen = new Uint8Array(cols * rows), c = cellOf(nav, x, y), q = [c.j * cols + c.i];
  if (blocked[q[0]]) return seen;
  seen[q[0]] = 1;
  for (let h = 0; h < q.length; h++) {
    const k = q[h], i = k % cols, j = (k / cols) | 0;
    for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const ni = i + di, nj = j + dj;
      if (ni < 0 || nj < 0 || ni >= cols || nj >= rows) continue;
      const nk = nj * cols + ni;
      if (!seen[nk] && !blocked[nk]) { seen[nk] = 1; q.push(nk); }
    }
  }
  return seen;
}

/** Structural validity used by unit tests and the in-game generator guard. Returns a list of problems. */
export function validateArena(arena) {
  const bad = [], { w, h, bunkers } = arena;
  for (const b of bunkers) {
    const x0 = b.kind === 'circ' ? b.x - b.r : b.x, x1 = b.kind === 'circ' ? b.x + b.r : b.x + b.w;
    const y0 = b.kind === 'circ' ? b.y - b.r : b.y, y1 = b.kind === 'circ' ? b.y + b.r : b.y + b.h;
    if (x0 < 0 || y0 < 0 || x1 > w || y1 > h) bad.push('bunker outside arena');
  }
  const all = arena.spawns.flat();
  for (const s of all) {
    if (bunkers.some(b => distToBunker(s.x, s.y, b) < BODY_R + 2)) bad.push('spawn inside bunker');
    if (s.x < BODY_R || s.y < BODY_R || s.x > w - BODY_R || s.y > h - BODY_R) bad.push('spawn outside arena');
  }
  if (all.length) {
    const seen = reachable(arena.nav, all[0].x, all[0].y);
    for (const s of all) { const c = cellOf(arena.nav, s.x, s.y); if (!seen[c.j * arena.nav.cols + c.i]) bad.push('spawn unreachable'); }
    for (const p of arena.pickups) { const c = cellOf(arena.nav, p.x, p.y); if (!seen[c.j * arena.nav.cols + c.i]) bad.push('pickup unreachable'); }
  }
  // point symmetry: every bunker has a 180° twin (centre bunkers are their own twin)
  for (const b of bunkers) {
    const m = mirror2(b, w, h);
    if (!bunkers.some(o => o.kind === m.kind && Math.abs(o.x - m.x) < 1e-6 && Math.abs(o.y - m.y) < 1e-6 && (m.kind === 'circ' ? Math.abs(o.r - m.r) < 1e-6 : Math.abs(o.w - m.w) < 1e-6 && Math.abs(o.h - m.h) < 1e-6))) bad.push('asymmetric');
  }
  // sightlines between enemy spawns should not be trivially blocked everywhere AND not wide open: informational only
  return bad;
}
const mirror2 = (b, W, H) => (b.kind === 'circ' ? { kind: 'circ', x: W - b.x, y: H - b.y, r: b.r } : { kind: 'rect', x: W - b.x - b.w, y: H - b.y - b.h, w: b.w, h: b.h });

/** Candidate standing spots hugging bunkers (used by bots for cover). */
export function coverSpots(arena) {
  const spots = [], off = BODY_R + 6, nav = arena.nav;
  const add = (x, y) => {
    if (x < BODY_R || y < BODY_R || x > arena.w - BODY_R || y > arena.h - BODY_R) return;
    const c = cellOf(nav, x, y); if (nav.blocked[c.j * nav.cols + c.i]) return;
    if (arena.bunkers.some(b => distToBunker(x, y, b) < BODY_R + 1)) return;
    spots.push({ x, y });
  };
  for (const b of arena.bunkers) {
    if (b.kind === 'circ') for (let k = 0; k < 8; k++) { const a = (k * Math.PI) / 4; add(b.x + Math.cos(a) * (b.r + off), b.y + Math.sin(a) * (b.r + off)); }
    else {
      const xs = [b.x - off, b.x + b.w / 2, b.x + b.w + off], ys = [b.y - off, b.y + b.h / 2, b.y + b.h + off];
      for (const x of xs) for (const y of ys) if (!(x === xs[1] && y === ys[1])) add(x, y);
    }
  }
  return spots;
}

export { losClear };
