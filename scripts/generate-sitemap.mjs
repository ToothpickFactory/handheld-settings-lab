import { readdir, stat, writeFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const publicDir = new URL('../public/', import.meta.url).pathname;
const origin = 'https://handheldsettings.com';

async function walk(dir) {
  const out = [];
  for (const name of await readdir(dir)) {
    const full = join(dir, name);
    const info = await stat(full);
    if (info.isDirectory()) out.push(...await walk(full));
    else out.push(full);
  }
  return out;
}

const files = await walk(dist);
const urls = files
  .filter(file => file.endsWith(`${sep}index.html`) || file === join(dist, 'index.html'))
  .map(file => {
    const rel = relative(dist, file).split(sep).join('/');
    return rel === 'index.html' ? `${origin}/` : `${origin}/${rel.replace(/index\.html$/, '')}`;
  })
  .filter(url => !url.includes('/404/'))
  .sort();
const now = new Date().toISOString().slice(0, 10);
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url => `  <url><loc>${url}</loc><lastmod>${now}</lastmod></url>`).join('\n')}\n</urlset>\n`;
await writeFile(join(dist, 'sitemap.xml'), xml);
await writeFile(join(publicDir, 'sitemap.xml'), xml);
console.log(`sitemap generated: ${urls.length} URLs on ${origin}`);
