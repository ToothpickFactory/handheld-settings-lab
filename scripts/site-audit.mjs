import fs from 'node:fs';
const required=['src/pages/index.astro','public/robots.txt','public/llms.txt','public/favicon.svg','functions/api/health.ts','functions/api/newsletter.ts'];
let bad=[]; for (const f of required) if (!fs.existsSync(f)) bad.push(`missing ${f}`);
if (!fs.readFileSync('src/pages/index.astro','utf8').includes('data-newsletter')) bad.push('homepage newsletter missing');
if (bad.length){console.error(bad.join('\n')); process.exit(1)}
console.log(`site-audit ok: ${required.length} required assets`);
