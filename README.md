# Lumis Studio

**Agent-first Web Agency** — Building autonomous web systems that optimize, adapt, and grow your business 24/7.

## 🚀 Quick Deploy

### Vercel (Recommended)
```bash
cd /home/lume/.openclaw/workspace/projects/lumis-studio
vercel --prod
```

### Netlify
1. Drag the `src/` folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect Git repo in Netlify dashboard

### GitHub Pages
1. Push to GitHub repository
2. Enable Pages in repo settings, source: `src/` folder
3. Site will be at `https://username.github.io/repo-name/`

## 📁 Project Structure

```
lumis-studio/
├── brand/              # Brand assets
│   ├── logo.svg        # Primary logo
│   ├── BRAND.md        # Brand guidelines
│   └── BRAND-NARRATIVE.md
├── src/                # Landing page source
│   ├── index.html      # Homepage
│   ├── styles.css      # All styles
│   └── script.js       # Interactivity
├── portfolio/          # Case studies
│   ├── artisan-coffee.html
│   ├── devtools-pro.html
│   └── case-study-template.html
├── docs/               # Documentation
│   └── SERVICES.md     # Service tiers & pricing
├── vercel.json         # Vercel config
├── netlify.toml        # Netlify config
├── PROJECT.md          # Project overview
├── DECISIONS.md        # Architecture decisions
└── README.md           # This file
```

## 🎨 Brand Identity

- **Colors:** Light theme (#F5F5F7 background) with Agent Blue (#0066FF) accent
- **Fonts:** Inter (primary), JetBrains Mono (code)
- **Vibe:** Clean, modern, intelligent, forward-thinking
- **Voice:** Direct, confident, helpful, no corporate jargon

See `brand/BRAND.md` for full specifications.

## 💼 Services

Three tiers with clear pricing floors:

| Tier | Price | Timeline | Best For |
|------|-------|----------|----------|
| **Starter** | $1,800 - $3,000 | 5-7 days | Landing pages, portfolios, small business sites |
| **Growth** | $3,500 - $7,000 | 2-3 weeks | Multi-page sites, startups, SaaS landing pages |
| **Autonomous** | $8,000 - $15,000+ | 4-6 weeks | Full-scale sites with AI agents, e-commerce, scaling businesses |

See `docs/SERVICES.md` for complete details.

## 🔧 Local Development

Serve the `src/` directory with any static server:

```bash
# Python 3
cd src
python3 -m http.server 8000

# Node.js (with http-server)
npx http-server src -p 8000

# PHP
php -S localhost:8000 -t src
```

Then open `http://localhost:8000` in your browser.

## 📧 Contact Form Setup

The contact form currently logs to console. To make it functional:

### Option 1: Formspree (Easiest)
Add `action="https://formspree.io/f/your-form-id"` and `method="POST"` to the form tag.

### Option 2: Netlify Forms
Add `data-netlify="true"` attribute to form and set up notifications in Netlify dashboard.

### Option 3: Custom Backend
Create an API endpoint that receives form data and forwards to email or database.

## 📊 Performance Targets

- Lighthouse score: 95+
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1
- Time to Interactive: <3s

Current implementation meets these targets on fast 3G.

## 🤝 Contributing

This is a client project scaffold. For modifications:

1. Edit files in `src/` for landing page changes
2. Update `brand/` for identity changes
3. Add new case studies in `portfolio/` using the template
4. Commit and redeploy

## 📝 License

Copyright © 2026 Lumis Studio. All rights reserved.

This project is proprietary and not open for redistribution without permission.

## 📞 Contact

For project inquiries: **hello@lumis.studio** (configure this email)

---

**Built with agent-first philosophy.** Every Lumis project includes autonomous AI agents that keep your site optimized and growing 24/7.
