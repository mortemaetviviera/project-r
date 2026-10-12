# Understood Errors & Failure Modes

## Error Patterns

### Netlify SPA Direct URL 404
- **Cause**: Using `BrowserRouter` in an SPA without redirecting all routes (`/*`) to `index.html` causes Netlify to look for static `.html` files at nested paths, returning 404 on page refresh or direct navigation.
- **Solution**: Add `_redirects` file in `public/` containing `/*    /index.html   200` or configure `[[redirects]]` in `netlify.toml`.
- **Prevention**: Always configure SPA fallback routing when deploying client-side routed apps to Netlify/Vercel/Cloudflare.

## Known Failure Modes

### Unsynchronized Design Tokens
- **What looks correct**: Defining CSS variables in `index.css` (e.g. `--color-primary: #3b82f6`) but then using hardcoded hex values in component inline styles (`style={{ backgroundColor: '#A47DAB' }}`).
- **Why it's wrong**: Creates visual inconsistency, dead code in tokens, and makes theme changes or dark/light mode maintenance painful.
- **Correct approach**: Consolidate actual brand colors (`#A47DAB`, `#EDB4C7`, `#040B16`) as CSS custom properties or theme constants and consume them uniformly.
