// Input layer: actions, not keys. Produces one {mx,my,aim,fire,dash,reload} per frame for the human.
//  Touch: floating twin sticks. Left half = move, right half = aim (+ auto-fire while pushed). Tap right = one assisted shot.
//         Double-tap left = dash. DASH / RELOAD buttons exist as well (HUD).
//  Desktop: WASD/arrows + mouse aim, LMB/Space fire, Shift dash, R reload.
import { assistAim } from '../core/assist.js';

const DEAD = 10, FULL = 56, FIRE_AT = 0.32;

export class Input {
  constructor(el, { toWorld, getWorld, onPause, onStick }) {
    this.el = el; this.toWorld = toWorld; this.getWorld = getWorld; this.onPause = onPause; this.onStick = onStick;
    this.keys = new Set(); this.mouse = { x: 0, y: 0, down: false, has: false };
    this.move = { id: null, ox: 0, oy: 0, x: 0, y: 0 }; this.aimS = { id: null, ox: 0, oy: 0, x: 0, y: 0, down: 0, moved: false };
    this.tapFire = 0; this.dashQ = false; this.reloadQ = false; this.lastTap = 0; this.lastDir = { x: 0, y: -1 };
    this.assist = 2; this.lefty = false; this.touchSeen = false; this.enabled = false; this.lastAim = null;
    el.addEventListener('pointerdown', e => this._down(e)); el.addEventListener('pointermove', e => this._move(e));
    for (const t of ['pointerup', 'pointercancel']) el.addEventListener(t, e => this._up(e));
    el.addEventListener('contextmenu', e => e.preventDefault());
    addEventListener('keydown', e => this._key(e, true)); addEventListener('keyup', e => this._key(e, false));
    addEventListener('blur', () => { this.keys.clear(); this.mouse.down = false; });
  }
  reset() { this.keys.clear(); this.move.id = this.aimS.id = null; this.move.x = this.move.y = this.aimS.x = this.aimS.y = 0; this.mouse.down = false; this.tapFire = 0; this.dashQ = this.reloadQ = false; this.onStick?.('move', null); this.onStick?.('aim', null); }
  requestDash() { this.dashQ = true; } requestReload() { this.reloadQ = true; }

