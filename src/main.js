import './ui/styles.css';
import { UI } from './ui/ui.js';
import { SaveStore } from './core/save.js';
import { makeArena } from './core/arena.js';
import { createWorld, step, CFG, roundDone, alive } from './core/sim.js';
import { makeBrain, thinkAI } from './core/ai.js';
import { levelConfig, dailyConfig, matchStars, rewards, paletteOf, PALETTES, dateKey, claimDaily, levelLabel, arenaName } from './core/match.js';
import { GameAudio } from './game/audio.js';
import { setHaptics, vibrate, prefersReducedMotion } from './game/fx.js';
import { QualityGovernor } from './game/perf.js';
import { Renderer } from './game/render.js';
import { Input } from './game/input.js';
import { Rng } from './core/rng.js';

const VERSION = typeof __APP_VERSION__ === 'string' ? __APP_VERSION__ : 'dev';
const params = new URLSearchParams(location.search);
const debug = params.has('debug'), AUTO = params.has('auto');

const save = new SaveStore((() => { try { return localStorage; } catch { return null; } })());
const S = save.state;
const canvas = document.getElementById('c');
const audio = new GameAudio(), rend = new Renderer(canvas);
let ui, input;

const coarse = typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches;
const palette = () => paletteOf(S.settings.palette);
const apply = () => {
  audio.setEnabled(S.settings.sound); setHaptics(S.settings.haptics);
  rend.low = (params.get('q') || S.settings.quality) === 'low'; rend.reduce = S.settings.reduceMotion || prefersReducedMotion();
  if (input) { input.assist = S.settings.assist; input.lefty = S.settings.lefty; }
  document.documentElement.classList.toggle('reduce', rend.reduce);
};

// ---------------- session state ----------------
let mode = 'menu';           // menu | intro | countdown | playing | roundend | paused | result
let M = null;                // current match
let W = null;                // current world
let timeScale = 1, slowT = 0, ffOn = false, acc = 0, countdownT = 0, lastCount = 0, endT = 0, coachT = 0, coachStep = 0;
let resultArt = null;
let attract = null;          // menu background match

const landscapeNow = () => innerWidth > innerHeight * 1.1;
const sizesLabel = c => `${c.sizes[0]} vs ${c.sizes[1]}`;
const YOU = () => W?.ents.find(e => e.human);

