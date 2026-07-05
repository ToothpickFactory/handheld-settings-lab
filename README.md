# Handheld Settings Lab

Gaming utility publication for Steam Deck, ROG Ally, Legion Go, and handheld PC settings.

## Stack
- Astro static site
- Cloudflare Pages
- Pages Functions for `/api/health` and newsletter capture
- GitHub Actions deploys `main` to Cloudflare Pages

## Commands
```bash
npm install
npm run check
npm run build
npm run hydrate:data
npm run new:posts
```

## Launch checklist
- [x] GitHub project
- [x] Cloudflare Pages deployment target
- [x] `robots.txt`, `sitemap.xml`, `llms.txt`, favicon, OG SVG
- [x] Contact, Privacy, Terms
- [x] Newsletter endpoint via Pages Functions + KV
- [x] Initial calculators and settings pages
- [x] Daily content/data scripts
- [ ] Custom domain connected
- [ ] GA4/GSC for custom domain
- [ ] Amazon Associates tracking ID added after approval
