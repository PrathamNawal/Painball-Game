# Launch checklist
- [x] No ads, no analytics, no network calls (CSP `connect-src 'self'`; e2e asserts same-origin only)
- [x] Offline PWA, relative URLs, SW version = content hash
- [x] Built site committed to `main` (root and `/docs`) — `npm run publish:pages`; CI guards against a stale publish (green on main)
- [ ] 🔗 **Confirm Pages is live**: `main` did not exist when Pages was first enabled, so re-save Settings → Pages → Source: *Deploy from a branch* → `main` → `/ (root)`. No `pages build and deployment` run had appeared in Actions a few minutes after the push; the sandbox cannot read Pages settings or load `*.github.io`. Live URL: https://prathamnawal.github.io/Painball-Game/
- [x] axe clean on all screens, 320 px audit, reduced motion
- [ ] 🔗 Owner playtest on a real iPhone and Android phone (30 min): Duel hold/drag feel + sensitivity, aim-assist level, swap buttons, frame rate on the 3D mode (Settings → Graphics → Low if needed), difficulty of stages 1–10
- [ ] 🔗 Custom domain / social preview image (optional)
- [ ] 🔗 Re-tune `enemySkill()` from real win rates (GAME_DESIGN § Calibration)
