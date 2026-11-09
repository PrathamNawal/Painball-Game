// THE LOCKED STUDY — game loop, input, UI wiring.
import * as THREE from 'three';
import { generateCase, checkCode, hint, effectiveSeconds, starsFor, scoreFor, fmtTime, dailySeed, ROOM_NAMES, HINT_COST, WRONG_COST, LEVELS, levelOf, parFor } from './core.js';
import { buildWorld } from './world.js';

const $ = id => document.getElementById(id);
const params = new URLSearchParams(location.search), debug = params.has('debug');
const store = { get(k) { try { return localStorage.getItem(k); } catch { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch { /* private mode */ } } };
const coarse = typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches;

const renderer = new THREE.WebGLRenderer({ canvas: $('view'), antialias: !coarse, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio || 1, coarse ? 1.5 : 2));
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const camera = new THREE.PerspectiveCamera(72, 1, 0.05, 200);
const resize = () => { renderer.setSize(innerWidth, innerHeight, false); camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); };
addEventListener('resize', resize); resize();

const SHARE_URL = window.__SHARE_URL || location.href.split(/[?#]/)[0], GAME_NAME = 'The Locked Study';
const G = { seed: '', level: 2, vx: 0, vz: 0, impactCd: 0, quality: 0, c: null, world: null, state: 'intro', modal: null, t0: 0, elapsed: 0, hints: 0, wrong: 0, found: new Set(), examined: new Set(), code: '', lockUntil: 0, solved: false,
  x: 0, z: 1.5, yaw: 0, pitch: 0, bob: 0, focus: null, keys: new Set(), stick: { x: 0, y: 0 } };
const ray = new THREE.Raycaster(); ray.far = 3.3;

// ---------- tiny synth (no assets) ----------
let actx = null;
const beep = (f, d = 0.08, type = 'sine', v = 0.05) => { try { actx ||= new (window.AudioContext || window.webkitAudioContext)(); const o = actx.createOscillator(), g = actx.createGain(); o.type = type; o.frequency.value = f; g.gain.value = v; g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + d); o.connect(g); g.connect(actx.destination); o.start(); o.stop(actx.currentTime + d); } catch { /* audio unavailable */ } };

// ---------- case lifecycle ----------
function startCase(seed, level = G.level) {
  const prev = G.world; if (prev) prev.scene.traverse(o => { o.geometry?.dispose?.(); });
  G.seed = seed; G.level = level; G.c = generateCase(seed, level); G.world = buildWorld(G.c, { shadowSize: coarse ? 1024 : 2048 });
  Object.assign(G, { x: 0, z: 1.5, yaw: 0, pitch: 0, found: new Set(), examined: new Set(), hints: 0, wrong: 0, code: '', solved: false, elapsed: 0, vx: 0, vz: 0, state: 'play', t0: performance.now(), lockUntil: 0 });
  G.world.setUnlocked(false); cam.x = G.x; cam.z = G.z; cam.yaw = G.yaw; cam.pitch = G.pitch; cam.shake = 0; $('level-chip').textContent = `Level ${level} · ${levelOf(level).name}`;
  $('m-intro').hidden = true; $('m-win').hidden = true; $('hud').hidden = false; $('touch').hidden = !coarse;
  G.modal = null; updateCounts(); updateBook(); updateScore(); toast(`Level ${level}: ${levelOf(level).blurb} Collect the 4 brass tokens.`, 4600);
}
const modals = ['m-note', 'm-book', 'm-pad', 'm-win'];
function openModal(id) { G.modal = id; $(id).hidden = false; if (document.pointerLockElement) document.exitPointerLock?.(); G.keys.clear(); G.stick = { x: 0, y: 0 }; $(id).querySelector('button')?.focus({ preventScroll: true }); }
function closeModal() { if (G.modal) { $(G.modal).hidden = true; G.modal = null; $('view').focus?.(); } }
function toast(msg, ms = 2600) { const t = $('toast'); t.textContent = msg; t.hidden = false; clearTimeout(toast.h); toast.h = setTimeout(() => { t.hidden = true; }, ms); }
function updateCounts() { $('notes-count').textContent = `Tokens ${G.found.size}/4`; }
function updateScore() { $('score').textContent = `Score ${scoreFor({ tokens: G.found.size, solved: false, eff: 0 })}`; }
function updateBook() {
  $('book-list').innerHTML = G.c.digits.map(d => { const n = G.c.notes.find(x => x.pos === d.pos); return G.found.has(d.pos) ? `<li>${esc(n.text)}</li>` : `<li class="locked">Digit ${d.pos}: not found yet…</li>`; }).join('');
}
const esc = s => String(s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

// ---------- interaction ----------
function findFocus() {
  syncCamera(true);
  ray.setFromCamera({ x: 0, y: 0 }, camera);
  const hits = ray.intersectObjects(G.world.interactables, true);
  for (const h of hits) { let o = h.object; while (o && !o.userData?.interact) o = o.parent; if (o) return o.userData.interact; }
  return null;
}
const cam = { x: 0, z: 0, yaw: 0, pitch: 0, shake: 0 };
let FD = 0.016;
/** exact = the player's true view (used for aiming/interaction); otherwise the eased, shaking view used for drawing. */
function syncCamera(exact = false) {
  camera.rotation.order = 'YXZ';
  if (exact) { camera.position.set(G.x, 1.62, G.z); camera.rotation.set(G.pitch, G.yaw, 0); camera.updateMatrixWorld(true); return; }
  const kp = 1 - Math.exp(-26 * FD), ka = 1 - Math.exp(-17 * FD);
  cam.x += (G.x - cam.x) * kp; cam.z += (G.z - cam.z) * kp; cam.yaw += (G.yaw - cam.yaw) * ka; cam.pitch += (G.pitch - cam.pitch) * ka;
  if (hit(cam.x, cam.z, 0.12)) { cam.x = G.x; cam.z = G.z; }   // the eased camera may never end up inside a wall
  cam.shake *= Math.exp(-9 * FD); const sh = cam.shake < 0.002 ? 0 : cam.shake;
  camera.position.set(cam.x + (Math.random() - 0.5) * sh, 1.62 + Math.sin(G.bob) * 0.025 + (Math.random() - 0.5) * sh, cam.z + (Math.random() - 0.5) * sh);
  camera.rotation.set(cam.pitch, cam.yaw, (Math.random() - 0.5) * sh * 0.5);
  const fov = 72 + Math.min(1, Math.hypot(G.vx, G.vz) / 5.2) * 5; if (Math.abs(camera.fov - fov) > 0.05) { camera.fov += (fov - camera.fov) * 0.15; camera.updateProjectionMatrix(); }
  camera.updateMatrixWorld(true);
}
function activate() {
  if (G.state !== 'play' || G.modal) return;
  syncCamera(true); G.focus = findFocus(); if (!G.focus) return;   // re-aim right now so a press never acts on a stale target
  const f = G.focus;
  if (f.type === 'note') collectNote(f.pos);
  else if (f.type === 'evidence') {
    G.examined.add(f.id); beep(330, 0.06); toast(f.flavor);
  } else if (f.type === 'keypad') { G.code = ''; padRender('Enter the 4-digit code.'); openModal('m-pad'); }
}

const BRAND = ['#e0a82e', '#f4ecd8', '#2a9d8f', '#c8442f', '#ffd36b'];
function popScore() { const el = $('score'); el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); }
function collectNote(pos) {
  const n = G.c.notes.find(x => x.pos === pos); G.found.add(pos); G.world.collectToken(pos); updateCounts(); updateBook(); updateScore(); beep(520, 0.1, 'triangle'); setTimeout(() => beep(780, 0.12, 'triangle'), 90);
  { const sp = G.world.noteAt[pos]; G.world.burst(sp.x, 1.45, sp.z, 40, BRAND, 2.8); } popScore();
  $('note-title').textContent = `Case token ${G.found.size}/4 · digit ${pos}`; $('note-text').textContent = n.text; openModal('m-note');
}

// ---------- keypad ----------
function padRender(msg, bad = false) {
  const d = $('pad-display'); d.textContent = (G.code + '----').slice(0, 4).split('').join(' ').replace(/-/g, '–'); d.classList.toggle('bad', bad); if (bad) { d.classList.remove('bad'); void d.offsetWidth; d.classList.add('bad'); }
  $('pad-msg').textContent = msg;
}
function padPress(k) {
  if (G.solved || performance.now() < G.lockUntil) return;
  if (k === 'C') { G.code = ''; padRender('Cleared.'); return; }
  if (k === '<') { G.code = G.code.slice(0, -1); padRender(''); return; }
  if (G.code.length >= 4) return;
  G.code += k; beep(600 + G.code.length * 60, 0.05, 'square', 0.03); padRender('');
  if (G.code.length === 4) {
    if (checkCode(G.c, G.code)) win();
    else { G.wrong++; G.lockUntil = performance.now() + 1500; beep(140, 0.35, 'sawtooth', 0.06); cam.shake = Math.max(cam.shake, 0.05); padRender(`Wrong code. +${WRONG_COST}s`, true); setTimeout(() => { if (!G.solved) { G.code = ''; padRender('Try again.'); } }, 900); }
  }
}
$('pad-keys').innerHTML = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '<'].map(k => `<button type="button" data-k="${k}" class="${/\d/.test(k) ? '' : 'fn'}" aria-label="${k === 'C' ? 'Clear' : k === '<' ? 'Delete' : k}">${k === '<' ? '⌫' : k === 'C' ? 'CLR' : k}</button>`).join('');
$('pad-keys').addEventListener('click', e => { const b = e.target.closest('button[data-k]'); if (b) padPress(b.dataset.k); });

