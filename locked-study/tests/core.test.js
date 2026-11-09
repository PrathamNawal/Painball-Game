import test from 'node:test';
import assert from 'node:assert/strict';
import { generateCase, solveFromNotes, readEvidence, checkCode, hint, scoreFor, LEVELS, ROOM_LANDMARK, parFor, starsFor, effectiveSeconds, makeRng, ROOM_IDS, KINDS, dailySeed } from '../src/core.js';

test('same seed -> identical case; different seeds differ', () => {
  assert.deepEqual(generateCase('abc'), generateCase('abc')); assert.deepEqual(generateCase('abc', 3), generateCase('abc', 3));
  assert.notDeepEqual(generateCase('abc').code, generateCase('abd').code);
  const r = makeRng(7), a = r(), b = r(); assert.ok(a >= 0 && a < 1 && a !== b);
});

for (const L of LEVELS) test(`level ${L.n} (${L.name}): 600 cases solvable, unambiguous, decoys never match, every room used once`, () => {
  for (let s = 0; s < 600; s++) {
    const c = generateCase(s, L.n);
    assert.deepEqual(solveFromNotes(c), c.code, `seed ${s} not solvable from notes`);
    assert.ok(c.code.every(d => d >= 1 && d <= 9));
    assert.equal(c.objects.length, 4 + 4 * L.decoys); assert.equal(new Set(c.objects.map(o => o.id)).size, c.objects.length, 'object ids unique (one per kind per room)');
    assert.equal(new Set(c.digits.map(d => d.kind)).size, 4);
    assert.equal(new Set(c.notes.map(n => n.room)).size, 4, 'one note per room');
    for (const d of c.digits) {
      assert.notEqual(d.noteRoom, d.evidenceRoom);
      const decoys = c.objects.filter(o => o.kind === d.kind && o.role === 'decoy');
      assert.equal(decoys.length, L.decoys); assert.equal(new Set(decoys.map(x => x.value)).size, decoys.length, 'decoys differ from each other');
      for (const decoy of decoys) { assert.notEqual(decoy.room, d.evidenceRoom); assert.notEqual(decoy.value, d.value, 'decoy would give the same digit'); assert.ok(ROOM_IDS.includes(decoy.room) && KINDS.includes(decoy.kind)); }
      const note = c.notes.find(n => n.pos === d.pos), want = L.landmarks ? ROOM_LANDMARK[d.evidenceRoom] : (d.evidenceRoom === 'hall' ? 'entrance hall' : d.evidenceRoom);
      assert.ok(note.text.includes(want), `note should name "${want}": ${note.text}`);
    }
  }
});

test('code check', () => {
  const c = generateCase(1);
  assert.ok(checkCode(c, c.code)); assert.ok(checkCode(c, c.code.join('')));
  assert.ok(!checkCode(c, [...c.code.slice(0, 3), (c.code[3] % 9) + 1]));
  assert.ok(!checkCode(c, '12'));
});

test('hints guide: note -> evidence -> final', () => {
  const c = generateCase(5);
  assert.equal(hint(c, [], []).kind, 'note');
  const first = c.digits[0];
  assert.match(hint(c, [1], []).text, /Digit 1/);
  assert.equal(hint(c, [1], []).kind, 'evidence');
  assert.equal(hint(c, [1], [`${first.kind}@${first.evidenceRoom}`]).kind, 'note');
  const all = c.digits.map(d => d.pos), ex = c.digits.map(d => `${d.kind}@${d.evidenceRoom}`);
  assert.equal(hint(c, all, ex).kind, 'final');
});

test('scoring + daily seed', () => {
  assert.equal(starsFor(effectiveSeconds(100, 1, 0)), 3);   // 110s
  assert.equal(starsFor(effectiveSeconds(100, 2, 0)), 3);   // 120s is exactly par
  assert.equal(starsFor(effectiveSeconds(101, 2, 0)), 2);   // 121s just over
  assert.equal(starsFor(effectiveSeconds(120, 2, 0)), 2);
  assert.equal(starsFor(effectiveSeconds(200, 0, 0)), 1);
  assert.match(dailySeed(new Date(2026, 10, 9)), /^daily-2026-11-09$/);
});

test('score: tokens, solve bonus, time bonus, never negative', () => {
  assert.equal(scoreFor({ tokens: 2, solved: false, eff: 50 }), 200);
  assert.equal(scoreFor({ tokens: 4, solved: true, eff: 120 }), 400 + 500 + 540);
  assert.equal(scoreFor({ tokens: 4, solved: true, eff: 900 }), 900);
  assert.ok(scoreFor({ tokens: 0, solved: true, eff: 0 }) > scoreFor({ tokens: 0, solved: true, eff: 200 }));
});

test('levels get harder: more decoys, tighter par', () => {
  assert.deepEqual(LEVELS.map(l => l.decoys), [0, 1, 2]); assert.ok(parFor(1) > parFor(2) && parFor(2) > parFor(3));
  assert.equal(starsFor(140, 150), 3); assert.equal(starsFor(140, 100), 2); assert.equal(starsFor(260, 100), 1);
});
