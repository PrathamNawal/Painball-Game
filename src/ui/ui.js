// DOM overlay UI. Static markup via template strings (user-supplied text is always escaped),
// behaviour via delegated `data-act` clicks routed to the handlers passed in by the App.
import { ICON } from './icons.js';
import { PALETTES } from '../core/match.js';

const esc = v => String(v).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const starRow = (n, total = 3) => Array.from({ length: total }, (_, i) => `<span class="star ${i < n ? 'on' : ''}" style="--i:${i}">${ICON.star}</span>`).join('');
const coinPill = (v, id = '') => `<div class="coinpill" ${id ? `id="${id}"` : ''} role="img" aria-label="${esc(v)} coins">${ICON.coin}<b>${esc(v)}</b></div>`;
const pips = (n, total, cls) => Array.from({ length: total }, (_, i) => `<i class="${cls} ${i < n ? 'on' : ''}"></i>`).join('');

export class UI {
  constructor(root, actions) {
    this.root = root; this.actions = actions; this.layers = {}; this.hud = null;
    root.addEventListener('click', e => {
      const el = e.target.closest('[data-act]'); if (!el || el.disabled) return;
      this.actions.sfx?.('click'); this.actions[el.dataset.act]?.(el.dataset);
    });
    root.addEventListener('input', e => {
      const el = e.target.closest('[data-set]'); if (!el) return;
      this.actions.setSetting?.(el.dataset.set, el.type === 'checkbox' ? el.checked : el.value);
    });
    root.addEventListener('change', e => { const el = e.target.closest('[data-seg]'); if (el) this.actions.setSetting?.(el.dataset.seg, el.value); });
  }
  _layer(name, html, cls = '') {
    this._drop(name);
    const el = document.createElement('div'); el.className = `layer L-${name} ${cls}`; el.innerHTML = html;
    this.root.appendChild(el); this.layers[name] = el; return el;
  }
  _drop(name) { const l = this.layers[name]; if (l) { l.remove(); delete this.layers[name]; } }
  has(name) { return !!this.layers[name]; }
  hideAll() { for (const k of Object.keys(this.layers)) this._drop(k); this.hud = null; }
  hide(name) { this._drop(name); }
  _focus(el, sel = '.primary') { (el.querySelector(sel) || el.querySelector('button'))?.focus({ preventScroll: true }); }
  setPalette(p) { this.root.style.setProperty('--you', p.you); this.root.style.setProperty('--foe', p.foe); }
  setTouch(on) { this.root.classList.toggle('touch', !!on); }

  // ---------- Menu ----------
  showMenu({ level, coins, daily, canInstall, stats }) {
    this.hideAll();
    const dailySub = daily.done ? `Done today · ${daily.streak}-day streak` : daily.streak ? `${daily.streak}-day streak — keep it alive` : 'A fresh arena every day';
    const el = this._layer('menu', `
      <section class="screen menu" data-ui>
        <div class="menu-top">${coinPill(coins, 'menu-coins')}</div>
        <div class="brand"><h1>PAINBALL</h1><p>Splat the bots. Own the arena.</p></div>
        <div class="stack">
          <button class="btn primary big" data-act="play"><span class="ico">${ICON.play}</span><span>Play<small>Campaign · Level ${esc(level)}</small></span></button>
          <button class="btn gold big" data-act="daily"><span class="ico">${ICON.flame}</span><span>Daily Arena<small>${esc(dailySub)}</small></span></button>
          <div class="row">
            <button class="btn ghost" data-act="levels">${ICON.levels}<span>Levels</span></button>
            <button class="btn ghost" data-act="shop">${ICON.cart}<span>Paint</span></button>
            <button class="btn ghost" data-act="settings">${ICON.sliders}<span>Settings</span></button>
          </div>
          ${canInstall ? `<button class="btn ghost" data-act="install">${ICON.install}<span>Install app</span></button>` : ''}
        </div>
        <p class="tip">${stats.matches ? `${esc(stats.wins)} wins · ${esc(stats.elims)} splats` : 'Move, aim, splat. One hit and you’re out.'}</p>
      </section>`);
    this._focus(el);
  }

