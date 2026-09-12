# NexaFlow Digital — Website (Aurora Redesign)

The official NexaFlow Digital website — Next.js 15, fully redesigned with the
"Aurora Ink" identity (deep ink surfaces, electric indigo → cyan flow gradient,
Sora display + Inter body typography) and a new flowing-N brand mark.

**Live:** https://www.nexaflow-digital.com

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS 3 (design tokens in `tailwind.config.js`, signatures in `app/globals.css`)
- API routes: contact, contract submissions, analytics, admin auth, correspondence
- All site copy lives in `data/` (`index.ts`, `products.ts`, `blog.ts`)

## Develop

```bash
corepack pnpm install
corepack pnpm dev
```

## Deploy (Vercel)

Push to the connected branch — Vercel auto-builds (`pnpm build`, Node 24).
Required env vars: see `.env.local.example` (admin secret, GitHub token for the
data store, SMTP credentials for email).

## Docker

```bash
docker build -t nexaflow .
docker run -p 3000:3000 nexaflow
```
