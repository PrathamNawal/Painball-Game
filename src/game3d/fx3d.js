// Paint textures, decals and particles for the 3D duel scene.
import { CanvasTexture, PlaneGeometry, MeshBasicMaterial, Mesh, Points, BufferGeometry, Float32BufferAttribute, ShaderMaterial, AdditiveBlending, Vector3, Quaternion, DynamicDrawUsage } from 'three';
import { Rng } from '../core/rng.js';

const TAU = Math.PI * 2;
const texCache = new Map();
/** A few splat texture variants per colour (blob + droplets). */
export function splatTextures(color) {
  if (texCache.has(color)) return texCache.get(color);
  const out = [];
  for (let v = 0; v < 5; v++) {
    const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d'), rng = new Rng(`splat:${color}:${v}`), n = 10 + rng.int(4), cx = 64, cy = 64, base = 22;
    const pts = []; for (let i = 0; i < n; i++) { const a = (i / n) * TAU, r = base * (0.7 + rng.next() * 0.8) * (i % 2 ? 0.8 : 1.15); pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]); }
    x.fillStyle = color; x.beginPath();
    for (let i = 0; i < n; i++) { const p = pts[i], q = pts[(i + 1) % n], mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2; if (i === 0) x.moveTo(mx, my); else x.quadraticCurveTo(p[0], p[1], mx, my); }
    { const p = pts[0], q = pts[1]; x.quadraticCurveTo(p[0], p[1], (p[0] + q[0]) / 2, (p[1] + q[1]) / 2); } x.fill();
    x.fillStyle = 'rgba(0,0,0,.18)'; x.beginPath(); x.arc(cx + 3, cy + 4, base * 0.5, 0, TAU); x.fill();
    x.fillStyle = 'rgba(255,255,255,.35)'; x.beginPath(); x.ellipse(cx - 7, cy - 9, 7, 4, -0.6, 0, TAU); x.fill();
    x.fillStyle = color; const drops = 7 + rng.int(6);
    for (let i = 0; i < drops; i++) { const a = rng.next() * TAU, d = base * (1.2 + rng.next() * 1.9), r = 1.5 + rng.next() * 3.4; x.beginPath(); x.arc(cx + Math.cos(a) * d, cy + Math.sin(a) * d, r, 0, TAU); x.fill(); }
    const t = new CanvasTexture(c); t.anisotropy = 2; out.push(t);
  }
  texCache.set(color, out); return out;
}

const planeGeo = new PlaneGeometry(1, 1);
const matCache = new Map();
const decalMat = (color, v) => { const k = color + v; if (!matCache.has(k)) matCache.set(k, new MeshBasicMaterial({ map: splatTextures(color)[v], transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 })); return matCache.get(k); };

/** Pool of paint decals: orient to a surface normal, parent to any Object3D (e.g. a bunker so it squashes with it). */
export class Decals {
  constructor(scene, max = 240) { this.scene = scene; this.max = max; this.list = []; this.rng = new Rng('decals'); }
  clear() { for (const d of this.list) d.removeFromParent(); this.list.length = 0; }
  add(parent, wx, wy, wz, nx, ny, nz, color, size = 1) {
    const m = new Mesh(planeGeo, decalMat(color, this.rng.int(5))), s = (0.9 + this.rng.next() * 0.6) * size;
    m.scale.set(s, s, 1);
    const n = new Vector3(nx, ny, nz).normalize(), q = new Quaternion().setFromUnitVectors(new Vector3(0, 0, 1), n);
    m.quaternion.copy(q); m.rotateZ(this.rng.next() * TAU);
    parent.updateWorldMatrix(true, false);
    const lp = parent.worldToLocal(new Vector3(wx + n.x * 0.015, wy + n.y * 0.015, wz + n.z * 0.015)); m.position.copy(lp);
    if (parent !== this.scene) { const ps = new Vector3(); parent.getWorldScale(ps); m.scale.set(m.scale.x / ps.x, m.scale.y / ps.y, 1); m.quaternion.premultiply(parent.getWorldQuaternion(new Quaternion()).invert()); }
    parent.add(m); this.list.push(m);
    if (this.list.length > this.max) this.list.shift().removeFromParent();
  }
}

const VERT = `attribute float size; attribute float alpha; attribute vec3 col; varying float vA; varying vec3 vC;
void main(){ vA = alpha; vC = col; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * 300.0 / -mv.z; gl_Position = projectionMatrix * mv; }`;
const FRAG = `varying float vA; varying vec3 vC; uniform float soft;
void main(){ vec2 d = gl_PointCoord - 0.5; float r = length(d); if (r > 0.5) discard; float a = vA * (soft > 0.5 ? smoothstep(0.5, 0.0, r) : 1.0); gl_FragColor = vec4(vC, a); 
#include <colorspace_fragment>

}`;
/** Small particle system on one Points object. kind: droplets (gravity), dust (soft, additive-less), sparks (additive). */
export class Particles {
  constructor(scene, max = 500, { soft = 0, additive = false } = {}) {
    this.max = max; this.p = []; this.soft = soft;
    const g = new BufferGeometry();
    this.pos = new Float32Array(max * 3); this.size = new Float32Array(max); this.alpha = new Float32Array(max); this.col = new Float32Array(max * 3);
    g.setAttribute('position', new Float32BufferAttribute(this.pos, 3).setUsage(DynamicDrawUsage)); g.setAttribute('size', new Float32BufferAttribute(this.size, 1).setUsage(DynamicDrawUsage));
    g.setAttribute('alpha', new Float32BufferAttribute(this.alpha, 1).setUsage(DynamicDrawUsage)); g.setAttribute('col', new Float32BufferAttribute(this.col, 3).setUsage(DynamicDrawUsage));
    g.setDrawRange(0, 0);
    this.mat = new ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false, uniforms: { soft: { value: soft } }, ...(additive ? { blending: AdditiveBlending } : {}) });
    this.pts = new Points(g, this.mat); this.pts.frustumCulled = false; scene.add(this.pts); this.g = g;
  }
  add(x, y, z, vx, vy, vz, hex, size, life, grav = 9) {
    if (this.p.length >= this.max) this.p.shift();
    const n = parseInt(hex.slice(1), 16); this.p.push({ x, y, z, vx, vy, vz, r: (n >> 16) / 255, g: ((n >> 8) & 255) / 255, b: (n & 255) / 255, size, life, max: life, grav });
  }
  update(dt) {
    const out = []; for (const q of this.p) { q.life -= dt; if (q.life > 0) out.push(q); }
    this.p = out;
    for (let i = 0; i < out.length; i++) {
      const q = out[i]; q.vy -= q.grav * dt; q.x += q.vx * dt; q.y += q.vy * dt; q.z += q.vz * dt; if (q.y < 0.02 && q.grav > 0) { q.y = 0.02; q.vy = 0; q.vx *= 0.8; q.vz *= 0.8; }
      this.pos[i * 3] = q.x; this.pos[i * 3 + 1] = q.y; this.pos[i * 3 + 2] = q.z; this.size[i] = q.size * (this.soft ? 1 + (1 - q.life / q.max) : 1); this.alpha[i] = Math.min(1, q.life / q.max * 1.6);
      this.col[i * 3] = q.r; this.col[i * 3 + 1] = q.g; this.col[i * 3 + 2] = q.b;
    }
    for (const a of ['position', 'size', 'alpha', 'col']) this.g.attributes[a].needsUpdate = true;
    this.g.setDrawRange(0, out.length);
  }
  clear() { this.p.length = 0; this.g.setDrawRange(0, 0); }
}
