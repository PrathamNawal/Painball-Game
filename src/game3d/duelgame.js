// Duel match controller: menu showcase, best-of-3 flow, input -> core step -> 3D stage + HUD + audio + rewards.
import { createDuel, stepDuel, duelDone, D, duelSkill, postsFor, castRay, markerPos, playerAimPoint, makeScripted, scriptedInput } from '../core/duel.js';
import { Stage3D } from './stage3d.js';
import { DuelInput } from './duelinput.js';
import { THEMES, areaOfStage, outfitOf, foeOutfit, foeName } from './themes.js';
import { paletteOf, dateKey } from '../core/match.js';
import { TRICKS } from '../ui/duelui.js';
import { vibrate } from '../game/fx.js';

export const duelConfig = stage => ({ stage, seed: `stage${stage}`, skill: duelSkill(stage), boss: stage % 5 === 0, posts: postsFor(stage), theme: THEMES[areaOfStage(stage)].id, name: foeName(stage), foe: foeOutfit(stage), winRounds: 2, label: `Stage ${stage}` });

export class DuelGame {
  constructor({ canvas, ui, S, save, audio, params, onMenu }) {
    this.cv = canvas; this.ui = ui; this.S = S; this.save = save; this.audio = audio; this.params = params; this.onMenu = onMenu;
    this.stage = null; this.mode = 'menu'; this.M = null; this.s = null; this.acc = 0; this.slowT = 0; this.tab = 'battle'; this.areaIdx = areaOfStage(S.duel.stage); this.t = 0; this.countT = 0; this.endT = 0; this.trickSeen = 0; this.hintT = 0;
    this.SPEED = params.has('debug') ? Math.min(12, Math.max(1, Number(params.get('speed')) || 1)) : 1; this.AUTO = params.has('auto'); this.coach = 0;
    this.input = new DuelInput(canvas, { onPause: () => this.togglePause() });
    this.input.getState = () => this.s;
  }
  get active() { return !!this.stage; }
  palette() { return paletteOf(this.S.settings.palette); }
  look(cfg) { const o = outfitOf(this.S.settings.outfit), p = this.palette(); return { pal: { you: p.you, foe: p.foe }, you: { color: o.color, hat: o.hat }, foe: cfg.foe }; }
  ensureStage() {
    if (!this.stage) { try { this.stage = new Stage3D(this.cv); } catch (e) { this.stage = null; throw e; } }
    this.applySettings(); this.stage.resize(); return this.stage;
  }
  applySettings() { const S = this.S; this.input.assist = S.settings.assist; this.input.sens = S.settings.sens; if (this.stage) { this.stage.setQuality((this.params.get('q') || S.settings.quality) === 'low'); this.stage.reduce = S.settings.reduceMotion || (typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches); } }

  // ------------------------------------------------------------ menu + showcase
  areaInfo() {
    const st = this.S.duel.stage;
    return THEMES.map((t, i) => { let s = st; while (s >= 1 && areaOfStage(s) !== i) s--; return { name: t.name, locked: s < 1, unlockStage: i * 5 + 1, stage: Math.max(1, s) }; });
  }
  renderMenu() {
    const S = this.S, areas = this.areaInfo(), a = areas[this.areaIdx], o = outfitOf(S.settings.outfit), playStage = a.stage, cfg = duelConfig(playStage);
    this.ui.showMenu({
      tab: this.tab, trophies: S.duel.trophies, coins: S.coins, best: S.duel.best, wins: S.duel.wins, me: { color: o.color, hat: o.hat, skin: 1 }, areas, areaIdx: this.areaIdx, playStage, foe: cfg.name, boss: cfg.boss,
      areaProgress: (S.duel.stage - 1) % 5, owned: S.palettes, palette: S.settings.palette, outfits: S.outfits, outfit: S.settings.outfit,
      arena: { level: S.level, dailySub: S.daily.last === dateKey() ? `Done today · ${S.daily.streak}-day streak` : S.daily.streak ? `${S.daily.streak}-day streak — keep it alive` : 'A fresh arena every day' },
    });
  }
  enterMenu(tab = this.tab) {
    this.tab = tab; this.mode = 'menu'; this.M = null; this.input.enabled = false; this.input.reset();
    this.areaIdx = Math.min(this.areaIdx, THEMES.length - 1); const a = this.areaInfo(); if (a[this.areaIdx].locked) this.areaIdx = areaOfStage(this.S.duel.stage);
    this.ui.hideAll(); this.showcase(); this.renderMenu();
  }
  showcase() {
    const st = this.ensureStage(), a = this.areaInfo()[this.areaIdx], cfg = duelConfig(a.stage);
    st.loadTheme(THEMES[this.areaIdx].id); this.s = createDuel({ seed: `show${this.areaIdx}`, stage: Math.max(3, cfg.stage), noAI: true, posts: postsFor(Math.max(3, cfg.stage)) }); st.startDuel(this.s, this.look(cfg)); st.cam.mode = 'showcase'; st.cam.t = 0;
    this.s.f[0].e = 0.15; this.s.f[1].e = 0.15;
  }
  setArea(d) { this.areaIdx = Math.max(0, Math.min(THEMES.length - 1, this.areaIdx + d)); this.showcase(); this.renderMenu(); }
  setTab(t) { this.tab = t; this.renderMenu(); }
  refreshLook() { if (this.mode === 'menu' && this.stage) { this.showcase(); this.renderMenu(); } }

