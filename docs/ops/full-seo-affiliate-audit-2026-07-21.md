# Handheld Settings Lab — full SEO + affiliate audit

Date: 2026-07-21  
Canonical domain: https://handheldsettings.com  
GA4: property 544717885 / measurement G-3BWF9ZFT8N

## Executive summary

The site has a strong scalable content model and has grown to 82 built pages, but the largest pre-audit technical problem was that all 67 sitemap URLs and all canonical tags still pointed to the `pages.dev` hostname even though `handheldsettings.com` and `www.handheldsettings.com` were already attached and serving the site. This split indexing signals between hosts. The audit pass corrects the canonical host, adds host redirects, adds structured data, deepens thin settings/calculator pages, adds a Legion Go hub, and creates a 12-category gear library with 36 named product families.

GA4 is installed but returned no rows for the launch-to-date query at audit time. Google Search Console did not list a Handheld Settings property under the current credentials, so rankings/clicks cannot yet be measured from GSC.

## Verified pre-change findings

- Cloudflare Pages project: `handheld-settings-lab`
- Attached domains: `handheld-settings-lab.pages.dev`, `handheldsettings.com`, `www.handheldsettings.com`
- Apex and `www` both returned HTTP 200.
- Live sitemap before fixes: 67 URLs, all on `handheld-settings-lab.pages.dev`.
- Wrong custom-domain canonicals: 67/67.
- Bad sitemap statuses: 0.
- Broken internal links: 0 across 68 unique internal targets checked.
- H1 errors: 0.
- Missing image alt attributes: 0.
- Pages with structured data: 0/67.
- Pages under 300 visible words: 33.
- Duplicate title groups: 0.
- Duplicate meta-description groups: 1.
- GA4 launch-to-date rows: none at audit time.
- Search Console property: not visible/listed for `handheldsettings.com`.
- Local Amazon Associates tracking ID: not found in repo, secrets, or other local project files.

## Changes implemented in this audit

### Technical SEO

- Switched Astro canonical site origin to `https://handheldsettings.com`.
- Updated robots sitemap location to the custom domain.
- Added automatic sitemap generation from built routes.
- Added Cloudflare Pages middleware to 308 redirect noncanonical hosts, including `www` and `pages.dev`, to the apex custom domain.
- Added absolute Open Graph URLs.
- Added WebSite + Organization schema sitewide.
- Added TechArticle, BreadcrumbList, FAQPage, CollectionPage, SoftwareApplication, and ItemList schema where applicable.
- Removed `llms.txt` from human footer navigation while preserving the file.

### Content depth and internal linking

- Expanded every dynamic Steam Deck and ROG Ally game page with a tuning order, battery/storage planning, FAQs, internal calculator links, gear links, and schema.
- Expanded Steam Deck and ROG Ally hubs with usage guidance and FAQs.
- Added a source-aware `/legion-go-settings/` hub without fabricated per-game benchmark numbers.
- Expanded all three calculators with explanatory content, FAQs, related gear links, and SoftwareApplication schema.

### Affiliate/product architecture

- Added `/gear/` as a first-class navigation and SEO hub.
- Added 12 category pages and 36 named product families:
  - microSD cards
  - USB-C power banks
  - docks
  - chargers
  - NVMe SSDs
  - carrying cases
  - screen protectors
  - controllers
  - portable monitors
  - headsets/earbuds
  - keyboards/mice
  - USB-C cables/adapters
- Added a dedicated affiliate disclosure page.
- Added `rel="nofollow sponsored"` enforcement for every Amazon link.
- Added build-time `PUBLIC_AMAZON_ASSOC_TAG` support; when set, the site automatically appends the real Associates tag to all Amazon URLs.
- Added GA4 `affiliate_click` tracking and newsletter `generate_lead` tracking.
- Avoided dynamic prices and fake hands-on claims.

## Post-build verification

- Built pages: 82.
- Sitemap URLs: 82.
- Sitemap URLs on `handheldsettings.com`: 82/82.
- Old `pages.dev` URLs in sitemap: 0.
- Wrong canonical tags: 0/82.
- H1 errors: 0.
- Duplicate titles: 0.
- Duplicate meta descriptions: 0.
- Pages with JSON-LD: 82/82.
- JSON-LD script blocks: 271.
- Amazon search/product links: 197 across 67 pages.
- Pages under 300 words: 22, now mostly legal/contact/index pages and concise gear/calculator pages rather than the game-setting templates.

## Keyword research method

Google autocomplete was queried directly on 2026-07-21 for 13 seed terms. It returned 121 unique suggestions. These are evidence of active query formulation, not verified monthly search volume. The configured web-search backend was unavailable, so this audit does not invent keyword volumes or CPC.

