// THE LOCKED STUDY — game loop, input, UI wiring.
import * as THREE from 'three';
import { generateCase, checkCode, hint, effectiveSeconds, starsFor, fmtTime, dailySeed, ROOM_NAMES, HINT_COST, WRONG_COST } from './core.js';
import { buildWorld } from './world.js';

const $ = id => document.getElementById(id);
const params = new URLSearchParams(location.search), debug = params.has('debug');
const store = { get(k) { try { return localStorage.getItem(k); } catch { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch { /* private mode */ } } };
const coarse = typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches;

const renderer = new THREE.WebGLRenderer({ canvas: $('view'), antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
const camera = new THREE.PerspectiveCamera(72, 1, 0.05, 60);
const resize = () => { renderer.setSize(innerWidth, innerHeight, false); camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); };
addEventListener('resize', resize); resize();

const G = { c: null, world: null, state: 'intro', modal: null, t0: 0, elapsed: 0, hints: 0, wrong: 0, found: new Set(), examined: new Set(), code: '', lockUntil: 0, solved: false,
  x: 0, z: 1.5, yaw: 0, pitch: 0, bob: 0, focus: null, keys: new Set(), stick: { x: 0, y: 0 } };
const ray = new THREE.Raycaster(); ray.far = 3.3;

// ---------- tiny synth (no assets) ----------
let actx = null;
const beep = (f, d = 0.08, type = 'sine', v = 0.05) => { try { actx ||= new (window.AudioContext || window.webkitAudioContext)(); const o = actx.createOscillator(), g = actx.createGain(); o.type = type; o.frequency.value = f; g.gain.value = v; g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + d); o.connect(g); g.connect(actx.destination); o.start(); o.stop(actx.currentTime + d); } catch { /* audio unavailable */ } };

// ---------- case lifecycle ----------
function startCase(seed) {
  const prev = G.world; if (prev) prev.scene.traverse(o => { o.geometry?.dispose?.(); });
  G.c = generateCase(seed); G.world = buildWorld(G.c);
  Object.assign(G, { x: 0, z: 1.5, yaw: 0, pitch: 0, found: new Set(), examined: new Set(), hints: 0, wrong: 0, code: '', solved: false, elapsed: 0, state: 'play', t0: performance.now(), lockUntil: 0 });
  G.world.setUnlocked(false);
  $('m-intro').hidden = true; $('m-win').hidden = true; $('hud').hidden = false; $('touch').hidden = !coarse;
  G.modal = null; updateCounts(); updateBook(); toast('Find a note. Notes point to clues in other rooms.', 3600);
}
const modals = ['m-note', 'm-book', 'm-pad', 'm-win'];
function openModal(id) { G.modal = id; $(id).hidden = false; if (document.pointerLockElement) document.exitPointerLock?.(); G.keys.clear(); G.stick = { x: 0, y: 0 }; $(id).querySelector('button')?.focus({ preventScroll: true }); }
function closeModal() { if (G.modal) { $(G.modal).hidden = true; G.modal = null; $('view').focus?.(); } }
function toast(msg, ms = 2600) { const t = $('toast'); t.textContent = msg; t.hidden = false; clearTimeout(toast.h); toast.h = setTimeout(() => { t.hidden = true; }, ms); }
function updateCounts() { $('notes-count').textContent = `Notes ${G.found.size}/4`; }
function updateBook() {
  $('book-list').innerHTML = G.c.digits.map(d => { const n = G.c.notes.find(x => x.pos === d.pos); return G.found.has(d.pos) ? `<li>${esc(n.text)}</li>` : `<li class="locked">Digit ${d.pos}: not found yet…</li>`; }).join('');
}
const esc = s => String(s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

// ---------- interaction ----------
function findFocus() {
  ray.setFromCamera({ x: 0, y: 0 }, camera);
  const hits = ray.intersectObjects(G.world.interactables, true);
  for (const h of hits) { let o = h.object; while (o && !o.userData?.interact) o = o.parent; if (o) return o.userData.interact; }
  return null;
}
function syncCamera() { camera.position.set(G.x, 1.62 + Math.sin(G.bob) * 0.025, G.z); camera.rotation.order = 'YXZ'; camera.rotation.set(G.pitch, G.yaw, 0); camera.updateMatrixWorld(true); }
function activate() {
  if (G.state !== 'play' || G.modal) return;
  syncCamera(); G.focus = findFocus(); if (!G.focus) return;   // re-aim right now so a press never acts on a stale target
  const f = G.focus;
  if (f.type === 'note') {
    const n = G.c.notes.find(x => x.pos === f.pos); G.found.add(f.pos); updateCounts(); updateBook(); beep(520, 0.1, 'triangle');
    $('note-title').textContent = `Note · digit ${f.pos}`; $('note-text').textContent = n.text; openModal('m-note');
  } else if (f.type === 'evidence') {
    G.examined.add(f.id); beep(330, 0.06); toast(f.flavor);
  } else if (f.type === 'keypad') { G.code = ''; padRender('Enter the 4-digit code.'); openModal('m-pad'); }
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
    else { G.wrong++; G.lockUntil = performance.now() + 1500; beep(140, 0.35, 'sawtooth', 0.06); padRender(`Wrong code. +${WRONG_COST}s`, true); setTimeout(() => { if (!G.solved) { G.code = ''; padRender('Try again.'); } }, 900); }
  }
}
$('pad-keys').innerHTML = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '<'].map(k => `<button type="button" data-k="${k}" class="${/\d/.test(k) ? '' : 'fn'}" aria-label="${k === 'C' ? 'Clear' : k === '<' ? 'Delete' : k}">${k === '<' ? '⌫' : k === 'C' ? 'CLR' : k}</button>`).join('');
$('pad-keys').addEventListener('click', e => { const b = e.target.closest('button[data-k]'); if (b) padPress(b.dataset.k); });

