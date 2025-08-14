# Fences Unlimited Inc — Website

A modern, responsive website for Fences Unlimited Inc, a fencing company specializing in residential and commercial fencing solutions. The site showcases services, materials, photo gallery, service areas, and company information, with clear calls-to-action for quotes and contact.

## Overview

This repository contains the source code for the Fences Unlimited Inc marketing website. It is built with SvelteKit for fast performance, great developer experience, and SEO-friendly pages.

Key highlights:
- Company website for a fencing contractor (residential and commercial)
- Pages for services and materials, photo/gallery, about, and contact/quote requests
- Responsive layout and navigation optimized for mobile and desktop
- Playwright tests for cross-browser and responsive checks

## Tech Stack
- SvelteKit + Vite
- TypeScript
- Playwright (end-to-end tests)
- Docker Compose (optional local containerized setup)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   # or open the app in a new browser tab
   npm run dev -- --open
   ```

## Project Scripts
- `npm run dev` — Start the development server
- `npm run build` — Create a production build
- `npm run preview` — Preview the production build locally
- `npm test` — Run Playwright tests
- `npm run test:ui` — Run Playwright in UI mode
- `npm run test:debug` — Run Playwright in debug mode
- `npm run test:headed` — Run Playwright with a visible browser

## Building & Deployment

Create a production build:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

Note: For deployment targets (e.g., Node, serverless, edge), you may need a SvelteKit [adapter](https://svelte.dev/docs/kit/adapters).

## Tests

This project uses Playwright for end-to-end testing across multiple browsers and screen sizes.

- Tests live in the `tests` directory
- Configured to run on desktop (Chrome, Firefox, Safari) and mobile profiles (Pixel 5 Chrome, iPhone 12 Safari)
- Verify basic functionality, responsive design, and navigation

To add new tests, create `.spec.ts` files in `tests` following existing patterns.

## Project Structure (high level)
- `src/` — Application source (routes, components, styles)
- `static/` — Static assets
- `tests/` — Playwright tests

## Contact
If you are a customer or visitor and need support or a quote, please use the Contact/Quote page on the website. For development questions, open an issue or PR in this repository.