  // ---------- HUD ----------
  showHud({ label, winRounds }) {
    this._drop('menu'); this._drop('result');
    this._layer('hud', `
      <div class="hud">
        <div class="hud-top">
          <button class="iconbtn" data-act="pause" aria-label="Pause">${ICON.pause}</button>
          <div class="score" aria-label="Score">
            <div class="side you" id="h-you" role="img" aria-label="Your rounds won">${pips(0, winRounds, 'pip')}</div>
            <div class="hud-center"><div class="hud-label">${esc(label)}</div><div class="hud-time" id="h-time" aria-live="off">0:00</div></div>
            <div class="side foe" id="h-foe" role="img" aria-label="Enemy rounds won">${pips(0, winRounds, 'pip')}</div>
          </div>
          <button class="iconbtn" id="h-ff" data-act="ff" aria-label="Fast forward" hidden>${ICON.ff}</button>
        </div>
        <div class="alive" id="h-alive" role="img" aria-label="Players alive"></div>
        <div class="hud-bottom">
          <div class="ammo" id="h-ammo" role="img" aria-label="Ammo"><i></i><b>28</b></div>
          <div class="acts">
            <button class="act" id="h-reload" data-act="reloadBtn" aria-label="Reload">${ICON.reload}</button>
            <button class="act big" id="h-dash" data-act="dashBtn" aria-label="Dash"><span class="cd"></span>${ICON.bolt}<em>DASH</em></button>
          </div>
        </div>
      </div>
      <div class="stick move" id="st-move" hidden><i></i></div><div class="stick aim" id="st-aim" hidden><i></i></div>`);
    const q = id => document.getElementById(id);
    this.hud = { time: q('h-time'), you: q('h-you'), foe: q('h-foe'), alive: q('h-alive'), ammoBar: q('h-ammo'), ammoTxt: q('h-ammo')?.querySelector('b'), ammoFill: q('h-ammo')?.querySelector('i'),
      dash: q('h-dash'), reload: q('h-reload'), ff: q('h-ff'), move: q('st-move'), aim: q('st-aim'), c: {} };
    this.hud.dashCd = this.hud.dash.querySelector('.cd');
  }
  updateHud(s) {
    const h = this.hud; if (!h) return; const c = h.c;
    const t = `${Math.floor(s.time / 60)}:${String(Math.floor(s.time % 60)).padStart(2, '0')}`;
    if (c.t !== t) { h.time.textContent = t; c.t = t; }
    const sc = `${s.youScore}-${s.foeScore}`;
    if (c.sc !== sc) {
      h.you.querySelectorAll('i').forEach((p, i) => p.classList.toggle('on', i < s.youScore)); h.foe.querySelectorAll('i').forEach((p, i) => p.classList.toggle('on', i < s.foeScore));
      h.you.setAttribute('aria-label', `You have won ${s.youScore} rounds`); h.foe.setAttribute('aria-label', `Enemy has won ${s.foeScore} rounds`); c.sc = sc;
    }
    const al = `${s.youAlive}/${s.youTotal}-${s.foeAlive}/${s.foeTotal}`;
    if (c.al !== al) {
      h.alive.innerHTML = `<span class="tm you">${Array.from({ length: s.youTotal }, (_, i) => `<i class="${i < s.youAlive ? 'on' : ''}"></i>`).join('')}</span><span class="tm foe">${Array.from({ length: s.foeTotal }, (_, i) => `<i class="${i < s.foeAlive ? 'on' : ''}"></i>`).join('')}</span>`;
      h.alive.setAttribute('aria-label', `Your team ${s.youAlive} of ${s.youTotal} alive. Enemy ${s.foeAlive} of ${s.foeTotal}`); c.al = al;
    }
    const am = s.reloading ? 'r' : s.ammo; if (c.am !== am) { h.ammoTxt.textContent = s.reloading ? '…' : s.ammo; h.ammoBar.classList.toggle('low', !s.reloading && s.ammo <= 6); h.ammoBar.classList.toggle('rel', s.reloading); h.ammoBar.setAttribute('aria-label', s.reloading ? 'Reloading' : `${s.ammo} paintballs`); c.am = am; }
    const fr = Math.round(s.ammoFrac * 100); if (c.fr !== fr) { h.ammoFill.style.width = fr + '%'; c.fr = fr; }
    const dc = Math.round(s.dashFrac * 20); if (c.dc !== dc) { h.dashCd.style.transform = `scaleY(${1 - dc / 20})`; h.dash.classList.toggle('ready', dc >= 20); c.dc = dc; }
    if (c.dead !== s.dead) { h.ff.hidden = !s.dead; c.dead = s.dead; }
  }
  updateStick(which, st) {
    const el = this.hud?.[which]; if (!el) return;
    if (!st) { el.hidden = true; return; }
    el.hidden = false; el.style.transform = `translate(${st.ox}px, ${st.oy}px)`; el.firstElementChild.style.transform = `translate(${st.x * 44}px, ${st.y * 44}px)`;
  }
  showBanner(big, sub = '', cls = '') { this._layer('banner', `<div class="banner ${cls}" role="status"><div class="b-big">${esc(big)}</div>${sub ? `<div class="b-sub">${esc(sub)}</div>` : ''}</div>`); }
  hideBanner() { this._drop('banner'); }
  showCoach(text) { this._layer('coach', `<div class="coach" role="status">${esc(text)}</div>`); }
  hideCoach() { this._drop('coach'); }

