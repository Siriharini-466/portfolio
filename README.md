<!-- === README.md === -->

# Siriharini Samala — Developer Portfolio

Production-ready personal portfolio built with **React 18**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **React Icons**.

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (LTS recommended)
- npm (bundled with Node.js)

## Getting started

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (typically `http://localhost:5173`).

## Production build

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Initialize Git and push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

Replace `<your-username>` and `<your-repo>` with your GitHub username and repository name.

## Deploy on Vercel (zero config)

1. Push the project to GitHub.
2. Sign in at [vercel.com](https://vercel.com/) and **Import** the repository.
3. Use defaults: **Framework Preset** Vite, **Build Command** `npm run build`, **Output Directory** `dist`.
4. Deploy. No extra configuration is required for a standard Vite app.

## Deploy on GitHub Pages (`gh-pages`)

1. Install the helper package:

   ```bash
   npm install --save-dev gh-pages
   ```

2. Set Vite’s `base` to your repo path (only if the site is served from `https://<user>.github.io/<repo>/`). In `vite.config.js`, set:

   ```js
   export default defineConfig({
     base: '/<repo>/',
     plugins: [react()],
   })
   ```

   Use `/` if you use a custom domain or host at the root of `github.io`.

3. Add to `package.json`:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. Deploy:

   ```bash
   npm run deploy
   ```

5. In the GitHub repo → **Settings** → **Pages**, set **Source** to the `gh-pages` branch.

## Project structure

- `src/data/portfolioData.js` — all copy, links, and structured content
- `src/components/` — UI sections (Navbar, Hero, About, Skills, Projects, Timeline, Achievements, SocialLinks, Contact, Footer)
- `public/resume.pdf` — downloadable résumé used by the Hero button

## License

Personal portfolio — content © Siriharini Samala unless otherwise noted.
