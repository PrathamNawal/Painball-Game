// Duel-mode screens, mixed into UI.prototype: tabbed menu (Battle / Arena / Gear / Skins), VS intro, duel HUD, callouts, result.
import { UI } from './ui.js';
import { ICON } from './icons.js';
import { drawAvatar } from './avatar.js';
import { PALETTES } from '../core/match.js';
import { OUTFITS, THEMES, foeOutfit } from '../game3d/themes.js';

const esc = v => String(v).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const av = o => `<canvas class="av" width="96" height="96" data-av='${esc(JSON.stringify(o))}' role="img" aria-label="${esc(o.label || 'Avatar')}"></canvas>`;
const pods = (n, max) => Array.from({ length: max }, (_, i) => `<i class="pod ${i < n ? 'on' : ''}"></i>`).join('');
const pips = (n, total, cls) => Array.from({ length: total }, (_, i) => `<i class="${cls} ${i < n ? 'on' : ''}"></i>`).join('');
const coinPill = (v, id = '') => `<div class="pill3" ${id ? `id="${id}"` : ''} role="img" aria-label="${esc(v)} coins">${ICON.coin}<b>${esc(v)}</b></div>`;

export const TRICKS = {
  head: { icon: 'mask', label: 'MASK SHOT', coins: 10 }, hand: { icon: 'hand', label: 'HANDSHOT', coins: 5 }, barrel: { icon: 'boom', label: 'BARREL SHOT', coins: 15 },
  torso: { icon: 'target', label: 'SPLAT!', coins: 0 }, quick: { icon: 'bolt2', label: 'QUICK DRAW', coins: 5 }, untouchable: { icon: 'trophy', label: 'UNTOUCHABLE', coins: 10 },
};