  // ------------------------------------------------------------ match flow
  startMatch(cfg) {
    this.audio.unlock(); const st = this.ensureStage();
    this.M = { cfg, scores: [0, 0], round: 0, attempt: 0, out: false, tricks: [], shots: 0, startT: performance.now() };
    st.loadTheme(cfg.theme); this.ui.hideAll(); this.mode = 'intro'; this.s = null; this.S.stats.matches++; this.save.save();
    const o = outfitOf(this.S.settings.outfit);
    this.ui.showDuelIntro({ label: cfg.label, area: THEMES.find(t => t.id === cfg.theme).name, you: { color: o.color, hat: o.hat, skin: 1 }, foe: { ...cfg.foe, name: cfg.name, skin: 2 }, boss: cfg.boss });
    // stage behind the intro: fresh scene with fighters idle
    this.s = createDuel({ seed: cfg.seed + ':intro', stage: cfg.stage, noAI: true, posts: cfg.posts, skill: cfg.skill }); st.startDuel(this.s, this.look(cfg)); st.cam.mode = 'showcase';
    clearTimeout(this._t); this._t = setTimeout(() => { if (this.mode === 'intro' && this.M?.cfg === cfg) this.startRound(); }, this.params.has('fast') ? 100 : 2100);
  }
  startRound() {
    const M = this.M, cfg = M.cfg, st = this.stage; M.round++; M.attempt++;
    this.s = createDuel({ seed: `${cfg.seed}:r${M.round}:a${M.attempt}`, stage: cfg.stage, skill: cfg.skill, boss: cfg.boss, posts: cfg.posts });
    if (this.AUTO) this.scripted = makeScripted(0.8, cfg.seed);
    st.startDuel(this.s, this.look(cfg)); st.cam.mode = 'duel'; this.input.reset(); this.input.yaw = this.input.pitch = 0; this.input.enabled = false; this.trickSeen = 0; this.slowT = 0; this.acc = 0; this.endT = 0; this.hintT = 0;
    this.ui.hideAll(); const o = outfitOf(this.S.settings.outfit);
    this.ui.showDuelHud({ you: { color: o.color, hat: o.hat, skin: 1 }, foe: { ...cfg.foe, name: cfg.name, skin: 2 }, winRounds: cfg.winRounds, label: `${cfg.label} · Duel ${M.round}`, posts: cfg.posts.length });
    this.mode = 'countdown'; this.countT = this.params.has('fast') ? 0.2 : 1.5; this.lastCount = 3; this.ui.showBigBanner('READY', cfg.boss ? 'Boss shield: break it first' : '', 'count'); this.audio.tick();
    this.pushHud();
  }
  beginPlay() { this.mode = 'playing'; this.input.enabled = true; this.ui.hideBanner(); this.audio.go(); this.ui.showBigBanner('DUEL!', '', 'go'); clearTimeout(this._b); this._b = setTimeout(() => this.ui.hideBanner(), 550); }

  togglePause() { if (this.mode === 'paused') this.resume(); else this.pause(); }
  pause() { if (!['playing', 'countdown', 'roundend'].includes(this.mode)) return; this.prev = this.mode; this.mode = 'paused'; this.input.reset(); this.input.enabled = false; this.ui.showPause(); }
  resume() { if (this.mode !== 'paused') return; this.ui.hidePause(); this.mode = this.prev; if (this.mode === 'playing') this.input.enabled = true; }
  restart() { this.ui.hidePause(); this.startMatch(this.M.cfg); }

