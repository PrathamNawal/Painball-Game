// Tiny static dev server: node locked-study/serve.mjs [port]
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const root = path.dirname(fileURLToPath(import.meta.url)), port = Number(process.argv[2]) || 8099;
const types = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.txt': 'text/plain' };
http.createServer((req, res) => {
  const u = decodeURIComponent(new URL(req.url, 'http://x').pathname), p = path.normalize(path.join(root, u === '/' ? 'index.html' : u));
  if (!p.startsWith(root) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); res.end('not found'); return; }
  res.writeHead(200, { 'content-type': types[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
}).listen(port, () => console.log(`The Locked Study on http://localhost:${port}`));
