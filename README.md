# Lumis Studio

Agent-first Web Agency — building autonomous websites that optimize, adapt, and grow while you sleep.

## 🚀 What We Do

Lumis Studio builds **agent-first websites** — not just static pages, but autonomous systems that grow your business 24/7.

We combine human design expertise with AI agents that:
- Continuously optimize SEO
- Run A/B tests on CTAs and layouts
- Generate and update content
- Monitor performance and security
- Personalize user experiences

## 📦 Project Structure

```
lumis-studio/
├── brand/                 # Brand identity assets
│   ├── BRAND.md          # Brand guidelines
│   ├── BRAND-NARRATIVE.md
│   ├── IMAGE-PROMPTS.md
│   └── logo.svg
├── docs/
│   └── SERVICES.md       # Service tiers and pricing
├── src/
│   └── index.html        # Landing page (production)
├── portfolio/
│   ├── CASE-STUDY-TEMPLATE.md
│   └── laffaire-musicale-case-study.md
└── README.md
```

## 🛠️ Tech Stack

- **Frontend:** Plain HTML5 + CSS3 (no framework dependencies)
- **Fonts:** Inter (primary), JetBrains Mono (code)
- **Design:** Custom brand system (Agent Blue, Lumis Light, Deep Space)
- **Deployment:** Ready for Vercel, Netlify, or GitHub Pages

## 🎨 Brand Guidelines

- **Tagline:** Agent-first Web Agency
- **Theme:** Light / Clarity
- **Colors:** Agent Blue (#0066FF), Lumis Light (#F5F5F7), Deep Space (#0A0A0F)
- **Typography:** Inter (body), JetBrains Mono (code)

See `brand/BRAND.md` for full specifications.

## 💰 Service Tiers

- **Starter:** $1,800+ — Landing pages, basic SEO
- **Growth:** $3,500+ — Multi-page sites, CMS, advanced SEO
- **Autonomous:** $8,000+ — Full AI agent integrations, chatbots, personalization

Full details in `docs/SERVICES.md`.

## 🚀 Deployment

### GitHub Pages
```bash
# Push to GitHub, then enable Pages in repo settings (source: / (root) or /src)
gh repo create lumis-studio --public --source=. --remote=origin
git push -u origin main
# Then enable GitHub Pages from /src folder
```

### Vercel
```bash
vercel --prod
```

### Netlify
```bash
netlify deploy --prod --dir=src
```

## 📝 License

© 2026 Lumis Studio. All rights reserved.

## 📧 Contact

hello@lumis.studio
