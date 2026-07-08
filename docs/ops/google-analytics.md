# Google Analytics setup notes

Handheld Settings Lab is coded to load GA4 when `PUBLIC_GA4_ID` is present at build time.

- Local/Astro variable: `PUBLIC_GA4_ID=G-...`
- GitHub Actions variable: repository variable named `PUBLIC_GA4_ID`
- Measurement ID is public; OAuth/client secrets are not.

Next setup steps:
1. Create/locate GA4 property for Handheld Settings Lab under Toothpick Factory.
2. Create web stream for `https://handheldsettings.com` and/or current pages.dev URL until custom domain is live.
3. Set GitHub repo variable `PUBLIC_GA4_ID` to the stream measurement ID.
4. Redeploy and verify `googletagmanager.com/gtag/js?id=<ID>` appears in live HTML.
