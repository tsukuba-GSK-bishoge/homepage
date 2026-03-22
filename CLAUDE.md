# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run preview      # Preview production build

npm run check        # Type-check all Astro/TS files (astro check)
npm run eslint       # Run ESLint with auto-fix
npm run eslint:check # Check ESLint without fixing
npm run format       # Format with Prettier
npm run format:check # Check formatting without modifying
```

CI runs `eslint:check` and `format:check` on every PR to master.

## Architecture

**Framework**: Astro 5 (static site generator) with TypeScript strict mode.

**Routing**: File-based. `src/pages/[name].astro` maps to `/{name}`. All pages are pre-built to static HTML.

**Content Collections** (`src/content/`): Markdown files loaded via Astro's glob loader with Zod schema validation.

- `news/{slug}.md` — frontmatter: `date` (YYYY/MM/DD), `description`
- `works/{slug}.md` — frontmatter: `title`, `description`; requires `src/assets/works/{slug}/keyvisual.{png|jpg|jpeg|gif}`

Assets for content go in `src/assets/news/{slug}/` or `src/assets/works/{slug}/`.

**Layout**: `src/layouts/Layout.astro` is the single global HTML shell — handles all SEO metadata, OG tags, and global styles (Noto Sans JP, theme color #ff8bd3).

**Deployment**: GitHub Actions builds a Docker image (multi-stage: Node builder → Nginx), pushes to GHCR, and deploys to a Sakura Internet VPS via Portainer on push to master.

## Prettier Config

Print width 120, 2-space indent, double quotes, trailing commas (ES5), LF line endings. The `prettier-plugin-astro` handles `.astro` files.