// ---------- win ----------
function win() {
  G.solved = true; G.state = 'won'; G.elapsed = (performance.now() - G.t0) / 1000;
  const eff = effectiveSeconds(G.elapsed, G.hints, G.wrong), stars = starsFor(eff, parFor(G.level)), score = scoreFor({ tokens: G.found.size, solved: true, eff });
  G.world.setUnlocked(true); beep(660, 0.12, 'triangle'); setTimeout(() => beep(880, 0.2, 'triangle'), 130);
  const bk = `lockedstudy.best.L${G.level}`, best = Number(store.get(bk)) || 0; if (score > best) store.set(bk, String(score)); $('score').textContent = `Score ${score}`; popScore(); G.lastScore = score;
  if (G.level < 3 && G.level + 1 > unlocked()) store.set('lockedstudy.unlocked', String(G.level + 1));
  $('win-title').textContent = G.level < 3 ? `Level ${G.level} cleared` : 'All three cases solved'; $('win-next').hidden = G.level >= 3; $('share-box').hidden = true;
  for (let i = 0; i < 4; i++) setTimeout(() => { const f = [Math.sin(G.yaw), Math.cos(G.yaw)]; G.world.burst(G.x - f[0] * 2.4, 1.2 + i * 0.35, G.z - f[1] * 2.4, 36, BRAND, 4.2); }, i * 260);
  $('win-stars').innerHTML = [0, 1, 2].map(i => `<span class="${i < stars ? 'on' : ''}">★</span>`).join(''); $('win-stars').setAttribute('aria-label', `${stars} of 3 stars`);
  $('win-facts').innerHTML = [['Level', `${G.level} · ${levelOf(G.level).name}`], ['Score', score], ['Best score', Math.max(score, best)], ['Time', fmtTime(G.elapsed)], ['Hints', `${G.hints} (+${G.hints * HINT_COST}s)`], ['Wrong codes', `${G.wrong} (+${G.wrong * WRONG_COST}s)`], ['Score time', fmtTime(eff)]].map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');
  closeModal(); openModal('m-win');
}

