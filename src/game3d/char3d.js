// Toon-shaded low-poly paintball fighter built from primitives, with inverted-hull outlines.
import { Group, Mesh, SphereGeometry, CapsuleGeometry, BoxGeometry, CylinderGeometry, MeshToonMaterial, MeshBasicMaterial, BackSide, DataTexture, RGBAFormat, NearestFilter, Color, ConeGeometry } from 'three';
import { eHeight, D } from '../core/duel.js';

let gradient = null;
export function toonGradient() {
  if (!gradient) { gradient = new DataTexture(new Uint8Array([70, 70, 90, 255, 150, 150, 170, 255, 255, 255, 255, 255]), 3, 1, RGBAFormat); gradient.minFilter = gradient.magFilter = NearestFilter; gradient.userData.shared = true; gradient.needsUpdate = true; }
  return gradient;
}
export const toon = (color, extra = {}) => new MeshToonMaterial({ color: new Color(color), gradientMap: toonGradient(), ...extra });
const outlineMat = new MeshBasicMaterial({ color: 0x120c24, side: BackSide }); outlineMat.userData.shared = true;
/** Adds an inverted-hull outline as a child (geometry must be centred). */
export function outlined(mesh, k = 1.08) { const o = new Mesh(mesh.geometry, outlineMat); o.scale.setScalar(k); o.userData.outline = true; mesh.add(o); return mesh; }
const mesh = (geo, mat, k = 1.08) => outlined(new Mesh(geo, mat), k);

const SKIN = ['#f1c9a5', '#d9a078', '#a56a46', '#7a4a2e', '#ffdcbc'];
export function buildFighter({ color = '#3a7bff', hat = 'cap', skin = 0, paint = '#2f8bff' } = {}) {
  const g = new Group(), rig = new Group(); g.add(rig);
  const cloth = toon(color), dark = toon('#2b2f4a'), skinM = toon(SKIN[skin % SKIN.length]);
  const torso = mesh(new CapsuleGeometry(0.27, 0.3, 4, 10), cloth, 1.07); rig.add(torso);
  const hips = mesh(new CapsuleGeometry(0.22, 0.22, 4, 8), dark, 1.07); rig.add(hips);
  const head = new Group(); rig.add(head);
  const skull = mesh(new SphereGeometry(0.2, 14, 12), skinM, 1.08); head.add(skull);
  const visor = mesh(new BoxGeometry(0.34, 0.15, 0.12), toon('#10162a', { transparent: true, opacity: 0.92 }), 1.04); visor.position.set(0, 0.02, 0.15); head.add(visor);
  const lens = new Mesh(new BoxGeometry(0.3, 0.08, 0.02), new MeshBasicMaterial({ color: new Color(paint) })); lens.position.set(0, 0.03, 0.215); head.add(lens);
  const addHat = () => {
    if (hat === 'helmet') { const h = mesh(new SphereGeometry(0.235, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.55), toon(color), 1.06); h.position.y = 0.02; head.add(h); }
    else if (hat === 'band') { const b = mesh(new CylinderGeometry(0.215, 0.215, 0.07, 14), toon('#ff3d71'), 1.06); b.position.y = 0.1; head.add(b); const t = mesh(new BoxGeometry(0.06, 0.05, 0.3), toon('#ff3d71')); t.position.set(0.1, 0.1, -0.2); head.add(t); }
    else if (hat === 'crown') { for (let i = 0; i < 5; i++) { const c = mesh(new ConeGeometry(0.05, 0.14, 5), toon('#ffd23f'), 1.1); const a = (i / 5) * Math.PI * 2; c.position.set(Math.cos(a) * 0.15, 0.27, Math.sin(a) * 0.15); head.add(c); } const r = mesh(new CylinderGeometry(0.17, 0.17, 0.06, 14), toon('#ffd23f'), 1.06); r.position.y = 0.2; head.add(r); }
    else { const c = mesh(new SphereGeometry(0.22, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.5), toon(color), 1.06); c.position.y = 0.04; head.add(c); const br = mesh(new BoxGeometry(0.3, 0.03, 0.22), toon(color), 1.1); br.position.set(0, 0.07, 0.24); head.add(br); }
  };
  addHat();
  // marker (gun) arm
  const arm = new Group(); rig.add(arm);
  const upper = mesh(new CapsuleGeometry(0.075, 0.28, 3, 8), cloth, 1.1); upper.rotation.z = Math.PI / 2; upper.position.set(0.19, 0, 0.1); arm.add(upper);
  const hand = mesh(new SphereGeometry(0.1, 10, 8), toon('#ffe3c4'), 1.1); hand.position.set(D.HAND_DX, 0, 0.2); arm.add(hand);
  const gun = new Group(); gun.position.set(D.HAND_DX, 0.02, 0.25); arm.add(gun);
  const body = mesh(new BoxGeometry(0.12, 0.16, 0.38), toon('#3b3f5c'), 1.07); gun.add(body);
  const barrel = mesh(new CylinderGeometry(0.03, 0.03, 0.42, 8), toon('#c9ccd8'), 1.12); barrel.rotation.x = Math.PI / 2; barrel.position.z = 0.36; gun.add(barrel);
  const hopper = mesh(new SphereGeometry(0.1, 10, 8), toon(paint, { emissive: new Color(paint), emissiveIntensity: 0.25 }), 1.08); hopper.position.set(0, 0.17, -0.02); gun.add(hopper);
  const off = mesh(new CapsuleGeometry(0.07, 0.26, 3, 8), cloth, 1.1); off.rotation.z = -Math.PI / 2; off.position.set(-0.2, -0.04, 0.12); arm.add(off);
  const shield = new Mesh(new SphereGeometry(0.75, 18, 14), new MeshBasicMaterial({ color: 0x6df0ff, transparent: true, opacity: 0.22, depthWrite: false })); shield.visible = false; g.add(shield);
  const blob = new Mesh(new CylinderGeometry(0.5, 0.5, 0.01, 18), new MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28, depthWrite: false })); blob.position.y = 0.01; g.add(blob);
  return { group: g, rig, head, arm, gun, torso, hips, shield, hand, parts: { skull, visor, lens } };
}

/** Pose from simulation state (exposure e, aim, recoil, disarm, death). Character faces -z (player) / +z (enemy) via group rotation. */
export function poseFighter(c, f, t, extra) {
  const h = eHeight(f.e), sway = Math.sin(t * 2 + f.side) * 0.012;
  c.head.position.set(0, h.head, 0); c.torso.position.set(0, h.torso + 0.02, 0); c.hips.position.set(0, h.torso - 0.38 + (1 - f.e) * 0.04, 0);
  c.arm.position.set(0, h.hand - 0.02, 0);
  c.head.rotation.y = (extra.yaw || 0) * 0.5; c.head.rotation.x = -(extra.pitch || 0) * 0.5;
  c.arm.rotation.y = (extra.yaw || 0) * 0.7; c.arm.rotation.x = -(extra.pitch || 0) * 0.6 - extra.recoil * 0.35;
  c.gun.position.z = 0.25 - extra.recoil * 0.12;
  c.rig.position.y = sway; c.rig.rotation.x = (1 - f.e) * 0.18;                    // lean forward while crouched
  c.shield.visible = !!f.shield && f.alive; c.shield.position.set(0, h.torso + 0.2, 0); c.shield.scale.setScalar(1 + Math.sin(t * 6) * 0.03);
  c.gun.visible = f.disarmT <= 0 || !f.alive;
}
