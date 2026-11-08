// Campaign / daily configuration, scoring, stars, rewards, palettes. Pure.
export const MAX_LEVEL_AUTHORED = 30;

const ADJ = ['Neon', 'Sunset', 'Rusty', 'Frosty', 'Turbo', 'Electric', 'Velvet', 'Cosmic', 'Lazy', 'Crimson', 'Mellow', 'Atomic', 'Lucky', 'Wild', 'Chrome', 'Jelly'];
const NOUN = ['Alley', 'Yard', 'Warehouse', 'Canyon', 'Garden', 'Depot', 'Arcade', 'Plaza', 'Quarry', 'Dockside', 'Rooftop', 'Maze', 'Fields', 'Foundry', 'Harbor', 'Orchard'];
export function arenaName(seed) { let h = 0; for (const c of String(seed)) h = (h * 31 + c.charCodeAt(0)) >>> 0; return `${ADJ[h % ADJ.length]} ${NOUN[(h >>> 5) % NOUN.length]}`; }

export const clamp01 = v => Math.min(1, Math.max(0, v));
export const enemySkill = n => clamp01(0.12 + 0.66 * (1 - Math.exp(-n / 22)));
export const allySkill = n => clamp01(0.45 + 0.25 * (1 - Math.exp(-n / 10)));
export const sizeFor = n => (n <= 3 ? 1 : n <= 9 ? 2 : n <= 19 ? 3 : 4);
export const levelLabel = s => (s < 0.3 ? 'Rookie' : s < 0.5 ? 'Regular' : s < 0.7 ? 'Veteran' : s < 0.85 ? 'Elite' : 'Legend');

const ROLE_SETS = [['rusher', 'anchor', 'flanker', 'sniper'], ['anchor', 'rusher', 'sniper', 'flanker'], ['flanker', 'rusher', 'anchor', 'sniper'], ['sniper', 'flanker', 'rusher', 'anchor']];

/** @returns match config used by the shell: {kind,n,seed,level,sizes,skill:[ally,enemy],roles,name,boss} */
export function levelConfig(n) {
  n = Math.max(1, n | 0);
  const size = sizeFor(n), boss = n % 5 === 0;
  return {
    kind: 'journey', n, seed: `lvl:${n}`, level: n, sizes: [size, size], skill: [allySkill(n), Math.min(1, enemySkill(n) + (boss ? 0.08 : 0))],
    roles: [ROLE_SETS[n % 4], ROLE_SETS[(n + 1) % 4]], name: arenaName(`lvl:${n}`), boss, label: `Level ${n}`, winRounds: 2,
  };
}
export function dailyConfig(key) {
  return { kind: 'daily', n: 0, seed: `daily:${key}`, level: 12, sizes: [3, 3], skill: [0.55, 0.62], roles: [ROLE_SETS[1], ROLE_SETS[2]], name: arenaName(`daily:${key}`), boss: false, label: 'Daily Arena', winRounds: 2, key };
}

/** ★ win · ★★ win 2-0 · ★★★ win 2-0 and never eliminated. */
export function matchStars({ won, lostRounds, eliminated }) {
  if (!won) return 0;
  if (lostRounds > 0) return 1;
  return eliminated ? 2 : 3;
}
export function rewards({ won, roundsWon, kills, stars, firstStars, daily }) {
  let coins = roundsWon * 3 + kills + (won ? 10 : 0);
  if (firstStars && stars === 3) coins += 25;
  if (daily && won) coins += 15;
  return coins;
}

// Palettes: each pair is colour-blind-safe (differs in hue AND lightness). Enemy rings are also dashed (shape cue).
export const PALETTES = [
  { id: 'classic', name: 'Classic', cost: 0, you: '#2f8bff', foe: '#ff8a1f' },
  { id: 'neon', name: 'Neon', cost: 40, you: '#ff3df2', foe: '#c6ff1a' },
  { id: 'sunset', name: 'Sunset', cost: 60, you: '#ff5e7e', foe: '#19d9c5' },
  { id: 'toxic', name: 'Toxic', cost: 60, you: '#7dff3a', foe: '#a24dff' },
  { id: 'candy', name: 'Candy', cost: 90, you: '#ff9ad5', foe: '#2ee6ff' },
  { id: 'gold', name: 'Gold Rush', cost: 120, you: '#ffd23a', foe: '#3a6dff' },
];
export const paletteOf = id => PALETTES.find(p => p.id === id) || PALETTES[0];

// ---------- daily ----------
export const dateKey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
export function prevDayKey(key) { const [y, m, d] = key.split('-').map(Number); return dateKey(new Date(y, m - 1, d - 1, 12)); }   // noon: DST-safe
/** Record a daily win. Returns {first, streak}. Streak continues only if last === yesterday. */
export function claimDaily(daily, key) {
  if (daily.last === key) return { first: false, streak: daily.streak };
  daily.streak = daily.last === prevDayKey(key) ? daily.streak + 1 : 1;
  daily.bestStreak = Math.max(daily.bestStreak, daily.streak); daily.last = key;
  daily.done = [...daily.done.filter(k => k !== key), key].slice(-60);
  return { first: true, streak: daily.streak };
}