// ---------- input ----------
const lockEl = $('view');
addEventListener('keydown', e => {
  if (G.state === 'intro') return;
  if (e.key === 'Escape' && G.modal && G.modal !== 'm-win') { closeModal(); return; }
  if (G.modal === 'm-pad' && /^\d$/.test(e.key)) { padPress(e.key); return; }
  if (G.modal === 'm-pad' && e.key === 'Backspace') { padPress('<'); return; }
  if (G.modal) return;
  const k = e.key.toLowerCase();
  if (k === 'e' || k === 'enter' || k === ' ') { activate(); e.preventDefault(); return; }
  if (k === 'n') { updateBook(); openModal('m-book'); return; }
  if (k === 'h') { doHint(); return; }
  if (k === 'r') { startCase(G.seed, G.level); return; }
  G.keys.add(k); if (k.startsWith('arrow') || k === ' ') e.preventDefault();
});
addEventListener('keyup', e => G.keys.delete(e.key.toLowerCase()));
addEventListener('blur', () => G.keys.clear());
const LOOK = 0.0023;
function look(dx, dy, k = LOOK) { G.yaw -= dx * k; G.pitch = Math.max(-1.3, Math.min(1.3, G.pitch - dy * k)); }
document.addEventListener('mousemove', e => { if (document.pointerLockElement === lockEl) look(e.movementX, e.movementY); });
let drag = null;
lockEl.addEventListener('pointerdown', e => {
  if (G.state !== 'play' || G.modal) return;
  if (e.pointerType === 'mouse') {
    if (document.pointerLockElement === lockEl) { activate(); return; }
    drag = { id: e.pointerId, x: e.clientX, y: e.clientY, moved: 0 }; lockEl.setPointerCapture(e.pointerId);
  }
});
lockEl.addEventListener('pointermove', e => { if (drag && e.pointerId === drag.id) { const dx = e.clientX - drag.x, dy = e.clientY - drag.y; drag.x = e.clientX; drag.y = e.clientY; drag.moved += Math.abs(dx) + Math.abs(dy); look(dx, dy, 0.0032); } });
lockEl.addEventListener('pointerup', e => { if (drag && e.pointerId === drag.id) { const tap = drag.moved < 6; drag = null; if (tap && lockEl.requestPointerLock) { try { const p = lockEl.requestPointerLock(); p?.catch?.(() => activate()); } catch { activate(); } } } });
// touch: left zone stick, right zone look
const touches = new Map(); const stickEl = $('stick'), knob = stickEl.firstElementChild;
const SR = 52;
function touchStart(e) {
  if (G.state !== 'play' || G.modal || e.target.closest('button')) return;
  for (const t of e.changedTouches) { const left = t.clientX < innerWidth * 0.45; touches.set(t.identifier, left ? { kind: 'stick', ox: t.clientX, oy: t.clientY } : { kind: 'look', x: t.clientX, y: t.clientY }); if (left) { stickEl.style.left = `${t.clientX - 60}px`; stickEl.style.bottom = `${innerHeight - t.clientY - 60}px`; } }
}
function touchMove(e) {
  for (const t of e.changedTouches) {
    const s = touches.get(t.identifier); if (!s) continue; e.preventDefault();
    if (s.kind === 'stick') { let dx = (t.clientX - s.ox) / SR, dy = (t.clientY - s.oy) / SR; const m = Math.hypot(dx, dy); if (m > 1) { dx /= m; dy /= m; } G.stick = { x: dx, y: dy }; knob.style.transform = `translate(${dx * SR * 0.6}px,${dy * SR * 0.6}px)`; }
    else { look(t.clientX - s.x, t.clientY - s.y, 0.0048); s.x = t.clientX; s.y = t.clientY; }
  }
}
function touchEnd(e) { for (const t of e.changedTouches) { const s = touches.get(t.identifier); if (s?.kind === 'stick') { G.stick = { x: 0, y: 0 }; knob.style.transform = ''; stickEl.style.left = '24px'; stickEl.style.bottom = 'calc(28px + env(safe-area-inset-bottom))'; } touches.delete(t.identifier); } }
addEventListener('touchstart', touchStart, { passive: true }); addEventListener('touchmove', touchMove, { passive: false }); addEventListener('touchend', touchEnd); addEventListener('touchcancel', touchEnd);
$('btn-act').addEventListener('click', activate);