  // ------------------------------------------------------------ events
  onEvent(ev) {
    const au = this.audio, s = this.s;
    switch (ev.type) {
      case 'shot': au.shot(0, ev.side === 0 ? 1 : 0.7, ev.side === 0); if (ev.side === 0) { this.M.shots++; this.S.stats.shots++; vibrate(12); } break;
      case 'splat': au.splat(0.7); break;
      case 'bunkerhit': au.splat(0.4); break;
      case 'reload': if (ev.side === 0) au.reload(); break;
      case 'reloaded': if (ev.side === 0) au.reloaded(); break;
      case 'swap': au.dash(); break;
      case 'shieldpop': au.shield(); vibrate(20); break;
      case 'disarm': au.pickup(); if (ev.victim === 0) { this.ui.hitSplat(this.palette().foe); vibrate([40, 30, 40]); } break;
      case 'barrel': au.elim(false); vibrate([30, 20, 60]); break;
      case 'elim': {
        const you = ev.victim === 0; au.elim(you); this.slowT = 1.15;
        if (you) { this.M.out = true; this.ui.hitSplat(this.palette().foe); vibrate([60, 30, 90]); this.S.stats.hits += 0; } else { vibrate(30); this.S.stats.elims++; this.S.stats.hits++; }
        break;
      }
      case 'over': this.onRoundOver(ev.winner); break;
      default: break;
    }
    void s;
  }
  callouts() {
    const s = this.s; if (s.tricks.length <= this.trickSeen) return;
    const fresh = s.tricks.slice(this.trickSeen); this.trickSeen = s.tricks.length; const items = [];
    for (const t of fresh) { const d = TRICKS[t.zone]; if (!d) continue; items.push({ icon: d.icon, label: d.label, plus: d.coins || '' }); this.M.tricks.push(t.zone); if (t.quick) { const q = TRICKS.quick; items.push({ icon: q.icon, label: q.label, plus: q.coins }); this.M.tricks.push('quick'); } }
    if (items.length) { this.ui.showCallouts(items); this.audio.star(1); }
  }
  onRoundOver(winner) {
    this.mode = 'roundend'; this.input.enabled = false; this.input.reset(); this.endT = 0; const M = this.M;
    if (winner === 0) { M.scores[0]++; this.audio.win(); this.ui.showBigBanner('DUEL WON', `${M.scores[0]} – ${M.scores[1]}`, 'won low'); this.stage.confetti(36); }
    else if (winner === 1) { M.scores[1]++; M.out = true; this.audio.lose(); this.ui.showBigBanner('DUEL LOST', `${M.scores[0]} – ${M.scores[1]}`, 'lost low'); }
    else { M.round--; this.ui.showBigBanner('DRAW', 'Nobody blinked — rematch', 'draw low'); }
    this.S.stats.rounds++;
  }
  finishMatch() {
    const M = this.M, cfg = M.cfg, S = this.S, won = M.scores[0] >= cfg.winRounds, items = [];
    let coins = won ? 20 : 4;
    for (const z of M.tricks) { const d = TRICKS[z]; if (!d) continue; if (z === 'torso') continue; coins += d.coins; items.push({ icon: d.icon, label: d.label, plus: d.coins || '' }); S.duel.tricks[z] = (S.duel.tricks[z] || 0) + 1; }
    if (won && !M.out) { coins += TRICKS.untouchable.coins; items.push({ icon: 'trophy', label: TRICKS.untouchable.label, plus: TRICKS.untouchable.coins }); }
    const before = S.duel.trophies; S.duel.trophies = Math.max(0, before + (won ? 30 : -15)); const delta = S.duel.trophies - before;
    if (won) { S.duel.wins++; S.stats.wins++; if (cfg.stage >= S.duel.stage) S.duel.stage = cfg.stage + 1; S.duel.best = Math.max(S.duel.best, cfg.stage); } else S.duel.losses++;
    S.coins += coins; S.flags.tutorialSeen = true; S.flags.duelTutorial = true; S.stats.playSec += Math.round((performance.now() - M.startT) / 1000); this.save.save();
    this.mode = 'result'; this.audio[won ? 'win' : 'lose'](); if (won) this.stage.confetti(90);
    this.stage.cam.mode = 'result'; this.stage.cam.t = 0;
    this.ui.showDuelResult({ won, title: won ? (M.out ? 'VICTORY!' : 'FLAWLESS!') : 'DEFEAT', sub: won ? `${cfg.name} is out of the game` : 'Peek smarter — watch the laser sight', score: M.scores, tricks: items, coins, trophies: S.duel.trophies, trophyDelta: delta, nextLabel: won ? `Stage ${cfg.stage + 1}` : 'Rematch' });
  }
  nextStage() { this.startMatch(duelConfig(this.M.cfg.stage + 1)); }
  retry() { this.startMatch(this.M.cfg); }

