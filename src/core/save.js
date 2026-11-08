// Versioned local save: parse -> migrate -> sanitize, with backup + in-memory fallback.
// Pure (storage is injected) so it is unit-testable in Node. See docs/TECH_DESIGN.md §8.
export const SAVE_VERSION = 1;
export const SAVE_KEY = 'painball.save';
export const BACKUP_KEY = 'painball.save.bak';

export function defaultSave() {
  return {
    version: SAVE_VERSION,
    coins: 20,
    level: 1,
    stars: {},
    daily: { last: null, streak: 0, bestStreak: 0, done: [] },
    palettes: ['classic'],
    settings: { sound: true, haptics: true, assist: 2, quality: 'high', palette: 'classic', lefty: false, reduceMotion: false },
    flags: { tutorialSeen: false },
    stats: { matches: 0, wins: 0, rounds: 0, roundsWon: 0, elims: 0, shots: 0, hits: 0, shares: 0, dashes: 0, playSec: 0 },
  };
}

const int = (v, lo, hi, d) => (Number.isFinite(v) ? Math.min(hi, Math.max(lo, Math.floor(v))) : d);
const num = (v, lo, hi, d) => (Number.isFinite(v) ? Math.min(hi, Math.max(lo, v)) : d);
const bool = (v, d) => (typeof v === 'boolean' ? v : d);
const oneOf = (v, list, d) => (list.includes(v) ? v : d);
const isKey = v => typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v);

/** Upgrade any older shape to the current one. Returns null if `raw` is not an object. */
export function migrate(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null;
  let d = { ...raw };
  let v = Number.isInteger(d.version) ? d.version : 0;
  if (v < 1) {
    // v0 (pre-release prototype): flat { coins, level, sound }
    d = {
      version: 1, coins: d.coins, level: d.level,
      settings: { sound: d.sound },
    };
    v = 1;
  }
  // future: if (v < 2) { ...; v = 2 }
  if (v > SAVE_VERSION) return null; // saved by a newer build: do not guess
  d.version = SAVE_VERSION;
  return d;
}

/** Clamp/repair every field so the rest of the game can trust the shape. */
export function sanitize(d) {
  const def = defaultSave();
  const s = d.settings || {}, f = d.flags || {}, st = d.stats || {}, dl = d.daily || {};
  const stars = {};
  for (const [k, v] of Object.entries(d.stars && typeof d.stars === 'object' ? d.stars : {})) {
    if (/^\d+$/.test(k) && v >= 1 && v <= 3) stars[k] = Math.floor(v);
  }
  const known = ['classic', 'neon', 'sunset', 'toxic', 'candy', 'gold'];
  const palettes = Array.from(new Set(['classic', ...(Array.isArray(d.palettes) ? d.palettes.filter(p => known.includes(p)) : [])]));
  return {
    version: SAVE_VERSION,
    coins: int(d.coins, 0, 10_000_000, def.coins),
    level: int(d.level, 1, 1_000_000, def.level),
    stars,
    daily: {
      last: isKey(dl.last) ? dl.last : null,
      streak: int(dl.streak, 0, 100_000, 0),
      bestStreak: int(dl.bestStreak, 0, 100_000, 0),
      done: Array.isArray(dl.done) ? dl.done.filter(isKey).slice(-60) : [],
    },
    palettes,
    settings: {
      sound: bool(s.sound, true),
      haptics: bool(s.haptics, true),
      assist: int(s.assist, 0, 3, 2),
      quality: oneOf(s.quality, ['high', 'low'], 'high'),
      palette: palettes.includes(s.palette) ? s.palette : 'classic',
      lefty: bool(s.lefty, false),
      reduceMotion: bool(s.reduceMotion, false),
    },
    flags: { tutorialSeen: bool(f.tutorialSeen, false) },
    stats: Object.fromEntries(Object.keys(def.stats).map(k => [k, int(st[k], 0, 1e12, 0)])),
  };
}

/** Storage that lives only in memory (private mode / blocked storage). */
export class MemoryStorage {
  constructor() { this.m = new Map(); }
  getItem(k) { return this.m.has(k) ? this.m.get(k) : null; }
  setItem(k, v) { this.m.set(k, String(v)); }
  removeItem(k) { this.m.delete(k); }
}

function parse(raw) {
  if (raw == null) return null;
  try { const m = migrate(JSON.parse(raw)); return m ? sanitize(m) : null; } catch { return null; }
}

export class SaveStore {
  constructor(storage) {
    this.persistent = true;
    this.storage = storage;
    if (!storage) { this.storage = new MemoryStorage(); this.persistent = false; }
    else {
      try { storage.setItem('painball.probe', '1'); storage.removeItem('painball.probe'); }
      catch { this.storage = new MemoryStorage(); this.persistent = false; }
    }
    this.state = this.load();
  }

  load() {
    let s = null, source = 'default';
    try { s = parse(this.storage.getItem(SAVE_KEY)); if (s) source = 'main'; } catch { /* ignore */ }
    if (!s) { try { s = parse(this.storage.getItem(BACKUP_KEY)); if (s) source = 'backup'; } catch { /* ignore */ } }
    this.loadedFrom = source;
    return s || defaultSave();
  }

  /** Persist current state: previous good value becomes the backup first. */
  save() {
    try {
      const prev = this.storage.getItem(SAVE_KEY);
      if (prev != null && parse(prev)) this.storage.setItem(BACKUP_KEY, prev);
      this.storage.setItem(SAVE_KEY, JSON.stringify(this.state));
      return true;
    } catch { this.persistent = false; return false; }
  }

  reset() {
    this.state = defaultSave();
    try { this.storage.removeItem(SAVE_KEY); this.storage.removeItem(BACKUP_KEY); } catch { /* ignore */ }
    return this.state;
  }
}
