// WebAudio synth: zero audio assets (smaller download, works offline, no licensing).
// Context is created lazily on the first user gesture (browser autoplay policy).
export class GameAudio {
  constructor() { this.ctx = null; this.enabled = true; this.master = null; this.rollGain = null; this.rollFilter = null; }

  unlock() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      try { this.ctx = new AC(); } catch { return; }
      this.master = this.ctx.createGain(); this.master.gain.value = this.enabled ? 0.7 : 0;
      this.master.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') this.ctx.resume().catch(() => {});
  }

  setEnabled(on) {
    this.enabled = !!on;
    if (this.master) this.master.gain.setTargetAtTime(on ? 0.7 : 0, this.ctx.currentTime, 0.02);
  }

  _buildRoll() {
    const c = this.ctx, len = c.sampleRate * 2, buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
    let last = 0; for (let i = 0; i < len; i++) { last = (last + 0.04 * (Math.random() * 2 - 1)) / 1.04; d[i] = last * 8; } // brown-ish noise
    const src = c.createBufferSource(); src.buffer = buf; src.loop = true;
    this.rollFilter = c.createBiquadFilter(); this.rollFilter.type = 'lowpass'; this.rollFilter.frequency.value = 300;
    this.rollGain = c.createGain(); this.rollGain.gain.value = 0;
    src.connect(this.rollFilter).connect(this.rollGain).connect(this.master); src.start();
  }

  /** Continuous rolling rumble: louder and brighter with speed. */
  setRolling(speed) {
    if (!this.ctx || !this.rollGain) return;
    const k = Math.min(1, speed / 6), t = this.ctx.currentTime;
    this.rollGain.gain.setTargetAtTime(Math.pow(k, 1.3) * 0.5, t, 0.05);
    this.rollFilter.frequency.setTargetAtTime(160 + k * 900, t, 0.05);
  }

  _tone(freq, dur, { type = 'sine', vol = 0.2, slideTo = null, delay = 0 } = {}) {
    if (!this.ctx || !this.enabled) return;
    const c = this.ctx, t = c.currentTime + delay, o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(this.master); o.start(t); o.stop(t + dur + 0.02);
  }

  _noise(dur, { vol = 0.2, freq = 1500, delay = 0 } = {}) {
    if (!this.ctx || !this.enabled) return;
    const c = this.ctx, t = c.currentTime + delay, n = Math.floor(c.sampleRate * dur), buf = c.createBuffer(1, n, c.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n);
    const s = c.createBufferSource(); s.buffer = buf;
    const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = freq;
    const g = c.createGain(); g.gain.value = vol;
    s.connect(f).connect(g).connect(this.master); s.start(t);
  }

  _pan(x) { return Math.max(-1, Math.min(1, x)); }
  /** Pneumatic "pop" + hiss. pan in [-1,1], vol scale 0..1 (distance). */
  shot(pan = 0, v = 1, you = false) {
    if (!this.ctx || !this.enabled) return;
    this._tone(you ? 420 : 300, 0.07, { type: 'square', vol: 0.07 * v, slideTo: 90 });
    this._noise(0.09, { vol: (you ? 0.12 : 0.07) * v, freq: you ? 2600 : 1800 });
  }
  splat(v = 1) { this._noise(0.12, { vol: 0.1 * v, freq: 700 }); this._tone(150, 0.1, { type: 'sine', vol: 0.09 * v, slideTo: 60 }); }
  elim(you = false) { this._tone(you ? 220 : 520, 0.28, { type: 'triangle', vol: 0.2, slideTo: you ? 70 : 880 }); this._noise(0.2, { vol: 0.15, freq: 900 }); }
  reload() { this._tone(900, 0.04, { type: 'square', vol: 0.05 }); this._tone(600, 0.06, { type: 'square', vol: 0.05, delay: 0.09 }); }
  reloaded() { this._tone(700, 0.05, { type: 'square', vol: 0.07 }); this._tone(1100, 0.08, { type: 'square', vol: 0.06, delay: 0.06 }); }
  dash() { this._noise(0.18, { vol: 0.1, freq: 1200 }); this._tone(300, 0.15, { type: 'sine', vol: 0.06, slideTo: 700 }); }
  pickup() { [660, 880, 1320].forEach((f, i) => this._tone(f, 0.12, { type: 'triangle', vol: 0.11, delay: i * 0.05 })); }
  shield() { this._tone(900, 0.2, { type: 'sine', vol: 0.12, slideTo: 300 }); }
  go() { this._tone(880, 0.25, { type: 'triangle', vol: 0.18 }); }
  tick() { this._tone(440, 0.08, { type: 'triangle', vol: 0.1 }); }
  win() { [523, 659, 784, 1047, 1319].forEach((f, i) => this._tone(f, 0.3, { type: 'triangle', vol: 0.16, delay: i * 0.09 })); }
  lose() { [392, 330, 262, 196].forEach((f, i) => this._tone(f, 0.34, { type: 'sawtooth', vol: 0.09, delay: i * 0.13 })); }
  star(i = 0) { this._tone(660 * Math.pow(1.25, i), 0.18, { type: 'triangle', vol: 0.14 }); }
  coin() { this._tone(988, 0.07, { type: 'square', vol: 0.06 }); this._tone(1319, 0.14, { type: 'square', vol: 0.06, delay: 0.06 }); }
  click() { this._tone(520, 0.05, { type: 'triangle', vol: 0.08 }); }
  error() { this._tone(140, 0.18, { type: 'sawtooth', vol: 0.08 }); }
}
