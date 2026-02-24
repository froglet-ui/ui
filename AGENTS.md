# Agents

Quick reference for AI coding assistants working in this repository.

## What this repo is

`@froglet/ui` — an open source, accessible, brandless React component library published to npm. All visual styling is driven by CSS custom properties; no colors or brand opinions are built in.

## Monorepo layout

```
ui/
├── packages/froglet-ui/   # @froglet/ui — the published npm package (source in src/)
├── apps/storybook/        # Component documentation and visual testing
├── apps/web/              # froglet.io marketing and docs site (Next.js + Nextra)
└── docs/                  # CSS composition guide, modifier pattern, style guide
```

## Key conventions

- **CSS custom properties** — every visual trait is a CSS custom property. No hardcoded colors or sizes in component source.
- **Modifier classes** — consumers supply brand tokens via CSS classes (e.g. `<Button className="button--primary">`). Components accept `className` and merge it onto the root element.
- **No CSS-in-JS** — plain CSS files only. Component styles live in `packages/froglet-ui/src/components/<Name>/<Name>.css`.
- **TypeScript-first** — all props interfaces are exported. Refs are forwarded on all interactive elements.
- **React 19** — no class components.

## Components (20)

`Alert`, `Badge`, `Box`, `Button`, `Checkbox`, `Collapse`, `Dialog`, `Divider`, `GridContainer`, `GridItem`, `Input`, `Label`, `Link`, `Progress`, `Radio`, `Select`, `Switch`, `Table`, `Tabs`, `Textarea`, `Tooltip`

Source: `packages/froglet-ui/src/components/`
Entry: `packages/froglet-ui/src/index.ts`
Published CSS: `packages/froglet-ui/dist/index.css` (imported by consumers as `@froglet/ui/styles`)

## Commands (run from repo root)

| Command                | What it does                      |
| ---------------------- | --------------------------------- |
| `npm run build`        | Build all packages via Turbo      |
| `npm run dev`          | Start Storybook at localhost:6006 |
| `npm run test`         | Run Vitest tests                  |
| `npm run lint`         | ESLint across all packages        |
| `npm run check-types`  | TypeScript type check (no emit)   |
| `npm run format`       | Prettier format                   |
| `npm run format:check` | Check formatting without writing  |

## Do not

- Add color values or visual opinions to component source
- Bypass Turbo — always run tasks from the repo root
- Commit directly to `main`
- Modify `dist/` — it is a build artifact, not source
