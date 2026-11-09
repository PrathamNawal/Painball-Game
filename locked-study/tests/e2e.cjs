// Browser test: node locked-study/tests/e2e.cjs   (needs `node locked-study/serve.mjs 8099` running and playwright)
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const BASE = process.env.BASE || 'http://localhost:8099';
const NOTE = { hall: [-2.2, 3.4], kitchen: [-12.5, -3], library: [12.5, 3], bedroom: [-3, -12.5] };
const ok = m => console.log('  ok -', m);
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox'] });
  const p = await b.newPage({ viewport: { width: 1000, height: 640 } });
  const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERR ' + e.message));
  await p.goto(`${BASE}/?debug`); await p.waitForTimeout(300);
  assert.ok(await p.isVisible('#m-intro')); ok('intro shown');
  await p.evaluate(() => window.__study.start('e2e-1')); await p.waitForTimeout(200);
  const c = await p.evaluate(() => window.__study.G.c);
  assert.ok(await p.isHidden('#m-intro') && await p.isVisible('#hud')); ok('case started, HUD visible');

  // aim helper: stand at (x,z) and look at world point (tx,ty,tz)
  const aim = (x, z, tx, ty, tz) => p.evaluate(([x, z, tx, ty, tz]) => { const dx = tx - x, dz = tz - z; window.__study.teleport(x, z, Math.atan2(-dx, -dz), Math.atan2(ty - 1.62, Math.hypot(dx, dz))); }, [x, z, tx, ty, tz]);
  const settle = () => p.waitForTimeout(120);

  // 1. every note desk is reachable by raycast and opens its note
  for (const n of c.notes) {
    const [nx, nz] = NOTE[n.room]; await aim(nx + 1.4, nz + 0.2, nx, 0.85, nz); await settle();
    const f = await p.evaluate(() => window.__study.focus()); assert.equal(f && f.type, 'note', `note in ${n.room} not targetable`);
    await p.keyboard.press('e'); await p.waitForSelector('#m-note:not([hidden])');
    assert.equal(await p.textContent('#note-text'), n.text); await p.click('#note-close');
  }
  assert.equal(await p.textContent('#notes-count'), 'Notes 4/4'); ok('4 notes found, text matches case');
  await p.keyboard.press('n'); await p.waitForSelector('#m-book:not([hidden])'); assert.equal(await p.locator('#book-list li:not(.locked)').count(), 4); await p.click('#book-close'); ok('notebook lists all notes');

  // 2. hint costs time and names a real place
  const t1 = await p.textContent('#timer'); await p.click('#btn-hint'); await settle();
  assert.match(await p.textContent('#toast'), /\+10s/); assert.equal(await p.evaluate(() => window.__study.G.hints), 1); ok('hint works (+10s)');

  // 3. walls block movement; doorways don't. (headless GL is slow, so wait on position, not on time)
  const G = k => p.evaluate(k => window.__study.G[k], k);
  const hold = async (key, ms) => { await p.keyboard.down(key); await p.waitForTimeout(ms); await p.keyboard.up(key); };
  await p.evaluate(() => window.__study.teleport(3.5, -4.0, 0)); await hold('w', 2500);
  const z = await G('z'); assert.ok(z > -4.9 && z < -4.2, `wall should stop us (z=${z})`); ok(`wall blocks movement (z=${z.toFixed(2)})`);
  await p.evaluate(() => window.__study.teleport(0, 1.5, 0)); await p.keyboard.down('w');
  await p.waitForFunction(() => window.__study.G.z < -5.4, null, { timeout: 8000 }); await p.keyboard.up('w'); ok('doorway is passable');

  // 4. keypad: study door is solid while locked; wrong code costs time; right code wins
  await p.evaluate(() => window.__study.teleport(0, 3.6, Math.PI)); await hold('w', 2500);
  const z3 = await G('z'); assert.ok(z3 > 4.3 && z3 < 4.75, `locked door should stop us (z=${z3})`); ok('locked study door is solid');
  await aim(2.1, 3.2, 2.1, 1.35, 4.83); await settle();
  assert.equal((await p.evaluate(() => window.__study.focus())).type, 'keypad'); await p.keyboard.press('e'); await p.waitForSelector('#m-pad:not([hidden])'); ok('keypad targetable + opens');
  const wrong = c.code.slice(); wrong[3] = (wrong[3] % 9) + 1;
  for (const d of wrong) await p.click(`#pad-keys button[data-k="${d}"]`);
  await p.waitForTimeout(200); assert.match(await p.textContent('#pad-msg'), /Wrong code/); assert.equal(await G('wrong'), 1); ok('wrong code rejected (+5s)');
  await p.waitForTimeout(1700);
  for (const d of c.code) await p.click(`#pad-keys button[data-k="${d}"]`);
  await p.waitForSelector('#m-win:not([hidden])'); ok('correct code opens the door and shows the win card');
  assert.match(await p.textContent('#win-facts'), /Hints.*1/s);
  await p.click('#win-walk'); await p.evaluate(() => window.__study.teleport(0, 3.6, Math.PI)); await p.keyboard.down('w');
  await p.waitForFunction(() => window.__study.G.z > 6, null, { timeout: 12000 }); await p.keyboard.up('w'); ok('opened door is walkable into the study');

  // 5. phone layout renders without horizontal overflow
  const m = await b.newContext({ viewport: { width: 360, height: 740 }, hasTouch: true, isMobile: true });
  const mp = await m.newPage(); mp.on('pageerror', e => errs.push('MOBILE ' + e.message));
  await mp.goto(`${BASE}/?debug&seed=m1`); await mp.waitForTimeout(500);
  assert.ok(await mp.isVisible('#btn-act') && await mp.isVisible('#stick')); const ov = await mp.evaluate(() => document.documentElement.scrollWidth - innerWidth); assert.ok(ov <= 0, `overflow ${ov}`); ok('mobile: touch controls shown, no overflow');

  assert.deepEqual(errs, [], 'console errors: ' + errs.join(' | ')); ok('no console errors');
  await b.close(); console.log('E2E PASS');
})().catch(e => { console.error('E2E FAIL:', e.message); process.exit(1); });
