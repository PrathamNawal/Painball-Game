// THE LOCKED STUDY — pure puzzle logic (no DOM, no three.js). Runs in Node for tests.
// A "case" is a 4-digit code. Each digit has a NOTE in one room that points at EVIDENCE in another
// room (a stopped clock, a count of candles, dots or coat hooks). Each kind of evidence also has a
// DECOY of the same kind with a different value in a different room, so the note's room name matters.
// The note of digit i sits in the room that holds the evidence of digit i-1, so walking the rooms in
// order solves the whole case — but you can start anywhere.

export const KINDS = ['clock', 'candles', 'dots', 'hooks'];
export const ROOM_IDS = ['hall', 'kitchen', 'library', 'bedroom'];
export const ROOM_NAMES = { hall: 'entrance hall', kitchen: 'kitchen', library: 'library', bedroom: 'bedroom' };
export const KIND_NOUN = { clock: 'grandfather clock', candles: 'candles', dots: 'portrait', hooks: 'coat hooks' };
export const PAR_SECONDS = 120, HINT_COST = 10, WRONG_COST = 5;
// Three levels that get harder. decoys = look-alike objects per clue kind; landmarks = notes name rooms by their rug colour instead of their name.
export const LEVELS = [
  { n: 1, name: 'Warm-up', decoys: 0, landmarks: false, par: 150, blurb: 'No decoys. Notes name the room.' },
  { n: 2, name: 'The Case', decoys: 1, landmarks: false, par: 120, blurb: 'Every clue has a look-alike decoy.' },
  { n: 3, name: 'Cold Case', decoys: 2, landmarks: true, par: 100, blurb: 'Two decoys each, and notes describe rooms by their rug.' },
];
export const levelOf = n => LEVELS[Math.max(0, Math.min(2, (n | 0) - 1))];
export const ROOM_LANDMARK = { hall: 'room with the red rug', kitchen: 'room with the teal rug', library: 'room with the purple rug', bedroom: 'room with the brown rug' };

export function hashSeed(str) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
  return h >>> 0;
}
export function makeRng(seed) {
  let a = (typeof seed === 'string' ? hashSeed(seed) : seed) >>> 0;
  return () => {
    a = (a + 0x9e3779b9) >>> 0;
    let t = a ^ (a >>> 16); t = Math.imul(t, 0x21f0aaad) >>> 0;
    t ^= t >>> 15; t = Math.imul(t, 0x735a2d97) >>> 0;
    return ((t ^ (t >>> 15)) >>> 0) / 4294967296;
  };
}
const shuffle = (arr, r) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = (arr, r) => arr[Math.floor(r() * arr.length)];

const PHRASES = {
  clock: [
    (p, room) => `Digit ${p} is the hour the ${room}'s grandfather clock stopped at. The hand never lies.`,
    (p, room) => `Look at the clock in the ${room}. Its frozen hour is digit ${p}.`,
  ],
  candles: [
    (p, room) => `Digit ${p} is the number of candles burning in the ${room}.`,
    (p, room) => `Count every candle in the ${room}. That is digit ${p}.`,
  ],
  dots: [
    (p, room) => `Digit ${p}: count the painted dots on the portrait in the ${room}.`,
    (p, room) => `The portrait in the ${room} hides digit ${p} — one dot for each.`,
  ],
  hooks: [
    (p, room) => `Digit ${p} is how many coat hooks are screwed into the ${room} wall.`,
    (p, room) => `Count the coat hooks in the ${room}. That many is digit ${p}.`,
  ],
};

/** Deterministically build a full case from a seed (number or string). */
export function generateCase(seed, level = 2) {
  const L = levelOf(level), r = makeRng(`${seed}|L${L.n}`);
  const roomOrder = shuffle(ROOM_IDS, r), kinds = shuffle(KINDS, r);
  const code = Array.from({ length: 4 }, () => 1 + Math.floor(r() * 9));
  const digits = code.map((value, i) => ({ pos: i + 1, value, kind: kinds[i], noteRoom: roomOrder[i], evidenceRoom: roomOrder[(i + 1) % 4] }));
  const objects = [];
  for (const d of digits) {
    objects.push({ id: `${d.kind}@${d.evidenceRoom}`, kind: d.kind, room: d.evidenceRoom, value: d.value, role: 'evidence', pos: d.pos });
    const decoyRooms = shuffle(ROOM_IDS.filter(x => x !== d.evidenceRoom), r).slice(0, L.decoys), used = new Set([d.value]);
    for (const decoyRoom of decoyRooms) {
      let dv = 1 + Math.floor(r() * 9); while (used.has(dv)) dv = (dv % 9) + 1; used.add(dv);   // decoys differ from the truth and from each other
      objects.push({ id: `${d.kind}@${decoyRoom}`, kind: d.kind, room: decoyRoom, value: dv, role: 'decoy', pos: d.pos });
    }
  }
  const where = room => (L.landmarks ? ROOM_LANDMARK[room] : ROOM_NAMES[room]);
  const notes = digits.map(d => ({ pos: d.pos, room: d.noteRoom, text: pick(PHRASES[d.kind], r)(d.pos, where(d.evidenceRoom)) }));
  return { seed, level: L.n, code, digits, objects, notes };
}

/** What a perfect observer reads from the object of `kind` standing in `room` (null if none). */
export function readEvidence(c, kind, room) { const o = c.objects.find(x => x.kind === kind && x.room === room); return o ? o.value : null; }
/** Solve a case the way a player does: follow each note's (kind, room) and read the object. */
export function solveFromNotes(c) {
  return c.digits.map(d => readEvidence(c, d.kind, d.evidenceRoom));
}
export const checkCode = (c, input) => { const a = Array.isArray(input) ? input.join('') : String(input); return a === c.code.join(''); };

/** Next hint given which notes (by pos) the player found and which evidence ids they examined. */
export const roomPhrase = (c, room) => (levelOf(c.level).landmarks ? ROOM_LANDMARK[room] : ROOM_NAMES[room]);
export function hint(c, found, examined) {
  const f = found instanceof Set ? found : new Set(found), ex = examined instanceof Set ? examined : new Set(examined);
  for (const d of c.digits) if (f.has(d.pos) && !ex.has(`${d.kind}@${d.evidenceRoom}`)) return { text: `Digit ${d.pos}: study the ${KIND_NOUN[d.kind]} in the ${roomPhrase(c, d.evidenceRoom)}.`, kind: 'evidence' };
  const miss = c.digits.find(d => !f.has(d.pos));
  if (miss) return { text: `A note is waiting in the ${roomPhrase(c, miss.noteRoom)}.`, kind: 'note' };
  return { text: 'You have every note. Enter digits 1 to 4 in order at the study door.', kind: 'final' };
}

export const parFor = level => levelOf(level).par;
export const effectiveSeconds = (sec, hints, wrong) => sec + hints * HINT_COST + wrong * WRONG_COST;
export const starsFor = (eff, par = PAR_SECONDS) => (eff <= par ? 3 : eff <= par * 1.5 ? 2 : 1);
export const fmtTime = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
export const dailySeed = (d = new Date()) => `daily-${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

/** Score: 100 per case token, +500 for opening the study, plus a time bonus (3 pts per second under 5:00 of score time). */
export const scoreFor = ({ tokens, solved, eff }) => tokens * 100 + (solved ? 500 + Math.max(0, Math.round((300 - eff) * 3)) : 0);
