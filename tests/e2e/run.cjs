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
async function test(name, fn) {
  const t0 = Date.now();
  try { await fn(); results.push({ name, ok: true }); console.log(`  ok   ${name} (${Date.now() - t0} ms)`); }
  catch (e) { results.push({ name, ok: false }); console.log(`  FAIL ${name}\n       ${String(e.message).split('\n').slice(0, 4).join('\n       ')}`); }
}
const assert = (c, m) => { if (!c) throw new Error(m || 'assertion failed'); };
const eq = (a, b, m) => assert(a === b, `${m || 'eq'}: expected ${JSON.stringify(b)}, got ${JSON.stringify(a)}`);

let browser;
const baseSave = (over = {}) => ({ version: 1, coins: 20, level: 1, stars: {}, daily: { last: null, streak: 0, bestStreak: 0, done: [] }, palettes: ['classic'],
  settings: { sound: true, haptics: true, assist: 2, quality: 'high', palette: 'classic', lefty: false, reduceMotion: false }, flags: { tutorialSeen: true }, stats: {}, ...over });

const MOBILE = { ...devices['iPhone 13'], deviceScaleFactor: 1 }, DESKTOP = { viewport: { width: 1100, height: 700 }, deviceScaleFactor: 1 };
async function open({ mobile = true, query = '?debug&fast&q=low', seed = null, ctxOpts = {}, cdn = false } = {}) {
  const ctx = await browser.newContext({ ...(mobile ? MOBILE : DESKTOP), ...ctxOpts });
  if (seed) await ctx.addInitScript(([k, s]) => { if (!localStorage.getItem('__seeded')) { localStorage.setItem(k, JSON.stringify(s)); localStorage.setItem('__seeded', '1'); } }, [SAVE_KEY, seed]);
  const page = await ctx.newPage(), errors = [], origins = new Set();
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push('console.error: ' + m.text()); });
  page.on('request', r => { try { origins.add(new URL(r.url()).origin); } catch { /* data: */ } });
  await page.goto(BASE + query); await page.waitForSelector('.L-menu, .L-hud');
  return { ctx, page, errors, origins };
}
const readSave = page => page.evaluate(k => JSON.parse(localStorage.getItem(k) || 'null'), SAVE_KEY);
const mode = page => page.evaluate(() => window.__game.mode);
const waitMode = (page, m, timeout = 60000) => page.waitForFunction(m2 => window.__game.mode === m2, m, { timeout, polling: 100 });
const shot = async (page, name) => { if (SHOTS) { await page.waitForTimeout(900); await page.screenshot({ path: path.join(SHOT_DIR, name + '.png'), timeout: 120000 }); } };
/** Input tests must not be flaky because a bot shot the player during slow software-GL frames: make enemies static dummies. */
const calm = page => page.evaluate(() => window.__game.W.ents.filter(e => e.team === 1).forEach(e => { e.brain = null; }));
/** Win the current match by deleting the enemy team each round (debug hook); returns when the result screen is up. */
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

  await test('boot: menu + live attract-mode match behind it; zero console errors (incl. CSP)', async () => {
    const { ctx, page, errors } = await open();
    eq(await page.locator('[data-act=play]').count(), 1);
    const t1 = await page.evaluate(() => window.__game.W.t); await page.waitForTimeout(1500); const t2 = await page.evaluate(() => window.__game.W.t);
    assert(t2 > t1 + 0.3, `attract match advancing (${t1} -> ${t2})`); await shot(page, '01-menu-mobile');
    eq(errors.length, 0, errors.join(' | ')); await ctx.close();
  });

  await test('NO ADS / no third parties: every request in a full session is same-origin; no ad DOM', async () => {
    const { ctx, page, origins } = await open({ seed: baseSave() });
    await page.click('[data-act=play]'); await waitMode(page, 'playing'); await page.evaluate(() => window.__game.killEnemies());
    await page.waitForTimeout(500);
    assert([...origins].every(o => o === `http://localhost:${PORT}`), 'third-party origins: ' + [...origins].join(','));
    eq(await page.locator('[class*="ad-"], [id*="ad-"], iframe, ins.adsbygoogle').count(), 0); await ctx.close();
  });

  await test('desktop: landscape arena; WASD moves, mouse aim + click fires through the HUD layer; Shift dashes; R reloads', async () => {
    const { ctx, page, errors } = await open({ mobile: false, seed: baseSave() });
    await page.click('[data-act=play]'); await waitMode(page, 'playing'); await calm(page);
    const g0 = await page.evaluate(() => { const y = window.__game.YOU(), A = window.__game.W.arena; return { x: y.x, y: y.y, landscape: A.w > A.h, shots: y.shots }; });
    assert(g0.landscape, 'desktop uses the landscape arena');
    await page.keyboard.down('d'); await page.waitForTimeout(500); await page.keyboard.up('d');
    const moved = await page.evaluate(x0 => window.__game.YOU().x - x0, g0.x); assert(moved > 20, `moved right ${moved}`);
    const box = await page.locator('#c').boundingBox();
    await page.mouse.move(box.x + box.width * 0.8, box.y + box.height * 0.4); await page.mouse.down(); await page.waitForTimeout(600); await page.mouse.up();
    const shots = await page.evaluate(() => window.__game.YOU().shots); assert(shots > g0.shots, `shots ${g0.shots} -> ${shots}`);
    const ammoBefore = await page.evaluate(() => window.__game.YOU().ammo); assert(ammoBefore < 28);
    await page.keyboard.press('r'); await page.waitForTimeout(300); assert(await page.evaluate(() => window.__game.YOU().reloadT > 0 || window.__game.YOU().ammo === 28), 'reload started');
    const cd0 = await page.evaluate(() => window.__game.YOU().dashCd); await page.keyboard.down('d'); await page.keyboard.press('Shift'); await page.waitForTimeout(100); await page.keyboard.up('d');
    assert(await page.evaluate(() => window.__game.YOU().dashCd) > cd0, 'dash used'); await shot(page, '02-play-desktop');
    eq(errors.length, 0, errors.join(' | ')); await ctx.close();
  });

  await test('mobile: portrait arena; real tap through HUD; touch sticks move + aim + auto-fire; double-tap dashes; buttons work', async () => {
    const { ctx, page, errors } = await open({ seed: baseSave() });
    await page.click('[data-act=play]'); await waitMode(page, 'playing'); await calm(page);
    assert(await page.evaluate(() => window.__game.W.arena.h > window.__game.W.arena.w), 'portrait arena');
    const t = await page.evaluate(() => { const y = window.__game.YOU(), r = window.__game.rend; return { x: y.x, y: y.y, shots: y.shots, s: r.k, ox: r.ox, oy: r.oy }; });
    const ptr = (type, id, x, y) => page.evaluate(([type, id, x, y]) => document.getElementById('c').dispatchEvent(new PointerEvent(type, { pointerType: 'touch', pointerId: id, clientX: x, clientY: y, bubbles: true, isPrimary: id === 1 })), [type, id, x, y]);
    await ptr('pointerdown', 1, 80, 560); await ptr('pointermove', 1, 80, 500);      // left thumb: push up
    await page.waitForTimeout(600); await ptr('pointerup', 1, 80, 500);
    const dy = await page.evaluate(y0 => y0 - window.__game.YOU().y, t.y); assert(dy > 15, `moved up ${dy}`);
    await ptr('pointerdown', 2, 300, 560); await ptr('pointermove', 2, 300, 490);    // right thumb: aim up, auto-fire
    await page.waitForTimeout(600); const aimed = await page.evaluate(() => ({ aim: window.__game.YOU().aim, shots: window.__game.YOU().shots })); await ptr('pointerup', 2, 300, 490);
    assert(aimed.shots > t.shots, 'auto-fire while aim stick held'); assert(Math.abs(Math.cos(aimed.aim)) < 0.5, `aiming roughly up (${aimed.aim})`);
    await page.evaluate(() => { window.__game.YOU().dashCd = 0; });
    await ptr('pointerdown', 3, 90, 600); await ptr('pointerup', 3, 90, 600); await ptr('pointerdown', 3, 90, 600); await page.waitForTimeout(80); await ptr('pointerup', 3, 90, 600);
    await page.waitForFunction(() => window.__game.YOU().dashCd > 0, null, { timeout: 15000 });   // double-tap on the left side dashed
    const sh2 = await page.evaluate(() => window.__game.YOU().shots); await page.touchscreen.tap(300, 300);   // REAL tap through the HUD layer on the right half
    await page.waitForTimeout(300); assert(await page.evaluate(() => window.__game.YOU().shots) > sh2, 'quick tap fires an assisted shot');
    await page.evaluate(() => { window.__game.YOU().dashCd = 0; }); await page.click('#h-dash'); await page.waitForFunction(() => window.__game.YOU().dashCd > 0, null, { timeout: 15000 });   // dash button await shot(page, '03-play-mobile');
    eq(errors.length, 0, errors.join(' | ')); await ctx.close();
  });

  await test('full match: win 2-0 -> result with 3 stars, progress + coins saved, art preview, Next level starts level 2', async () => {
    const { ctx, page, errors } = await open({ seed: baseSave() });
    await page.click('[data-act=play]'); await winMatch(page); await shot(page, '04-result-win');
    const s = await readSave(page); eq(s.level, 2); eq(s.stars[1], 3); assert(s.coins > 20, 'coins awarded'); eq(s.stats.wins, 1);
    eq(await page.locator('.star.on').count(), 3); eq(await page.locator('.art canvas').count(), 1);
    await page.click('[data-act=next]'); await page.waitForSelector('.hud'); assert((await page.locator('.hud-label').innerText()).startsWith('Level 2'));
    eq(errors.length, 0, errors.join(' | ')); await ctx.close();
  });

  await test('defeat: losing 2 rounds shows DEFEAT, no progress, Try again restarts the same level', async () => {
    const { ctx, page } = await open({ seed: baseSave() });
    await page.click('[data-act=play]'); await loseMatch(page); eq(await page.locator('.card h2').first().innerText(), 'DEFEAT');
    const s = await readSave(page); eq(s.level, 1); eq(await page.locator('.star.on').count(), 0);
    await page.click('[data-act=retry]'); await page.waitForSelector('.hud'); assert((await page.locator('.hud-label').innerText()).startsWith('Level 1')); await ctx.close();
  });

  await test('real full bot match: autopilot plays unattended to a result (proves sim loop + AI + rules end-to-end)', async () => {
    const { ctx, page, errors } = await open({ query: '?debug&auto&fast&q=low&speed=6', seed: baseSave() });
    await page.click('[data-act=play]'); await page.waitForSelector('.modal.win', { timeout: 150000 });
    const info = await page.evaluate(() => ({ round: window.__game.M.round, score: window.__game.M.scores, shots: window.__game.M.shots, splats: window.__game.rend.splatLog.length, parts: window.__game.rend.parts.length }));
    console.log('       autopilot match:', JSON.stringify(info));
    assert(info.shots > 5 && info.splats > 5, 'paint was actually thrown'); assert(info.parts <= 700, 'particle pool bounded'); eq(errors.length, 0, errors.join(' | ')); await ctx.close();
  });

  await test('pause: button, P key, resume; auto-pause when the tab is hidden; quit returns to menu', async () => {
    const { ctx, page } = await open({ mobile: false, seed: baseSave() });
    await page.click('[data-act=play]'); await waitMode(page, 'playing');
    await page.click('[data-act=pause]'); await page.waitForSelector('.L-pause'); eq(await mode(page), 'paused');
    await page.click('[data-act=resume]'); await page.waitForSelector('.L-pause', { state: 'detached' }); eq(await mode(page), 'playing');
    await page.keyboard.press('p'); await page.waitForSelector('.L-pause'); await page.keyboard.press('p'); await page.waitForSelector('.L-pause', { state: 'detached' });
    await page.evaluate(() => { Object.defineProperty(document, 'hidden', { value: true, configurable: true }); document.dispatchEvent(new Event('visibilitychange')); });
    eq(await mode(page), 'paused'); await page.click('[data-act=quit]'); await page.waitForSelector('.L-menu'); await ctx.close();
  });

  await test('settings persist across reload (sound, assist, graphics, left-handed)', async () => {
    const { ctx, page } = await open();
    await page.click('[data-act=settings]'); await page.waitForSelector('.L-settings');
    await page.locator('input[data-set=sound]').click(); await page.locator('input[data-set=lefty]').click(); await page.locator('label:has(input[data-seg=assist][value="3"])').click(); await page.locator('label:has(input[data-seg=quality][value=low])').click();
    await page.waitForTimeout(100); const s = await readSave(page); eq(s.settings.sound, false); eq(s.settings.lefty, true); eq(s.settings.assist, 3); eq(s.settings.quality, 'low');
    await page.reload(); await page.waitForSelector('.L-menu'); await page.click('[data-act=settings]');
    eq(await page.locator('input[data-set=sound]').isChecked(), false); eq(await page.locator('input[data-seg=assist][value="3"]').isChecked(), true); await ctx.close();
  });

  await test('shop: buy needs coins; buying spends them, unlocks + equips palette and recolours the UI', async () => {
    const { ctx, page } = await open({ seed: baseSave({ coins: 100 }) });
    await page.click('[data-act=shop]'); await page.waitForSelector('.L-shop');
    await page.click('[data-act=buy][data-id=gold]'); await page.waitForTimeout(100); eq((await readSave(page)).coins, 100, 'cannot afford 120');
    await page.click('[data-act=buy][data-id=neon]'); await page.waitForTimeout(150); const s = await readSave(page); eq(s.coins, 60); assert(s.palettes.includes('neon')); eq(s.settings.palette, 'neon');
    eq(await page.evaluate(() => document.getElementById('ui').style.getPropertyValue('--you')), '#ff3df2'); await shot(page, '05-shop'); await ctx.close();
  });

  await test('levels: unlocked playable, locked disabled and labelled; pager works', async () => {
    const { ctx, page } = await open({ seed: baseSave({ level: 3, stars: { 1: 3, 2: 2 } }) });
    await page.click('[data-act=levels]'); await page.waitForSelector('.L-levels');
    eq(await page.locator('.lv:not(.locked)').count(), 3); eq(await page.locator('.lv.locked[disabled]').count(), 9);
    assert((await page.locator('.lv.locked').first().getAttribute('aria-label')).includes('locked'));
    await page.click('[data-act=levelsPage][aria-label="Next page"]'); assert((await page.locator('.pager span').innerText()).startsWith('13'));
    await page.click('[data-act=levelsPage][aria-label="Previous page"]'); await page.click('[data-act=playLevel][data-n="2"]'); await page.waitForSelector('.hud');
    assert((await page.locator('.hud-label').innerText()).startsWith('Level 2')); await ctx.close();
  });

  await test('daily arena: win records a streak once; replaying the same day does not double-claim', async () => {
    const { ctx, page } = await open();
    await page.click('[data-act=daily]'); await winMatch(page); let s = await readSave(page); eq(s.daily.streak, 1); const coins = s.coins;
    await page.click('[data-act=menu]'); await page.waitForSelector('.L-menu'); assert((await page.locator('[data-act=daily]').innerText()).includes('Done today'));
    await page.click('[data-act=daily]'); await winMatch(page); s = await readSave(page); eq(s.daily.streak, 1); assert(s.coins - coins < 25 + 15, 'no second daily bonus'); await ctx.close();
  });

  await test('share art: downloads a real PNG of the painted arena', async () => {
    const { ctx, page } = await open({ mobile: false });
    await page.click('[data-act=play]'); await winMatch(page);
    const [dl] = await Promise.all([page.waitForEvent('download', { timeout: 30000 }), page.click('[data-act=share]')]);
    eq(dl.suggestedFilename(), 'painball-arena.png'); const p = await dl.path(); const buf = fs.readFileSync(p);
    eq(buf.subarray(1, 4).toString(), 'PNG'); assert(buf.length > 5000, 'png size ' + buf.length); eq((await readSave(page)).stats.shares, 1); await ctx.close();
  });

  await test('layout: 320 px wide - no horizontal scroll; HUD, result, settings, levels, shop children all fit', async () => {
    const { ctx, page } = await open({ ctxOpts: { viewport: { width: 320, height: 568 } }, seed: baseSave({ coins: 50, level: 14 }) });
    const fits = async (sel, label) => {
      const bad = await page.evaluate(s => {
        const root = document.querySelector(s), c = root.getBoundingClientRect(), out = [];
        if (c.left < -1 || c.right > innerWidth + 1) out.push('root outside viewport');
        for (const el of root.querySelectorAll('*')) { const r = el.getBoundingClientRect(); if (r.width && (r.right > c.right + 1 || r.left < c.left - 1) && getComputedStyle(el).position !== 'absolute') out.push(el.tagName + '.' + el.className); }
        if (document.documentElement.scrollWidth > innerWidth) out.push('page scrolls horizontally'); return out;
      }, sel); assert(bad.length === 0, `${label}: ${bad.slice(0, 4).join(' | ')}`);
    };
    await fits('.L-menu .stack', 'menu');
    await page.click('[data-act=settings]'); await page.waitForSelector('.L-settings'); await fits('.L-settings .card', 'settings'); await page.click('[data-act=closeSettings]');
    await page.click('[data-act=levels]'); await page.waitForSelector('.L-levels'); await fits('.L-levels .card', 'levels'); await page.click('[data-act=closeLevels]');
    await page.click('[data-act=shop]'); await page.waitForSelector('.L-shop'); await fits('.L-shop .card', 'shop'); await page.click('[data-act=closeShop]');
    await page.click('[data-act=play]'); await waitMode(page, 'playing'); await fits('.hud', 'hud');
    const arena = await page.evaluate(() => { const r = window.__game.rend, A = r.arena; return { l: r.ox, r: r.ox + A.w * r.k, w: innerWidth }; }); assert(arena.l >= 0 && arena.r <= arena.w + 1, 'arena inside viewport');
    await winMatch(page); await page.waitForTimeout(400); await fits('.modal.win .card', 'result'); await ctx.close();
  });

  await test('accessibility: axe-core (WCAG A/AA + best-practice) finds nothing on any screen', async () => {
    const { ctx, page } = await open({ ctxOpts: { bypassCSP: true }, seed: baseSave({ coins: 150, level: 7, stars: { 1: 3, 2: 2, 3: 1 } }) });   // bypassCSP: ONLY to inject axe
    const audit = async name => {
      await page.addScriptTag({ content: AXE }); await page.waitForTimeout(450);
      const v = await page.evaluate(async () => (await axe.run(document, { runOnly: ['wcag2a', 'wcag2aa', 'best-practice'] })).violations.map(x => x.id + ' x' + x.nodes.length + ' ' + x.nodes[0].html.slice(0, 90)));
      assert(v.length === 0, `${name}: ${v.join(' ; ')}`);
    };
    await audit('menu');
    await page.click('[data-act=settings]'); await page.waitForSelector('.L-settings'); await audit('settings'); await page.click('[data-act=closeSettings]');
    await page.click('[data-act=levels]'); await page.waitForSelector('.L-levels'); await audit('levels'); await page.click('[data-act=closeLevels]');
    await page.click('[data-act=shop]'); await page.waitForSelector('.L-shop'); await audit('shop'); await page.click('[data-act=closeShop]');
    await page.click('[data-act=play]'); await waitMode(page, 'playing'); await audit('hud');
    await page.click('[data-act=pause]'); await page.waitForSelector('.L-pause'); await audit('pause'); await page.click('[data-act=resume]');
    await winMatch(page); await audit('result'); await ctx.close();
  });

  await test('reduced motion: no screen shake; confetti suppressed', async () => {
    const { ctx, page } = await open({ ctxOpts: { reducedMotion: 'reduce' }, seed: baseSave() });
    assert(await page.evaluate(() => window.__game.rend.reduce), 'renderer honours prefers-reduced-motion');
    await page.click('[data-act=play]'); await winMatch(page); eq(await page.evaluate(() => window.__game.rend.parts.filter(p => p.k === 'conf').length), 0); await ctx.close();
  });

  await test('offline: service worker precaches the app; reload + play with no network', async () => {
    const { ctx, page } = await open();
    await page.evaluate(() => navigator.serviceWorker.ready);
    await page.reload(); await page.waitForFunction(() => navigator.serviceWorker.controller != null);
    await ctx.setOffline(true); await page.reload(); await page.waitForSelector('.L-menu');
    await page.click('[data-act=play]'); await waitMode(page, 'playing'); await ctx.setOffline(false); await ctx.close();
  });

  await test('sub-path hosting (/games/x/): boots, SW scoped to sub-path, manifest icons load, zero 4xx', async () => {
    const sp = await subpathServer(4174), ctx = await browser.newContext(MOBILE), page = await ctx.newPage(), bad = [], errors = [];
    page.on('response', r => { if (r.status() >= 400) bad.push(r.status() + ' ' + r.url()); }); page.on('pageerror', e => errors.push(e.message));
    await page.goto('http://localhost:4174/games/x/?q=low'); await page.waitForSelector('.L-menu');
    const scope = await page.evaluate(async () => (await navigator.serviceWorker.ready).scope); eq(scope, 'http://localhost:4174/games/x/');
    const man = await page.evaluate(async () => { const m = await (await fetch('manifest.webmanifest')).json(); return Promise.all(m.icons.filter(i => i.type === 'image/png').map(async i => (await fetch(i.src)).status)); });
    assert(man.length >= 3 && man.every(s => s === 200), 'icons ' + man.join(','));
    eq(bad.length, 0, bad.join(' | ')); eq(errors.length, 0, errors.join(' | ')); await ctx.close(); sp.close();
  });

  await browser.close(); server.close();
  const failed = results.filter(r => !r.ok);
  console.log(`\n${results.length - failed.length}/${results.length} passed`);
  process.exit(failed.length ? 1 : 0);
})().catch(e => { console.error(e); process.exit(2); });
