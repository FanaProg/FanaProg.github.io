# CLAUDE.md

## Project Overview

Personal developer portfolio website for FanaCode (Fanantenantsoa Rafelimanana). Static site hosted on GitHub Pages with a retro terminal/hacker aesthetic.

## Tech Stack

- **Pure HTML5, CSS3, Vanilla JavaScript** — zero dependencies, no build system
- **Hosting**: GitHub Pages (auto-deployed from `main` branch)
- **Font**: JetBrains Mono (Google Fonts)

## Repository Structure

```
.
├── index.html      # Single-page portfolio (semantic HTML5, BEM classes)
├── style.css       # All styles: CSS variables, terminal theme, responsive layout
├── script.js       # Client-side JS: typing animation, scroll effects, nav highlighting
├── resume.pdf      # Downloadable resume
└── .github/
    └── workflows/
        └── static.yml  # GitHub Pages deployment workflow
```

## Key Conventions

### CSS
- CSS custom properties defined in `:root` for theming (dark background `#0a0a0a`, neon green `#00ff41`, amber `#ffb000`)
- BEM naming: `.terminal__bar`, `.nav__inner`, `.project-card__title`
- Single responsive breakpoint at `640px`
- CSS Grid for project cards, Flexbox for layout
- Terminal effects: CRT scanlines, glow text-shadows, blinking cursor animation

### JavaScript
- IIFE pattern for module isolation
- Modern DOM APIs: `IntersectionObserver`, `querySelectorAll`, `classList`
- No external libraries or frameworks

### HTML
- Semantic HTML5 structure with `sr-only` class for accessibility
- Each section wrapped in `.terminal` container for consistent theming

## Development Workflow

### Local Development
No build step required. Open `index.html` directly in a browser or use any static file server:
```sh
python3 -m http.server 8000
```

### Deployment
Push to `main` triggers the GitHub Actions workflow (`.github/workflows/static.yml`) which deploys to GitHub Pages automatically.

### No Build Tools, Tests, or Linters
This project intentionally has no package.json, bundler, test framework, or linter configured. Keep changes simple and dependency-free.

## Guidelines for AI Assistants

- Preserve the terminal/hacker visual aesthetic when making changes
- Keep the site dependency-free — no npm packages or build tools
- Use BEM naming for new CSS classes
- Define new colors as CSS custom properties in `:root`
- Ensure mobile responsiveness (test at 640px breakpoint)
- Maintain accessibility (`sr-only` labels, semantic HTML)