  showIntro({ label, name, vs, foe, boss }) {
    this._drop('menu');
    this._layer('intro', `<div class="intro" role="status"><div class="i-lab">${esc(label)}${boss ? ' <span class="tag">BOSS</span>' : ''}</div><div class="i-name">${esc(name)}</div><div class="i-vs"><b class="you">YOU</b><span>${esc(vs)}</span><b class="foe">${esc(foe)}</b></div></div>`);
  }

  // ---------- Pause ----------
  showPause() {
    const el = this._layer('pause', `
      <div class="modal" data-ui role="dialog" aria-modal="true" aria-labelledby="pz"><div class="card">
        <h2 id="pz">Paused</h2>
        <button class="btn primary" data-act="resume">${ICON.play}<span>Resume</span></button>
        <div class="grid2">
          <button class="btn ghost" data-act="restart">${ICON.restart}<span>Restart match</span></button>
          <button class="btn ghost" data-act="settings">${ICON.sliders}<span>Settings</span></button>
          <button class="btn ghost" data-act="quit">${ICON.home}<span>Quit to menu</span></button>
        </div>
        <p class="muted fine">Move: WASD / left thumb · Aim: mouse / right thumb · Dash: Shift / double-tap · Reload: R</p>
      </div></div>`);
    this._focus(el);
  }
  hidePause() { this._drop('pause'); }

  // ---------- Result ----------
  showResult({ won, title, sub, stars, score, facts, coins, nextLabel, art, daily, canShare }) {
    this._drop('hud'); this._drop('banner');
    const el = this._layer('result', `
      <div class="modal win" data-ui role="dialog" aria-modal="true" aria-labelledby="rz"><div class="card scroll">
        <h2 id="rz" class="${won ? 'w' : 'l'}">${esc(title)}</h2>
        <p class="muted center">${esc(sub)}</p>
        <div class="bigscore"><b class="you">${esc(score[0])}</b><span>–</span><b class="foe">${esc(score[1])}</b></div>
        ${won ? `<div class="stars" role="img" aria-label="${stars} of 3 stars">${starRow(stars)}</div>` : ''}
        <div class="art" id="art-slot" aria-hidden="true"></div>
        <dl class="facts">${facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}<div><dt>Coins</dt><dd>${ICON.coin}+${esc(coins)}</dd></div></dl>
        <button class="btn primary" data-act="${won ? 'next' : 'retry'}">${ICON.play}<span>${esc(nextLabel)}</span></button>
        <div class="grid2">
          ${won ? `<button class="btn ghost" data-act="retry">${ICON.restart}<span>Replay</span></button>` : `<button class="btn ghost" data-act="menu">${ICON.home}<span>Menu</span></button>`}
          ${canShare ? `<button class="btn ghost" data-act="share">${ICON.share}<span>Share art</span></button>` : ''}
          ${won ? `<button class="btn ghost" data-act="menu">${ICON.home}<span>Menu</span></button>` : ''}
        </div>
      </div></div>`);
    if (art) { art.classList.add('art-cv'); el.querySelector('#art-slot').appendChild(art); }
    this._focus(el);
  }

  // ---------- Settings ----------
  showSettings({ settings, version, persistent, canVibrate }) {
    const seg = (key, opts, cur) => `<div class="seg" role="radiogroup">${opts.map(([v, l]) => `<label><input type="radio" name="${key}" value="${v}" data-seg="${key}" ${String(cur) === String(v) ? 'checked' : ''}><span>${l}</span></label>`).join('')}</div>`;
    const tog = (key, label, small, on) => `<label class="row-set"><span>${label}<small>${small}</small></span><input class="switch" type="checkbox" role="switch" data-set="${key}" ${on ? 'checked' : ''}></label>`;
    const el = this._layer('settings', `
      <div class="modal front" data-ui role="dialog" aria-modal="true" aria-labelledby="sz"><div class="card scroll">
        <div class="card-head"><h2 id="sz">Settings</h2><button class="iconbtn" data-act="closeSettings" aria-label="Close settings">${ICON.close}</button></div>
        ${tog('sound', 'Sound', 'Synth effects, no downloads', settings.sound)}
        ${canVibrate ? tog('haptics', 'Haptics', 'Vibrate on hits (Android)', settings.haptics) : ''}
        <div class="row-set col"><span>Aim assist<small>Gently pulls your aim toward enemies you can see</small></span>${seg('assist', [[0, 'Off'], [1, 'Low'], [2, 'Med'], [3, 'High']], settings.assist)}</div>
        <div class="row-set col"><span>Graphics<small>Low saves battery on older phones</small></span>${seg('quality', [['high', 'High'], ['low', 'Low']], settings.quality)}</div>
        ${tog('lefty', 'Left-handed', 'Swap move and aim sides', settings.lefty)}
        ${tog('reduceMotion', 'Reduce motion', 'No screen shake or confetti', settings.reduceMotion)}
        <button class="btn danger" data-act="resetProgress">Reset all progress</button>
        <p class="muted fine">Painball v${esc(version)} · no ads, no tracking · ${persistent ? 'progress saved on this device' : 'storage blocked: progress will not persist'}</p>
      </div></div>`);
    this._focus(el, 'input, button');
  }
  hideSettings() { this._drop('settings'); }