  // ------------------------------------------------------------ frame
  pushHud() {
    const s = this.s, ui = this.ui; if (!s || !ui.dh) return; const p = s.f[0], e = s.f[1], M = this.M;
    let banner = '', kind = '';
    if (!s.over) {
      if (e.disarmT > 0 && e.alive) { banner = 'ENEMY DISARMED!'; kind = 'good'; } else if (p.disarmT > 0) { banner = "YOU'RE DISARMED!"; kind = 'bad'; }
      else if (e.laser && e.e > 0.3) { banner = 'ENEMY IS SHOOTING'; kind = 'bad'; } else if (e.reloadT > 0 && e.e < 0.2) { banner = 'ENEMY IS RELOADING'; kind = 'good'; } else if (p.reloadT > 0 && p.e < 0.2) { banner = 'RELOADING…'; kind = 'info'; }
    }
    let blocked = false;
    if (this.input.hold && p.e >= D.MIN_FIRE_E && p.alive) { const ap = playerAimPoint(s, p), m = markerPos(p), h = castRay(s, m, { x: ap.x - m.x, y: ap.y - m.y, z: ap.z - m.z }, 0, 1); blocked = h.kind === 'bunker' && h.b.side === 0; }
    const canSwap = M.cfg.posts.length > 1 && p.alive && !this.input.hold && !s.over;
    if (p.shots > 0) this.coach = 99;
    ui.updateDuelHud({ youScore: M.scores[0], foeScore: M.scores[1], ammoYou: p.ammo, reloadYou: p.reloadT > 0, ammoFoe: e.ammo, reloadFoe: e.reloadT > 0, banner, bannerKind: kind, e: p.e, scope: true, blocked,
      swapL: canSwap && p.post > 0 && p.swapT <= 0, swapR: canSwap && p.post < M.cfg.posts.length - 1 && p.swapT <= 0, hint: !this.S.flags.duelTutorial && this.mode === 'playing' && this.coach < 2 && this.hintT < 9 ? (this.input.touchSeen ? 'HOLD TO AIM · RELEASE TO FIRE' : 'HOLD MOUSE · DRAG TO AIM · RELEASE TO FIRE') : '' });
  }
  frame(dt) {
    const st = this.stage; if (!st) return; this.t += dt;
    if (this.mode === 'menu' || this.mode === 'intro' || this.mode === 'result') {
      if (this.s && this.mode === 'menu') { this.s.f[0].e = 0.14 + 0.07 * Math.sin(this.t * 1.1); this.s.f[1].e = 0.14 + 0.07 * Math.sin(this.t * 1.3 + 1); this.s.t += dt; }
      st.update(dt, this.s, {}); st.render(); return;
    }
    if (this.mode === 'countdown') {
      this.countT -= dt; const c = Math.ceil(this.countT / 0.5); if (c !== this.lastCount && c > 0 && c <= 2 && !this.params.has('fast')) { this.lastCount = c; this.audio.tick(); }
      if (this.countT <= 0) this.beginPlay(); st.update(dt, this.s, {}); st.render(); return;
    }
    if (this.mode === 'paused') { st.render(); return; }
    // playing / roundend
    const s = this.s; let scale = 1; if (this.slowT > 0) { this.slowT -= dt; scale = 0.28; }
    this.acc += dt * scale * this.SPEED; let n = 0; const cap = 8 * Math.ceil(this.SPEED);
    while (this.acc >= D.DT && n++ < cap) {
      const inp = this.mode === 'playing' ? (this.AUTO ? scriptedInput(s, this.scripted, D.DT) : this.input.sample()) : {};
      stepDuel(s, D.DT, inp);
      for (const ev of s.events) this.onEvent(ev);
      st.consume(s.events); s.events.length = 0; this.callouts();
      this.acc -= D.DT;
    }
    if (n >= cap) this.acc = 0;
    if (this.mode === 'playing') this.hintT += dt;
    if (this.mode === 'roundend') { this.endT += dt; if (duelDone(s) && this.endT > (this.params.has('fast') ? 0.4 : 2.2)) { this.ui.hideBanner(); this.ui.hideCallouts(); const M = this.M; if (M.scores[0] >= M.cfg.winRounds || M.scores[1] >= M.cfg.winRounds) this.finishMatch(); else this.startRound(); return; } }
    st.update(dt * (scale < 1 ? 0.5 : 1), s, { scope: true }); this.pushHud(); st.render();
  }
  /** Test hook: eliminate a fighter exactly as a real hit would (events, tricks, round end). */
  debugKill(side, zone = 'head') { const s = this.s, v = s?.f[side]; if (!v || !v.alive || s.over) return false; v.alive = false; v.deadAt = s.t; s.hitsTaken[side]++; s.events.push({ type: 'elim', victim: side, by: 1 - side, zone, quick: false }); if (side === 1) s.tricks.push({ zone, quick: false }); return true; }
  snapshot() { return new Promise(res => { this.stage.render(); this.cv.toBlob(res, 'image/png'); }); }
}
