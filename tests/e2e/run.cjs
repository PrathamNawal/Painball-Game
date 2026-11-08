/* End-to-end tests against the PRODUCTION build in headless Chromium (software GL => slow; we use ?q=low & DPR 1).
 * Usage: npm run build && npm run e2e [-- --shots]
 * Lessons applied from the playbook: real clicks/touches through overlay layers, children-inside-bounds at 320 px,
 * axe on every screen, offline reload, sub-path hosting, zero console errors (CSP violations land there). */
const path = require('path'), fs = require('fs'), http = require('http');
const { chromium, devices } = require('playwright');
const AXE = fs.readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');
const SHOTS = process.argv.includes('--shots'), SHOT_DIR = path.resolve(__dirname, '../../docs/screenshots');
const PORT = 4173, BASE = `http://localhost:${PORT}/`;
const ARGS = ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'];
const SAVE_KEY = 'painball.save';

const results = [];
const liveCtx = [];
async function test(name, fn) {
  if (process.env.E2E_ONLY && !name.includes(process.env.E2E_ONLY)) return;   // e.g. E2E_ONLY=layout npm run e2e
  const t0 = Date.now();
  try { await fn(); results.push({ name, ok: true }); console.log(`  ok   ${name} (${Date.now() - t0} ms)`); }
  catch (e) { results.push({ name, ok: false }); console.log(`  FAIL ${name}\n       ${String(e.message).split('\n').slice(0, 4).join('\n       ')}`); }
  finally { for (const c of liveCtx.splice(0)) await c.close().catch(() => {}); }   // a failed test must not leak WebGL contexts into the next one
}
const assert = (c, m) => { if (!c) throw new Error(m || 'assertion failed'); };
const eq = (a, b, m) => assert(a === b, `${m || 'eq'}: expected ${JSON.stringify(b)}, got ${JSON.stringify(a)}`);

let browser;
const baseSave = (over = {}) => ({ version: 1, coins: 20, level: 1, stars: {}, daily: { last: null, streak: 0, bestStreak: 0, done: [] }, palettes: ['classic'], outfits: ['rookie'],
  duel: { stage: 1, best: 0, trophies: 0, wins: 0, losses: 0, tricks: {} },
  settings: { sound: true, haptics: true, assist: 2, quality: 'high', palette: 'classic', lefty: false, reduceMotion: false, outfit: 'rookie', sens: 1 }, flags: { tutorialSeen: true, duelTutorial: true }, stats: {}, ...over });