  // ---------- Levels ----------
  showLevels({ unlocked, stars, page, current }) {
    const per = 12, base = page * per + 1;
    const cells = Array.from({ length: per }, (_, i) => {
      const n = base + i, open = n <= unlocked, s = stars[n] || 0;
      return `<button class="lv ${n === current ? 'cur' : ''} ${open ? '' : 'locked'}" ${open ? `data-act="playLevel" data-n="${n}"` : 'disabled'} aria-label="Level ${n}${open ? '' : ' locked'}${n % 5 === 0 ? ', boss' : ''}${s ? `, ${s} stars` : ''}"><b>${open ? n : ICON.lock}</b>${n % 5 === 0 ? '<small class="boss">BOSS</small>' : ''}<span class="mini">${starRow(s)}</span></button>`;
    }).join('');
    const pages = Math.max(1, Math.ceil((unlocked + 12) / per));
    const el = this._layer('levels', `
      <div class="modal front" data-ui role="dialog" aria-modal="true" aria-labelledby="lz"><div class="card scroll">
        <div class="card-head"><h2 id="lz">Campaign</h2><button class="iconbtn" data-act="closeLevels" aria-label="Close levels">${ICON.close}</button></div>
        <div class="lvgrid">${cells}</div>
        <div class="pager"><button class="btn ghost" data-act="levelsPage" data-page="${Math.max(0, page - 1)}" ${page === 0 ? 'disabled' : ''} aria-label="Previous page">‹</button><span>${base}–${base + per - 1}</span><button class="btn ghost" data-act="levelsPage" data-page="${Math.min(pages - 1, page + 1)}" ${page >= pages - 1 ? 'disabled' : ''} aria-label="Next page">›</button></div>
      </div></div>`);
    this._focus(el, '.lv.cur, .lv:not(.locked)');
  }
  hideLevels() { this._drop('levels'); }

  // ---------- Shop ----------
  showShop({ coins, owned, equipped }) {
    const rows = PALETTES.map(p => {
      const have = owned.includes(p.id), eq = equipped === p.id;
      return `<div class="pal ${eq ? 'eq' : ''}"><div class="sw"><i style="background:${p.you}"></i><i style="background:${p.foe}"></i></div><div class="pn"><b>${esc(p.name)}</b><small>You vs bots</small></div>
        ${eq ? `<span class="tag">EQUIPPED</span>` : have ? `<button class="btn small" data-act="equip" data-id="${p.id}">Equip</button>` : `<button class="btn small" data-act="buy" data-id="${p.id}" >${ICON.coin}<span>${p.cost}</span></button>`}</div>`;
    }).join('');
    const el = this._layer('shop', `
      <div class="modal front" data-ui role="dialog" aria-modal="true" aria-labelledby="pz2"><div class="card scroll">
        <div class="card-head"><h2 id="pz2">Paint colours</h2>${coinPill(coins)}</div>
        <p class="muted">Cosmetic only — every palette is colour-blind safe and enemies always have dashed rings.</p>
        <div class="pals">${rows}</div>
        <button class="btn ghost" data-act="closeShop">${ICON.close}<span>Close</span></button>
      </div></div>`);
    this._focus(el, '.btn');
  }
  hideShop() { this._drop('shop'); }

  // ---------- Misc ----------
  toast(text, ms = 1800) {
    const el = document.createElement('div'); el.className = 'toast'; el.setAttribute('role', 'status'); el.textContent = text; this.root.appendChild(el);
    setTimeout(() => el.classList.add('out'), ms); setTimeout(() => el.remove(), ms + 450);
  }
  confirm({ title, body, ok, cancel, danger }) {
    return new Promise(res => {
      const el = this._layer('confirm', `
        <div class="modal front" data-ui role="alertdialog" aria-modal="true" aria-labelledby="cz"><div class="card small">
          <h2 id="cz">${esc(title)}</h2><p class="muted">${esc(body)}</p>
          <div class="grid2"><button class="btn ghost" data-c="0">${esc(cancel)}</button><button class="btn ${danger ? 'danger' : 'primary'}" data-c="1">${esc(ok)}</button></div>
        </div></div>`);
      el.addEventListener('click', e => { const b = e.target.closest('[data-c]'); if (!b) return; e.stopPropagation(); this._drop('confirm'); res(b.dataset.c === '1'); });
      this._focus(el, '[data-c="0"]');
    });
  }
}
