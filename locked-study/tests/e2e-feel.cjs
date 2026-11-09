// Feel / world / levels / touch checks. node locked-study/tests/e2e-feel.cjs (server on :8099)
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const BASE = process.env.BASE || 'http://localhost:8099';
const ok = m => console.log('  ok -', m);
const ARGS = ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox'];
(async () => {
  const b = await chromium.launch({ args: ARGS });
  const ctx = await b.newContext({ viewport: { width: 900, height: 560 } }); const p = await ctx.newPage();
  const errs = []; p.on('console', m => m.type() === 'error' && errs.push(m.text())); p.on('pageerror', e => errs.push('PAGEERR ' + e.message));
  await p.goto(`${BASE}/?debug`); await p.waitForTimeout(300);
  const S = f => p.evaluate(f);
  const hold = async (k, ms) => { await p.keyboard.down(k); await p.waitForTimeout(ms); await p.keyboard.up(k); };

  // ---- levels: start screen, locking, difficulty ----
  assert.equal(await p.locator('#levels .lv').count(), 3); assert.equal(await p.locator('#levels .lv:disabled').count(), 2); ok('start screen: big title, 3 levels, 2 locked on first visit');
  assert.match(await p.textContent('.title'), /Locked\s*Study/i);
  await p.click('#go-random'); await p.waitForTimeout(300); assert.match(await p.textContent('#level-chip'), /Level 1/); ok('level 1 starts from the picker');
  await p.evaluate(() => window.__study.start('lv3', 3)); await p.waitForTimeout(200);
  const l3 = await S(() => window.__study.G.c); assert.equal(l3.objects.length, 12); assert.ok(l3.notes.every(n => /rug/.test(n.text))); ok('level 3: 2 decoys per clue, notes describe rooms by rug');

  // ---- feel: speed builds, wall hit shakes, camera eases but never enters a wall ----
  await p.evaluate(() => window.__study.start('feel', 2)); await p.waitForTimeout(200);
  await p.evaluate(() => window.__study.teleport(3.5, -2.0, 0)); await p.keyboard.down('w');
  const sp = []; for (let i = 0; i < 5; i++) { await p.waitForTimeout(110); sp.push(await S(() => Math.hypot(window.__study.G.vx, window.__study.G.vz))); }
  assert.ok(sp[0] < sp[4] && sp[0] < 3.1, `speed should build up, got ${sp.map(v => v.toFixed(2))}`); ok(`speed builds up (${sp[0].toFixed(2)} -> ${sp[4].toFixed(2)} m/s)`);
  let shook = 0, bad = 0;
  for (let i = 0; i < 40; i++) { await p.waitForTimeout(60); const r = await S(() => { const s = window.__study, c = s.camera.position; return { sh: s.cam.shake, inWall: s.G.world.walls.some(w => w.on && c.x > w.minX - 0.05 && c.x < w.maxX + 0.05 && c.z > w.minZ - 0.05 && c.z < w.maxZ + 0.05) }; }); shook = Math.max(shook, r.sh); bad += r.inWall; }
  await p.keyboard.up('w'); assert.ok(shook > 0.01, `hitting the wall should shake the screen (max ${shook})`); assert.equal(bad, 0, 'camera entered a wall'); ok(`wall hit shakes the screen (${shook.toFixed(3)}) and the camera never entered a wall`);

  // ---- near-miss forgiveness: walk at the doorway jamb and still get through ----
  await p.evaluate(() => window.__study.teleport(0.92, -3.0, 0)); await p.keyboard.down('w');
  await p.waitForFunction(() => window.__study.G.z < -5.6, null, { timeout: 12000 }); await p.keyboard.up('w'); ok('clipping a door jamb glides through instead of sticking');
  await p.evaluate(() => window.__study.teleport(3.5, -4.2, 0)); await hold('w', 1800); assert.ok(await S(() => window.__study.G.z) > -4.95, 'solid wall must still block'); ok('solid walls still block (forgiveness is only for corners)');

  // ---- world: sunset shift, sparks, draw-call budget ----
  const fog = await S(() => { const w = window.__study.G.world; w.setTime(0); const a = w.scene.fog.color.getHex(); w.setTime(1); const c = w.scene.fog.color.getHex(); w.setTime(0); return [a, c]; }); assert.notEqual(fog[0], fog[1]); ok('light/sky/fog shift from afternoon to sunset');
  await S(() => { const s = window.__study; s.G.world.burst(0, 1.5, 0, 30, ['#e0a82e'], 2.5); s.G.world.tick(0.05); }); assert.ok(await S(() => { let a = 0; window.__study.G.world.scene.traverse(o => { if (o.isPoints) for (let i = 1; i < o.geometry.attributes.position.array.length; i += 3) if (o.geometry.attributes.position.array[i] > 0.1) a++; }); return a; }) > 10); ok('sparks spawn');
  let maxCalls = 0, maxMeshes = 0;
  for (const [x, z] of [[0, 0], [-9, 0], [9, 0], [0, -9], [0, 3.5], [3, 3], [-3, -3], [10, 3]]) for (const yaw of [0, 1.6, 3.2, 4.7]) {
    await p.evaluate(([x, z, yaw]) => window.__study.teleport(x, z, yaw), [x, z, yaw]); await p.waitForTimeout(90);
    const r = await S(() => ({ c: window.__study.renderer.info.render.calls })); maxCalls = Math.max(maxCalls, r.c);
  }
  assert.ok(maxCalls <= 200, `draw calls ${maxCalls} > 200`); ok(`draw-call budget: worst view ${maxCalls} (<= 200, shadow pass included)`);
  const bad2 = await S(() => window.__study.G.world.decor.filter(d => (Math.abs(d.x) < 3.4 && d.z > 13) || (Math.abs(d.x) < 17 && Math.abs(d.z) < 17)).length);
  assert.equal(bad2, 0); assert.ok(await S(() => window.__study.G.world.decor.length) >= 20); ok('cacti and rocks are scattered at random but never on the road or inside the house');

  // ---- win -> next level, persistence, share ----
  await p.evaluate(() => window.__study.start('winme', 2)); await p.waitForTimeout(200);
  const code = await S(() => window.__study.G.c.code); await p.evaluate(() => window.__study.teleport(0, 3.2, Math.PI)); await p.evaluate(() => { window.__study.G.found = new Set([1, 2, 3, 4]); });
  await p.evaluate(() => window.__study.press('1')); await p.evaluate(c => { window.__study.G.code = ''; for (const d of c) window.__study.press(String(d)); }, code);
  await p.waitForSelector('#m-win:not([hidden])'); assert.match(await p.textContent('#win-title'), /Level 2 cleared/); assert.ok(await p.isVisible('#win-next')); ok('win card: level cleared + Next level');
  assert.ok(await p.evaluate(() => localStorage.getItem('lockedstudy.best.L2') > 0) && await p.evaluate(() => localStorage.getItem('lockedstudy.unlocked') === '3')); ok('best score saved, level 3 unlocked');
  await p.evaluate(() => { navigator.clipboard.writeText = () => Promise.reject(new Error('blocked')); }); await p.click('#win-share');
  assert.ok(await p.isVisible('#share-text')); const txt = await p.inputValue('#share-text'); assert.match(txt, /^I scored \d+ in The Locked Study/); assert.match(txt, /https?:\/\//); assert.match(await p.textContent('#share-msg'), /blocked/i); ok(`share fallback shows copyable text: "${txt.slice(0, 48)}…"`);
  let copied = ''; await p.evaluate(() => { navigator.clipboard.writeText = t => { window.__copied = t; return Promise.resolve(); }; }); await p.click('#win-share'); copied = await p.evaluate(() => window.__copied); assert.equal(copied, txt); ok('share copies the same text when allowed');
  await p.click('#win-next'); await p.waitForTimeout(200); assert.match(await p.textContent('#level-chip'), /Level 3/); ok('Next level starts level 3');
  await p.reload(); await p.waitForTimeout(300); assert.equal(await p.locator('#levels .lv:disabled').count(), 0); assert.match(await p.textContent('#best'), /Best score on level 3|^$/); await p.click('#levels .lv[data-level="2"]'); assert.match(await p.textContent('#best'), /Best score on level 2: \d+/); ok('after reload: levels stay unlocked and best score is still there');

  // ---- real touch gestures (phone) ----
  const m = await b.newContext({ viewport: { width: 390, height: 780 }, hasTouch: true, isMobile: true }); const mp = await m.newPage(); mp.on('pageerror', e => errs.push('MOBILE ' + e.message));
  await mp.goto(`${BASE}/?debug`); await mp.waitForTimeout(300); await mp.click('#go-random'); await mp.waitForTimeout(400);
  const cdp = await m.newCDPSession(mp), T = (type, pts) => cdp.send('Input.dispatchTouchEvent', { type, touchPoints: pts });
  const z0 = await mp.evaluate(() => window.__study.G.z), yaw0 = await mp.evaluate(() => window.__study.G.yaw);
  await T('touchStart', [{ x: 90, y: 620, id: 1 }]); await T('touchMove', [{ x: 90, y: 560, id: 1 }]);
  await mp.waitForFunction(z => window.__study.G.z < z - 0.5, z0, { timeout: 8000 }); await T('touchEnd', []); ok('left-thumb stick moves the player');
  await T('touchStart', [{ x: 300, y: 300, id: 2 }]); await T('touchMove', [{ x: 240, y: 300, id: 2 }]); await T('touchMove', [{ x: 180, y: 300, id: 2 }]); await T('touchEnd', []);
  assert.ok(Math.abs(await mp.evaluate(() => window.__study.G.yaw) - yaw0) > 0.2); ok('right-thumb drag turns the view');
  await mp.evaluate(() => { const [x, z] = [-2.2, 3.4]; window.__study.teleport(x + 1.4, z + 0.2, 0); const dx = x - (x + 1.4), dz = z - (z + 0.2); window.__study.teleport(x + 1.4, z + 0.2, Math.atan2(-dx, -dz), Math.atan2(0.85 - 1.62, Math.hypot(dx, dz))); });
  await mp.waitForTimeout(300); const box = await mp.locator('#btn-act').boundingBox(); await mp.touchscreen.tap(box.x + box.width / 2, box.y + box.height / 2);
  await mp.waitForTimeout(250); assert.ok(await mp.evaluate(() => window.__study.G.found.size) >= 1 || await mp.isVisible('#m-note')); ok('Inspect button works by tap');
  assert.ok((await mp.evaluate(() => document.documentElement.scrollWidth - innerWidth)) <= 0); ok('phone layout: no horizontal overflow');
  assert.deepEqual(errs, [], errs.join(' | ')); ok('no console errors');
  await b.close(); console.log('FEEL E2E PASS');
})().catch(e => { console.error('FEEL E2E FAIL:', e.message); process.exit(1); });
