// Pure 2D geometry for circles, axis-aligned rects and segments. No DOM.
export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

/** First hit parameter t in [0,1] of segment vs rect {x,y,w,h}, or -1. */
export function segRect(x1, y1, x2, y2, b) {
  const dx = x2 - x1, dy = y2 - y1;
  let t0 = 0, t1 = 1;
  for (let k = 0; k < 2; k++) {
    const p = k ? y1 : x1, q = k ? dy : dx, lo = k ? b.y : b.x, hi = lo + (k ? b.h : b.w);
    if (Math.abs(q) < 1e-9) { if (p < lo || p > hi) return -1; continue; }
    let a = (lo - p) / q, c = (hi - p) / q;
    if (a > c) { const t = a; a = c; c = t; }
    if (a > t0) t0 = a;
    if (c < t1) t1 = c;
    if (t0 > t1) return -1;
  }
  return t0;
}

/** First hit parameter t in [0,1] of segment vs circle {x,y,r}, or -1. */
export function segCirc(x1, y1, x2, y2, c) {
  const dx = x2 - x1, dy = y2 - y1, fx = x1 - c.x, fy = y1 - c.y;
  const a = dx * dx + dy * dy, bq = 2 * (fx * dx + fy * dy), cq = fx * fx + fy * fy - c.r * c.r;
  if (cq <= 0) return 0;                       // starts inside
  if (a < 1e-12) return -1;
  const disc = bq * bq - 4 * a * cq;
  if (disc < 0) return -1;
  const t = (-bq - Math.sqrt(disc)) / (2 * a);
  return t >= 0 && t <= 1 ? t : -1;
}

export const segBunker = (x1, y1, x2, y2, b) => (b.kind === 'circ' ? segCirc(x1, y1, x2, y2, b) : segRect(x1, y1, x2, y2, b));

/** True when no bunker blocks the straight line. */
export function losClear(bunkers, x1, y1, x2, y2) {
  for (let i = 0; i < bunkers.length; i++) if (segBunker(x1, y1, x2, y2, bunkers[i]) >= 0) return false;
  return true;
}

/** Distance from point to bunker surface (negative inside). */
export function distToBunker(px, py, b) {
  if (b.kind === 'circ') return Math.hypot(px - b.x, py - b.y) - b.r;
  const cx = clamp(px, b.x, b.x + b.w), cy = clamp(py, b.y, b.y + b.h);
  const d = Math.hypot(px - cx, py - cy);
  if (d > 0) return d;
  return -Math.min(px - b.x, b.x + b.w - px, py - b.y, b.y + b.h - py);   // inside: -penetration depth
}

/** Push a circle {x,y,r} out of bunker b in place. Returns true if it moved. */
export function pushOut(e, b) {
  if (b.kind === 'circ') {
    const dx = e.x - b.x, dy = e.y - b.y, d = Math.hypot(dx, dy), need = e.r + b.r;
    if (d >= need) return false;
    const nx = d > 1e-6 ? dx / d : 1, ny = d > 1e-6 ? dy / d : 0;
    e.x = b.x + nx * need; e.y = b.y + ny * need; return true;
  }
  const cx = clamp(e.x, b.x, b.x + b.w), cy = clamp(e.y, b.y, b.y + b.h);
  const dx = e.x - cx, dy = e.y - cy, d = Math.hypot(dx, dy);
  if (d >= e.r) return false;
  if (d > 1e-6) { e.x = cx + (dx / d) * e.r; e.y = cy + (dy / d) * e.r; return true; }
  const l = e.x - b.x, r = b.x + b.w - e.x, t = e.y - b.y, bt = b.y + b.h - e.y, m = Math.min(l, r, t, bt);
  if (m === l) e.x = b.x - e.r; else if (m === r) e.x = b.x + b.w + e.r; else if (m === t) e.y = b.y - e.r; else e.y = b.y + b.h + e.r;
  return true;
}

export const angDiff = (a, b) => { let d = (b - a) % (Math.PI * 2); if (d > Math.PI) d -= Math.PI * 2; if (d < -Math.PI) d += Math.PI * 2; return d; };