function fitPadding(hud) {
  rend.padTop = hud ? Math.max(58, 50 + (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--safe-t')) || 0)) : 0;
  rend.padBottom = hud ? (innerWidth <= innerHeight * 1.1 ? 10 : 8) : 0; rend.padSide = hud ? 8 : 0;
  rend._fit(); if (rend.arena) rend._buildLayers(true);
}

// ---------------- attract mode (live bot match behind the menu) ----------------
function startAttract() {
  const rng = new Rng(`attract:${Date.now() >> 12}`), landscape = landscapeNow(), seed = `attract:${rng.int(9999)}`;
  const arena = makeArena({ seed, level: 8, landscape, teamSizes: [3, 3] });
  fitPadding(false); rend.setArena(arena, palette(), false);
  attract = { w: createWorld({ arena, sizes: [3, 3], human: false, skill: [0.62, 0.62], seed }), rounds: 0 };
  W = attract.w;
}
function stepAttract(dt) {
  acc += dt; let n = 0;
  while (acc >= CFG.DT && n++ < 6) { step(W, CFG.DT); acc -= CFG.DT; }
  if (n >= 6) acc = 0;
  rend.consume(W, W.events); W.events.length = 0;
  if (roundDone(W) || W.t > 40) {
    attract.rounds++;
    if (attract.rounds >= 3) { startAttract(); return; }
    W = attract.w = createWorld({ arena: W.arena, sizes: [3, 3], human: false, skill: [0.62, 0.62], seed: `attract:r${attract.rounds}:${Date.now()}` });
  }
}

// ---------------- match flow ----------------
function startMatch(cfg) {
  audio.unlock(); attract = null;
  M = { cfg, scores: [0, 0], round: 0, lost: 0, out: false, elims: 0, shots: 0, hits: 0, startT: performance.now() };
  const landscape = landscapeNow();
  M.arena = makeArena({ seed: cfg.seed, level: cfg.level, landscape, teamSizes: cfg.sizes });
  ui.hideAll(); fitPadding(true); rend.setArena(M.arena, palette(), false);
  mode = 'intro'; W = null;
  ui.showIntro({ label: cfg.label, name: cfg.name, vs: sizesLabel(cfg), foe: levelLabel(cfg.skill[1]).toUpperCase(), boss: cfg.boss });
  S.stats.matches++; save.save();
  setTimeout(() => { if (mode === 'intro' && M?.cfg === cfg) startRound(); }, params.has('fast') ? 100 : 1700);
}

function startRound() {
  const cfg = M.cfg; M.round++;
  W = createWorld({ arena: M.arena, sizes: cfg.sizes, human: true, skill: cfg.skill, roles: cfg.roles, seed: `${cfg.seed}:r${M.round}` });
  if (AUTO) { const you = YOU(); you.brain = makeBrain(0.97, 'rusher', W.rng); }
  ffOn = false; timeScale = 1; slowT = 0; acc = 0; endT = 0;
  ui.hideAll(); ui.showHud({ label: `${cfg.label} · R${M.round}`, winRounds: cfg.winRounds });
  input.reset(); input.enabled = false; mode = 'countdown'; countdownT = params.has('fast') ? 0.3 : 2.4; lastCount = 4;
  rend.parts.length = 0;
  pushHud();
}

function beginPlay() {
  mode = 'playing'; input.enabled = true; ui.hideBanner(); audio.go(); ui.showBanner('SPLAT!', '', 'go'); setTimeout(() => ui.hideBanner(), 600);
  coachT = 0; coachStep = 0;
}

function pushHud() {
  const you = YOU(); if (!W || !you || !ui.hud) return;
  ui.updateHud({
    time: Math.max(0, CFG.ROUND_TIME - W.t), youScore: M.scores[0], foeScore: M.scores[1],
    youAlive: alive(W, 0).length, youTotal: M.cfg.sizes[0], foeAlive: alive(W, 1).length, foeTotal: M.cfg.sizes[1],
    ammo: you.ammo, ammoFrac: you.reloadT > 0 ? 1 - you.reloadT / CFG.RELOAD : you.ammo / CFG.MAG, reloading: you.reloadT > 0,
    dashFrac: 1 - you.dashCd / CFG.DASH_CD, dead: !you.alive,
  });
}

function onEvent(ev) {
  const you = YOU(); if (!you) return;
  const near = (x, y) => Math.max(0.15, 1 - Math.hypot(x - you.x, y - you.y) / 800);
  switch (ev.type) {
    case 'shot': { if (ev.id === you.id) { M.shots++; S.stats.shots++; } audio.shot(0, near(ev.x, ev.y), ev.id === you.id); break; }
    case 'splat': audio.splat(near(ev.x, ev.y) * (ev.size > 1.5 ? 1.2 : 0.7)); break;
    case 'hit': {
      const killedYou = ev.victim === you.id, byYou = ev.shooter === you.id;
      if (byYou) { M.elims++; M.hits++; S.stats.elims++; S.stats.hits++; vibrate(25); }
      if (killedYou) { M.out = true; vibrate([60, 30, 90]); audio.elim(true); } else audio.elim(false);
      break;
    }
    case 'dash': if (ev.id === you.id) { S.stats.dashes++; vibrate(8); audio.dash(); } break;
    case 'reload': if (ev.id === you.id) audio.reload(); break;
    case 'reloaded': if (ev.id === you.id) audio.reloaded(); break;
    case 'pickup': audio.pickup(); if (ev.id === you.id) { ui.toast(ev.kind === 'shield' ? 'Shield! Absorbs one hit' : ev.kind === 'rapid' ? 'Rapid fire!' : 'Splash balls!', 1400); vibrate(15); } break;
    case 'pickupspawn': ui.toast('Power-ups spawned mid-field', 1500); break;
    case 'shieldpop': audio.shield(); vibrate(20); break;
    case 'roundover': onRoundOver(ev.winner); break;
    default: break;
  }
}

function onRoundOver(winner) {
  mode = 'roundend'; input.enabled = false; input.reset(); endT = 0; ffOn = false;
  const you = YOU();
  if (winner === 0) {
    M.scores[0]++; S.stats.roundsWon++; audio.win(); ui.showBanner('ROUND WON', `${M.scores[0]} – ${M.scores[1]}`, 'won');
    if (W.over.reason === 'elimination' && (M.scores[0] >= M.cfg.winRounds || you.alive)) { slowT = 0.9; rend.confetti(40); }
  } else if (winner === 1) { M.scores[1]++; M.lost++; audio.lose(); ui.showBanner('ROUND LOST', `${M.scores[0]} – ${M.scores[1]}`, 'lost'); }
  else { ui.showBanner('DRAW', 'Time ran out — replaying round', 'draw'); M.round--; }
  S.stats.rounds++;
}

function finishMatch() {
  const cfg = M.cfg, won = M.scores[0] >= cfg.winRounds, stars = matchStars({ won, lostRounds: M.lost, eliminated: M.out });
  let firstStars = false, extra = [];
  if (cfg.kind === 'journey') {
    if (stars > (S.stars[cfg.n] || 0)) { firstStars = stars === 3 && (S.stars[cfg.n] || 0) < 3; S.stars[cfg.n] = stars; }
    if (won && cfg.n >= S.level) S.level = cfg.n + 1;
  }
  let dailyInfo = null;
  if (cfg.kind === 'daily' && won) { dailyInfo = claimDaily(S.daily, cfg.key); }
  const dailyFirst = !!dailyInfo?.first;
  const coins = rewards({ won, roundsWon: M.scores[0], kills: M.elims, stars, firstStars, daily: dailyFirst });
  S.coins += coins; if (won) S.stats.wins++; S.flags.tutorialSeen = true; S.stats.playSec += Math.round((performance.now() - M.startT) / 1000); save.save();
  const acc = M.shots ? Math.round((M.hits / M.shots) * 100) : 0;
  const facts = [['Splats', M.elims], ['Accuracy', `${acc}%`], ['Rounds', `${M.scores[0]}–${M.scores[1]}`]];
  if (dailyInfo) facts.push(['Streak', `${dailyInfo.streak} day${dailyInfo.streak === 1 ? '' : 's'}`]);
  if (firstStars) extra.push('Perfect clear bonus!');
  resultArt = rend.exportArt(`${cfg.label} · ${cfg.name}`, `${won ? 'Won' : 'Lost'} ${M.scores[0]}–${M.scores[1]} vs ${levelLabel(cfg.skill[1])} bots · ${rend.splatLog.length} splats`);
  const thumb = document.createElement('canvas'); thumb.width = 360; thumb.height = Math.round(360 * resultArt.height / resultArt.width);
  thumb.getContext('2d').drawImage(resultArt, 0, 0, thumb.width, thumb.height);
  mode = 'result'; audio[won ? 'win' : 'lose']();
  if (won) rend.confetti(90);
  ui.showResult({
    won, title: won ? (stars === 3 ? 'FLAWLESS!' : 'VICTORY!') : 'DEFEAT', sub: extra[0] || (won ? `${cfg.name} is yours` : 'Shake it off — regroup and splat back'),
    stars, score: M.scores, facts, coins, art: thumb,
    nextLabel: won ? (cfg.kind === 'daily' ? 'Done' : `Level ${cfg.n + 1}`) : 'Try again', canShare: true,
  });
}

// ---------------- frame loop ----------------
let last = performance.now(), gov = new QualityGovernor();
function frame(ts) {
  const dt = Math.min(0.05, Math.max(0.001, (ts - last) / 1000)); last = ts;
  if (mode === 'playing' && S.settings.quality !== 'low' && !params.has('q')) {
    if (gov.push(dt) === 'downgrade') { S.settings.quality = 'low'; apply(); rend.resize(); save.save(); ui.toast('Switched to Low graphics for smoother play', 2400); }
  }
  if (mode === 'menu' && W) stepAttract(dt);
  else if (W && (mode === 'playing' || mode === 'roundend')) {
    let scale = timeScale; if (slowT > 0) { slowT -= dt; scale = 0.28; } if (ffOn && !YOU().alive) scale = 3.2;
    acc += dt * scale; let n = 0;
    while (acc >= CFG.DT && n++ < 8) {
      const inp = mode === 'playing' ? (AUTO ? thinkAI(W, YOU(), CFG.DT) : input.sample(CFG.DT)) : undefined;
      step(W, CFG.DT, inp);
      for (const ev of W.events) onEvent(ev);
      rend.consume(W, W.events); W.events.length = 0;
    }
    if (n >= 8) acc = 0;
    if (mode === 'roundend') { endT += dt; if (roundDone(W) && endT > (params.has('fast') ? 0.3 : 1.7)) { ui.hideBanner(); if (M.scores[0] >= M.cfg.winRounds || M.scores[1] >= M.cfg.winRounds) finishMatch(); else startRound(); } }
    else coach(dt);
    pushHud();
  } else if (W && mode === 'countdown') {
    countdownT -= dt; const c = Math.ceil(countdownT / 0.8);
    if (c !== lastCount && c > 0 && c <= 3) { lastCount = c; ui.showBanner(String(c), c === 3 ? `${M.cfg.label} · Round ${M.round}` : '', 'count'); audio.tick(); }
    if (countdownT <= 0) beginPlay();
  } else if (W && (mode === 'paused')) { /* frozen */ }
  rend.draw(W, dt, { you: YOU(), showYou: mode === 'countdown' || (mode === 'playing' && W.t < 4), aimLine: mode === 'playing' && !M?.cfg?.noAim && (input.touchSeen ? (input.aimS.id != null ? 2 : 0) : 0) });
  requestAnimationFrame(frame);
}

function coach(dt) {
  if (S.flags.tutorialSeen || mode !== 'playing') return;
  coachT += dt;
  const steps = coarse ? ['Left thumb: move  ·  Double-tap: dash', 'Right thumb: aim — hold to fire, tap for a quick shot', 'Duck behind bunkers to reload. One hit and you’re out!']
    : ['WASD to move  ·  Shift to dash', 'Mouse to aim — click or Space to fire', 'Duck behind bunkers to reload (R). One hit and you’re out!'];
  const idx = coachT < 3.5 ? 0 : coachT < 7 ? 1 : coachT < 11 ? 2 : 3;
  if (idx !== coachStep) { coachStep = idx; idx < 3 ? ui.showCoach(steps[idx]) : ui.hideCoach(); }
  if (coachStep === 0 && coachT < 0.05) ui.showCoach(steps[0]);
}

// ---------------- UI wiring ----------------
const actions = {
  sfx: k => audio[k]?.(),
  play: () => startMatch(levelConfig(S.level)),
  daily: () => startMatch(dailyConfig(dateKey())),
  levels: () => { levelsPage = Math.floor((S.level - 1) / 12); renderLevels(); },
  closeLevels: () => ui.hideLevels(),
  levelsPage: d => { levelsPage = Number(d.page); renderLevels(); },
  playLevel: d => { ui.hideLevels(); startMatch(levelConfig(Number(d.n))); },
  shop: () => renderShop(), closeShop: () => ui.hideShop(),
  buy: d => {
    const p = PALETTES.find(x => x.id === d.id); if (!p || S.palettes.includes(p.id)) return;
    if (S.coins < p.cost) { audio.error(); ui.toast(`Need ${p.cost - S.coins} more coins — win matches to earn them`); return; }
    S.coins -= p.cost; S.palettes.push(p.id); S.settings.palette = p.id; save.save(); audio.coin(); applyPalette(); renderShop(); ui.toast(`${p.name} unlocked!`);
  },
  equip: d => { if (S.palettes.includes(d.id)) { S.settings.palette = d.id; save.save(); applyPalette(); renderShop(); } },
  settings: () => renderSettings(),
  closeSettings: () => ui.hideSettings(),
  setSetting: (k, v) => {
    if (k === 'assist') v = Number(v);
    S.settings[k] = v; apply(); if (k === 'quality' || k === 'reduceMotion') rend.resize(); save.save();
  },
  resetProgress: async () => { if (await ui.confirm({ title: 'Reset all progress?', body: 'This erases campaign, coins and colours on this device.', ok: 'Reset', cancel: 'Cancel', danger: true })) { save.reset(); location.reload(); } },
  pause: () => { if (mode === 'playing' || mode === 'countdown' || mode === 'roundend') { M.prevMode = mode; mode = 'paused'; input.reset(); input.enabled = false; ui.showPause(); } },
  resume: () => { if (mode === 'paused') { ui.hidePause(); mode = M.prevMode; if (mode === 'playing') input.enabled = true; last = performance.now(); } },
  restart: () => { ui.hidePause(); startMatch(M.cfg); },
  quit: () => { ui.hidePause(); toMenu(); },
  retry: () => startMatch(M.cfg),
  next: () => { const c = M.cfg; if (c.kind === 'journey') startMatch(levelConfig(c.n + 1)); else toMenu(); },
  menu: () => toMenu(),
  ff: () => { ffOn = !ffOn; ui.toast(ffOn ? 'Fast-forward ×3' : 'Normal speed', 900); },
  dashBtn: () => input.requestDash(), reloadBtn: () => input.requestReload(),
  share: () => shareArt(),
  install: async () => { if (deferredInstall) { deferredInstall.prompt(); deferredInstall = null; ui.toast('Thanks for installing!'); } },
};
let levelsPage = 0, deferredInstall = null;
const renderLevels = () => ui.showLevels({ unlocked: S.level, stars: S.stars, page: levelsPage, current: S.level });
const renderShop = () => ui.showShop({ coins: S.coins, owned: S.palettes, equipped: S.settings.palette });
const renderSettings = () => ui.showSettings({ settings: S.settings, version: VERSION, persistent: save.persistent, canVibrate: typeof navigator.vibrate === 'function' });
function applyPalette() { const p = palette(); ui.setPalette(p); rend.setPalette(p); }

async function shareArt() {
  if (!resultArt) return;
  const blob = await new Promise(r => resultArt.toBlob(r, 'image/png'));
  if (!blob) { ui.toast('Could not create image'); return; }
  const file = new File([blob], 'painball-arena.png', { type: 'image/png' });
  S.stats.shares++; save.save();
  try {
    if (navigator.canShare?.({ files: [file] })) { await navigator.share({ files: [file], title: 'My Painball arena', text: 'I painted this arena in Painball!' }); return; }
  } catch (e) { if (e && e.name === 'AbortError') return; }
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'painball-arena.png'; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000); ui.toast('Arena saved as an image');
}

function toMenu() {
  ui.hideAll(); mode = 'menu'; M = null; input.reset(); input.enabled = false; save.save();
  startAttract();
  ui.showMenu({ level: S.level, coins: S.coins, daily: { done: S.daily.last === dateKey(), streak: S.daily.streak }, canInstall: !!deferredInstall, stats: S.stats });
}

// ---------------- boot ----------------
ui = new UI(document.getElementById('ui'), actions);
input = new Input(document.getElementById('c'), {
  toWorld: (x, y) => rend.toWorld(x, y), getWorld: () => W,
  onPause: () => (mode === 'paused' ? actions.resume() : actions.pause()),
  onStick: (w, st) => { ui.updateStick(w === 'move' ? 'move' : 'aim', st); if (st) ui.setTouch(true); },
});
if (coarse) ui.setTouch(true);
apply(); applyPalette();
const doResize = () => { rend.resize(); if (M && mode !== 'menu') fitPadding(true); };
addEventListener('resize', doResize); addEventListener('orientationchange', () => setTimeout(doResize, 150));
rend.resize();
document.addEventListener('visibilitychange', () => { if (document.hidden) actions.pause(); });
addEventListener('pagehide', () => save.save());
addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredInstall = e; if (mode === 'menu') toMenu(); });
toMenu(); requestAnimationFrame(frame);
if (debug) window.__game = {
  get mode() { return mode; }, get M() { return M; }, get W() { return W; }, S, save, actions, ui, rend, input, alive, YOU,
  killEnemies() { for (const e of W.ents) if (e.team === 1 && e.alive) { e.alive = false; e.deadAt = W.t; } },
  killYou() { const y = YOU(); y.alive = false; y.deadAt = W.t; },
};

if (!__DEV__ && 'serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
