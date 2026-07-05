# Design and media research notes — 2026-07-05

## Avoiding the generic AI-site look

Live search results repeatedly flagged the same AI-looking patterns: generic purple/blue gradients, default Inter-only typography, repetitive three-card SaaS sections, emoji-style icons, and vague copy. The site now moves toward a more specific “gaming lab console” system:

- Solid, tactile CTA buttons instead of gradient buttons.
- Original OpenAI-generated logo refined into actual site assets.
- Real official-source game art on specific game pages instead of abstract placeholders.
- Device/settings panels, source notes, and affiliate disclosures to make pages feel operational.

## Game image sourcing approach

For specific game pages, use official/public publisher/store assets where possible and label them clearly. Current launch implementation uses Steam store header images downloaded from public Steam CDN/app pages and credits them as editorial game images. Trademarks/art remain with owners. Do not use images to imply endorsement.

## Affiliate policy

Use `rel="nofollow sponsored"` for outbound Amazon/shopping links. Until an Amazon Associates tag exists, use Amazon search URLs rather than fake affiliate tags. Add direct product picks only after source-backed comparison or testing.
