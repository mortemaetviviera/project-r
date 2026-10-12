# Product State: LYCORIS (Project R)

## Overview
**LYCORIS** is a personalized romantic study companion and college resource hub created for a significant other ("luv"). The app blends an elegant dark aesthetic (inspired by modern outdoor/cinematic landing pages) with practical study tools for design and computer engineering coursework.

## Current Pages & Functionality

1. **Home Page (`/`)**:
   - Parallax scrolling hero with GPU acceleration and zero scroll re-renders.
   - 3 numbered narrative sections (`01`, `02`, `03`) with upgraded readable typography.
   - Romantic footer with Lycoris flower dedication.

2. **Rules & Preparation Page (`/rules`)**:
   - Hero banner with romantic welcome ("Hi Luvvv").
   - Tool readiness guide with direct links to Figma Education and Adobe Creative Cloud.
   - 3 core rules: "TANYA AKU", "Waktunya 10 MINGGU", and "Kalo bingung atau revisi".
   - CTA button leading to `/modules`.

3. **Design Modules Page (`/modules`)**:
   - **Dual Progress Dashboard**: Separated live progress tracking for:
     - **Figma Track**: Modul 1 – 5 with individual progress bar, count (`X/5`), and percentage.
     - **Photoshop Track**: Modul 6 – 10 with individual progress bar, count (`X/5`), and percentage.
   - **Full-Width Stacked Actions**: Ergonomic button layout ("Modul Disini" primary lavender button + "Kumpul Sini" secondary translucent button) with zero clipping on any screen size.
   - **Completion Toggle**: Interactive `✓ Selesai` / `Belum` badges that persist in `localStorage`.
   - **Encouragement Engine**: Dynamic motivational messages based on progress milestones.

4. **Masteran Archive Page (`/masteran`)**:
   - **Live Search**: Instant course keyword search with matching keyword pill highlights.
   - **Category Filter Tabs**: `Semua`, `Tahun 1 (Semester 1-2)`, `Tahun 2 (Semester 3-4)`, `Tahun 3 (Semester 5-6)`, `Tahun 4 (Semester 7-8)`, `KP & Capstone`.
   - **Quick Actions**: "Buka Drive" button and "📋 Salin Link" copy-to-clipboard button.
   - Empty state message if search finds no matching subjects.

5. **404 Catch-All Page (`*`)**:
   - Branded error state for broken or mistyped URLs with smooth return button to `/`.

6. **Global UI & Ergonomics**:
   - **Floating Navigation Dock (`FloatingNav`)**: Glassmorphic pill at top with 1-tap navigation between Home, Rules, Modul, and Masteran, featuring active glow indicators.
   - **Back to Top Button (`BackToTop`)**: Floating action button appearing on scroll past 350px with smooth return to top.

7. **Progressive Web App (PWA)**:
   - Full Web App Manifest (`manifest.json`) for home-screen installation on Android/iOS/Desktop.
   - High-resolution branded Lycoris flower PWA icon (`pwa-icon.svg`).
   - Service Worker (`sw.js`) for offline shell loading and fast caching.

## Technical Foundation
- **Framework**: React 19.2 + Vite 8.1
- **Router**: React Router DOM 7.18
- **Linter**: Oxlint
- **Hosting**: Netlify (with SPA redirect rules configured in `netlify.toml` and `public/_redirects`)
- **Styling**: Vanilla CSS (CSS variables, animations, glassmorphism, responsive media queries)
