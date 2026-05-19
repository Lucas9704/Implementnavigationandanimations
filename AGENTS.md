# AGENTS.md

## Commands
- `pnpm dev` - Start dev server
- `pnpm build` - Production build

## Project Structure
- Entry: `src/main.tsx` → `src/app/App.tsx`
- Routes in `src/app/App.tsx`: `/`, `/natural-parks`, `/public-communication`, `/devlights-campaigns`
- Pages: `src/app/pages/*.tsx`
- Components: `src/app/components/` (custom) + `src/app/components/ui/` (shadcn-like Radix components)
- Figma imports: `src/imports/*/` (auto-generated component assets)

## Path Aliases
- `@` resolves to `src/`
- `figma:asset/filename` resolves to `src/assets/filename` (custom vite plugin)

## Tech Stack
- React 18 + React Router 7
- Vite 6 + Tailwind CSS 4
- Motion library for animations
- Radix UI primitives (shadcn-style components)

## Notes
- No TypeScript (JS/JSX only)
- No test suite configured
- No lint/typecheck scripts defined