// ---------- buttons ----------
function doHint() {
  if (G.state !== 'play' || G.modal) return;
  const h = hint(G.c, G.found, G.examined); G.hints++; beep(440, 0.12, 'triangle'); toast(`${h.text}  (+${HINT_COST}s)`, 4200);
}
$('btn-hint').addEventListener('click', doHint);
$('btn-restart').addEventListener('click', () => { if (G.state !== 'intro') startCase(G.seed, G.level); });
$('btn-notes').addEventListener('click', () => { if (G.state === 'play' && !G.modal) { updateBook(); openModal('m-book'); } });
$('note-close').addEventListener('click', closeModal); $('book-close').addEventListener('click', closeModal); $('pad-close').addEventListener('click', closeModal);
const unlocked = () => Math.max(1, Math.min(3, Number(store.get('lockedstudy.unlocked')) || 1));
let pick = Math.min(unlocked(), 3);
function renderLevels() {
  $('levels').innerHTML = LEVELS.map(l => `<button type="button" class="lv" data-level="${l.n}" aria-pressed="${l.n === pick}" ${l.n > unlocked() ? 'disabled aria-label="Level ' + l.n + ' locked"' : ''}><b>${l.n}</b><span>${l.name}</span></button>`).join('');
  $('level-blurb').textContent = `${levelOf(pick).blurb} Par ${fmtTime(parFor(pick))}.`;
  const b = Number(store.get(`lockedstudy.best.L${pick}`)); $('best').textContent = b ? `Best score on level ${pick}: ${b}` : unlocked() < 2 ? 'Clear a level to unlock the next one.' : '';
}
$('levels').addEventListener('click', e => { const b = e.target.closest('button[data-level]'); if (b && !b.disabled) { pick = Number(b.dataset.level); renderLevels(); } });
renderLevels();
$('go-daily').addEventListener('click', () => startCase(params.get('seed') || dailySeed(), pick));
$('go-random').addEventListener('click', () => startCase(rseed(), pick));
const rseed = () => `r${Math.floor(Math.random() * 1e9)}`;
$('win-again').addEventListener('click', () => startCase(rseed(), G.level));
$('win-next').addEventListener('click', () => startCase(rseed(), Math.min(3, G.level + 1)));
$('win-share').addEventListener('click', async () => {
  const text = `I scored ${G.lastScore} in ${GAME_NAME} (Level ${G.level}) ${SHARE_URL}`, box = $('share-box'), ta = $('share-text'); ta.value = text;
  try { await navigator.clipboard.writeText(text); box.hidden = false; $('share-msg').textContent = 'Copied to your clipboard:'; }
  catch { box.hidden = false; $('share-msg').textContent = 'Copying is blocked here. Select the text and copy it yourself:'; }
  ta.focus(); ta.select();
});
$('win-walk').addEventListener('click', () => { closeModal(); G.state = 'walk'; });

