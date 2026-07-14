This is the Next.js app for the Sranan Story Collective website.

## GitHub Pages Deployment

This repository deploys to GitHub Pages via GitHub Actions.

Deployment setup is defined in:

- `../.github/workflows/deploy-pages.yml`
- `next.config.ts` (static export settings)

### One-time GitHub setting

In the GitHub repository settings:

1. Go to `Settings` -> `Pages`.
2. Set `Source` to `GitHub Actions`.

### How deployment works

1. Push to `main`.
2. The workflow installs dependencies in `web/`.
3. It runs `npm run build` (Next.js static export to `web/out`).
4. If a root `CNAME` file exists, it is copied into `web/out/CNAME`.
5. The exported site is published to GitHub Pages.

### Verify locally before pushing

From the `web/` directory:

```bash
npm run lint
npm run build
```

If both commands pass, Pages deployment should succeed.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
