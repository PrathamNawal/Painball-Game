# Launch checklist
- [x] No ads, no analytics, no network calls (CSP `connect-src 'self'`; e2e asserts same-origin only)
- [x] Offline PWA, relative URLs, SW version = content hash
- [x] Deployed from `main` (branch Pages) — `npm run publish:pages`, CI guards against a stale publish
- [x] axe clean on all screens, 320 px audit, reduced motion
- [ ] 🔗 Owner playtest on a real iPhone and Android phone (30 min): thumbs, dash gesture, difficulty of levels 1–10
- [ ] 🔗 Pick final Pages source folder confirmation (site is published to both `/` and `/docs`)
- [ ] 🔗 Custom domain / social preview image (optional)
- [ ] 🔗 Re-tune `enemySkill()` from real win rates (GAME_DESIGN § Calibration)
