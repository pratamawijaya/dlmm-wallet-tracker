# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DLMM Wallet Tracker is a TanStack React application for tracking Meteora DLMM (Dynamic Liquidity Market Maker) positions on Solana. The app provides portfolio analytics, P&L tracking, and position management tools for DeFi users.

## Essential Commands

```bash
# Install dependencies
pnpm install

# Run development server (port 3000)
pnpm dev

# Build for production
pnpm build

# Run tests
pnpm test

# Run a single test file
pnpm test path/to/test.tsx
```

## Architecture & Structure

### Tech Stack
- **Framework**: TanStack React with TypeScript
- **Router**: TanStack Router with file-based routing (`src/routes/`)
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **SSR/SPA**: TanStack Start with Nitro for hybrid rendering

### Routing System
The app uses file-based routing with automatic route generation:
- Routes are defined as files in `src/routes/`
- Route tree is auto-generated at `src/routeTree.gen.ts` (gitignored)
- Root layout is defined in `src/routes/__root.tsx`
- New routes are created by adding files/folders to the routes directory

### Path Aliases
- `@/` maps to `src/` directory
- Configured in both `tsconfig.json` and `vite.config.ts`

### Component Architecture
- Main layout components in `src/routes/__root.tsx`
- Shared components in `src/components/`
- Each route file exports a `Route` object using TanStack Router's API

### State Management
Currently uses React's built-in state. No external state management library configured yet.

### Key Project Files
- `src/router.tsx`: Router configuration
- `src/routes/__root.tsx`: Root layout with devtools
- `src/routes/index.tsx`: Home page component
- `user-stories.md`: Detailed user stories for features
- `tasks/prd-*.md`: Product requirements document

## Development Patterns

### Adding Routes
1. Create a new file/folder in `src/routes/`
2. Export a Route object using `createFileRoute()` or `createRoute()`
3. The route will be automatically registered

### Using TypeScript
- Strict mode enabled with comprehensive checks
- Path aliases configured for clean imports
- Use `@/` imports for internal modules

### Testing
- Uses Vitest for unit testing
- React Testing Library for component testing
- Run specific tests with file path argument

## Project Context
This is a DeFi portfolio tracker specifically for:
- Meteora DLMM positions on Solana
- Multi-wallet support
- Real-time position tracking
- P&L calculations
- Portfolio analytics

The app is in early development stages with basic TanStack setup complete but no DLMM-specific features implemented yet.