  _side(x) { const right = x > innerWidth / 2; return this.lefty ? !right : right; }   // true = aim side
  _down(e) {
    if (!this.enabled) return;
    if (e.pointerType === 'mouse') { if (e.button === 0) { this.mouse.down = true; this.mouse.x = e.clientX; this.mouse.y = e.clientY; this.mouse.has = true; } return; }
    this.touchSeen = true; this.el.setPointerCapture?.(e.pointerId);
    if (this._side(e.clientX)) {
      if (this.aimS.id != null) return;
      Object.assign(this.aimS, { id: e.pointerId, ox: e.clientX, oy: e.clientY, x: 0, y: 0, down: performance.now(), moved: false }); this.onStick?.('aim', { ox: e.clientX, oy: e.clientY, x: 0, y: 0 });
    } else {
      if (this.move.id != null) return;
      const now = performance.now(); if (now - this.lastTap < 280) { this.dashQ = true; this.lastTap = 0; } else this.lastTap = now;
      Object.assign(this.move, { id: e.pointerId, ox: e.clientX, oy: e.clientY, x: 0, y: 0 }); this.onStick?.('move', { ox: e.clientX, oy: e.clientY, x: 0, y: 0 });
    }
  }
  _move(e) {
    if (e.pointerType === 'mouse') { this.mouse.x = e.clientX; this.mouse.y = e.clientY; this.mouse.has = true; return; }
    const s = e.pointerId === this.move.id ? this.move : e.pointerId === this.aimS.id ? this.aimS : null; if (!s) return;
    const dx = e.clientX - s.ox, dy = e.clientY - s.oy, d = Math.hypot(dx, dy);
    if (d > DEAD) { const k = Math.min(1, (d - DEAD) / (FULL - DEAD)); s.x = (dx / d) * k; s.y = (dy / d) * k; if (s === this.aimS) this.aimS.moved = true; } else { s.x = 0; s.y = 0; }
    // stick follows the thumb when dragged far (floating stick)
    if (d > FULL * 1.6) { s.ox += (dx / d) * (d - FULL * 1.6); s.oy += (dy / d) * (d - FULL * 1.6); }
    this.onStick?.(s === this.move ? 'move' : 'aim', { ox: s.ox, oy: s.oy, x: s.x, y: s.y });
  }
  _up(e) {
    if (e.pointerType === 'mouse') { if (e.button === 0) this.mouse.down = false; return; }
    if (e.pointerId === this.move.id) { this.move.id = null; this.move.x = this.move.y = 0; this.onStick?.('move', null); }
    if (e.pointerId === this.aimS.id) {
      if (!this.aimS.moved && performance.now() - this.aimS.down < 260) this.tapFire = 0.12;     // quick tap = assisted single shot
      this.aimS.id = null; this.aimS.x = this.aimS.y = 0; this.onStick?.('aim', null);
    }
  }
  _key(e, down) {
    const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if (down && (k === 'Escape' || k === 'p')) { this.onPause?.(); return; }
    if (!this.enabled) return;
    if (['w', 'a', 's', 'd', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ', 'Shift', 'r'].includes(k)) e.preventDefault?.();
    if (down) { if (!this.keys.has(k)) { if (k === 'Shift') this.dashQ = true; if (k === 'r') this.reloadQ = true; } this.keys.add(k); } else this.keys.delete(k);
  }

  /** Per-frame sample. `you` is the human entity; returns a sim input. */
  sample(dt) {
    const you = this.getWorld()?.ents.find(e => e.human), out = { mx: 0, my: 0, aim: null, fire: false, dash: false, reload: false };
    if (!you || !you.alive) { this.dashQ = this.reloadQ = false; this.tapFire = 0; return out; }
    const K = this.keys;
    out.mx = (K.has('d') || K.has('ArrowRight') ? 1 : 0) - (K.has('a') || K.has('ArrowLeft') ? 1 : 0) + this.move.x;
    out.my = (K.has('s') || K.has('ArrowDown') ? 1 : 0) - (K.has('w') || K.has('ArrowUp') ? 1 : 0) + this.move.y;
    const m = Math.hypot(out.mx, out.my); if (m > 1) { out.mx /= m; out.my /= m; }
    if (m > 0.2) { this.lastDir = { x: out.mx / Math.max(m, 1), y: out.my / Math.max(m, 1) }; }
    const w = this.getWorld(), strength = [0, 0.35, 0.6, 0.85][this.assist] ?? 0.6;
    if (this.aimS.id != null && Math.hypot(this.aimS.x, this.aimS.y) > 0.05) {
      const a = Math.atan2(this.aimS.y, this.aimS.x); out.aim = assistAim(w, you, a, strength);
      out.fire = Math.hypot(this.aimS.x, this.aimS.y) > FIRE_AT;
    } else if (this.tapFire > 0) {
      this.tapFire -= dt; out.aim = assistAim(w, you, this.lastAim ?? you.aim, Math.max(strength, 0.6), true); out.fire = true;
    } else if (!this.touchSeen || this.mouse.has) {
      if (this.mouse.has) { const p = this.toWorld(this.mouse.x, this.mouse.y); out.aim = assistAim(w, you, Math.atan2(p.y - you.y, p.x - you.x), strength * 0.5); }
      out.fire = this.mouse.down || K.has(' ');
    }
    if (out.aim != null) this.lastAim = out.aim;
    if (this.dashQ) { out.dash = true; this.dashQ = false; }
    if (this.reloadQ) { out.reload = true; this.reloadQ = false; }
    return out;
  }
}
