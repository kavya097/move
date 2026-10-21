# CineBook Movie Booking — Experiments 1–3

## Requirements
- Node.js 20 LTS recommended (Node 18+ compatible toolchain).
- npm.

## Run locally
1. Extract the ZIP and open this folder (the one containing `package.json`) in VS Code.
2. Run `npm install`.
3. Run `npm run dev` and open the URL Vite prints (usually http://localhost:5173).
4. Run `npm test` for Jest/React Testing Library tests; `npm run build` for production build; `npm run preview` to preview `dist`.

This supplied app is a front-end demo: booking records are stored in browser localStorage and sign-in is demo-only, not secure production authentication. The PWA does not cache API responses.

## Experiment 1 — Tests
Tests cover movie cards, search/filtering, seat selection/removal, booking summary price calculation, and booking helper validation. Run `npm test`.

## Experiment 2 — Optimization
Route-level lazy imports and Suspense, lazy poster images with async decoding and explicit dimensions, accessible search/filter/seat labels, basic manifest/service worker, safer numeric phone input handling, and a static asset-only cache.

## Experiment 3 — Deployment

### Netlify
Import the repository in Netlify. Build command: `npm run build`; publish directory: `dist`. `netlify.toml` configures SPA rewrites.

### Vercel
Import the repository in Vercel. Framework: Vite; build command: `npm run build`; output directory: `dist`. `vercel.json` configures SPA rewrites.

### GitHub Pages
Push to the `main` branch and enable GitHub Actions as the Pages source in repository Settings → Pages. `.github/workflows/deploy-pages.yml` builds and deploys `dist`. If deploying under a repository subpath rather than a custom domain, configure Vite's `base` to `/<repository-name>/` and update the manifest/service-worker asset paths accordingly.

### Comparison
- Netlify: straightforward static hosting, preview deploys, and redirect configuration.
- Vercel: Git integration, preview deployments, and convenient framework detection.
- GitHub Pages: convenient for static student projects hosted directly from GitHub; repository subpaths need extra base-path care.

## Important limitations
There is no backend API in this ZIP. Login and bookings are browser-only demonstrations, so deploy the frontend as a static site; real authentication, payments, seat locking, and authorization require a secure backend. Do not treat localStorage as proof of identity.
