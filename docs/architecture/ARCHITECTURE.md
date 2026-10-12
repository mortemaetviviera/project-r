# Architecture Documentation: LYCORIS (Project R)

## Project Overview
A single-page application (SPA) serving as a personalized curated learning portal and academic resource hub. It combines storytelling with functional external links to Google Drive, Figma, and Adobe.

## Tech Stack
- **Core**: React 19.2.7, React DOM 19.2.7
- **Bundler & Tooling**: Vite 8.1.4, @vitejs/plugin-react 6.0.3, Oxlint 1.71.0
- **Routing**: React Router DOM 7.18.1
- **Styling**: Vanilla CSS (Modular CSS + CSS variables + Glassmorphism)
- **Deployment**: Netlify

## Directory Structure
```
project r/
├── .gemini/               # Agent configuration
├── docs/                  # Documentation
│   ├── architecture/      # Architecture overview
│   ├── error-solving/     # Known errors & failure patterns
│   ├── product/           # Product state
│   └── short-term-plan/   # Continuity ledger
├── public/                # Static assets (images, logos)
├── src/
│   ├── assets/            # Bundled image assets
│   ├── components/        # Reusable UI components (ModuleCard, ScrollToTop)
│   ├── pages/             # Page components (HomePage, RulesPage, ModulesPage, MasteranPage)
│   ├── styles/            # CSS stylesheets (App.css, HomePage.css, index.css)
│   ├── App.jsx            # Top-level route switch
│   └── main.jsx           # React root & BrowserRouter entry
├── index.html             # HTML entry point
├── netlify.toml           # Netlify build config
├── package.json           # Node package manifest
└── vite.config.js         # Vite configuration
```

## Key Patterns
- **Client-Side Routing**: Handled by `react-router-dom` with a `ScrollToTop` helper resetting window scroll on navigation.
- **Parallax Effects**: Dynamic scroll event listeners inside `HomePage.jsx` driving translateY style updates via `requestAnimationFrame`.
- **Card-driven Presentation**: Modules and Masteran semesters utilize card/bento layouts with flex/grid containers.
