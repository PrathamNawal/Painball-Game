// THE LOCKED STUDY — builds the 3D house from a case. Everything is procedural primitives (no assets).
import * as THREE from 'three';
import { makeRng } from './core.js';

export const H = 3.2, T = 0.3, DOOR_HALF = 1.2;
const ROOMS = {
  hall:    { cx: 0,   cz: 0,   wall: '#b08e6e', floor: '#5a4636', rug: '#7b2d2d', light: '#ffd9a8' },
  kitchen: { cx: -10, cz: 0,   wall: '#8fb59a', floor: '#cfc7b4', rug: '#3f6f73', light: '#fff1cf' },
  library: { cx: 10,  cz: 0,   wall: '#8a4f3c', floor: '#3d2b22', rug: '#4a3a6b', light: '#ffc98a' },
  bedroom: { cx: 0,   cz: -10, wall: '#8393c6', floor: '#6a5a70', rug: '#8a5a3c', light: '#d8dcff' },
  study:   { cx: 0,   cz: 10,  wall: '#58487a', floor: '#2a2630', rug: '#b08a2e', light: '#bfa7ff' },
};
// wall objects face into the room: front is local +z; rotY turns it (N wall 0, S wall PI, W wall PI/2, E wall -PI/2)
const SLOTS = {
  hall:    { clock: [-3, -4.85, 0],        dots: [4.85, -3, -Math.PI / 2], hooks: [-4.85, 3.1, Math.PI / 2], candles: [3, 3],    note: [-2.2, 3.4] },
  kitchen: { clock: [-14.85, 0, Math.PI / 2], dots: [-10, -4.85, 0],       hooks: [-10, 4.85, Math.PI],       candles: [-11, 0],  note: [-12.5, -3] },
  library: { clock: [14.85, 0, -Math.PI / 2], dots: [10, -4.85, 0],        hooks: [10, 4.85, Math.PI],        candles: [11, 0],   note: [12.5, 3] },
  bedroom: { clock: [0, -14.85, 0],        dots: [-4.85, -10, Math.PI / 2], hooks: [4.85, -10, -Math.PI / 2], candles: [0, -11],  note: [-3, -12.5] },
};
const WALLS = [  // axis-aligned segments [x0,z0,x1,z1]; gaps (±DOOR_HALF) are the doorways
  [-15, -5, -5, -5], [-5, -5, -DOOR_HALF, -5], [DOOR_HALF, -5, 5, -5], [5, -5, 15, -5],
  [-15, 5, -5, 5], [-5, 5, -DOOR_HALF, 5], [DOOR_HALF, 5, 5, 5], [5, 5, 15, 5],
  [-5, -15, 5, -15], [-5, 15, 5, 15],
  [-5, -15, -5, -5], [5, -15, 5, -5], [-5, 5, -5, 15], [5, 5, 5, 15],
  [-5, -5, -5, -DOOR_HALF], [-5, DOOR_HALF, -5, 5], [5, -5, 5, -DOOR_HALF], [5, DOOR_HALF, 5, 5],
  [-15, -5, -15, 5], [15, -5, 15, 5],
];

