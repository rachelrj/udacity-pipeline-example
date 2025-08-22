
# React + GitHub Actions + AWS Starter

A tiny React app (Vite) with:
- **CI** on PR/push: lint, test, build
- **CD** on `main`: deploy to **S3 + CloudFront** using **OIDC** (no long‑lived AWS keys)

## Quick start
```bash
npm install
npm run dev
npm test
npm run build && npm run preview
```

## GitHub Actions
Workflows live in `.github/workflows/`:
- `ci.yml` — runs on PRs and pushes
- `deploy.yml` — runs on push to `main`

## AWS setup (high level)
1. **S3 bucket** for static hosting.
2. **IAM role for OIDC** (trusted to `token.actions.githubusercontent.com`) with least-privilege policy allowing:
   - `s3:ListBucket`, `s3:PutObject`, `s3:DeleteObject` on your bucket
3. Put the role ARN in `deploy.yml` (`role-to-assume:`).
4. Protect `main` and optionally require **environment approval** for `production`.

## Scripts
- `npm run dev` — local dev server
- `npm test` — unit tests (Vitest + RTL)
- `npm run build` — production build to `dist/`
- `npm run preview` — serves the production build
- `npm run lint` — ESLint
- `npm run format` — Prettier

## Notes
- Uses Node 20 (`.nvmrc`).
- Change bucket + distribution placeholders before deploying.
- You can also deploy artifacts produced in CI; this demo rebuilds in `deploy.yml` for simplicity.