// ---------- loop ----------
const hit = (x, z, r) => { for (const w of G.world.walls) if (w.on && x > w.minX - r && x < w.maxX + r && z > w.minZ - r && z < w.maxZ + r) return true; return false; };
let last = performance.now(), last0 = last, focusTick = 0, ema = 16, govT = 0;
/** Phones: if frames average over ~34 ms, first drop the pixel ratio, then switch the sun's shadows off. */
function governor(ms, now) {
  if (G.state !== 'play' || document.hidden) return; ema += (Math.min(ms, 200) - ema) * 0.08;
  if (now - govT < 1500 || now - G.t0 < 4000) return; govT = now;
  if (ema > 34 && G.quality < 2) { G.quality++; if (G.quality === 1) { renderer.setPixelRatio(1); resize(); } else G.world.setShadows(false); ema = 16; }
}
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000); FD = dt; last = now; governor((now - last0) || 16, now); last0 = now;
  if (G.world && (G.state === 'play' || G.state === 'walk' || G.state === 'won')) {
    if (!G.modal || G.state === 'won') {
      const K = G.keys; G.yaw += ((K.has('arrowleft') ? 1 : 0) - (K.has('arrowright') ? 1 : 0)) * 2.1 * dt;
      let fx = (K.has('d') ? 1 : 0) - (K.has('a') ? 1 : 0) + G.stick.x, fz = (K.has('s') || K.has('arrowdown') ? 1 : 0) - (K.has('w') || K.has('arrowup') ? 1 : 0) + G.stick.y;
      const m = Math.hypot(fx, fz); if (m > 1) { fx /= m; fz /= m; }
      const top = K.has('shift') ? 5.2 : 3.2, c = Math.cos(G.yaw), s = Math.sin(G.yaw), tx = (fx * c + fz * s) * top, tz = (-fx * s + fz * c) * top;
      const kk = 1 - Math.exp(-(m > 0.05 ? 7 : 15) * dt); G.vx += (tx - G.vx) * kk; G.vz += (tz - G.vz) * kk;   // speed builds up, and eases to a stop
      const spd = Math.hypot(G.vx, G.vz), dx = G.vx * dt, dz = G.vz * dt, R = 0.3; let bx = false, bz = false;
      if (!hit(G.x + dx, G.z, R)) G.x += dx; else bx = true;
      if (!hit(G.x, G.z + dz, R)) G.z += dz; else bz = true;
      G.impactCd -= dt;
      if (bx || bz) {
        if (m > 0.3) {   // near-miss forgiveness: glide around a door jamb or corner instead of sticking to it
          const horiz = bx && (!bz || Math.abs(dx) >= Math.abs(dz)), mv = horiz ? dx : dz; let done = false;
          for (const off of [0.07, 0.14, 0.22]) { for (const sg of [1, -1]) { if (!hit(horiz ? G.x + mv : G.x + sg * off, horiz ? G.z + sg * off : G.z + mv, R)) { const n = sg * Math.min(off, 1.6 * dt); if (horiz) { if (!hit(G.x, G.z + n, R)) G.z += n; } else if (!hit(G.x + n, G.z, R)) G.x += n; done = true; break; } } if (done) break; }
        }
        if (spd > 2 && G.impactCd <= 0) { cam.shake = Math.max(cam.shake, Math.min(0.1, spd * 0.022)); G.impactCd = 0.35; beep(95, 0.09, 'square', 0.04); }   // a little screen shake when you hit something
        if (bx) G.vx = 0; if (bz) G.vz = 0;
      }
      if (m > 0.05) G.bob += dt * (K.has('shift') ? 11 : 8) * Math.min(1, spd / 2);
    }
    G.world.tick(dt); if (G.state === 'play') G.world.setTime(G.elapsed / 220);
    syncCamera(); G.world.followSky(camera.position.x, 0, camera.position.z);
    if (G.state === 'play' && !G.modal) for (const n of G.c.notes) if (!G.found.has(n.pos)) { const sp = G.world.noteAt[n.pos]; if (Math.hypot(G.x - sp.x, G.z - sp.z) < 1.15) { collectNote(n.pos); break; } }
    if (G.state === 'play') {
      G.elapsed = (now - G.t0) / 1000; $('timer').textContent = fmtTime(G.elapsed + G.hints * HINT_COST + G.wrong * WRONG_COST);
      focusTick -= dt; if (focusTick <= 0 && !G.modal) { focusTick = 0.08; G.focus = findFocus(); const p = $('prompt'); if (G.focus) { p.hidden = false; p.textContent = `${coarse ? 'Tap Inspect' : 'E'} · ${G.focus.label}`; } else p.hidden = true; $('cross').classList.toggle('on', !!G.focus); }
      if (G.modal) { $('prompt').hidden = true; }
      $('room').textContent = ROOM_NAMES[G.world.roomAt(G.x, G.z)] ? cap(ROOM_NAMES[G.world.roomAt(G.x, G.z)]) : 'The study';
    }
    renderer.render(G.world.scene, camera);
  } else renderer.clear();
  requestAnimationFrame(frame);
}
const cap = s => s[0].toUpperCase() + s.slice(1);
document.addEventListener('visibilitychange', () => { if (document.hidden) G.keys.clear(); });
requestAnimationFrame(frame);

if (debug) {
  window.__study = { G, cam, renderer, start: startCase, teleport(x, z, yaw = 0, pitch = 0) { G.x = x; G.z = z; G.yaw = yaw; G.pitch = pitch; }, press: padPress, activate, focus: () => { syncCamera(true); return G.focus = findFocus(); }, find: findFocus, camera, THREE };
  if (params.has('seed')) startCase(params.get('seed'));
}