// ---------- win ----------
function win() {
  G.solved = true; G.state = 'won'; G.elapsed = (performance.now() - G.t0) / 1000;
  const eff = effectiveSeconds(G.elapsed, G.hints, G.wrong), stars = starsFor(eff);
  G.world.setUnlocked(true); beep(660, 0.12, 'triangle'); setTimeout(() => beep(880, 0.2, 'triangle'), 130);
  const best = Number(store.get('lockedstudy.best')) || 0; if (!best || eff < best) store.set('lockedstudy.best', String(Math.round(eff)));
  $('win-stars').innerHTML = [0, 1, 2].map(i => `<span class="${i < stars ? 'on' : ''}">★</span>`).join(''); $('win-stars').setAttribute('aria-label', `${stars} of 3 stars`);
  $('win-facts').innerHTML = [['Time', fmtTime(G.elapsed)], ['Hints', `${G.hints} (+${G.hints * HINT_COST}s)`], ['Wrong codes', `${G.wrong} (+${G.wrong * WRONG_COST}s)`], ['Score time', fmtTime(eff)]].map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');
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
  if (k === 'e' || k === 'enter') { activate(); return; }
  if (k === 'n') { updateBook(); openModal('m-book'); return; }
  if (k === 'h') { doHint(); return; }
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
$('btn-notes').addEventListener('click', () => { if (G.state === 'play' && !G.modal) { updateBook(); openModal('m-book'); } });
$('note-close').addEventListener('click', closeModal); $('book-close').addEventListener('click', closeModal); $('pad-close').addEventListener('click', closeModal);
$('go-daily').addEventListener('click', () => startCase(params.get('seed') || dailySeed()));
$('go-random').addEventListener('click', () => startCase(`r${Math.floor(Math.random() * 1e9)}`));
$('win-again').addEventListener('click', () => startCase(`r${Math.floor(Math.random() * 1e9)}`));
$('win-walk').addEventListener('click', () => { closeModal(); G.state = 'walk'; });
{ const b = Number(store.get('lockedstudy.best')); if (b) $('best').textContent = `Your best score time: ${fmtTime(b)}`; }

// ---------- loop ----------
const hit = (x, z, r) => { for (const w of G.world.walls) if (w.on && x > w.minX - r && x < w.maxX + r && z > w.minZ - r && z < w.maxZ + r) return true; return false; };
let last = performance.now(), focusTick = 0;
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  if (G.world && (G.state === 'play' || G.state === 'walk' || G.state === 'won')) {
    if (!G.modal || G.state === 'won') {
      const K = G.keys; let fx = (K.has('d') || K.has('arrowright') ? 1 : 0) - (K.has('a') || K.has('arrowleft') ? 1 : 0) + G.stick.x, fz = (K.has('s') || K.has('arrowdown') ? 1 : 0) - (K.has('w') || K.has('arrowup') ? 1 : 0) + G.stick.y;
      const m = Math.hypot(fx, fz); if (m > 1) { fx /= m; fz /= m; }
      const sp = (K.has('shift') ? 5.2 : 3.2) * dt, c = Math.cos(G.yaw), s = Math.sin(G.yaw), dx = (fx * c + fz * s) * sp, dz = (-fx * s + fz * c) * sp, R = 0.32;
      if (!hit(G.x + dx, G.z, R)) G.x += dx; if (!hit(G.x, G.z + dz, R)) G.z += dz;
      if (m > 0.05) G.bob += dt * (K.has('shift') ? 11 : 8);
    }
    G.world.tick(dt);
    syncCamera();
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
  window.__study = { G, start: startCase, teleport(x, z, yaw = 0, pitch = 0) { G.x = x; G.z = z; G.yaw = yaw; G.pitch = pitch; }, press: padPress, activate, focus: () => { syncCamera(); return G.focus = findFocus(); }, find: findFocus, camera, THREE };
  if (params.has('seed')) startCase(params.get('seed'));
}
