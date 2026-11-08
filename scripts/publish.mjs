// Publish the production build for GitHub Pages "Deploy from a branch" (main).
// Pages serves the repo root (or /docs, depending on the owner's setting), so we commit the built site to BOTH.
// Usage: npm run publish:pages           (build + copy)
//        node scripts/publish.mjs --check (CI: fail if the committed site is stale vs. a fresh build)
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..'), dist = path.join(root, 'dist');
const targets = [root, path.join(root, 'docs')];
const check = process.argv.includes('--check');
execSync('node scripts/build.mjs', { cwd: root, stdio: 'inherit' });

const entries = ['index.html', 'sw.js', 'manifest.webmanifest', 'icons', 'assets'];
if (check) {
  const live = fs.readFileSync(path.join(root, 'sw.js'), 'utf8'), fresh = fs.readFileSync(path.join(dist, 'sw.js'), 'utf8');
  if (live !== fresh) { console.error('STALE: committed site differs from a fresh build. Run `npm run publish:pages` and commit.'); process.exit(1); }
  for (const t of targets) for (const e of ['index.html', 'sw.js']) if (!fs.existsSync(path.join(t, e))) { console.error(`MISSING ${path.relative(root, path.join(t, e))}`); process.exit(1); }
  console.log('published site is up to date'); process.exit(0);
}
for (const t of targets) {
  for (const e of entries) fs.rmSync(path.join(t, e), { recursive: true, force: true });
  for (const e of entries) fs.cpSync(path.join(dist, e), path.join(t, e), { recursive: true });
  fs.writeFileSync(path.join(t, '.nojekyll'), '');
  console.log('published ->', path.relative(root, t) || '.');
}