export function buildWorld(c, opts = {}) {
  const scene = new THREE.Scene();
  const mats = new Map(), M = (col, o = {}) => { const k = col + JSON.stringify(o); if (!mats.has(k)) mats.set(k, new THREE.MeshLambertMaterial({ color: col, flatShading: true, ...o })); return mats.get(k); };
  const walls = [], interactables = [], r = makeRng(`${c.seed}:world`);
  const add = (parent, geo, mat, x = 0, y = 0, z = 0) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; parent.add(m); return m; };
  const box = (parent, w, h, d, col, x, y, z, o) => add(parent, new THREE.BoxGeometry(w, h, d), M(col, o), x, y, z);
  const cyl = (parent, rt, rb, h, col, x, y, z, seg = 10, o) => add(parent, new THREE.CylinderGeometry(rt, rb, h, seg), M(col, o), x, y, z);
  const solid = (x0, z0, x1, z1) => { const w = { minX: Math.min(x0, x1), maxX: Math.max(x0, x1), minZ: Math.min(z0, z1), maxZ: Math.max(z0, z1), on: true }; walls.push(w); return w; };

  // ---- open-air estate: sky gradient, ground, sun with soft shadows ----
  const sk = document.createElement('canvas'); sk.width = 4; sk.height = 256; const sg = sk.getContext('2d'), gr = sg.createLinearGradient(0, 0, 0, 256);
  [[0, '#16306b'], [0.26, '#4f86c6'], [0.5, '#f3d9a0'], [1, '#f6e7c6']].forEach(([o, col]) => gr.addColorStop(o, col)); sg.fillStyle = gr; sg.fillRect(0, 0, 4, 256);
  const skyTex = new THREE.CanvasTexture(sk); skyTex.colorSpace = THREE.SRGBColorSpace;
  const sky = new THREE.Mesh(new THREE.SphereGeometry(90, 16, 10), new THREE.MeshBasicMaterial({ map: skyTex, side: THREE.BackSide, depthWrite: false, fog: false })); sky.renderOrder = -1; scene.add(sky);
  scene.fog = new THREE.Fog('#f1dfae', 38, 88);
  const ground = new THREE.Mesh(new THREE.CircleGeometry(88, 14), M('#7a9a62')); ground.rotation.x = -Math.PI / 2; ground.position.y = -0.02; ground.receiveShadow = true; scene.add(ground);
  scene.add(new THREE.HemisphereLight('#d6e6ff', '#9a8a68', 1.05));
  const sun = new THREE.DirectionalLight('#fff0cf', 2.1); sun.position.set(13, 24, 9); sun.castShadow = true;
  sun.shadow.mapSize.set(opts.shadowSize || 2048, opts.shadowSize || 2048); Object.assign(sun.shadow.camera, { left: -22, right: 22, top: 22, bottom: -22, near: 4, far: 60 }); sun.shadow.bias = -0.0005; sun.shadow.normalBias = 0.03; sun.shadow.radius = 3;
  scene.add(sun);
  for (let i = 0; i < 26; i++) {   // low-poly trees ringing the house
    const a = r() * Math.PI * 2, d = 24 + r() * 16, tx = Math.cos(a) * d, tz = Math.sin(a) * d, tg = new THREE.Group(); tg.position.set(tx, 0, tz); scene.add(tg);
    cyl(tg, 0.25, 0.35, 1.2, '#6b4a2a', 0, 0.6, 0, 5); const hh = 2.4 + r() * 2; add(tg, new THREE.ConeGeometry(1.4 + r() * 0.6, hh, 6), M(r() < 0.5 ? '#3f7d4e' : '#4f9a58'), 0, 1.2 + hh / 2, 0);
  }
  // rooms: floor, rug, ceiling, warm light
  for (const [id, R] of Object.entries(ROOMS)) {
    const fl = add(scene, new THREE.PlaneGeometry(10, 10), M(R.floor), R.cx, 0, R.cz); fl.rotation.x = -Math.PI / 2;
    const rg = add(scene, new THREE.PlaneGeometry(5, 3.4), M(R.rug), R.cx, 0.012, R.cz + (id === 'hall' ? -1 : 0)); rg.rotation.x = -Math.PI / 2;
    fl.castShadow = rg.castShadow = false;
  }
  // walls (one neutral plaster tone + dark skirting) and their colliders
  for (const [x0, z0, x1, z1] of WALLS) {
    const horiz = z0 === z1, len = Math.abs(horiz ? x1 - x0 : z1 - z0) + T, mx = (x0 + x1) / 2, mz = (z0 + z1) / 2;
    const side = (px, pz) => { for (const R of Object.values(ROOMS)) if (Math.abs(px - R.cx) < 5 && Math.abs(pz - R.cz) < 5) return M(R.wall); return M('#7a7068'); };
    const edge = M('#7a7068'), a = horiz ? side(mx, mz - 1) : side(mx - 1, mz), b = horiz ? side(mx, mz + 1) : side(mx + 1, mz);
    const wall = new THREE.Mesh(new THREE.BoxGeometry(horiz ? len : T, H, horiz ? T : len), horiz ? [edge, edge, edge, edge, b, a] : [b, a, edge, edge, edge, edge]);
    wall.position.set(mx, H / 2, mz); wall.castShadow = wall.receiveShadow = true; scene.add(wall);
    box(scene, horiz ? len : T + 0.04, 0.25, horiz ? T + 0.04 : len, '#3a2e26', mx, 0.125, mz);
    solid(horiz ? Math.min(x0, x1) - T / 2 : mx - T / 2, horiz ? mz - T / 2 : Math.min(z0, z1) - T / 2, horiz ? Math.max(x0, x1) + T / 2 : mx + T / 2, horiz ? mz + T / 2 : Math.max(z0, z1) + T / 2);
  }
  const holder = (room, pos, rotY = 0) => { const g = new THREE.Group(); g.position.set(pos[0], 0, pos[1]); g.rotation.y = rotY; scene.add(g); return g; };

  // ---- study door + keypad (south wall of the hall) ----
  const door = new THREE.Group(); door.position.set(0, 0, 5); scene.add(door);
  box(door, DOOR_HALF * 2, H - 0.05, 0.18, '#4a2f1d', 0, (H - 0.05) / 2, 0); box(door, 0.12, 0.12, 0.28, '#d9b45a', 0.9, 1.1, 0);
  const doorBox = solid(-DOOR_HALF - 0.1, 5 - 0.12, DOOR_HALF + 0.1, 5 + 0.12);
  let doorT = 0, doorOpenFlag = false, clock = 0;
  const keypad = new THREE.Group(); keypad.position.set(2.1, 1.35, 4.83); keypad.rotation.y = Math.PI; scene.add(keypad);
  box(keypad, 0.42, 0.62, 0.08, '#202226', 0, 0, 0); box(keypad, 0.3, 0.1, 0.02, '#0a2a14', 0, 0.18, 0.05, { emissive: '#1d7a3a', emissiveIntensity: 0.8 });
  for (let i = 0; i < 12; i++) box(keypad, 0.07, 0.07, 0.02, '#8a8f98', -0.1 + (i % 3) * 0.1, 0.05 - Math.floor(i / 3) * 0.1, 0.05);
  const lamp = box(keypad, 0.06, 0.06, 0.03, '#ff3322', 0.15, 0.27, 0.05, { emissive: '#ff2200', emissiveIntensity: 1 });
  keypad.userData.interact = { type: 'keypad', label: 'Use the keypad' }; interactables.push(keypad);
  const sign = new THREE.Group(); sign.position.set(0, 2.55, 4.8); sign.rotation.y = Math.PI; scene.add(sign);
  const cv = document.createElement('canvas'); cv.width = 256; cv.height = 48; const g = cv.getContext('2d');
  g.fillStyle = '#c9a24b'; g.fillRect(0, 0, 256, 48); g.fillStyle = '#2a1c0c'; g.font = 'bold 30px Georgia, serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('THE STUDY', 128, 26);
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; add(sign, new THREE.PlaneGeometry(1.4, 0.26), new THREE.MeshBasicMaterial({ map: tex }), 0, 0, 0.0);
  // treasure in the study: a glowing chest on a plinth
  const chest = new THREE.Group(); chest.position.set(0, 0, 11.5); scene.add(chest);
  box(chest, 1.2, 0.5, 0.7, '#6b3d1a', 0, 0.25, 0); box(chest, 1.24, 0.12, 0.74, '#d9b45a', 0, 0.56, 0); box(chest, 0.16, 0.2, 0.06, '#d9b45a', 0, 0.4, 0.37);
  const glow = new THREE.PointLight('#ffd27a', 0, 6, 1.6); glow.position.set(0, 1.2, 11.2); scene.add(glow);
  box(scene, 4, 2.4, 0.1, '#1d1a26', 0, 1.6, 14.8); // study back panel
  solid(-0.7, 11.1, 0.7, 11.9);

  // ---- notes (a letter on a small desk in each room) ----
  const noteMeshes = {}, tokens = {}, noteAt = {};
  for (const n of c.notes) {
    const R = SLOTS[n.room], g1 = holder(n.room, R.note, 0); g1.userData.interact = { type: 'note', pos: n.pos, label: 'Read the note' };
    box(g1, 0.9, 0.06, 0.6, '#5a3a22', 0, 0.8, 0); for (const sx of [-0.4, 0.4]) for (const sz of [-0.25, 0.25]) box(g1, 0.06, 0.78, 0.06, '#3f2816', sx, 0.39, sz);
    const paper = box(g1, 0.34, 0.01, 0.44, '#f4ecd2', 0, 0.845, 0, { emissive: '#554a28', emissiveIntensity: 0.5 }); paper.rotation.y = (r() - 0.5) * 0.6;
    box(g1, 0.03, 0.08, 0.03, '#a02020', 0.3, 0.87, 0.18); noteMeshes[n.pos] = g1; interactables.push(g1);
    const tk = new THREE.Group(); tk.position.set(R.note[0], 1.45, R.note[1]); scene.add(tk);   // the collectible: a brass case token stamped "H"
    const disc = add(tk, new THREE.CylinderGeometry(0.24, 0.24, 0.05, 8), M('#e0a82e', { emissive: '#8a5a08', emissiveIntensity: 0.6 })); disc.rotation.x = Math.PI / 2;
    for (const zz of [0.035, -0.035]) { for (const sx of [-0.07, 0.07]) box(tk, 0.035, 0.18, 0.012, '#14213d', sx, 0, zz); box(tk, 0.14, 0.035, 0.012, '#14213d', 0, 0, zz); }
    tokens[n.pos] = tk; noteAt[n.pos] = { x: R.note[0], z: R.note[1] };
    solid(R.note[0] - 0.5, R.note[1] - 0.35, R.note[0] + 0.5, R.note[1] + 0.35);
  }

  // ---- evidence + decoys ----
  const FLAVOR = { clock: 'A grandfather clock. Its hands are frozen.', candles: 'A table of burning candles. Count them.', dots: 'A portrait made of painted dots. Count them.', hooks: 'A row of coat hooks along the wall. Count the hooks, not the coats.' };
  const dotCols = ['#e63946', '#f4a261', '#2a9d8f', '#4361ee', '#b5179e', '#ffd166'];
  for (const o of c.objects) {
    const S = SLOTS[o.room]; if (!S) continue;
    const label = { clock: 'Examine the clock', candles: 'Count the candles', dots: 'Study the portrait', hooks: 'Count the hooks' }[o.kind];
    if (o.kind === 'clock') {
      const g2 = holder(o.room, [S.clock[0], S.clock[1]], S.clock[2]); g2.userData.interact = { type: 'evidence', id: o.id, label, flavor: FLAVOR.clock };
      const body = box(g2, 1.0, 2.5, 0.42, '#4b2e1a', 0, 1.25, 0.1); box(g2, 1.14, 0.16, 0.5, '#5c3a22', 0, 2.55, 0.1); box(g2, 1.14, 0.16, 0.5, '#5c3a22', 0, 0.08, 0.1);
      const face = new THREE.Group(); face.position.set(0, 1.85, 0.32); g2.add(face);
      const disc = add(face, new THREE.CylinderGeometry(0.42, 0.42, 0.04, 12), M('#f2ead2')); disc.rotation.x = Math.PI / 2;
      const ring = add(face, new THREE.TorusGeometry(0.42, 0.035, 5, 14), M('#c9a24b')); ring.position.z = 0.0;
      for (let i = 0; i < 12; i++) { const a = (i / 12) * Math.PI * 2, big = i === 0; const t = box(face, big ? 0.06 : 0.03, big ? 0.14 : 0.07, 0.02, big ? '#b3202a' : '#222', Math.sin(a) * 0.34, Math.cos(a) * 0.34, 0.03); t.rotation.z = -a; }
      const hand = (len, w, ang, col) => { const gh = new THREE.BoxGeometry(w, len, 0.02); gh.translate(0, len / 2, 0); const m = new THREE.Mesh(gh, M(col)); m.position.z = 0.05; m.rotation.z = -ang; face.add(m); return m; };
      hand(0.36, 0.04, 0, '#151515'); hand(0.22, 0.06, o.value * Math.PI / 6, '#151515'); add(face, new THREE.CylinderGeometry(0.03, 0.03, 0.05, 6), M('#c9a24b')).rotation.x = Math.PI / 2;
      box(g2, 0.5, 0.9, 0.04, '#2a1a0e', 0, 0.85, 0.32); cyl(g2, 0.1, 0.1, 0.03, '#c9a24b', 0, 0.6, 0.35, 16).rotation.x = Math.PI / 2;
      interactables.push(g2); solid(S.clock[0] - 0.6 * Math.abs(Math.cos(S.clock[2])) - 0.3 * Math.abs(Math.sin(S.clock[2])), S.clock[1] - 0.3 * Math.abs(Math.cos(S.clock[2])) - 0.6 * Math.abs(Math.sin(S.clock[2])), S.clock[0] + 0.6 * Math.abs(Math.cos(S.clock[2])) + 0.3 * Math.abs(Math.sin(S.clock[2])), S.clock[1] + 0.3 * Math.abs(Math.cos(S.clock[2])) + 0.6 * Math.abs(Math.sin(S.clock[2])));
    } else if (o.kind === 'dots') {
      const g2 = holder(o.room, [S.dots[0], S.dots[1]], S.dots[2]); g2.userData.interact = { type: 'evidence', id: o.id, label, flavor: FLAVOR.dots };
      box(g2, 2.6, 1.7, 0.08, '#6b4a1e', 0, 1.65, 0.04); box(g2, 2.4, 1.5, 0.06, '#e9e0c8', 0, 1.65, 0.08);
      const cells = []; for (let cx = 0; cx < 5; cx++) for (let cy = 0; cy < 3; cy++) cells.push([cx, cy]);
      for (let i = cells.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [cells[i], cells[j]] = [cells[j], cells[i]]; }
      for (let i = 0; i < o.value; i++) { const [cx, cy] = cells[i]; const d = add(g2, new THREE.CircleGeometry(0.13, 10), M(dotCols[i % dotCols.length], { side: THREE.DoubleSide }), -0.96 + cx * 0.48 + (r() - 0.5) * 0.14, 1.65 - 0.5 + cy * 0.5 + (r() - 0.5) * 0.1, 0.115); d.rotation.y = 0; }
      interactables.push(g2);
    } else if (o.kind === 'hooks') {
      const g2 = holder(o.room, [S.hooks[0], S.hooks[1]], S.hooks[2]); g2.userData.interact = { type: 'evidence', id: o.id, label, flavor: FLAVOR.hooks };
      box(g2, 3.7, 0.22, 0.05, '#5a3a22', 0, 1.7, 0.03);
      for (let i = 0; i < o.value; i++) {
        const x = (i - (o.value - 1) / 2) * 0.4; box(g2, 0.07, 0.07, 0.16, '#f0cf7a', x, 1.7, 0.12, { emissive: '#7a5a14', emissiveIntensity: 0.6 }); box(g2, 0.11, 0.11, 0.09, '#f0cf7a', x, 1.7, 0.2, { emissive: '#7a5a14', emissiveIntensity: 0.6 });
        if (r() < 0.45) { const col = ['#3a5a8a', '#7a3a3a', '#4a6a4a', '#8a7a3a'][Math.floor(r() * 4)]; box(g2, 0.26, 0.6, 0.1, col, x, 1.34, 0.2); }
      }
      interactables.push(g2);
    } else if (o.kind === 'candles') {
      const g2 = holder(o.room, S.candles, 0); g2.userData.interact = { type: 'evidence', id: o.id, label, flavor: FLAVOR.candles };
      cyl(g2, 0.72, 0.72, 0.07, '#4b2e1a', 0, 0.82, 0, 12); cyl(g2, 0.1, 0.16, 0.8, '#3a2314', 0, 0.4, 0, 10); cyl(g2, 0.4, 0.4, 0.05, '#3a2314', 0, 0.03, 0, 16);
      const slots = []; for (let i = 0; i < 9; i++) slots.push([(i % 3 - 1) * 0.3, (Math.floor(i / 3) - 1) * 0.3]);
      for (let i = slots.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [slots[i], slots[j]] = [slots[j], slots[i]]; }
      for (let i = 0; i < o.value; i++) { const h = 0.2 + r() * 0.14, [x, z] = slots[i]; cyl(g2, 0.04, 0.04, h, '#f1e7c9', x, 0.855 + h / 2, z, 10); add(g2, new THREE.SphereGeometry(0.036, 6, 4), M('#ffb347', { emissive: '#ff9a1f', emissiveIntensity: 1.4 }), x, 0.87 + h, z); }
      interactables.push(g2); solid(S.candles[0] - 0.75, S.candles[1] - 0.75, S.candles[0] + 0.75, S.candles[1] + 0.75);
    }
  }
  // a little dressing so rooms read differently
  const bk = ['#a33', '#36a', '#3a6', '#c93', '#639', '#c63'];
  for (const sz of [-3.2, 3.2]) { const g3 = holder('library', [14.4, sz]); box(g3, 0.7, 2.3, 1.6, '#2a1b12', 0, 1.15, 0); for (let i = 0; i < 9; i++) box(g3, 0.2, 0.28 + (i % 3) * 0.04, 0.12, bk[i % 6], -0.28, 0.4 + Math.floor(i / 3) * 0.7, -0.6 + (i % 3) * 0.5); solid(14.05, sz - 0.8, 14.75, sz + 0.8); }
  box(scene, 0.6, 0.9, 2.6, '#d8d4c8', -14.6, 0.45, -3.2); solid(-14.9, -4.5, -14.3, -1.9);          // kitchen counter
  box(scene, 2.2, 0.6, 1.0, '#7a4a52', 3.8, 0.3, -9.5); box(scene, 2.2, 0.35, 1.0, '#e8dccb', 3.8, 0.78, -9.5); solid(2.7, -10, 4.9, -9); // bedroom bed
  return {
    scene, walls, interactables, ROOMS,
    roomAt(x, z) { for (const id of ['hall', 'kitchen', 'library', 'bedroom', 'study']) { const R = ROOMS[id]; if (Math.abs(x - R.cx) <= 5 && Math.abs(z - R.cz) <= 5) return id; } return 'hall'; },
    setUnlocked(v) { doorOpenFlag = v; doorBox.on = !v; lamp.material = M(v ? '#33ff66' : '#ff3322', { emissive: v ? '#00ff44' : '#ff2200', emissiveIntensity: 1 }); glow.intensity = v ? 6 : 0; },
    noteAt, collectToken(pos) { if (tokens[pos]) tokens[pos].visible = false; }, tokenVisible: pos => !!tokens[pos]?.visible,
    followSky(x, y, z) { sky.position.set(x, y, z); },
    tick(dt) { clock += dt; for (const tk of Object.values(tokens)) { tk.rotation.y += dt * 1.9; tk.position.y = 1.45 + Math.sin(clock * 2.2 + tk.position.x) * 0.07; } doorT += ((doorOpenFlag ? 1 : 0) - doorT) * Math.min(1, dt * 2.2); door.position.x = doorT * 2.6; },
  };
}
