// One-thumb duel input. Hold anywhere = rise + aim (drag), release = fire + drop, 2nd finger tap = extra shot, A/D or buttons = swap cover.
import { assistDuel, solveAim, zones } from '../core/duel.js';

export class DuelInput {
  constructor(el, { onPause }) {
    this.el = el; this.onPause = onPause; this.enabled = false; this.assist = 2; this.sens = 1; this.getState = () => null;
    this.hold = false; this.releaseQ = false; this.fireQ = false; this.swapQ = 0; this.yaw = 0; this.pitch = 0; this.id = null; this.lx = 0; this.ly = 0; this.touchSeen = false; this.wasHold = false;
    el.addEventListener('pointerdown', e => this._down(e)); el.addEventListener('pointermove', e => this._move(e));
    el.addEventListener('pointerup', e => this._up(e, true)); el.addEventListener('pointercancel', e => this._up(e, false)); el.addEventListener('contextmenu', e => e.preventDefault());
    addEventListener('keydown', e => this._key(e, true)); addEventListener('keyup', e => this._key(e, false)); addEventListener('blur', () => this.reset());
  }
  reset() { this.hold = false; this.releaseQ = this.fireQ = false; this.swapQ = 0; this.id = null; this.wasHold = false; }
  requestSwap(d) { this.swapQ = d; }
  _down(e) {
    if (!this.enabled) return;
    if (e.pointerType !== 'mouse') this.touchSeen = true; else if (e.button !== 0) return;
    if (this.id != null) { this.fireQ = true; return; }                      // second finger = extra shot while staying up
    this.id = e.pointerId; this.hold = true; this.lx = e.clientX; this.ly = e.clientY; try { this.el.setPointerCapture?.(e.pointerId); } catch { /* never fatal */ }
  }
  _move(e) {
    if (!this.enabled || e.pointerId !== this.id) return;
    const dx = e.pointerType === 'mouse' && e.movementX != null ? e.movementX : e.clientX - this.lx, dy = e.pointerType === 'mouse' && e.movementY != null ? e.movementY : e.clientY - this.ly;
    this.lx = e.clientX; this.ly = e.clientY;
    const k = (e.pointerType === 'mouse' ? 0.0026 : 0.0042) * this.sens;
    this.yaw = Math.max(-0.66, Math.min(0.66, this.yaw + dx * k)); this.pitch = Math.max(-0.28, Math.min(0.34, this.pitch - dy * k));
  }
  _up(e, fire) {
    if (e.pointerId !== this.id) return;
    this.id = null; if (this.hold) { this.hold = false; if (fire && this.enabled) this.releaseQ = true; }
  }
  _key(e, down) {
    const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if (down && (k === 'Escape' || k === 'p')) { this.onPause?.(); return; }
    if (!this.enabled || !down) return;
    if (k === 'a' || k === 'ArrowLeft') this.swapQ = -1; else if (k === 'd' || k === 'ArrowRight') this.swapQ = 1; else if (k === ' ') { this.fireQ = true; e.preventDefault?.(); }
  }
  /** Sample once per sim tick -> core input. */
  sample() {
    const s = this.getState(), out = { hold: this.hold, release: false, fire: false, swap: 0, yaw: this.yaw, pitch: this.pitch };
    if (this.hold && !this.wasHold && s && this.assist > 0) {              // rising: start roughly on the enemy so first aim is close
      const z = zones(s.f[1]).find(q => q.type === 'head'), a = solveAim(s.f[0], z), k = 0.35 + 0.15 * this.assist; this.yaw = a.yaw * k; this.pitch = a.pitch * k;
    }
    this.wasHold = this.hold;
    if (this.hold && s && this.assist > 0) { const a = assistDuel(s, this.yaw, this.pitch, [0, 0.35, 0.6, 0.9][this.assist]); this.yaw = a.yaw; this.pitch = a.pitch; }
    out.yaw = this.yaw; out.pitch = this.pitch;
    if (this.releaseQ) { out.release = true; this.releaseQ = false; out.hold = true; }   // the release tick still counts as risen so the shot leaves
    if (this.fireQ) { out.fire = true; this.fireQ = false; }
    if (this.swapQ) { out.swap = this.swapQ; this.swapQ = 0; }
    return out;
  }
}
