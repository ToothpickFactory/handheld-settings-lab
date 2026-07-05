import fs from 'node:fs';
const date=new Date().toISOString().slice(0,10);
const dir='docs/ops/content-drafts'; fs.mkdirSync(dir,{recursive:true});
const path=`${dir}/${date}-two-post-plan.md`;
if(!fs.existsSync(path)) fs.writeFileSync(path,`# ${date} Handheld Settings Lab two-post plan\n\n1. Add/update one game settings page from Steam trending/new releases.\n2. Add/update one guide or calculator support article with affiliate-safe gear notes.\n\nGuardrails: no fake benchmark claims; cite sources in final article notes; build and crawl before deploy.\n`);
console.log(`wrote ${path}`);
