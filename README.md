# adsmanagementpro.com

Marketing site for Ads Management Pro. Plain static HTML/CSS/JS in `public/`, no build step.

## Edit content
- Text, services and pricing tiers: `public/index.html`
- Styling: `public/styles.css`
- Contact email: `CONTACT_EMAIL` in `public/main.js` and the `mailto:` links in `public/index.html`

Preview locally: `npx serve public` (or open `public/index.html`).

## Deployment (Cloudflare Pages)
`.github/workflows/deploy.yml` deploys `public/` to the Cloudflare Pages project `adsmanagementpro` on every push.
Pushes to `main` go to production; other branches get a preview URL.

One-time setup:
1. In Cloudflare, create an API token with **Account → Cloudflare Pages → Edit** permission
   (My Profile → API Tokens → Create Token → Custom token).
2. Copy your **Account ID** (Cloudflare dashboard → Workers & Pages, right sidebar).
3. In GitHub: Settings → Secrets and variables → Actions → add `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.
4. After the first deploy: Cloudflare → Workers & Pages → `adsmanagementpro` → Custom domains → add `adsmanagementpro.com` (and `www`).