const MOBILE = { ...devices['iPhone 13'], deviceScaleFactor: 1 }, DESKTOP = { viewport: { width: 1100, height: 700 }, deviceScaleFactor: 1 };
async function open({ mobile = true, query = '?debug&fast&q=low', seed = null, ctxOpts = {}, cdn = false } = {}) {
  const ctx = await browser.newContext({ ...(mobile ? MOBILE : DESKTOP), ...ctxOpts }); liveCtx.push(ctx);
  if (seed) await ctx.addInitScript(([k, s]) => { if (!localStorage.getItem('__seeded')) { localStorage.setItem(k, JSON.stringify(s)); localStorage.setItem('__seeded', '1'); } }, [SAVE_KEY, seed]);
  const page = await ctx.newPage(), errors = [], origins = new Set();
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push('console.error: ' + m.text()); });
  page.on('request', r => { try { origins.add(new URL(r.url()).origin); } catch { /* data: */ } });
  await page.goto(BASE + query); await page.waitForSelector('.L-menu, .L-hud');
  return { ctx, page, errors, origins };
}
const tab = (page, t) => page.click(`[data-act=tab][data-tab=${t}]`);
/** Arena (top-down) lives on the Arena tab now. */
const arenaPlay = async page => { await tab(page, 'arena'); await page.click('[data-act=play]'); };
const startDuel = async page => { await page.click('[data-act=playDuel]'); await waitMode(page, 'playing', 90000); };
const calmDuel = page => page.evaluate(() => { window.__game.duel.s.f[1].ai = null; });
const readSave = page => page.evaluate(k => JSON.parse(localStorage.getItem(k) || 'null'), SAVE_KEY);
const mode = page => page.evaluate(() => window.__game.mode);
const waitMode = (page, m, timeout = 60000) => page.waitForFunction(m2 => window.__game.mode === m2, m, { timeout, polling: 100 });
const shot = async (page, name) => { if (SHOTS) { await page.waitForTimeout(900); await page.screenshot({ path: path.join(SHOT_DIR, name + '.png'), timeout: 120000 }); } };
/** Input tests must not be flaky because a bot shot the player during slow software-GL frames: make enemies static dummies. */
const calm = page => page.evaluate(() => window.__game.W.ents.filter(e => e.team === 1).forEach(e => { e.brain = null; }));
/** Win the current match by deleting the enemy team each round (debug hook); returns when the result screen is up. */
async function winDuel(page) {
  for (let r = 0; r < 2; r++) { await waitMode(page, 'playing', 90000); await page.evaluate(() => window.__game.duel.debugKill(1, 'head')); if (r < 1) { await waitMode(page, 'roundend'); await waitMode(page, 'countdown', 90000); } }
  await page.waitForSelector('.modal.win', { timeout: 90000 });
}
async function loseDuel(page) {
  for (let r = 0; r < 2; r++) { await waitMode(page, 'playing', 90000); await page.evaluate(() => window.__game.duel.debugKill(0, 'torso')); if (r < 1) { await waitMode(page, 'roundend'); await waitMode(page, 'countdown', 90000); } }
  await page.waitForSelector('.modal.win', { timeout: 90000 });
}
async function winMatch(page, rounds = 2) {
  for (let r = 0; r < rounds; r++) { await waitMode(page, 'playing'); await page.evaluate(() => window.__game.killEnemies()); if (r < rounds - 1) { await waitMode(page, 'roundend'); await waitMode(page, 'countdown'); } }
  await page.waitForSelector('.modal.win', { timeout: 60000 });
}
async function loseMatch(page, rounds = 2) {
  for (let r = 0; r < rounds; r++) { await waitMode(page, 'playing'); await page.evaluate(() => window.__game.killYou()); if (r < rounds - 1) { await waitMode(page, 'roundend'); await waitMode(page, 'countdown'); } }
  await page.waitForSelector('.modal.win', { timeout: 60000 });
}

function subpathServer(port) {   // serves dist/ under /games/x/ to prove relative URLs
  const root = path.resolve(__dirname, '../../dist'), types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.webmanifest': 'application/manifest+json', '.png': 'image/png', '.svg': 'image/svg+xml' };
  const s = http.createServer((req, res) => {
    const u = new URL(req.url, 'http://x'); if (!u.pathname.startsWith('/games/x/')) { res.writeHead(404); return res.end(); }
    let rel = u.pathname.slice('/games/x/'.length) || 'index.html'; if (rel.endsWith('/')) rel += 'index.html';
    const f = path.join(root, rel); if (!f.startsWith(root) || !fs.existsSync(f)) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res);
  });
  return new Promise(r => s.listen(port, () => r(s)));
}

