# Lumis Studio — Key Decisions

## Architecture
- **Static HTML/CSS/JS** — No framework needed for landing page; faster, simpler, cheaper to host
- **Single-page landing** — All content in one page with smooth scrolling, better for conversion
- **Separate case study pages** — Dedicated URLs for portfolio pieces, better SEO

## Design
- **Color palette:** Light theme (Lumis = light) with blue accent (#0066FF)
- **Typography:** Inter (primary) + JetBrains Mono (code/technical)
- **Layout:** Container-based max-width (1200px), responsive breakpoints at 1024px, 768px, 480px
- **Agent visualization:** Network diagram with central hub and orbiting nodes

## Content Strategy
- **Tiered pricing** with clear minimum ($1,800) to filter low-budget clients
- **Service names:** Starter, Growth, Autonomous (intuitive progression)
- **Agent features** highlighted as differentiator vs competitors
- **Case studies** focus on metrics and ROI, not just visuals

## Deployment
- **Vercel** — Primary recommendation (best for static sites, easy CI/CD)
- **Netlify** — Alternative with similar ease of use
- **GitHub Pages** — Free option, slightly more manual
- **Configuration:** Simple static file serving, no build step

## What We're Not Doing
- No backend/API for contact form (use Formspree or similar)
- No blog/CMS (could add Contentful/Sanity later if needed)
- No multi-language support (i18n not in scope)
- No dark mode (brand is light/clarity focused)
- No complex animations (keep it performant and professional)

## Trade-offs Made
- **No React/Vue** — Overkill for landing page; vanilla is faster and sufficient
- **No CSS preprocessor** — CSS variables handle theming; keep it simple
- **No image assets** — Using gradients instead of photos to reduce load and maintain brand consistency
- **No e-commerce** — Out of scope for MVP; can add later with proper platform

## Risks & Mitigations
- **Risk:** Contact form doesn't work without backend
  - **Mitigation:** Document Formspree integration in README
- **Risk:** No real project images in case studies
  - **Mitigation:** Use placeholder gradients; note need for real screenshots
- **Risk:** Static site limits personalization
  - **Mitigation:** Agent-first messaging compensates; personalization can come later
