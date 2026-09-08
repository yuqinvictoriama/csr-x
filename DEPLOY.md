# Deploying CSR-x to Cloudflare

The build already emits a complete Cloudflare Worker config at
`dist/server/wrangler.json` (worker + static assets), so there is nothing to
configure by hand.

## 1. One-time setup

```bash
npx wrangler login          # opens a browser, authorises this machine
```

You need a free Cloudflare account. No paid plan is required.

## 2. Deploy

```bash
npm run deploy              # builds, then uploads the worker and assets
```

The first deploy prints a URL like `https://csr-x-homepage.<you>.workers.dev`.
**Test everything there before touching DNS.**

## 3. Set the hub passwords

Secrets are *not* uploaded from `.env` / `.dev.vars` — those are local only.
Set them once on the deployed worker:

```bash
npm run secrets             # prompts for each of the three passwords
```

Until these are set, all three hubs stay locked for everyone (they fail closed).
Re-run any time to rotate a password. Verify with `npx wrangler secret list
--config dist/server/wrangler.json`.

## 4. Point your domain at it

Cloudflare can only attach a custom domain to a Worker if the domain's DNS is
hosted on Cloudflare. A CNAME from another DNS provider to `*.workers.dev` does
not work.

1. Cloudflare dashboard → **Add a site** → enter your domain.
2. Cloudflare scans your current DNS and imports what it finds. **Check this
   list carefully** before continuing — especially `MX` records if you receive
   email on the domain, and the records serving any existing Squarespace site.
   Anything missing here stops working when you switch.
3. Cloudflare gives you two nameservers.
4. In Squarespace: **Domains → your domain → DNS → Nameservers**, switch from
   Squarespace defaults to **Custom nameservers**, and paste Cloudflare's two.
5. Wait for the zone to go **Active** in Cloudflare (usually minutes, up to 48h).
6. Cloudflare dashboard → **Workers & Pages → csr-x-homepage → Settings →
   Domains & Routes → Add custom domain**. Add the apex (`example.org`) and
   `www.example.org`. Cloudflare creates the DNS records and issues the TLS
   certificate automatically.

### If you want to keep the Squarespace site running

Moving nameservers to Cloudflare does **not** by itself take Squarespace down —
Cloudflare keeps serving whatever DNS records were imported in step 2. So you
can either:

- **Replace it:** point the apex and `www` at the worker (step 6). The
  Squarespace site stops being reachable on this domain.
- **Run both:** leave the imported Squarespace records on the apex and `www`,
  and attach the worker to a subdomain instead, e.g. `hub.example.org`.

## 5. Retiring the Squarespace site (do this last)

You do **not** need to cancel or deactivate Squarespace for the new site to
work. Once DNS points at Cloudflare, visitors reach the Worker regardless of
whether the Squarespace site still exists; it just becomes unreachable on this
domain (it stays live at its built-in `yoursite.squarespace.com` address).

Order matters:

1. Deploy, and confirm the site works on `*.workers.dev`.
2. Move DNS, attach the custom domain, and confirm the real domain serves the
   new site over HTTPS.
3. Only then consider cancelling the Squarespace subscription.

Two things to check before you cancel:

- **Who registered the domain.** If you bought it through Squarespace, the
  domain registration and the website subscription are usually billed
  separately — but some plans bundle a *free first-year domain*, and cancelling
  the site plan can end that. Confirm the domain will keep renewing on its own
  before cancelling anything.
- **Email.** If mail for this domain is handled through Squarespace (e.g. a
  bundled Google Workspace), cancelling can disrupt it. Sort email out first.

Keeping Squarespace as the *registrar* while Cloudflare handles DNS is
perfectly normal and costs nothing extra. Moving the registration to Cloudflare
Registrar later is optional.

## Notes

- `npm run deploy` rebuilds first, so it always ships current code.
- The static `.html` files at the repo root (`index.html`, `resources/`,
  `apply/`, …) are **not** deployed. They are dev-only fallbacks, and they
  shadow the real app under `npm run dev` — always verify with `npm start`.
- Free plan limits are 100,000 requests/day for the worker; static assets do not
  count against it.
- Roll back a bad deploy from the dashboard under **Deployments**, or with
  `npx wrangler rollback --config dist/server/wrangler.json`.
