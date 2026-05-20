## Goal

Improve the current portfolio experience for mobile devices without changing the overall editorial visual language.

## Current Status

- completed: shared mobile shell updated
- completed: home page responsive media compositions
- completed: devlights mobile spacing and gallery collapse
- completed: natural parks mobile spacing and decorative fallbacks
- completed: public communication mobile-safe showcase simplifications
- in_progress: build validation

## Open Questions

- None blocking. Default approach is to preserve visual tone while simplifying desktop collage layouts on narrow screens.

## Swimlanes

### lane_shell

- tasks:
  - completed: make navbar usable on narrow screens
  - completed: make breadcrumb truncate/wrap safely
- produces:
  - responsive top-level navigation and breadcrumb behavior
- depends_on:
  - none
- session_scope: 2 files, low complexity

### lane_home

- tasks:
  - completed: make hero background height viewport-aware
  - completed: simplify work card media compositions on mobile
- produces:
  - responsive home landing experience
- depends_on:
  - lane_shell
- session_scope: 1 file, medium complexity

### lane_detail_pages

- tasks:
  - completed: normalize mobile horizontal spacing
  - completed: collapse rigid galleries to 1 or 2 columns on mobile
  - completed: allow oversized headings and pills to wrap
  - completed: reduce decorative absolute compositions when needed
- produces:
  - responsive case-study pages
- depends_on:
  - lane_shell
- session_scope: 3 files, medium-high complexity

## Interface Contracts

- lane_shell -> lane_home: consistent top padding and mobile-safe header behavior
- lane_shell -> lane_detail_pages: detail pages can rely on navbar and breadcrumb not overflowing on small screens

## Validator Status

- in_progress: `npm run build`
- pending: targeted post-edit reads for edited sections
