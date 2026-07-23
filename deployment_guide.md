# Deployment Guide - Ezhil Anand V Portfolio Website

This guide provides step-by-step instructions for deploying Ezhil Anand V's CSE Portfolio Website to **Vercel**, **Netlify**, **Render**, or **GitHub Pages**.

---

## 1. Deploying to Vercel (Recommended)

1. Push the code repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Ezhil Anand V Portfolio"
   git remote add origin https://github.com/ezhilanandv/ezhil-anand-portfolio.git
   git push -u origin main
   ```

2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Select **Import Git Repository** and choose `ezhil-anand-portfolio`.
4. Framework Preset: **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

---

## 2. Deploying to Netlify

1. Log into [Netlify Console](https://app.netlify.com/).
2. Select **Add new site** $\rightarrow$ **Import an existing project**.
3. Choose GitHub and select `ezhil-anand-portfolio`.
4. Configure settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy Site**.

---

## 3. Deploying to GitHub Pages

1. In `vite.config.js`, add `base: '/ezhil-anand-portfolio/'`.
2. Install `gh-pages`:
   ```bash
   npm install -D gh-pages
   ```
3. Add deployment scripts in `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run:
   ```bash
   npm run deploy
   ```

---

## 🔒 Post-Deployment Checklist

- [x] Verify Open Graph social preview cards on Twitter/LinkedIn sharing debuggers.
- [x] Check custom cursor and particle canvas rendering on desktop & mobile screens.
- [x] Confirm `Ctrl+K` command palette and `~` terminal overlay functionality.
- [x] Test AI Chatbot responses to common recruiter queries.
