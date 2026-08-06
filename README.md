# Barry Smith Electrical Contractors — website

One-page site. Astro (static) + TinaCMS (git-based content editing) + Cloudflare Pages (hosting).

All editable content lives in `content/home.json`. The CMS edits that file; every save is a commit; every commit redeploys the site.

## Local dev

```
npm install
npm run dev          # site only
npm run dev:cms      # site + Tina editor at /admin (no cloud account needed locally)
```

## Remaining one-time setup (browser required)

1. **Tina Cloud** — create a project at https://app.tina.io, connect this GitHub repo,
   copy the Client ID and a read-only token.
2. **Cloudflare Pages** — create a project from this repo.
   - Build command: `npm run build:cms`
   - Output directory: `dist`
   - Environment variables: `TINA_CLIENT_ID`, `TINA_TOKEN` (from step 1)
3. **Domain** — point DNS at the Pages project.
4. Invite the content editor as a user in Tina Cloud. She edits at `https://<site>/admin`.

## Notes

- Edits take ~1 minute to appear (commit → build → deploy).
- Rollback = revert the commit.
- No servers, no database, no hosting bill.
