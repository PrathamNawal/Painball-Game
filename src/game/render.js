// Canvas2D renderer. Static layers (floor, bunkers) and two persistent paint layers are pre-rendered; per frame we only
// composite them and draw bodies, balls, pickups and particles. The paint layers are the "your art" signature feature.
import { Rng } from '../core/rng.js';
import { CFG } from '../core/sim.js';

const TAU = Math.PI * 2;
const mk = (w, h) => { const c = document.createElement('canvas'); c.width = Math.max(2, Math.ceil(w)); c.height = Math.max(2, Math.ceil(h)); return c; };
const rgba = (hex, a) => { const n = parseInt(hex.slice(1), 16); return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${a})`; };
const shade = (hex, k) => { const n = parseInt(hex.slice(1), 16); const f = c => Math.max(0, Math.min(255, Math.round(c * k))); return `rgb(${f(n >> 16)},${f((n >> 8) & 255)},${f(n & 255)})`; };

function bunkerPath(ctx, b, pad = 0) {
  ctx.beginPath();
  if (b.kind === 'circ') ctx.arc(b.x, b.y, b.r + pad, 0, TAU);
  else { const r = Math.min(9, b.w / 2, b.h / 2) + pad; ctx.roundRect ? ctx.roundRect(b.x - pad, b.y - pad, b.w + pad * 2, b.h + pad * 2, r) : ctx.rect(b.x - pad, b.y - pad, b.w + pad * 2, b.h + pad * 2); }
}

export class Renderer {
  constructor(canvas) {
    this.cv = canvas; this.ctx = canvas.getContext('2d');
    this.parts = []; this.shakeT = 0; this.time = 0; this.splatLog = []; this.low = false; this.reduce = false;
    this.arena = null; this.k = 1; this.ox = 0; this.oy = 0; this.dpr = 1; this.pal = { you: '#2f8bff', foe: '#ff8a1f' };
    this.padTop = 64; this.padBottom = 8; this.padSide = 8; this.flash = 0;
  }

  resize() {
    const d = Math.min(devicePixelRatio || 1, this.low ? 1.25 : 2);
    this.dpr = d; this.cv.width = Math.max(2, Math.round(this.cv.clientWidth * d)); this.cv.height = Math.max(2, Math.round(this.cv.clientHeight * d));
    this._fit(); if (this.arena) this._buildLayers(true);
  }
  _fit() {
    const W = this.cv.clientWidth, H = this.cv.clientHeight;
    if (!this.arena) { this.k = 1; return; }
    const aw = W - this.padSide * 2, ah = H - this.padTop - this.padBottom;
    this.k = Math.max(0.2, Math.min(aw / this.arena.w, ah / this.arena.h));
    this.ox = (W - this.arena.w * this.k) / 2; this.oy = this.padTop + (ah - this.arena.h * this.k) / 2;
  }
  toWorld(cx, cy) { const r = this.cv.getBoundingClientRect(); return { x: (cx - r.left - this.ox) / this.k, y: (cy - r.top - this.oy) / this.k }; }

  setArena(arena, pal, keepPaint = false) {
    this.arena = arena; this.pal = pal; this.parts.length = 0;
    if (!keepPaint) this.splatLog = [];
    this._fit(); this._buildLayers(keepPaint);
  }
  setPalette(pal) { this.pal = pal; if (this.arena) this._buildLayers(true); }
  clearPaint() { this.splatLog = []; if (this.arena) this._buildLayers(false); }

  _buildLayers(replay) {
    const A = this.arena, S = Math.min(this.k * this.dpr, 2.4);
    this.S = S;
    this.floor = mk(A.w * S, A.h * S);   // ONE pre-composited layer: floor + bunkers + all paint (1 blit per frame is what keeps weak GPUs happy)
    this._drawFloor(); this._drawBunkers();
    if (replay) { const log = this.splatLog; this.splatLog = []; for (const s of log) this._stamp(s, false); }
  }

  _drawFloor() {
    const A = this.arena, c = this.floor.getContext('2d'), S = this.S; c.setTransform(S, 0, 0, S, 0, 0);
    const g = c.createLinearGradient(0, 0, A.w, A.h); g.addColorStop(0, '#18213c'); g.addColorStop(1, '#111832');
    c.fillStyle = g; c.fillRect(0, 0, A.w, A.h);
    c.strokeStyle = 'rgba(160,180,255,.055)'; c.lineWidth = 1; c.beginPath();
    for (let x = 40; x < A.w; x += 40) { c.moveTo(x, 0); c.lineTo(x, A.h); }
    for (let y = 40; y < A.h; y += 40) { c.moveTo(0, y); c.lineTo(A.w, y); }
    c.stroke();
    // start zones (tinted with each side's colour) and centre line
    const long = A.landscape ? 'x' : 'y', Z = 108;
    const zone = (team, col) => {
      c.fillStyle = rgba(col, .1);
      if (long === 'y') c.fillRect(0, team === 0 ? A.h - Z : 0, A.w, Z); else c.fillRect(team === 0 ? 0 : A.w - Z, 0, Z, A.h);
      c.setLineDash([10, 8]); c.strokeStyle = rgba(col, .45); c.lineWidth = 2; c.beginPath();
      if (long === 'y') { const y = team === 0 ? A.h - Z : Z; c.moveTo(0, y); c.lineTo(A.w, y); } else { const x = team === 0 ? Z : A.w - Z; c.moveTo(x, 0); c.lineTo(x, A.h); }
      c.stroke(); c.setLineDash([]);
    };
    zone(0, this.pal.you); zone(1, this.pal.foe);
    c.strokeStyle = 'rgba(255,255,255,.07)'; c.lineWidth = 3; c.beginPath();
    if (long === 'y') { c.moveTo(0, A.h / 2); c.lineTo(A.w, A.h / 2); } else { c.moveTo(A.w / 2, 0); c.lineTo(A.w / 2, A.h); }
    c.stroke(); c.beginPath(); c.arc(A.w / 2, A.h / 2, 60, 0, TAU); c.stroke();
    // netting border
    c.lineWidth = 6; c.strokeStyle = '#33406b'; c.strokeRect(1, 1, A.w - 2, A.h - 2);
    c.lineWidth = 1.5; c.strokeStyle = 'rgba(190,205,255,.35)'; c.strokeRect(5, 5, A.w - 10, A.h - 10);
  }

  _drawBunkers() {
    const A = this.arena, c = this.floor.getContext('2d'), S = this.S; c.setTransform(S, 0, 0, S, 0, 0);
    for (const b of A.bunkers) {          // shadow pass
      c.save(); c.translate(5, 8); bunkerPath(c, b); c.fillStyle = 'rgba(0,0,0,.38)'; if (!this.low) { c.shadowColor = 'rgba(0,0,0,.5)'; c.shadowBlur = 8; } c.fill(); c.restore();
    }
    for (const b of A.bunkers) {
      bunkerPath(c, b); const x0 = b.kind === 'circ' ? b.x - b.r : b.x, y0 = b.kind === 'circ' ? b.y - b.r : b.y, x1 = b.kind === 'circ' ? b.x + b.r : b.x + b.w, y1 = b.kind === 'circ' ? b.y + b.r : b.y + b.h;
      const g = c.createLinearGradient(x0, y0, x1, y1); g.addColorStop(0, '#f6f8ff'); g.addColorStop(1, '#b6c2e0'); c.fillStyle = g; c.fill();
      c.lineWidth = 2; c.strokeStyle = '#8795bb'; c.stroke();
      c.save(); bunkerPath(c, b, -5); c.lineWidth = 2; c.strokeStyle = 'rgba(120,135,180,.45)'; c.stroke(); c.restore();   // inflatable seam
      c.save(); bunkerPath(c, b, -9); c.fillStyle = 'rgba(255,255,255,.35)'; c.fill(); c.restore();
    }
  }

  // ---------- paint ----------
  _stamp(s, log = true) {
    if (log) { this.splatLog.push(s); if (this.splatLog.length > 5000) this.splatLog.shift(); }
    const onB = s.surf === 'bunker', c = this.floor.getContext('2d'), S = this.S, A = this.arena; c.setTransform(S, 0, 0, S, 0, 0);
    c.save(); c.beginPath();
    if (!onB) c.rect(0, 0, A.w, A.h);                  // floor paint: everywhere except bunker tops (even-odd hole punch)
    for (const b of A.bunkers) { if (b.kind === 'circ') { c.moveTo(b.x + b.r, b.y); c.arc(b.x, b.y, b.r, 0, TAU); } else c.rect(b.x, b.y, b.w, b.h); }
    c.clip(onB ? 'nonzero' : 'evenodd');
    const rng = new Rng(s.seed), n = 9 + rng.int(4), base = 9 * s.size, col = s.color;
    // main blob: irregular star-ish polygon smoothed with quadratic curves
    const pts = []; for (let i = 0; i < n; i++) { const a = (i / n) * TAU, rr = base * (0.7 + rng.next() * 0.8) * (i % 2 ? 0.8 : 1.15); pts.push([s.x + Math.cos(a) * rr, s.y + Math.sin(a) * rr]); }
    c.fillStyle = col; c.globalAlpha = 0.93; c.beginPath();
    for (let i = 0; i < n; i++) { const p = pts[i], q = pts[(i + 1) % n], mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2; if (i === 0) c.moveTo(mx, my); else c.quadraticCurveTo(p[0], p[1], mx, my); }
    { const p = pts[0], q = pts[1]; c.quadraticCurveTo(p[0], p[1], (p[0] + q[0]) / 2, (p[1] + q[1]) / 2); }
    c.fill();
    c.fillStyle = shade(col, 0.82); c.globalAlpha = .5; c.beginPath(); c.arc(s.x + base * 0.1, s.y + base * 0.12, base * 0.45, 0, TAU); c.fill();   // depth
    c.fillStyle = '#fff'; c.globalAlpha = 0.22; c.beginPath(); c.ellipse(s.x - base * 0.25, s.y - base * 0.3, base * 0.28, base * 0.16, -0.6, 0, TAU); c.fill();   // wet highlight
    c.globalAlpha = 0.9; c.fillStyle = col;
    const drops = Math.round((5 + rng.int(5)) * Math.min(1.6, s.size)) * (this.low ? 0.6 : 1);
    for (let i = 0; i < drops; i++) {
      const a = (s.a != null && rng.chance(0.6) ? s.a + (rng.next() - 0.5) * 1.2 : rng.next() * TAU), d = base * (1.1 + rng.next() * 2.2), r = (1 + rng.next() * 2.6) * Math.sqrt(s.size);
      c.beginPath(); c.arc(s.x + Math.cos(a) * d, s.y + Math.sin(a) * d, r, 0, TAU); c.fill();
    }
    c.globalAlpha = 1; c.restore();
  }
  splat(x, y, team, surf, size = 1, a = null) {
    this._stamp({ x, y, color: team === 0 ? this.pal.you : this.pal.foe, surf, size, a, seed: (Math.imul((x * 7.3 + y * 3.1) | 0, 2654435761) ^ this.splatLog.length) >>> 0 });
  }

  // ---------- events -> juice ----------
  consume(w, events, hooks = {}) {
    const q = this.low ? 0.5 : 1;
    for (const ev of events) {
      const col = ev.team === 0 ? this.pal.you : this.pal.foe;
      switch (ev.type) {
        case 'shot': {
          const e = w.ents[ev.id], dx = Math.cos(ev.a), dy = Math.sin(ev.a);
          this._puff(e.x + dx * 22, e.y + dy * 22, col, 3 * q);
          if (e.human) this.shakeT = Math.min(1, this.shakeT + 0.05);
          break;
        }
        case 'splat': this.splat(ev.x, ev.y, ev.team, ev.surf, ev.size, ev.a); if (ev.surf !== 'floor') this._sparks(ev.x, ev.y, col, 4 * q, 120); break;
        case 'hit': {
          this._burst(ev.x, ev.y, col, Math.round(16 * q), ev.a);
          this.shakeT = Math.min(1, this.shakeT + (w.ents[ev.victim].human ? 0.9 : 0.5));
          if (w.ents[ev.victim].human) this.flash = 1;
          break;
        }
        case 'dash': this._dust(ev.x, ev.y, -ev.dx, -ev.dy, 6 * q); break;
        case 'pickup': this._ring(ev.x, ev.y, '#fff', 40); this._sparks(ev.x, ev.y, '#ffe36e', 10 * q, 160); break;
        case 'shieldpop': this._ring(ev.x, ev.y, '#6df0ff', 46); this._sparks(ev.x, ev.y, '#6df0ff', 8 * q, 180); this.shakeT = Math.min(1, this.shakeT + .25); break;
        case 'reload': break;
        default: break;
      }
      hooks.onEvent?.(ev);
    }
  }
  _puff(x, y, col, n) { for (let i = 0; i < n; i++) this.parts.push({ k: 'puff', x, y, vx: (Math.random() - 0.5) * 50, vy: (Math.random() - 0.5) * 50, life: 0.35, max: 0.35, size: 3 + Math.random() * 3, col }); }
  _sparks(x, y, col, n, sp) { for (let i = 0; i < n; i++) { const a = Math.random() * TAU, v = sp * (0.4 + Math.random()); this.parts.push({ k: 'spark', x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: 0.4, max: 0.4, size: 2, col }); } }
  _ring(x, y, col, r) { this.parts.push({ k: 'ring', x, y, life: 0.45, max: 0.45, size: r, col }); }
  _dust(x, y, dx, dy, n) { for (let i = 0; i < n; i++) this.parts.push({ k: 'puff', x, y, vx: dx * 60 + (Math.random() - 0.5) * 60, vy: dy * 60 + (Math.random() - 0.5) * 60, life: 0.4, max: 0.4, size: 4 + Math.random() * 4, col: '#c9d4ff' }); }
  _burst(x, y, col, n, a) {
    this._ring(x, y, col, 54);
    for (let i = 0; i < n; i++) {
      const ang = (a != null && Math.random() < 0.65 ? a + (Math.random() - 0.5) * 1.1 : Math.random() * TAU), v = 90 + Math.random() * 260;
      this.parts.push({ k: 'drop', x, y, vx: Math.cos(ang) * v, vy: Math.sin(ang) * v, life: 0.35 + Math.random() * 0.3, max: 0.6, size: 2 + Math.random() * 3.5, col, stamp: true });
    }
  }
  confetti(n = 70) {
    if (this.reduce || !this.arena) return;
    for (let i = 0; i < n * (this.low ? 0.5 : 1); i++) this.parts.push({ k: 'conf', x: Math.random() * this.arena.w, y: -10 - Math.random() * 120, vx: (Math.random() - 0.5) * 80, vy: 120 + Math.random() * 180, life: 2.4, max: 2.4, size: 4 + Math.random() * 4, rot: Math.random() * TAU, col: [this.pal.you, this.pal.foe, '#ffd23a', '#fff', '#5dffb0'][i % 5] });
  }

  // ---------- frame ----------
  draw(w, dt, view) {
    const ctx = this.ctx, A = this.arena; this.time += dt;
    ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, this.cv.width, this.cv.height);   // canvas CSS background is the letterbox colour
    if (!A || !w) return;
    const d = this.dpr, k = this.k;
    this.shakeT = Math.max(0, this.shakeT - dt * 2.6); this.flash = Math.max(0, this.flash - dt * 2.2);
    const sh = this.reduce ? 0 : this.shakeT * this.shakeT * 9;
    const sx = (Math.random() - 0.5) * 2 * sh, sy = (Math.random() - 0.5) * 2 * sh;
    ctx.setTransform(k * d, 0, 0, k * d, (this.ox + sx) * d, (this.oy + sy) * d);
    ctx.drawImage(this.floor, 0, 0, A.w, A.h);
    this._pickups(ctx, w); this._deadBodies(ctx, w);
    this._balls(ctx, w);
    for (const e of w.ents) if (e.alive) this._ent(ctx, e, view);
    this._parts(ctx, dt);
    if (view.aimLine && view.you?.alive) this._aimLine(ctx, view.you, view.aimLine);
    if (this.flash > 0) { ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.fillStyle = rgba(this.pal.foe, this.flash * 0.35); ctx.fillRect(0, 0, this.cv.width, this.cv.height); }
  }

  _aimLine(ctx, e, active) {
    ctx.save(); ctx.strokeStyle = 'rgba(255,255,255,.35)'; ctx.lineWidth = 2; ctx.setLineDash([2, 9]); ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(e.x + Math.cos(e.aim) * 26, e.y + Math.sin(e.aim) * 26); ctx.lineTo(e.x + Math.cos(e.aim) * (active ? 150 : 90), e.y + Math.sin(e.aim) * (active ? 150 : 90)); ctx.stroke(); ctx.restore();
  }

  _pickups(ctx, w) {
    for (const p of w.pickups) {
      const bob = Math.sin(this.time * 4 + p.x) * 2, col = p.kind === 'shield' ? '#6df0ff' : p.kind === 'rapid' ? '#ffb02e' : '#ff5de8';
      const g = ctx.createRadialGradient(p.x, p.y, 2, p.x, p.y, 34); g.addColorStop(0, rgba(col, .5)); g.addColorStop(1, rgba(col, 0));
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, 34, 0, TAU); ctx.fill();
      ctx.save(); ctx.translate(p.x, p.y + bob); ctx.fillStyle = '#0f1630'; ctx.strokeStyle = col; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(0, 0, 15, 0, TAU); ctx.fill(); ctx.stroke();
      ctx.fillStyle = col; ctx.strokeStyle = col; ctx.lineWidth = 2.4; ctx.lineJoin = 'round';
      if (p.kind === 'shield') { ctx.beginPath(); ctx.moveTo(0, -8); ctx.lineTo(7, -5); ctx.lineTo(6, 3); ctx.lineTo(0, 9); ctx.lineTo(-6, 3); ctx.lineTo(-7, -5); ctx.closePath(); ctx.stroke(); }
      else if (p.kind === 'rapid') { ctx.beginPath(); ctx.moveTo(2, -9); ctx.lineTo(-5, 1); ctx.lineTo(0, 1); ctx.lineTo(-2, 9); ctx.lineTo(5, -2); ctx.lineTo(0, -2); ctx.closePath(); ctx.fill(); }
      else { for (let i = 0; i < 8; i++) { const a = (i / 8) * TAU; ctx.beginPath(); ctx.moveTo(Math.cos(a) * 3, Math.sin(a) * 3); ctx.lineTo(Math.cos(a) * 9, Math.sin(a) * 9); ctx.stroke(); } }
      ctx.restore();
    }
  }

  _deadBodies(ctx, w) {
    for (const e of w.ents) {
      if (e.alive) continue;
      const age = w.t - e.deadAt, a = Math.max(0, 1 - age / 3.5); if (a <= 0) continue;
      const col = e.team === 0 ? this.pal.you : this.pal.foe;
      ctx.save(); ctx.globalAlpha = a; ctx.translate(e.x, e.y);
      ctx.fillStyle = shade(col, 0.55); ctx.beginPath(); ctx.arc(0, 0, e.r * (1 - Math.min(.3, age * .3)), 0, TAU); ctx.fill();
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 2.5; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-6, -6); ctx.lineTo(6, 6); ctx.moveTo(6, -6); ctx.lineTo(-6, 6); ctx.stroke();
      if (age < 1.6) { ctx.font = '700 12px system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.fillStyle = '#fff'; ctx.fillText('OUT', 0, -e.r - 6 - age * 8); }
      ctx.restore();
    }
  }

  _balls(ctx, w) {
    for (const b of w.balls) {
      const col = b.team === 0 ? this.pal.you : this.pal.foe, sp = Math.hypot(b.vx, b.vy), tx = b.x - (b.vx / sp) * 16, ty = b.y - (b.vy / sp) * 16;
      ctx.strokeStyle = rgba(col, .45); ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(b.x, b.y); ctx.stroke();
      ctx.fillStyle = col; ctx.beginPath(); ctx.arc(b.x, b.y, b.splash ? 6 : CFG.BALL_R, 0, TAU); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,.7)'; ctx.beginPath(); ctx.arc(b.x - 1, b.y - 1.2, 1.4, 0, TAU); ctx.fill();
    }
  }

  _ent(ctx, e, view) {
    const col = e.team === 0 ? this.pal.you : this.pal.foe, you = e.human;
    ctx.save(); ctx.translate(e.x, e.y);
    ctx.fillStyle = 'rgba(0,0,0,.35)'; ctx.beginPath(); ctx.ellipse(3, 6, e.r, e.r * 0.8, 0, 0, TAU); ctx.fill();
    if (e.dashT > 0) { ctx.globalAlpha = .35; ctx.fillStyle = col; ctx.beginPath(); ctx.arc(-e.dashDx * 14, -e.dashDy * 14, e.r * .9, 0, TAU); ctx.fill(); ctx.globalAlpha = 1; }
    // team ring: ally/you solid, enemy dashed (shape cue for colour-blind players)
    ctx.lineWidth = 3; ctx.strokeStyle = rgba(col, .95);
    if (e.team === 1) ctx.setLineDash([5, 4]); ctx.beginPath(); ctx.arc(0, 0, e.r + 5, 0, TAU); ctx.stroke(); ctx.setLineDash([]);
    if (e.rapidT > 0) { ctx.strokeStyle = '#ffb02e'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(0, 0, e.r + 9 + Math.sin(this.time * 20), 0, TAU); ctx.stroke(); }
    ctx.rotate(e.aim);
    // marker
    ctx.fillStyle = '#20263d'; ctx.fillRect(e.r * 0.2, -3.5, e.r + 8, 7);
    ctx.fillStyle = col; ctx.fillRect(e.r + 4, -4.5, 6, 9);
    ctx.rotate(-e.aim);
    const g = ctx.createRadialGradient(-5, -6, 2, 0, 0, e.r); g.addColorStop(0, shade(col, 1.35)); g.addColorStop(1, shade(col, 0.78));
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(0, 0, e.r, 0, TAU); ctx.fill();
    ctx.lineWidth = 2.5; ctx.strokeStyle = e.hurtT > 0 ? '#fff' : 'rgba(255,255,255,.85)'; ctx.stroke();
    ctx.rotate(e.aim); ctx.fillStyle = 'rgba(10,15,35,.85)'; ctx.fillRect(2, -6.5, 10, 13); ctx.fillStyle = 'rgba(255,255,255,.9)'; ctx.fillRect(5, -4.5, 5, 9); ctx.rotate(-e.aim);   // mask visor
    if (e.shield) { ctx.strokeStyle = 'rgba(109,240,255,.9)'; ctx.fillStyle = 'rgba(109,240,255,.16)'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(0, 0, e.r + 8 + Math.sin(this.time * 6), 0, TAU); ctx.fill(); ctx.stroke(); }
    if (you) {
      // ammo / reload arc + "you" marker
      const frac = e.reloadT > 0 ? 1 - e.reloadT / CFG.RELOAD : e.ammo / CFG.MAG;
      ctx.lineCap = 'round'; ctx.lineWidth = 3.5; ctx.strokeStyle = 'rgba(255,255,255,.18)'; ctx.beginPath(); ctx.arc(0, 0, e.r + 12, 0, TAU); ctx.stroke();
      ctx.strokeStyle = e.reloadT > 0 ? '#ffd23a' : e.ammo <= 6 ? '#ff6b6b' : '#ffffff'; ctx.beginPath(); ctx.arc(0, 0, e.r + 12, -Math.PI / 2, -Math.PI / 2 + TAU * Math.max(0.001, frac)); ctx.stroke();
      if (view.showYou) { ctx.fillStyle = '#fff'; ctx.beginPath(); const y = -e.r - 30 - Math.sin(this.time * 5) * 3; ctx.moveTo(0, y + 10); ctx.lineTo(-7, y); ctx.lineTo(7, y); ctx.closePath(); ctx.fill(); ctx.font = '800 11px system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.fillText('YOU', 0, y - 4); }
    }
    ctx.restore();
  }

  _parts(ctx, dt) {
    const out = [];
    for (const p of this.parts) {
      p.life -= dt; if (p.life <= 0) { if (p.stamp && this.arena) this._stamp({ x: p.x, y: p.y, color: p.col, surf: 'floor', size: 0.22 + p.size * 0.06, a: null, seed: (p.x * 1000 + p.y) | 0 }); continue; }
      const t = 1 - p.life / p.max;
      if (p.k === 'ring') { ctx.strokeStyle = rgba(p.col.length === 7 ? p.col : '#ffffff', 1 - t); ctx.lineWidth = 3 * (1 - t) + 1; ctx.beginPath(); ctx.arc(p.x, p.y, p.size * t, 0, TAU); ctx.stroke(); out.push(p); continue; }
      p.x += p.vx * dt; p.y += p.vy * dt;
      if (p.k === 'drop') { p.vx *= 0.94; p.vy *= 0.94; ctx.fillStyle = p.col; ctx.beginPath(); ctx.arc(p.x, p.y, p.size * (1 - t * 0.4), 0, TAU); ctx.fill(); }
      else if (p.k === 'puff') { ctx.fillStyle = rgba(p.col.length === 7 ? p.col : '#c9d4ff', 0.5 * (1 - t)); ctx.beginPath(); ctx.arc(p.x, p.y, p.size * (1 + t), 0, TAU); ctx.fill(); }
      else if (p.k === 'spark') { ctx.fillStyle = rgba(p.col, 1 - t); ctx.fillRect(p.x - 1, p.y - 1, 2.5, 2.5); }
      else if (p.k === 'conf') { p.rot += dt * 6; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.fillStyle = p.col; ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2); ctx.restore(); }
      out.push(p);
    }
    this.parts = out.length > 700 ? out.slice(-700) : out;
  }

  /** Composite floor + paint + bunkers into a shareable image. Returns a canvas. */
  exportArt(title, sub) {
    const A = this.arena, S = 1.5, W = A.w * S, H = A.h * S, pad = 28 * S, head = 70 * S, c = mk(W + pad * 2, H + pad * 2 + head), x = c.getContext('2d');
    x.fillStyle = '#0b1020'; x.fillRect(0, 0, c.width, c.height);
    x.translate(pad, pad + head);
    x.drawImage(this.floor, 0, 0, W, H);
    x.setTransform(1, 0, 0, 1, 0, 0); x.fillStyle = '#fff'; x.font = `900 ${34 * S}px system-ui, sans-serif`; x.fillText(title, pad, pad + 38 * S);
    x.fillStyle = '#9aa6c7'; x.font = `600 ${16 * S}px system-ui, sans-serif`; x.fillText(sub, pad, pad + 62 * S);
    x.textAlign = 'right'; x.fillStyle = this.pal.you; x.font = `900 ${20 * S}px system-ui, sans-serif`; x.fillText('PAINBALL', c.width - pad, pad + 38 * S);
    return c;
  }
}