Raw suggestions: `docs/ops/google-suggest-keywords-2026-07-21.json`

## Priority keyword clusters

### 1. Game + device settings — highest editorial priority

Page pattern: `best [device] settings for [game]`

Observed suggestions:

- best Steam Deck settings for Diablo 4
- Steam Deck settings for Expedition 33
- best Steam Deck settings for Cyberpunk 2077
- best Steam Deck settings for Elden Ring
- best Steam Deck settings for Hogwarts Legacy
- best Steam Deck settings for Path of Exile 2
- best Steam Deck settings for Arc Raiders
- ROG Ally settings for Expedition 33
- ROG Ally settings for Hogwarts Legacy
- ROG Ally settings for Cyberpunk
- ROG Ally settings for Marvel Rivals
- Legion Go settings for Cyberpunk 2077
- Legion Go settings for Arc Raiders
- Legion Go settings for Expedition 33

Action: keep the twice-daily content engine focused on source-backed pages for these queries. Never publish future/unreleased-game settings without source material and a clear status label.

### 2. Settings database/hub terms

- Steam Deck settings website
- Steam Deck settings for games
- ROG Ally settings website
- ROG Ally settings for games
- Legion Go settings website
- Legion Go settings for games

Action: the three device hubs should become the strongest internal-link destinations. Add search/filtering once the game library exceeds roughly 25 titles.

### 3. Battery and calculator terms

- Steam Deck settings for battery life
- Steam Deck battery life settings
- Steam Deck battery life by game
- Steam Deck battery life Elden Ring
- Steam Deck battery life vs ROG Ally
- Steam Deck storage calculator

Action: build a battery-by-game comparison hub using the existing data model, clearly labeling estimates versus direct tests. Add a device comparison calculator later.

### 4. Storage terms

- Steam Deck microSD card speed
- Steam Deck microSD card format
- Steam Deck microSD card compatibility
- Steam Deck microSD card not showing up
- Steam Deck microSD card with games
- ROG Ally SSD upgrade
- ROG Ally SSD size
- ROG Ally SSD upgrade 1TB / 2TB

Action: strengthen troubleshooting/support pages, not just “best product” lists. These queries can attract recurring search traffic and naturally route readers to relevant storage products.

### 5. Power and dock terms

- Steam Deck power bank requirements
- Steam Deck power bank wattage
- Steam Deck power bank for plane
- Steam Deck dock for TV
- Steam Deck dock not connecting to TV
- Steam Deck dock firmware update
- Steam Deck dock not working

Action: separate buying-intent pages from troubleshooting pages. Buying pages can contain sponsored product links; troubleshooting pages should lead with help, then relevant replacement/cable/charger options.

### 6. Accessory shopping terms

- Steam Deck accessories Amazon
- Steam Deck accessories must have
- Steam Deck accessories 2026
- Steam Deck accessories for travel
- ROG Ally accessories Amazon
- ROG Ally accessories dock
- best handheld gaming PC accessories

Action: create annual/device-specific accessory roundups using the central gear data. Do not claim products are “best” without a disclosed comparison method.

## Recommended 30-day publishing sequence

1. Hogwarts Legacy Steam Deck settings.
2. Hogwarts Legacy ROG Ally settings.
3. Path of Exile 2 Steam Deck settings.
4. Marvel Rivals ROG Ally settings.
5. Steam Deck battery life by game hub.
6. Steam Deck power bank requirements and airline guide.
7. Steam Deck dock not connecting to TV troubleshooting guide.
8. Steam Deck microSD card not showing up troubleshooting guide.
9. ROG Ally SSD size/compatibility guide.
10. Steam Deck vs ROG Ally battery-life comparison methodology page.
11. Device-specific accessory roundups for Steam Deck OLED, ROG Ally X, and Legion Go.
12. Add source-backed Legion Go game pages only after per-game research.

## Remaining blockers / owner inputs

1. **Amazon Associates tag required.** The site has 197 monetizable Amazon links and is ready to append a real tracking ID automatically, but no Associates tag was found. Set GitHub variable `PUBLIC_AMAZON_ASSOC_TAG` once the real tag is provided.
2. **Search Console setup required.** `handheldsettings.com` is not listed in current GSC access. Add/verify the domain property and submit `https://handheldsettings.com/sitemap.xml` so rankings, clicks, CTR, and indexing can be measured.
3. **GA4 needs traffic/time.** The property is wired correctly but had no report rows yet. Track landing pages, affiliate clicks, and newsletter leads as traffic begins.
4. **No verified keyword volume source.** Google autocomplete supplied live query patterns, but Search Console and a keyword-volume provider are needed for quantitative prioritization.