Object.assign(UI.prototype, {
  _avatars(el) { el.querySelectorAll('canvas[data-av]').forEach(cv => { try { drawAvatar(cv, JSON.parse(cv.dataset.av)); } catch { /* ignore */ } }); },

  // ---------- tabbed menu ----------
  showMenu(o) {
    this.hideAll();
    const tab = o.tab || 'battle', tabs = [['battle', 'Battle', ICON.target], ['arena', 'Arena', ICON.swords], ['gear', 'Gear', ICON.gun], ['skins', 'Skins', ICON.shirt]];
    let body = '';
    if (tab === 'battle') {
      const a = o.areas[o.areaIdx];
      body = `<div class="area">
        <span class="area-tag">AREA ${o.areaIdx + 1}</span>
        <div class="area-card"><button class="arrow" data-act="areaPrev" aria-label="Previous area" ${o.areaIdx === 0 ? 'disabled' : ''}>${ICON.swapL}</button>
          <div class="area-name">${esc(a.name)}</div><button class="arrow" data-act="areaNext" aria-label="Next area" ${o.areaIdx >= o.areas.length - 1 ? 'disabled' : ''}>${ICON.swapR}</button></div>
        <div class="area-sub">${a.locked ? `${ICON.lock}<span>Reach stage ${a.unlockStage} to unlock</span>` : `<span>Stage ${o.playStage} · ${esc(o.foe)}${o.boss ? ' <em class="boss">BOSS</em>' : ''}</span>`}</div>
        <button class="start3" data-act="playDuel" ${a.locked ? 'disabled' : ''}><span>START</span></button>
        <div class="area-dots" aria-hidden="true">${o.areas.map((x, i) => `<i class="${i === o.areaIdx ? 'on' : ''} ${x.locked ? 'lk' : ''}"></i>`).join('')}</div>
      </div>`;
    } else if (tab === 'arena') {
      body = `<div class="panel3"><h2>Team Arena</h2><p class="muted">Top-down team paintball with bot allies. Dodge, flank, splat.</p>
        <button class="btn3 lime" data-act="play"><span>${ICON.play}<b>Campaign</b><small>Level ${esc(o.arena.level)}</small></span></button>
        <button class="btn3 gold" data-act="daily"><span>${ICON.flame}<b>Daily Arena</b><small>${esc(o.arena.dailySub)}</small></span></button>
        <button class="btn3" data-act="levels"><span>${ICON.levels}<b>Levels</b></span></button></div>`;
    } else if (tab === 'gear') {
      body = `<div class="panel3"><h2>Marker paint</h2><p class="muted">Your paint colour. Cosmetic only — colour-blind safe, enemies always use the contrast colour.</p><div class="cards3">${PALETTES.map(p => {
        const have = o.owned.includes(p.id), eq = o.palette === p.id;
        return `<div class="card3 ${eq ? 'eq' : ''}"><div class="sw"><i style="background:${p.you}"></i><i style="background:${p.foe}"></i></div><b>${esc(p.name)}</b>${eq ? '<span class="tag">EQUIPPED</span>' : have ? `<button class="btn3 sm" data-act="equip" data-id="${p.id}"><span>Equip</span></button>` : `<button class="btn3 sm gold" data-act="buy" data-id="${p.id}"><span>${ICON.coin}${p.cost}</span></button>`}</div>`;
      }).join('')}</div></div>`;
    } else {
      body = `<div class="panel3"><h2>Outfits</h2><p class="muted">Pure style. Wear it into every duel.</p><div class="cards3">${OUTFITS.map(f => {
        const have = o.outfits.includes(f.id), eq = o.outfit === f.id;
        return `<div class="card3 ${eq ? 'eq' : ''}">${av({ color: f.color, hat: f.hat, skin: 1, label: f.name })}<b>${esc(f.name)}</b>${eq ? '<span class="tag">WEARING</span>' : have ? `<button class="btn3 sm" data-act="wear" data-id="${f.id}"><span>Wear</span></button>` : `<button class="btn3 sm gold" data-act="buyOutfit" data-id="${f.id}"><span>${ICON.coin}${f.cost}</span></button>`}</div>`;
      }).join('')}</div></div>`;
    }
    const me = o.me;
    const el = this._layer('menu', `
      <section class="m3 tab-${tab}" data-ui>
        <div class="m3-top"><div class="pill3" role="img" aria-label="${esc(o.trophies)} trophies">${ICON.trophy}<b>${esc(o.trophies)}</b></div>${coinPill(o.coins, 'menu-coins')}<button class="sq" data-act="settings" aria-label="Settings">${ICON.sliders}</button></div>
        <div class="m3-prof">${av({ ...me, label: 'Your avatar' })}<div class="who"><b>PLAYER</b><span>Best stage ${esc(o.best)} · ${esc(o.wins)} wins</span><div class="bar3" role="img" aria-label="Progress to next area ${o.areaProgress} of 5"><i style="width:${o.areaProgress * 20}%"></i></div></div></div>
        <div class="m3-body">${body}</div>
        <nav class="m3-tabs" aria-label="Menu">${tabs.map(([id, l, ic]) => `<button class="tab3 ${id === tab ? 'on' : ''}" data-act="tab" data-tab="${id}" aria-label="${l}" aria-pressed="${id === tab}">${ic}<span>${l}</span></button>`).join('')}</nav>
      </section>`);
    this._avatars(el); this._focus(el, '.start3, .btn3, .tab3.on');
  },

  // ---------- VS intro ----------
  showDuelIntro({ label, area, foe, you, boss }) {
    const el = this._layer('dintro', `<div class="dintro" role="status"><div class="di-lab">${esc(label)}${boss ? ' <em class="boss">BOSS</em>' : ''}</div><div class="di-area">${esc(area)}</div>
      <div class="di-vs"><div class="di-side you">${av({ ...you, label: 'You' })}<b>YOU</b></div><span class="vs">VS</span><div class="di-side foe">${av({ ...foe, label: foe.name })}<b>${esc(foe.name)}</b></div></div></div>`);
    this._avatars(el);
  },

  // ---------- duel HUD ----------
  showDuelHud({ you, foe, winRounds, label, posts }) {
    this._layer('dhud', `
      <div class="dhud">
        <div class="dh-top">
          <button class="sq" data-act="pause" aria-label="Pause">${ICON.pause}</button>
          <div class="dh-side you">${av({ ...you, label: 'You' })}<div class="dh-info"><div class="dh-name">YOU</div><div class="dh-pips" id="dh-you" role="img" aria-label="Your rounds won">${pips(0, winRounds, 'rp')}</div><div class="dh-pods" id="dh-pods-you" role="img" aria-label="Your ammo">${pods(3, 3)}</div></div></div>
          <div class="dh-mid"><div class="dh-lab">${esc(label)}</div></div>
          <div class="dh-side foe"><div class="dh-info r"><div class="dh-name">${esc(foe.name)}</div><div class="dh-pips" id="dh-foe" role="img" aria-label="Enemy rounds won">${pips(0, winRounds, 'rp')}</div><div class="dh-pods" id="dh-pods-foe" role="img" aria-label="Enemy ammo">${pods(3, 3)}</div></div>${av({ ...foe, label: foe.name })}</div>
        </div>
        <div class="dh-banner" id="dh-banner" role="status" aria-live="polite" hidden></div>
        <div class="dh-hint" id="dh-hint">HOLD TO AIM · RELEASE TO FIRE</div>
        ${posts > 1 ? `<button class="swap l" id="dh-swapL" data-act="swapL" aria-label="Move to left cover">${ICON.swapL}</button><button class="swap r" id="dh-swapR" data-act="swapR" aria-label="Move to right cover">${ICON.swapR}</button>` : ''}
      </div>
      <div class="scope" id="dh-scope" aria-hidden="true"></div>
      <div class="xhair" id="dh-xh" aria-hidden="true"><i></i><b></b></div>`);
    const q = id => document.getElementById(id);
    this._avatars(this.layers.dhud);
    this.dh = { you: q('dh-you'), foe: q('dh-foe'), podsYou: q('dh-pods-you'), podsFoe: q('dh-pods-foe'), banner: q('dh-banner'), hint: q('dh-hint'), scope: q('dh-scope'), xh: q('dh-xh'), swapL: q('dh-swapL'), swapR: q('dh-swapR'), c: {} };
    this.layers.dhud.appendChild(this.dh.scope); this.layers.dhud.appendChild(this.dh.xh);
  },
  updateDuelHud(s) {
    const h = this.dh; if (!h) return; const c = h.c;
    const sc = `${s.youScore}-${s.foeScore}`; if (c.sc !== sc) { h.you.querySelectorAll('i').forEach((p, i) => p.classList.toggle('on', i < s.youScore)); h.foe.querySelectorAll('i').forEach((p, i) => p.classList.toggle('on', i < s.foeScore)); h.you.setAttribute('aria-label', `You have won ${s.youScore} duels`); h.foe.setAttribute('aria-label', `Enemy has won ${s.foeScore} duels`); c.sc = sc; }
    const ay = `${s.ammoYou}${s.reloadYou ? 'r' : ''}`; if (c.ay !== ay) { h.podsYou.querySelectorAll('i').forEach((p, i) => p.classList.toggle('on', i < s.ammoYou)); h.podsYou.classList.toggle('rel', !!s.reloadYou); h.podsYou.setAttribute('aria-label', s.reloadYou ? 'Reloading' : `${s.ammoYou} paintballs`); c.ay = ay; }
    const af = `${s.ammoFoe}${s.reloadFoe ? 'r' : ''}`; if (c.af !== af) { h.podsFoe.querySelectorAll('i').forEach((p, i) => p.classList.toggle('on', i < s.ammoFoe)); h.podsFoe.classList.toggle('rel', !!s.reloadFoe); c.af = af; }
    if (c.b !== s.banner) { h.banner.hidden = !s.banner; h.banner.textContent = s.banner || ''; h.banner.dataset.kind = s.bannerKind || ''; c.b = s.banner; }
    const e = Math.round(s.e * 20); if (c.e !== e) { h.scope.style.opacity = s.scope ? s.e : 0; h.xh.style.opacity = s.e > 0.5 ? 1 : 0; c.e = e; }
    if (c.bl !== s.blocked) { h.xh.classList.toggle('blocked', !!s.blocked); c.bl = s.blocked; }
    if (c.hint !== s.hint) { h.hint.style.opacity = s.hint ? 1 : 0; h.hint.textContent = s.hint || ''; c.hint = s.hint; }
    if (h.swapL) { const l = s.swapL ? 1 : 0, r = s.swapR ? 1 : 0; if (c.sw !== `${l}${r}`) { h.swapL.disabled = !l; h.swapR.disabled = !r; c.sw = `${l}${r}`; } }
  },
  /** Stack of diamond trick badges (like the references). items: [{icon,label,plus}] */
  showCallouts(items) {
    const el = this._layer('callout', `<div class="callouts" role="status">${items.map((t, i) => `<div class="co" style="--i:${i}"><div class="dia"><span>${ICON[t.icon] || ''}</span></div><b>${esc(t.label)}</b>${t.plus ? `<em>+${esc(t.plus)}</em>` : ''}</div>`).join('')}</div>`);
    clearTimeout(this._coT); this._coT = setTimeout(() => { if (this.layers.callout === el) this._drop('callout'); }, 2200);
  },
  hideCallouts() { clearTimeout(this._coT); this._drop('callout'); },
  showBigBanner(big, sub, kind = '') { this._layer('banner', `<div class="banner ${kind}" role="status"><div class="b-big">${esc(big)}</div>${sub ? `<div class="b-sub">${esc(sub)}</div>` : ''}</div>`); },
  hitSplat(color) { const d = document.createElement('div'); d.className = 'hitsplat'; d.style.setProperty('--c', color); d.setAttribute('aria-hidden', 'true'); this.root.appendChild(d); setTimeout(() => d.remove(), 1500); },

  // ---------- result ----------
  showDuelResult({ won, title, sub, score, tricks, coins, trophies, trophyDelta, nextLabel }) {
    this._drop('dhud'); this._drop('banner'); this._drop('callout');
    const el = this._layer('result', `
      <div class="modal win" data-ui role="dialog" aria-modal="true" aria-labelledby="rz"><div class="card scroll dres">
        <h2 id="rz" class="${won ? 'w' : 'l'}">${esc(title)}</h2><p class="muted center">${esc(sub)}</p>
        <div class="bigscore"><b class="you">${esc(score[0])}</b><span>–</span><b class="foe">${esc(score[1])}</b></div>
        <div class="tricks">${tricks.length ? tricks.map(t => `<div class="co static"><div class="dia"><span>${ICON[t.icon] || ''}</span></div><b>${esc(t.label)}</b>${t.plus ? `<em>+${esc(t.plus)}</em>` : ''}</div>`).join('') : '<p class="muted center">No trick shots this time — try a MASK SHOT!</p>'}</div>
        <dl class="facts"><div><dt>Trophies</dt><dd>${ICON.trophy}${esc(trophies)} <small class="${trophyDelta >= 0 ? 'up' : 'dn'}">${trophyDelta >= 0 ? '+' : ''}${esc(trophyDelta)}</small></dd></div><div><dt>Coins</dt><dd>${ICON.coin}+${esc(coins)}</dd></div></dl>
        <button class="btn3 lime" data-act="${won ? 'dnext' : 'dretry'}"><span>${ICON.play}<b>${esc(nextLabel)}</b></span></button>
        <div class="grid2"><button class="btn3" data-act="${won ? 'dretry' : 'menu'}"><span>${won ? ICON.restart : ICON.home}<b>${won ? 'Replay' : 'Menu'}</b></span></button><button class="btn3" data-act="dshare"><span>${ICON.share}<b>Share</b></span></button>${won ? `<button class="btn3" data-act="menu"><span>${ICON.home}<b>Menu</b></span></button>` : ''}</div>
      </div></div>`);
    this._focus(el, '.btn3');
  },
});
void foeOutfit; void THEMES;
