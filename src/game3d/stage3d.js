// The 3D stage: sky, field, props, bunkers (inflatable, deflating), barrels, fighters, balls, lasers, decals, particles, camera director.
import { WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, SphereGeometry, CylinderGeometry, ConeGeometry, BoxGeometry, PlaneGeometry, OctahedronGeometry, DodecahedronGeometry, CapsuleGeometry,
  MeshBasicMaterial, ShaderMaterial, BackSide, DoubleSide, Color, Fog, HemisphereLight, DirectionalLight, CanvasTexture, RepeatWrapping, SRGBColorSpace, Sprite, SpriteMaterial, AdditiveBlending, Vector3, MathUtils } from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { Rng } from '../core/rng.js';
import { D, playerCamera, bunkerH, markerPos } from '../core/duel.js';
import { themeById } from './themes.js';
import { buildFighter, poseFighter, toon, outlined } from './char3d.js';
import { Decals, Particles } from './fx3d.js';
import { Post } from './post3d.js';

const TAU = Math.PI * 2;
const dispose = o => o.traverse(c => { if (c.geometry && !c.geometry.userData.shared) c.geometry.dispose?.(); const m = c.material; if (m) (Array.isArray(m) ? m : [m]).forEach(x => { if (!x.userData?.shared) x.dispose?.(); }); });
const canvasTex = (w, h, draw) => { const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h); const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; return t; };

export class Stage3D {
  constructor(canvas) {
    this.cv = canvas; this.low = false;
    this.renderer = new WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
    this.renderer.outputColorSpace = SRGBColorSpace;
    this.scene = new Scene(); this.camera = new PerspectiveCamera(62, 1, 0.1, 220);
    this.post = new Post(this.renderer);
    this.env = new Group(); this.dyn = new Group(); this.scene.add(this.env, this.dyn);
    this.decals = new Decals(this.scene, 220); this.drops = new Particles(this.scene, 420); this.dust = new Particles(this.scene, 160, { soft: 1 }); this.spark = new Particles(this.scene, 160, { additive: true });
    this.time = 0; this.shake = 0; this.cam = { mode: 'showcase', t: 0, orbit: 0, kill: null }; this.pal = { you: '#2f8bff', foe: '#ff8a1f' };
    this.camPos = new Vector3(0, 3, 14); this.camLook = new Vector3(0, 1, 0); this.fovNow = 62; this.recoil = [0, 0]; this.ab = 0; this.flash = 0; this.balls = []; this.fighters = []; this.theme = null;
  }
  setQuality(low) { this.low = !!low; this.post.enabled = !low; this.resize(); }
  resize() {
    const w = this.cv.clientWidth || 2, h = this.cv.clientHeight || 2, dpr = Math.min(devicePixelRatio || 1, this.low ? 1 : 1.75);
    this.dpr = dpr; this.renderer.setPixelRatio(dpr); this.renderer.setSize(w, h, false); this.post.setSize(w, h, dpr);
    this.camera.aspect = w / h; this.camera.updateProjectionMatrix();
    this.portrait = h > w;
  }

