// Soft aim assist (pure, testable). Pulls the aim angle toward the nearest visible enemy inside a cone.
// strength 0 = off. Never fires for the player and never uses information the player couldn't see (line of sight only).
import { losClear, angDiff } from './geom.js';

export function assistAim(w, you, angle, strength, wide = false) {
  if (!w || strength <= 0) return angle;
  const cone = (wide ? 0.55 : 0.26) * (0.6 + strength * 0.6);
  let best = null, bd = 1e9;
  for (const e of w.ents) {
    if (!e.alive || e.team === you.team) continue;
    const d = Math.hypot(e.x - you.x, e.y - you.y); if (d > 620) continue;
    const want = Math.atan2(e.y - you.y, e.x - you.x), df = angDiff(angle, want);
    if (Math.abs(df) > cone) continue;
    if (!losClear(w.arena.bunkers, you.x, you.y, e.x, e.y)) continue;
    const score = Math.abs(df) * 300 + d; if (score < bd) { bd = score; best = { df, e, d }; }
  }
  if (!best) return angle;
  // lead the target a bit like a human would, then blend by strength
  const t = best.d / 520, lx = best.e.x + best.e.vx * t * 0.8, ly = best.e.y + best.e.vy * t * 0.8;
  const target = Math.atan2(ly - you.y, lx - you.x);
  return angle + angDiff(angle, target) * Math.min(1, strength);
}
