# Lumis Studio — Project Overview

## Vision
Build an "agent-first web agency" from scratch with a complete brand identity, service offerings, landing page, and portfolio, ready for deployment.

## Status
**Phase:** Complete (Ready for deployment)
**Started:** March 29, 2026
**Branch:** master

## Deliverables

### ✅ Completed
- [x] Brand identity (logo SVG, colors, typography, voice)
- [x] Service tiers (Starter $1.8k, Growth $3.5-7k, Autonomous $8k+)
- [x] Landing page (responsive HTML/CSS/JS)
- [x] Portfolio case studies (2 complete + template)
- [x] Deployment configuration (Vercel, Netlify)

### 📦 Artifacts
- `brand/` — Logo, brand guide, color palette, voice guidelines
- `src/` — Landing page (index.html, styles.css, script.js)
- `portfolio/` — Case studies (artisan-coffee.html, devtools-pro.html, template)
- `docs/` — Services documentation (SERVICES.md)
- `vercel.json`, `netlify.toml` — Deployment configs

## Quick Start
1. Deploy to Vercel: `vercel --prod` (in project directory)
2. Deploy to Netlify: Drag `src/` folder to Netlify dropzone
3. Or serve locally: `python3 -m http.server 8000` in `src/`

## Next Steps (Optional Enhancements)
- [ ] Add more case studies (3rd template fill)
- [ ] Create blog section for content marketing
- [ ] Set up contact form backend (Formspree, Netlify Forms, or custom)
- [ ] Add analytics (Google Analytics, Plausible)
- [ ] Create social media assets
- [ ] Write launch announcement
- [ ] Connect custom domain

## Tech Stack
- HTML5, CSS3 (with CSS variables, grid, flexbox)
- Vanilla JavaScript (no frameworks)
- Static hosting (Vercel/Netlify/GitHub Pages)
- Google Fonts (Inter, JetBrains Mono)

## Notes
- All assets are self-contained (no external dependencies except fonts)
- Mobile-first responsive design
- Accessibility considerations (semantic HTML, ARIA labels where needed)
- Performance: <2s load target, 95+ Lighthouse score
- Agent-first positioning throughout copy