  // ------------------------------------------------------------ environment
  loadTheme(id) {
    if (this.theme?.id === id) return;
    const th = this.theme = themeById(id), rng = new Rng(`env:${id}`);
    this.env.children.slice().forEach(c => { c.removeFromParent(); dispose(c); });
    this.scene.fog = new Fog(new Color(th.fog), 38, 105); this.scene.background = new Color(th.fog);
    const env = this.env;
    // sky dome
    const sky = new Mesh(new SphereGeometry(120, 24, 16), new ShaderMaterial({ side: BackSide, depthWrite: false, fog: false,
      uniforms: { a: { value: new Color(th.sky[0]) }, b: { value: new Color(th.sky[1]) }, c: { value: new Color(th.sky[2]) }, sd: { value: new Vector3(...th.sunDir).normalize() }, sc: { value: new Color(th.sun) } },
      vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: `uniform vec3 a,b,c,sc,sd; varying vec3 vP; void main(){ float h = clamp(vP.y * 1.6 + 0.12, 0.0, 1.0); vec3 col = mix(c, b, smoothstep(0.0, 0.38, h)); col = mix(col, a, smoothstep(0.32, 1.0, h));
        float s = max(dot(normalize(vP), normalize(sd)), 0.0); col += sc * (pow(s, 600.0) * 2.0 + pow(s, 12.0) * 0.16); gl_FragColor = vec4(col, 1.0); 
#include <colorspace_fragment>
 }` }));
    sky.renderOrder = -10; env.add(sky);
    // clouds
    const cloudTex = canvasTex(128, 64, (x, w, h) => { const g = x.createRadialGradient(w / 2, h / 2, 2, w / 2, h / 2, w / 2); g.addColorStop(0, 'rgba(255,255,255,.9)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, w, h); });
    for (let i = 0; i < 9; i++) { const s = new Sprite(new SpriteMaterial({ map: cloudTex, color: new Color(th.sky[1]).lerp(new Color('#ffffff'), 0.55), transparent: true, opacity: 0.55, depthWrite: false, fog: false })); s.position.set(rng.range(-90, 90), rng.range(22, 55), -rng.range(60, 100)); s.scale.set(rng.range(30, 60), rng.range(8, 16), 1); env.add(s); }
    // lights
    env.add(new HemisphereLight(new Color(th.hemi[0]), new Color(th.hemi[1]), th.glow ? 1.2 : 1.35));
    const sun = new DirectionalLight(new Color(th.sun), th.glow ? 1.4 : 2.6); sun.position.set(...th.sunDir).multiplyScalar(-30).setY(14); sun.position.x = -th.sunDir[0] * 30; env.add(sun);
    // ground (field markings baked)
    const gtex = canvasTex(1024, 1280, (x, w, h) => {
      x.fillStyle = th.ground; x.fillRect(0, 0, w, h);
      for (let i = 0; i < 2600; i++) { x.fillStyle = `rgba(${rng.next() < 0.5 ? '255,255,255' : '0,0,0'},${0.03 + rng.next() * 0.05})`; const r = 2 + rng.next() * 7; x.beginPath(); x.arc(rng.next() * w, rng.next() * h, r, 0, TAU); x.fill(); }
      x.strokeStyle = th.grid; x.lineWidth = 8; x.strokeRect(40, 40, w - 80, h - 80); x.lineWidth = 6; x.beginPath(); x.moveTo(40, h / 2); x.lineTo(w - 40, h / 2); x.stroke();
      x.setLineDash([26, 22]); [h * 0.2, h * 0.8].forEach(y => { x.beginPath(); x.moveTo(40, y); x.lineTo(w - 40, y); x.stroke(); }); x.setLineDash([]); x.beginPath(); x.arc(w / 2, h / 2, 120, 0, TAU); x.stroke();
    });
    const ground = new Mesh(new PlaneGeometry(24, 30), toon('#ffffff', { map: gtex })); ground.rotation.x = -Math.PI / 2; env.add(ground);
    const outer = new Mesh(new PlaneGeometry(240, 240), toon(th.ground2)); outer.rotation.x = -Math.PI / 2; outer.position.y = -0.02; env.add(outer);
    // netting + poles
    const net = canvasTex(256, 64, (x, w, h) => { x.strokeStyle = 'rgba(255,255,255,.55)'; x.lineWidth = 2; for (let i = 0; i <= w; i += 16) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, h); x.stroke(); } for (let j = 0; j <= h; j += 16) { x.beginPath(); x.moveTo(0, j); x.lineTo(w, j); x.stroke(); } });
    net.wrapS = net.wrapT = RepeatWrapping;
    const netMat = new MeshBasicMaterial({ map: net, transparent: true, opacity: 0.55, side: DoubleSide, depthWrite: false });
    const side = (x) => { const m = netMat.clone(); m.map = net.clone(); m.map.repeat.set(10, 1); m.map.needsUpdate = true; const n = new Mesh(new PlaneGeometry(30, 3.4), m); n.rotation.y = Math.PI / 2; n.position.set(x, 1.7, 0); env.add(n); };
    side(-11.5); side(11.5);
    [-D.BACKSTOP - 0.3, D.BACKSTOP + 0.3].forEach(z => { const m = netMat.clone(); m.map = net.clone(); m.map.repeat.set(8, 1); m.map.needsUpdate = true; const n = new Mesh(new PlaneGeometry(23, 3.6), m); n.position.set(0, 1.8, z); env.add(n); });
    const poleM = toon('#ffffff');
    for (const x of [-11.5, 11.5]) for (let z = -15; z <= 15; z += 5) { const p = outlined(new Mesh(new CylinderGeometry(0.07, 0.07, 3.6, 8), poleM), 1.3); p.position.set(x, 1.8, z); env.add(p); }
    // props
    this._props(th, rng, env);
    this.needsEnvDecal = true;
  }

  _props(th, rng, env) {
    const place = () => { for (let k = 0; k < 40; k++) { const x = rng.range(-60, 60), z = rng.range(-60, 40); if (Math.abs(x) > 14 || Math.abs(z) > 17) return { x, z }; } return { x: 20, z: -30 }; };
    const hill = (i) => { const h = outlined(new Mesh(new SphereGeometry(1, 12, 8), toon(i % 2 ? th.ground2 : th.ground)), 1.02); const s = rng.range(10, 24); h.scale.set(s * 1.6, s * 0.45, s); h.position.set(rng.range(-70, 70), -s * 0.12, -rng.range(45, 80)); env.add(h); };
    for (let i = 0; i < 8; i++) hill(i);
    const n = this.low ? 22 : 40;
    for (let i = 0; i < n; i++) {
      const { x, z } = place(), g = new Group(), s = rng.range(0.8, 1.6); g.position.set(x, 0, z);
      switch (th.props) {
        case 'palms': { if (rng.chance(0.65)) { const tr = outlined(new Mesh(new CylinderGeometry(0.18, 0.28, 5 * s, 7), toon('#8a5a3c')), 1.12); tr.position.y = 2.5 * s; tr.rotation.z = rng.range(-0.18, 0.18); g.add(tr); for (let l = 0; l < 6; l++) { const lf = outlined(new Mesh(new ConeGeometry(0.5, 3.2, 4), toon('#2fbf71')), 1.08); lf.scale.set(1, 1, 0.25); lf.position.set(Math.cos(l * 1.05) * 1.3, 5 * s - 0.2, Math.sin(l * 1.05) * 1.3); lf.rotation.set(0, -l * 1.05, 1.2); lf.rotation.order = 'YXZ'; g.add(lf); } } else { const c = outlined(new Mesh(new CapsuleGeometry(0.35, 1.6 * s, 4, 8), toon('#3fae6a')), 1.1); c.position.y = 1.1 * s; g.add(c); const a = outlined(new Mesh(new CapsuleGeometry(0.18, 0.7, 4, 6), toon('#3fae6a')), 1.12); a.position.set(0.55, 1.2 * s, 0); a.rotation.z = -0.5; g.add(a); } break; }
        case 'candy': { const cols = ['#ff6fb5', '#38d9ff', '#ffe14d', '#9b6bff']; if (rng.chance(0.5)) { const st = outlined(new Mesh(new CylinderGeometry(0.1, 0.1, 3 * s, 6), toon('#ffffff')), 1.2); st.position.y = 1.5 * s; g.add(st); const b = outlined(new Mesh(new SphereGeometry(0.9 * s, 12, 10), toon(rng.pick(cols))), 1.06); b.position.y = 3.2 * s; g.add(b); } else { const um = outlined(new Mesh(new ConeGeometry(1.6 * s, 0.8, 8), toon(rng.pick(cols))), 1.06); um.position.y = 2.6 * s; g.add(um); const po = outlined(new Mesh(new CylinderGeometry(0.06, 0.06, 2.6 * s, 6), toon('#ffffff')), 1.2); po.position.y = 1.3 * s; g.add(po); } break; }
        case 'pines': { for (let k = 0; k < 3; k++) { const c = outlined(new Mesh(new ConeGeometry(1.6 * s - k * 0.38, 1.7 * s, 8), toon(k === 2 ? '#f4fbff' : '#2f8f6a')), 1.05); c.position.y = (1.0 + k * 1.0) * s; g.add(c); } const tr = new Mesh(new CylinderGeometry(0.2, 0.25, 0.7, 6), toon('#6b4a35')); tr.position.y = 0.3; g.add(tr); break; }
        case 'crystals': { const cols = ['#00f5d4', '#ff2fb8', '#7b61ff']; for (let k = 0; k < 3; k++) { const col = rng.pick(cols), c = new Mesh(new OctahedronGeometry(0.6 * s, 0), new MeshBasicMaterial({ color: new Color(col) })); c.scale.y = 2.4; c.position.set(rng.range(-0.8, 0.8), 1.2 * s, rng.range(-0.8, 0.8)); c.rotation.y = rng.next() * 3; g.add(c); const o = new Mesh(c.geometry, new MeshBasicMaterial({ color: 0x0a0420, side: BackSide })); o.scale.setScalar(1.12); c.add(o); } break; }
        default: { for (let l = 0; l < 5; l++) { const lf = outlined(new Mesh(new ConeGeometry(0.4, 2.6 * s, 4), toon(l % 2 ? '#2f9e44' : '#3fbf5a')), 1.08); lf.scale.z = 0.3; lf.position.y = 1.2; lf.rotation.set(0.8, l * 1.25, 0); lf.rotation.order = 'YXZ'; g.add(lf); } if (rng.chance(0.5)) { const r = outlined(new Mesh(new DodecahedronGeometry(1.1 * s, 0), toon('#8aa39a')), 1.04); r.position.set(1.8, 0.5, 0); g.add(r); } }
      }
      env.add(g);
    }
  }

  // ------------------------------------------------------------ duel objects
  startDuel(state, look) {
    const old = this.dyn.children.slice(); old.forEach(c => { c.removeFromParent(); dispose(c); });
    this.decals.clear(); this.drops.clear(); this.dust.clear(); this.spark.clear(); this.balls = []; this.state = state; this.pal = look.pal; this.fighters = []; this.bunkerMeshes = []; this.barrelMeshes = [];
    const th = this.theme, rng = new Rng(`bk:${state.cfg.seed}`);
    const stripes = canvasTex(128, 128, (x, w, h) => { x.fillStyle = '#ffffff'; x.fillRect(0, 0, w, h); x.fillStyle = 'rgba(0,0,0,.10)'; for (let i = -h; i < w; i += 32) { x.beginPath(); x.moveTo(i, h); x.lineTo(i + 16, h); x.lineTo(i + 16 + h, 0); x.lineTo(i + h, 0); x.fill(); } });
    for (const b of state.bunkers) {
      const col = th.bunkers[(b.post + b.side) % th.bunkers.length], g = new Group();
      const m = outlined(new Mesh(new RoundedBoxGeometry(b.w, 1, b.d, 4, 0.22), toon(col, { map: stripes })), 1.025); g.add(m);
      const valve = new Mesh(new CylinderGeometry(0.07, 0.07, 0.12, 8), toon('#ffffff')); valve.position.set(b.w / 2 - 0.4, 0.5, b.d / 2 + 0.02); valve.rotation.x = Math.PI / 2; m.add(valve);
      g.position.set(b.x, 0, b.z); this.dyn.add(g); this.bunkerMeshes.push({ b, g, m, base: 0 });
    }
    for (const br of state.barrels) {
      const g = new Group(), body = outlined(new Mesh(new CylinderGeometry(D.BARREL_R, D.BARREL_R, D.BARREL_H, 14), toon('#ff5d8f')), 1.06); body.position.y = D.BARREL_H / 2; g.add(body);
      for (const y of [0.2, 0.7]) { const band = new Mesh(new CylinderGeometry(D.BARREL_R + 0.01, D.BARREL_R + 0.01, 0.08, 14), toon('#ffe14d')); band.position.y = y; g.add(band); }
      const lid = new Mesh(new CylinderGeometry(D.BARREL_R * 0.9, D.BARREL_R * 0.9, 0.02, 14), toon('#2b2f4a')); lid.position.y = D.BARREL_H + 0.01; g.add(lid);
      const sign = new Mesh(new PlaneGeometry(0.3, 0.3), new MeshBasicMaterial({ map: canvasTex(64, 64, (x) => { x.fillStyle = '#ffe14d'; x.fillRect(0, 0, 64, 64); x.fillStyle = '#1a1030'; x.font = '900 46px sans-serif'; x.textAlign = 'center'; x.fillText('!', 32, 50); }) })); sign.position.set(0, 0.45, D.BARREL_R + 0.012); g.add(sign);
      g.position.set(br.x, 0, br.z); g.rotation.y = br.side === 0 ? Math.PI : 0; this.dyn.add(g); this.barrelMeshes.push({ br, g });
    }
    for (const f of state.f) {
      const o = f.side === 0 ? look.you : look.foe, c = buildFighter({ color: o.color, hat: o.hat, skin: f.side === 0 ? 1 : 2, paint: f.side === 0 ? this.pal.you : this.pal.foe });
      c.group.position.set(f.x, 0, f.z); c.group.rotation.y = f.side === 0 ? Math.PI : 0; this.dyn.add(c.group); this.fighters.push({ c, f, blobs: [], deadScale: 0 });
    }
    // lasers
    this.laser = new Mesh(new BoxGeometry(0.02, 0.02, 1), new MeshBasicMaterial({ color: 0xff2a2a, transparent: true, opacity: 0.8, blending: AdditiveBlending, depthWrite: false })); this.laser.visible = false; this.dyn.add(this.laser);
    this.laserDot = new Sprite(new SpriteMaterial({ map: canvasTex(32, 32, (x) => { const g = x.createRadialGradient(16, 16, 1, 16, 16, 15); g.addColorStop(0, 'rgba(255,60,60,1)'); g.addColorStop(1, 'rgba(255,60,60,0)'); x.fillStyle = g; x.fillRect(0, 0, 32, 32); }), transparent: true, blending: AdditiveBlending, depthWrite: false })); this.laserDot.visible = false; this.dyn.add(this.laserDot);
    this.recoil = [0, 0]; this.cam.mode = 'duel'; this.cam.kill = null; this.shake = 0; this.ab = 0;
  }

  // ------------------------------------------------------------ events -> juice
  consume(events) {
    const q = this.low ? 0.5 : 1, st = this.state; if (!st) return;
    const col = side => (side === 0 ? this.pal.you : this.pal.foe), burst = (x, y, z, c, n, sp) => { for (let i = 0; i < n * q; i++) { const a = Math.random() * TAU, e = (Math.random() - 0.3) * 1.2, v = sp * (0.4 + Math.random()); this.drops.add(x, y, z, Math.cos(a) * v, 2 + Math.random() * sp * 0.6, Math.sin(a) * v + e, c, 0.1 + Math.random() * 0.12, 0.9 + Math.random() * 0.6, 12); } };
    for (const ev of events) switch (ev.type) {
      case 'shot': this.recoil[ev.side] = 1; for (let i = 0; i < 4 * q; i++) this.dust.add(ev.x, ev.y, ev.z, (Math.random() - 0.5) * 1.2, Math.random() * 0.8, (Math.random() - 0.5) * 1.2 + (ev.side === 0 ? -1.5 : 1.5), '#ffffff', 0.18, 0.4, 0); this.spark.add(ev.x, ev.y, ev.z + (ev.side === 0 ? -0.3 : 0.3), 0, 0, 0, col(ev.side), 0.5, 0.08, 0); if (ev.side === 0) this.shake = Math.min(1, this.shake + 0.18); break;
      case 'splat': {
        const c = col(ev.side);
        if (ev.surf === 'bunker') { const bm = this.bunkerMeshes.filter(o => Math.abs(o.b.x - ev.x) < 2.2 && Math.abs(o.b.z - ev.z) < 1.4).sort((a, b) => Math.abs(a.b.x - ev.x) - Math.abs(b.b.x - ev.x))[0]; if (bm) this.decals.add(bm.m, ev.x, ev.y, ev.z, ev.nx, ev.ny, ev.nz, c, 0.8 * ev.size); burst(ev.x, ev.y, ev.z, c, 8, 3.5); }
        else if (ev.surf === 'body') { const fo = this.fighters.find(o => Math.abs(o.f.x - ev.x) < 1.2 && Math.abs(o.f.z - ev.z) < 1.2); if (fo) { const m = new Mesh(new SphereGeometry(0.11, 8, 6), new MeshBasicMaterial({ color: new Color(c) })); m.scale.z = 0.35; fo.c.rig.add(m); m.position.copy(fo.c.rig.worldToLocal(new Vector3(ev.x, ev.y, ev.z))); fo.blobs.push(m); } burst(ev.x, ev.y, ev.z, c, 14, 4.5); }
        else { this.decals.add(this.scene, ev.x, ev.y, ev.z, ev.nx, ev.ny, ev.nz, c, 0.9 * ev.size); if (ev.surf === 'ground') burst(ev.x, ev.y + 0.05, ev.z, c, 5, 2.5); }
        break;
      }
      case 'bunkerhit': { const bm = this.bunkerMeshes.find(o => o.b.side === ev.side && o.b.post === ev.post); if (bm) { bm.pop = 1; } if (ev.hp === 0) this.shake = Math.min(1, this.shake + 0.35); break; }
      case 'elim': { this.ab = 1; this.flash = 0.5; this.shake = 1; const fo = this.fighters[ev.victim]; burst(fo.f.x, 1.0, fo.f.z, col(1 - ev.victim), 30, 6); this.cam.pendingKill = ev; break; }
      case 'disarm': this.ab = Math.max(this.ab, 0.6); this.shake = Math.min(1, this.shake + 0.4); for (let i = 0; i < 10 * q; i++) this.spark.add(ev.x, ev.y, ev.z, (Math.random() - 0.5) * 4, Math.random() * 3, (Math.random() - 0.5) * 4, '#ffe14d', 0.25, 0.5, 6); break;
      case 'barrel': { this.ab = 1; this.flash = 0.7; this.shake = 1; const bm = this.barrelMeshes.find(o => o.br.x === ev.x && o.br.z === ev.z); if (bm) bm.g.visible = false; const c = col(ev.by); burst(ev.x, 0.6, ev.z, c, 60, 8); for (let i = 0; i < 14 * q; i++) this.dust.add(ev.x, 0.4, ev.z, (Math.random() - 0.5) * 6, 1 + Math.random() * 3, (Math.random() - 0.5) * 6, '#ffffff', 0.8, 0.9, 0); break; }
      case 'shieldpop': for (let i = 0; i < 14 * q; i++) this.spark.add(ev.x, ev.y, ev.z, (Math.random() - 0.5) * 6, Math.random() * 4, (Math.random() - 0.5) * 6, '#6df0ff', 0.3, 0.6, 3); this.shake = Math.min(1, this.shake + 0.3); break;
      case 'swap': { const fo = this.fighters[ev.side]; for (let i = 0; i < 6 * q; i++) this.dust.add(fo.f.x, 0.1, fo.f.z, (Math.random() - 0.5) * 2, 0.5, (Math.random() - 0.5) * 2, '#ffffff', 0.4, 0.5, 0); break; }
      default: break;
    }
  }
  confetti(n = 60) { if (this.low && n > 40) n = 40; const cols = [this.pal.you, this.pal.foe, '#ffd23f', '#ffffff', '#5dffb0']; for (let i = 0; i < n; i++) this.spark.add((Math.random() - 0.5) * 12, 6 + Math.random() * 3, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 3, -1 - Math.random() * 2, (Math.random() - 0.5) * 3, cols[i % 5], 0.35, 2.6, 2); }

  // ------------------------------------------------------------ per-frame
  update(dt, st, view = {}) {
    this.time += dt; const t = this.time;
    this.shake = Math.max(0, this.shake - dt * 2.2); this.ab = Math.max(0, this.ab - dt * 1.6); this.flash = Math.max(0, this.flash - dt * 3);
    this.recoil[0] = Math.max(0, this.recoil[0] - dt * 7); this.recoil[1] = Math.max(0, this.recoil[1] - dt * 7);
    if (st) this._sync(dt, st, view);
    this._camera(dt, st, view);
    this.drops.update(dt); this.dust.update(dt); this.spark.update(dt);
    const u = this.post.mat.uniforms; u.ab.value = this.ab; u.flash.value = this.flash * 0.4;
    const e = st ? st.f[0].e : 0, th = this.theme; u.vig.value = 0.22 + (view.scope ? e * 0.5 : 0); u.sat.value = 1.1 + this.ab * 0.2;
    if (th) u.tint.value.set(th.tint[0], th.tint[1], th.tint[2]);
  }

  _sync(dt, st, view) {
    for (const o of this.fighters) {
      const f = o.f, c = o.c, g = c.group, age = f.alive ? 0 : st.t - f.deadAt;
      g.position.x += (f.x - g.position.x) * Math.min(1, dt * 30); g.position.z = f.z;
      const extra = { yaw: f.side === 0 ? -f.aimYaw : 0, pitch: f.aimPitch, recoil: this.recoil[f.side] };
      if (f.side === 1 && f.laser) extra.yaw = Math.atan2(f.laser.x - f.x, f.laser.z - f.z) * -0.0 + 0;
      poseFighter(c, f, this.time, extra);
      g.visible = !(f.side === 0 && f.alive && f.e > 0.5 && this.cam.mode === 'duel');
      if (!f.alive) { const k = Math.min(1, age * 2.2), ease = 1 - (1 - k) * (1 - k); g.rotation.x = ease * 1.45; g.position.y = Math.sin(Math.min(1, age * 3) * Math.PI) * 0.25; c.shield.visible = false; }
      else { g.rotation.x = 0; g.position.y = 0; }
    }
    for (const o of this.bunkerMeshes) {
      const h = bunkerH(o.b), s = 1 + (1 - o.b.hp / o.b.max) * 0.12; o.pop = Math.max(0, (o.pop || 0) - dt * 4); const breathe = Math.sin(this.time * 1.6 + o.b.x) * 0.012, sq = Math.sin(o.pop * Math.PI) * 0.06;
      o.m.scale.set(s * (1 + sq), h * (1 - sq * 1.4 + breathe), s * (1 + sq)); o.m.position.y = (h * (1 - sq * 1.4 + breathe)) / 2;
    }
    // balls
    const want = st.balls.length; while (this.balls.length < want) { const m = new Mesh(new SphereGeometry(1, 8, 6), new MeshBasicMaterial({ color: 0xffffff })); m.userData.shared = false; this.dyn.add(m); this.balls.push(m); }
    this.balls.forEach((m, i) => {
      const b = st.balls[i]; m.visible = !!b; if (!b) return;
      m.position.set(b.x, b.y, b.z); m.material.color.set(b.side === 0 ? this.pal.you : this.pal.foe); m.scale.set(0.11, 0.11, 0.55);
      m.lookAt(b.x + b.vx, b.y + b.vy, b.z + b.vz);
      if (!this.low && Math.random() < 0.7) this.spark.add(b.x, b.y, b.z, 0, 0, 0, b.side === 0 ? this.pal.you : this.pal.foe, 0.2, 0.18, 0);
    });
    // enemy laser (the telegraph)
    const e = st.f[1], show = !!e.laser && e.alive && !st.over && e.e > 0.2;
    this.laser.visible = this.laserDot.visible = show;
    if (show) {
      const M = markerPos(e), L = e.laser, dx = L.x - M.x, dy = L.y - M.y, dz = L.z - M.z, len = Math.hypot(dx, dy, dz);
      this.laser.position.set(M.x + dx / 2, M.y + dy / 2, M.z + dz / 2); this.laser.scale.set(1, 1, len); this.laser.lookAt(L.x, L.y, L.z); this.laserDot.position.set(L.x, L.y, L.z); this.laserDot.scale.setScalar(0.7 + Math.sin(this.time * 30) * 0.15);
    }
  }

  _camera(dt, st, view) {
    const cam = this.camera, c = this.cam; let tp, tl, fov;
    if (c.mode === 'duel' && st) {
      const p = st.f[0], pc = playerCamera(p), k = 1 - Math.exp(-dt * (p.e > 0.3 ? 20 : 9));
      tp = new Vector3(pc.pos.x, pc.pos.y, pc.pos.z); tl = new Vector3(pc.pos.x + pc.dir.x * 12, pc.pos.y + pc.dir.y * 12, pc.pos.z + pc.dir.z * 12); fov = pc.fov;
      if (this.portrait) fov = fov * 1.18;                                    // portrait phones need a taller FOV to keep the enemy post in frame
      this.camPos.lerp(tp, k); this.camLook.lerp(tl, k); this.fovNow += (fov - this.fovNow) * k;
      if (c.pendingKill && view.killcam !== false) { c.mode = 'kill'; c.t = 0; c.kill = c.pendingKill; c.pendingKill = null; c.orbit = Math.random() < 0.5 ? 1 : -1; }
    } else if (c.mode === 'kill' && st) {
      c.t += dt; const v = st.f[c.kill.victim], a = 0.5 + c.t * 0.35 * c.orbit, vp = new Vector3(v.x, 1.0, v.z), side = v.side === 0 ? -1 : 1;                       // camera on the shooter's side so the victim falls toward us
      tp = new Vector3(v.x + Math.sin(a) * 3.4, 1.5 + Math.sin(c.t) * 0.1, v.z + side * Math.cos(a) * 4.6); tl = vp; fov = 40;
      this.camPos.lerp(tp, 1 - Math.exp(-dt * 6)); this.camLook.lerp(tl, 1 - Math.exp(-dt * 8)); this.fovNow += (fov - this.fovNow) * 0.2;
    } else {                                                                  // showcase / result orbit
      c.t += dt; const a = Math.sin(c.t * 0.18) * 0.5 + 0.35, r = this.portrait ? 22 : 18;   // slow sweep (not a full orbit) so both posts stay readable
      tp = new Vector3(Math.sin(a) * r * 0.6, (this.portrait ? 6.2 : 4.6) + Math.sin(c.t * 0.3) * 0.3, Math.cos(a) * r); tl = new Vector3(0, this.portrait ? -2.6 : 0.6, 0); fov = this.portrait ? 58 : 46;
      this.camPos.lerp(tp, 1 - Math.exp(-dt * 3)); this.camLook.lerp(tl, 1 - Math.exp(-dt * 3)); this.fovNow += (fov - this.fovNow) * 0.1;
    }
    const sh = this.shake * this.shake * 0.12;
    cam.position.set(this.camPos.x + (Math.random() - 0.5) * sh, this.camPos.y + (Math.random() - 0.5) * sh, this.camPos.z); cam.fov = this.fovNow; cam.updateProjectionMatrix(); cam.lookAt(this.camLook);
  }
  render() { this.post.render(this.scene, this.camera); }
}
