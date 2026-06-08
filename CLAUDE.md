# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev       # Start dev server (Vite)
pnpm build     # Production build
```

No test, lint, or typecheck scripts are configured.

## Architecture

This is a portfolio SPA for Ana Paula Churruarin — a React 18 + React Router 7 app built with Vite 6 and Tailwind CSS 4.

**Routing** is defined in `src/app/App.tsx` with five routes:
- `/` → `HomeV2Page` (landing with hero, selected work, resume sections)
- `/natural-parks`, `/public-communication`, `/devlights-campaigns`, `/social-media-content-systems` → case study pages

**Pages** live in `src/app/pages/`. Each case study page wraps its content in a Motion entrance animation and renders `Navbar` + `Breadcrumb` at the top.

**Components** in `src/app/components/` include:
- `Navbar.tsx` — fixed top bar; on the home route it calls scroll callbacks (`onWorkClick`, `onResumeClick`) instead of navigating, so pages that use it must pass those handlers
- `Breadcrumb.tsx` — shows current page path with a link back to `/#selected-work`
- `VideoPlayer.tsx` — shared custom video player
- `components/ui/` — shadcn-style Radix UI primitives (button, dialog, tabs, etc.)

**Figma imports** in `src/imports/*/` are auto-generated asset folders. Do not edit them manually. Images imported with the `figma:asset/filename` scheme resolve to `src/assets/` via a custom Vite plugin.

## Styling

Tailwind CSS 4 — no `tailwind.config.js`. Configuration is done via CSS in `src/styles/`. Custom fonts (`font-montserrat`, `font-montserrat-bold`, `font-groteska-*`) are declared in `src/styles/fonts.css` and used as Tailwind utility classes.

Animations use the `motion` package (`motion/react`), not `framer-motion` directly.

## Path Aliases

- `@` → `src/`
- `figma:asset/<filename>` → `src/assets/<filename>`

## Notes

- The project is JavaScript/TSX — there is no `tsconfig.json` and TypeScript type errors are not enforced at build time.
- Never add `.css`, `.tsx`, or `.ts` files to `assetsInclude` in `vite.config.ts` (comment in the config warns against this).
- The `react()` and `tailwindcss()` Vite plugins must both remain in `vite.config.ts` even if Tailwind is not actively used.