(async () => {
  const { serve } = await import('../../scripts/serve.mjs');
  const server = await serve(PORT);
  browser = await chromium.launch({ args: ARGS });
  console.log('e2e');

  const seedDuel = (stage, extra = {}) => baseSave({ coins: 300, duel: { stage, best: Math.max(0, stage - 1), trophies: 0, wins: 0, losses: 0, tricks: {} }, ...extra });

  await test('boot: 3D showcase behind the menu (WebGL canvas visible, scene animating); zero console errors (incl. CSP/shaders)', async () => {
    const { ctx, page, errors } = await open();
    eq(await page.locator('[data-act=playDuel]').count(), 1); eq(await page.locator('.tab3').count(), 4);
    assert(await page.evaluate(() => !document.getElementById('c3').hidden && document.getElementById('c').hidden), 'WebGL canvas shown, 2D hidden');
    const t1 = await page.evaluate(() => window.__game.duel.stage.time); await page.waitForTimeout(1500); const t2 = await page.evaluate(() => window.__game.duel.stage.time);
    assert(t2 > t1 + 0.3, `3D scene animating (${t1} -> ${t2})`); await shot(page, '01-menu-mobile');
    eq(errors.length, 0, errors.join(' | ')); await ctx.close();
  });

  await test('NO ADS / no third parties: every request in a full duel session is same-origin; no ad DOM', async () => {
    const { ctx, page, origins } = await open({ seed: seedDuel(1) });
    await startDuel(page); await page.evaluate(() => window.__game.duel.debugKill(1)); await page.waitForTimeout(500);
    assert([...origins].every(o => o === `http://localhost:${PORT}`), 'third-party origins: ' + [...origins].join(','));
    eq(await page.locator('[class*="ad-"], [id*="ad-"], iframe, ins.adsbygoogle').count(), 0); await ctx.close();
  });

  await test('duel (desktop): REAL mouse hold rises + shows crosshair, drag aims, release fires and drops; A/D swap; Space extra shot', async () => {
    const { ctx, page, errors } = await open({ mobile: false, seed: seedDuel(3) });
    await startDuel(page); await calmDuel(page);
    const box = await page.locator('#c3').boundingBox(); await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    eq(await page.evaluate(() => window.__game.duel.s.f[0].e), 0);
    await page.mouse.down(); await page.waitForFunction(() => window.__game.duel.s.f[0].e > 0.95, null, { timeout: 30000 });
    await page.waitForFunction(() => getComputedStyle(document.getElementById('dh-xh')).opacity === '1', null, { timeout: 15000 });   // crosshair visible while aiming (after its fade)
    const yaw0 = await page.evaluate(() => window.__game.duel.input.yaw); await page.mouse.move(box.x + box.width / 2 + 80, box.y + box.height / 2, { steps: 4 });
    assert(await page.evaluate(y => window.__game.duel.input.yaw > y + 0.05, yaw0), 'dragging right aims right');
    const shots0 = await page.evaluate(() => window.__game.duel.s.f[0].shots); await page.mouse.up();
    await page.waitForFunction(n => window.__game.duel.s.f[0].shots > n, shots0, { timeout: 30000 });
    await page.waitForFunction(() => window.__game.duel.s.f[0].e < 0.1, null, { timeout: 30000 });                    // dropped back behind cover
    const p0 = await page.evaluate(() => window.__game.duel.s.f[0].post); await page.keyboard.press(p0 === 0 ? 'd' : 'a');
    await page.waitForFunction(p => window.__game.duel.s.f[0].post !== p && window.__game.duel.s.f[0].swapT <= 0, p0, { timeout: 30000 });
    await shot(page, '02-duel-desktop'); eq(errors.length, 0, errors.join(' | ')); await ctx.close();
  });

  await test('duel (mobile): touch hold-to-aim, drag, release-to-fire, second finger = extra shot, swap buttons work', async () => {
    const { ctx, page, errors } = await open({ seed: seedDuel(3) });
    await startDuel(page); await calmDuel(page);
    const ptr = (type, id, x, y) => page.evaluate(([type, id, x, y]) => document.getElementById('c3').dispatchEvent(new PointerEvent(type, { pointerType: 'touch', pointerId: id, clientX: x, clientY: y, bubbles: true })), [type, id, x, y]);
    await ptr('pointerdown', 7, 200, 420); await page.waitForFunction(() => window.__game.duel.s.f[0].e > 0.95, null, { timeout: 30000 });
    await ptr('pointermove', 7, 260, 400); assert(await page.evaluate(() => window.__game.duel.input.yaw !== 0), 'drag changes aim');
    await ptr('pointerdown', 8, 80, 300); await page.waitForFunction(() => window.__game.duel.s.f[0].shots >= 1, null, { timeout: 30000 });   // 2nd finger: extra shot, still up
    assert(await page.evaluate(() => window.__game.duel.s.f[0].e > 0.5), 'still risen after the extra shot'); await ptr('pointerup', 8, 80, 300);
    const s1 = await page.evaluate(() => window.__game.duel.s.f[0].shots); await ptr('pointerup', 7, 260, 400);
    await page.waitForFunction(n => window.__game.duel.s.f[0].shots > n || window.__game.duel.s.f[0].reloadT > 0, s1, { timeout: 30000 });
    await page.waitForFunction(() => window.__game.duel.s.f[0].e < 0.1, null, { timeout: 30000 });
    const p0 = await page.evaluate(() => window.__game.duel.s.f[0].post); await page.waitForSelector('#dh-swapR:not([disabled]), #dh-swapL:not([disabled])', { timeout: 30000 });
    await page.click(p0 === 0 ? '#dh-swapR' : '#dh-swapL'); await page.waitForFunction(p => window.__game.duel.s.f[0].post !== p, p0, { timeout: 30000 });
    await shot(page, '03-duel-mobile'); eq(errors.length, 0, errors.join(' | ')); await ctx.close();
  });

  await test('duel match: win 2-0 -> callouts + result with coins/trophies saved, stage advances, Next stage starts it', async () => {
    const { ctx, page, errors } = await open({ seed: seedDuel(1) });
    await startDuel(page); await page.evaluate(() => window.__game.duel.debugKill(1, 'head')); await page.waitForSelector('.callouts .co', { timeout: 30000 }); await shot(page, '04-duel-callout');
    await waitMode(page, 'roundend'); await waitMode(page, 'countdown', 90000); await waitMode(page, 'playing', 90000); await page.evaluate(() => window.__game.duel.debugKill(1, 'hand') || window.__game.duel.debugKill(1, 'head'));
    await page.waitForSelector('.modal.win', { timeout: 90000 }); await shot(page, '05-duel-result');
    const s = await readSave(page); eq(s.duel.stage, 2); eq(s.duel.trophies, 30); eq(s.duel.wins, 1); assert(s.coins >= 300 + 20, 'coins awarded ' + s.coins); assert(s.duel.tricks.head >= 1, 'mask shot counted');
    assert((await page.locator('.dres h2').innerText()).match(/VICTORY|FLAWLESS/)); await page.click('[data-act=dnext]'); await page.waitForSelector('.dhud'); assert((await page.locator('.dh-lab').innerText()).startsWith('Stage 2'));
    eq(errors.length, 0, errors.join(' | ')); await ctx.close();
  });

  await test('duel defeat: losing 2 duels -> DEFEAT, stage unchanged, trophies floor at 0, Rematch restarts the stage', async () => {
    const { ctx, page } = await open({ seed: seedDuel(4) });
    await startDuel(page); await loseDuel(page); eq(await page.locator('.dres h2').innerText(), 'DEFEAT');
    const s = await readSave(page); eq(s.duel.stage, 4); eq(s.duel.trophies, 0); eq(s.duel.losses, 1);
    await page.click('[data-act=dretry]'); await page.waitForSelector('.dhud'); assert((await page.locator('.dh-lab').innerText()).startsWith('Stage 4')); await ctx.close();
  });

  await test('duel autopilot: unattended full match against the real AI reaches a result (sim + AI + 3D + rules end-to-end); WebGL memory stays bounded across matches', async () => {
    const { ctx, page, errors } = await open({ query: '?debug&auto&fast&q=low&speed=6', seed: seedDuel(1) });
    await startDuel(page); await page.waitForSelector('.modal.win', { timeout: 150000 });
    const info = await page.evaluate(() => { const g = window.__game.duel; return { scores: g.M.scores, geo: g.stage.renderer.info.memory.geometries, tex: g.stage.renderer.info.memory.textures, nodes: g.stage.dyn.children.length }; });
    console.log('       autopilot duel:', JSON.stringify(info));
    for (let i = 0; i < 2; i++) { await page.click('[data-act=dretry]'); await page.waitForSelector('.modal.win', { state: 'detached', timeout: 60000 }); await page.waitForSelector('.modal.win', { timeout: 150000 }); }
    const info2 = await page.evaluate(() => { const g = window.__game.duel; return { geo: g.stage.renderer.info.memory.geometries, tex: g.stage.renderer.info.memory.textures, nodes: g.stage.dyn.children.length }; });
    console.log('       after 3 matches:', JSON.stringify(info2)); assert(info2.geo <= info.geo + 60 && info2.nodes <= info.nodes + 30, `GPU/scene growth geo ${info.geo}->${info2.geo} nodes ${info.nodes}->${info2.nodes}`);
    eq(errors.length, 0, errors.join(' | ')); await ctx.close();
  });

  await test('duel pause: button, P key, resume; hidden tab auto-pauses; quit returns to the menu', async () => {
    const { ctx, page } = await open({ mobile: false, seed: seedDuel(1) });
    await startDuel(page); await page.click('[data-act=pause]'); await page.waitForSelector('.L-pause'); eq(await mode(page), 'paused');
    await page.click('[data-act=resume]'); await page.waitForSelector('.L-pause', { state: 'detached' }); eq(await mode(page), 'playing');
    await page.keyboard.press('p'); await page.waitForSelector('.L-pause'); await page.keyboard.press('p'); await page.waitForSelector('.L-pause', { state: 'detached' });
    await page.evaluate(() => { Object.defineProperty(document, 'hidden', { value: true, configurable: true }); document.dispatchEvent(new Event('visibilitychange')); }); eq(await mode(page), 'paused');
    await page.click('[data-act=quit]'); await page.waitForSelector('.L-menu'); await ctx.close();
  });

  await test('areas: menu opens on your current area; locked area disabled and labelled; earlier unlocked areas playable', async () => {
    const { ctx, page } = await open({ seed: seedDuel(7) });                       // stage 7 => Candy Beach is current, Sunset Desert replayable, Frost Park locked
    assert((await page.locator('.area-name').innerText()).match(/Candy Beach/i), 'opens on the current area'); eq(await page.locator('[data-act=playDuel]').isDisabled(), false);
    await page.click('[data-act=areaNext]'); assert((await page.locator('.area-name').innerText()).match(/Frost Park/i)); eq(await page.locator('[data-act=playDuel]').isDisabled(), true); assert((await page.locator('.area-sub').innerText()).toLowerCase().includes('reach stage 11'));
    await page.click('[data-act=areaPrev]'); await page.click('[data-act=areaPrev]'); assert((await page.locator('.area-name').innerText()).match(/Sunset Desert/i));
    await page.click('[data-act=playDuel]'); await page.waitForSelector('.dhud', { timeout: 60000 }); assert((await page.locator('.dh-lab').innerText()).startsWith('Stage 5')); await ctx.close();
  });

  await test('gear + skins: buying needs coins, spends them, equips; paint colour recolours the UI; outfits persist', async () => {
    const { ctx, page } = await open({ seed: seedDuel(1, { coins: 100 }) });
    await tab(page, 'gear'); await page.click('[data-act=buy][data-id=gold]'); await page.waitForTimeout(150); eq((await readSave(page)).coins, 100, 'cannot afford 120');
    await page.click('[data-act=buy][data-id=neon]'); await page.waitForTimeout(250); let s = await readSave(page); eq(s.coins, 60); eq(s.settings.palette, 'neon'); eq(await page.evaluate(() => document.getElementById('ui').style.getPropertyValue('--you')), '#ff3df2');
    await tab(page, 'skins'); await page.click('[data-act=buyOutfit][data-id=ranger]'); await page.waitForTimeout(250); s = await readSave(page); eq(s.coins, 0); assert(s.outfits.includes('ranger')); eq(s.settings.outfit, 'ranger');
    await page.click('[data-act=wear][data-id=rookie]'); await page.waitForTimeout(150); eq((await readSave(page)).settings.outfit, 'rookie'); await shot(page, '06-skins'); await ctx.close();
  });

  await test('share: duel result downloads a real PNG snapshot of the 3D scene', async () => {
    const { ctx, page } = await open({ mobile: false, seed: seedDuel(1) });
    await startDuel(page); await winDuel(page);
    const [dl] = await Promise.all([page.waitForEvent('download', { timeout: 60000 }), page.click('[data-act=dshare]')]);
    eq(dl.suggestedFilename(), 'painball-duel.png'); const buf = fs.readFileSync(await dl.path()); eq(buf.subarray(1, 4).toString(), 'PNG'); assert(buf.length > 8000, 'png size ' + buf.length); await ctx.close();
  });

  await test('arena (top-down team mode): desktop WASD/mouse/Shift/R through the HUD layer', async () => {
    const { ctx, page, errors } = await open({ mobile: false, seed: baseSave() });
    await arenaPlay(page); await waitMode(page, 'playing'); await calm(page);
    assert(await page.evaluate(() => !document.getElementById('c').hidden && document.getElementById('c3').hidden), '2D canvas shown for Arena');
    const g0 = await page.evaluate(() => { const y = window.__game.YOU(), A = window.__game.W.arena; return { x: y.x, shots: y.shots, landscape: A.w > A.h }; }); assert(g0.landscape, 'desktop uses the landscape arena');
    await page.keyboard.down('d'); await page.waitForTimeout(500); await page.keyboard.up('d'); assert(await page.evaluate(x0 => window.__game.YOU().x - x0, g0.x) > 20, 'moved right');
    const box = await page.locator('#c').boundingBox(); await page.mouse.move(box.x + box.width * 0.8, box.y + box.height * 0.4); await page.mouse.down(); await page.waitForTimeout(600); await page.mouse.up();
    assert(await page.evaluate(() => window.__game.YOU().shots) > g0.shots, 'fired'); await page.keyboard.press('r');
    const cd0 = await page.evaluate(() => window.__game.YOU().dashCd); await page.keyboard.down('d'); await page.keyboard.press('Shift'); await page.waitForTimeout(100); await page.keyboard.up('d');
    assert(await page.evaluate(() => window.__game.YOU().dashCd) > cd0, 'dash used'); eq(errors.length, 0, errors.join(' | ')); await ctx.close();
  });

  await test('arena (mobile): twin sticks move + aim + auto-fire, double-tap dash, real tap through HUD, buttons', async () => {
    const { ctx, page, errors } = await open({ seed: baseSave() });
    await arenaPlay(page); await waitMode(page, 'playing'); await calm(page);
    const t = await page.evaluate(() => { const y = window.__game.YOU(); return { y: y.y, shots: y.shots }; });
    const ptr = (type, id, x, y) => page.evaluate(([type, id, x, y]) => document.getElementById('c').dispatchEvent(new PointerEvent(type, { pointerType: 'touch', pointerId: id, clientX: x, clientY: y, bubbles: true, isPrimary: id === 1 })), [type, id, x, y]);
    await ptr('pointerdown', 1, 80, 560); await ptr('pointermove', 1, 80, 500); await page.waitForTimeout(600); await ptr('pointerup', 1, 80, 500);
    assert(await page.evaluate(y0 => y0 - window.__game.YOU().y, t.y) > 15, 'moved up');
    await ptr('pointerdown', 2, 300, 560); await ptr('pointermove', 2, 300, 490); await page.waitForTimeout(600); const aimed = await page.evaluate(() => window.__game.YOU().shots); await ptr('pointerup', 2, 300, 490); assert(aimed > t.shots, 'auto-fire');
    await page.evaluate(() => { window.__game.YOU().dashCd = 0; }); await ptr('pointerdown', 3, 90, 600); await ptr('pointerup', 3, 90, 600); await ptr('pointerdown', 3, 90, 600); await page.waitForTimeout(80); await ptr('pointerup', 3, 90, 600);
    await page.waitForFunction(() => window.__game.YOU().dashCd > 0, null, { timeout: 15000 });
    const sh2 = await page.evaluate(() => window.__game.YOU().shots); await page.touchscreen.tap(300, 300); await page.waitForTimeout(300); assert(await page.evaluate(() => window.__game.YOU().shots) > sh2, 'quick tap fires');
    await page.evaluate(() => { window.__game.YOU().dashCd = 0; }); await page.click('#h-dash'); await page.waitForFunction(() => window.__game.YOU().dashCd > 0, null, { timeout: 15000 });
    eq(errors.length, 0, errors.join(' | ')); await ctx.close();
  });

  await test('arena match: win 2-0 -> 3 stars, progress saved, art preview; defeat shows DEFEAT', async () => {
    const { ctx, page } = await open({ seed: baseSave() });
    await arenaPlay(page); await winMatch(page); const s = await readSave(page); eq(s.level, 2); eq(s.stars[1], 3); eq(await page.locator('.star.on').count(), 3); eq(await page.locator('.art canvas').count(), 1);
    await page.click('[data-act=menu]'); await page.waitForSelector('.L-menu'); await arenaPlay(page); await loseMatch(page); eq(await page.locator('.card h2').first().innerText(), 'DEFEAT'); await ctx.close();
  });

  await test('arena autopilot: unattended full match reaches a result', async () => {
    const { ctx, page, errors } = await open({ query: '?debug&auto&fast&q=low&speed=6', seed: baseSave() });
    await arenaPlay(page); await page.waitForSelector('.modal.win', { timeout: 150000 }); eq(errors.length, 0, errors.join(' | ')); await ctx.close();
  });

  await test('arena daily + levels: daily win records a streak once; levels grid locks and pages', async () => {
    const { ctx, page } = await open({ seed: baseSave({ level: 3, stars: { 1: 3, 2: 2 } }) });
    await tab(page, 'arena'); await page.click('[data-act=levels]'); await page.waitForSelector('.L-levels'); eq(await page.locator('.lv:not(.locked)').count(), 3); eq(await page.locator('.lv.locked[disabled]').count(), 9);
    await page.click('[data-act=closeLevels]'); await page.click('[data-act=daily]'); await winMatch(page); let s = await readSave(page); eq(s.daily.streak, 1); const coins = s.coins;
    await page.click('[data-act=menu]'); await page.waitForSelector('.L-menu'); await tab(page, 'arena'); assert((await page.locator('[data-act=daily]').innerText()).includes('Done today'));
    await page.click('[data-act=daily]'); await winMatch(page); s = await readSave(page); eq(s.daily.streak, 1); assert(s.coins - coins < 40, 'no second daily bonus'); await ctx.close();
  });

  await test('settings persist across reload (sound, assist, graphics, left-handed, sensitivity)', async () => {
    const { ctx, page } = await open();
    await page.click('[data-act=settings]'); await page.waitForSelector('.L-settings');
    await page.locator('input[data-set=sound]').click(); await page.locator('input[data-set=lefty]').click(); await page.locator('label:has(input[data-seg=assist][value="3"])').click(); await page.locator('label:has(input[data-seg=quality][value=low])').click();
    await page.locator('input[data-set=sens]').fill('1.5'); await page.waitForTimeout(150); const s = await readSave(page); eq(s.settings.sound, false); eq(s.settings.lefty, true); eq(s.settings.assist, 3); eq(s.settings.quality, 'low'); eq(s.settings.sens, 1.5);
    await page.reload(); await page.waitForSelector('.L-menu'); await page.click('[data-act=settings]'); eq(await page.locator('input[data-set=sound]').isChecked(), false); eq(await page.locator('input[data-seg=assist][value="3"]').isChecked(), true); await ctx.close();
  });

  await test('layout: 320 px wide - no horizontal scroll; menu tabs, settings, duel HUD, duel result and arena screens all fit', async () => {
    const { ctx, page } = await open({ ctxOpts: { viewport: { width: 320, height: 568 } }, seed: seedDuel(4, { coins: 80 }) });
    const fits = async (sel, label) => {
      const bad = await page.evaluate(s => {
        const root = document.querySelector(s), c = root.getBoundingClientRect(), out = [];
        if (c.left < -1 || c.right > innerWidth + 1) out.push('root outside viewport');
        for (const el of root.querySelectorAll('*')) { const r = el.getBoundingClientRect(); if (r.width && (r.right > c.right + 1 || r.left < c.left - 1) && getComputedStyle(el).position !== 'absolute') out.push(el.tagName + '.' + el.className); }
        if (document.documentElement.scrollWidth > innerWidth) out.push('page scrolls horizontally'); return out;
      }, sel); assert(bad.length === 0, `${label}: ${bad.slice(0, 4).join(' | ')}`);
    };
    for (const t of ['battle', 'arena', 'gear', 'skins']) { await tab(page, t); await fits('.m3', t); }
    await page.click('[data-act=settings]'); await page.waitForSelector('.L-settings'); await fits('.L-settings .card', 'settings'); await page.click('[data-act=closeSettings]');
    await tab(page, 'battle'); await startDuel(page); await fits('.dhud', 'duel hud'); await winDuel(page); await page.waitForTimeout(400); await fits('.modal.win .card', 'duel result');
    await page.click('[data-act=menu]'); await page.waitForSelector('.L-menu'); await arenaPlay(page); await waitMode(page, 'playing'); await calm(page); await fits('.hud', 'arena hud');
    await winMatch(page); await page.waitForTimeout(400); await fits('.modal.win .card', 'arena result'); await ctx.close();
  });

  await test('accessibility: axe-core (WCAG A/AA + best-practice) finds nothing on any screen', async () => {
    const { ctx, page } = await open({ ctxOpts: { bypassCSP: true }, seed: seedDuel(7, { coins: 150, level: 7, stars: { 1: 3, 2: 2, 3: 1 } }) });   // bypassCSP: ONLY to inject axe
    const audit = async name => {
      await page.addScriptTag({ content: AXE }); await page.waitForTimeout(450);
      await page.evaluate(() => Promise.all(document.getAnimations().filter(a => a.effect && a.effect.getTiming().iterations !== Infinity).map(a => a.finished.catch(() => {}))));
      const v = await page.evaluate(async () => (await axe.run(document, { runOnly: ['wcag2a', 'wcag2aa', 'best-practice'] })).violations.map(x => x.id + ' x' + x.nodes.length + ' ' + x.nodes[0].html.slice(0, 110)));
      assert(v.length === 0, `${name}: ${v.join(' ; ')}`);
    };
    await audit('menu battle'); for (const t of ['arena', 'gear', 'skins']) { await tab(page, t); await audit('menu ' + t); } await tab(page, 'battle');
    await page.click('[data-act=settings]'); await page.waitForSelector('.L-settings'); await audit('settings'); await page.click('[data-act=closeSettings]');
    await tab(page, 'arena'); await page.click('[data-act=levels]'); await page.waitForSelector('.L-levels'); await audit('levels'); await page.click('[data-act=closeLevels]'); await tab(page, 'battle');
    await startDuel(page); await calmDuel(page); await audit('duel hud'); await page.click('[data-act=pause]'); await page.waitForSelector('.L-pause'); await audit('pause'); await page.click('[data-act=resume]');
    await winDuel(page); await audit('duel result'); await page.click('[data-act=menu]'); await page.waitForSelector('.L-menu');
    await arenaPlay(page); await waitMode(page, 'playing'); await calm(page); await audit('arena hud'); await winMatch(page); await audit('arena result'); await ctx.close();
  });

  await test('reduced motion: arena confetti and 3D shake/confetti suppressed', async () => {
    const { ctx, page } = await open({ ctxOpts: { reducedMotion: 'reduce' }, seed: seedDuel(1) });
    assert(await page.evaluate(() => window.__game.rend.reduce && window.__game.duel.stage.reduce), 'honours prefers-reduced-motion');
    await startDuel(page); await winDuel(page); eq(await page.evaluate(() => window.__game.duel.stage.spark.p.filter(p => p.size === 0.35 && p.max === 2.6).length), 0); await ctx.close();
  });

  await test('offline: service worker precaches the app (incl. 3D bundle); reload + start a duel with no network', async () => {
    const { ctx, page } = await open({ seed: seedDuel(1) });
    await page.evaluate(() => navigator.serviceWorker.ready); await page.reload(); await page.waitForFunction(() => navigator.serviceWorker.controller != null);
    await ctx.setOffline(true); await page.reload(); await page.waitForSelector('.L-menu'); await startDuel(page); await ctx.setOffline(false); await ctx.close();
  });

  await test('sub-path hosting (/games/x/): boots, SW scoped to sub-path, manifest icons load, zero 4xx', async () => {
    const sp = await subpathServer(4174), ctx = await browser.newContext(MOBILE), page = await ctx.newPage(), bad = [], errors = [];
    page.on('response', r => { if (r.status() >= 400) bad.push(r.status() + ' ' + r.url()); }); page.on('pageerror', e => errors.push(e.message));
    await page.goto('http://localhost:4174/games/x/?q=low'); await page.waitForSelector('.L-menu');
    eq(await page.evaluate(async () => (await navigator.serviceWorker.ready).scope), 'http://localhost:4174/games/x/');
    const man = await page.evaluate(async () => { const m = await (await fetch('manifest.webmanifest')).json(); return Promise.all(m.icons.filter(i => i.type === 'image/png').map(async i => (await fetch(i.src)).status)); });
    assert(man.length >= 3 && man.every(s => s === 200), 'icons ' + man.join(','));
    eq(bad.length, 0, bad.join(' | ')); eq(errors.length, 0, errors.join(' | ')); await ctx.close(); sp.close();
  });

  await browser.close(); server.close();
  const failed = results.filter(r => !r.ok);
  console.log(`\n${results.length - failed.length}/${results.length} passed`);
  process.exit(failed.length ? 1 : 0);
})().catch(e => { console.error(e); process.exit(2); });
