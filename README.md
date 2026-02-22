# Froglet UI Monorepo

Open source, brandless React component library. All visual styling is driven by CSS custom properties — no colors or brand opinions are built in. Bring your own design tokens.

## Repository Structure

```
ui/
├── packages/
│   └── froglet-ui/     # @froglet/ui — the published npm package
├── apps/
│   └── storybook/      # Component documentation and visual testing
└── docs/               # CSS composition, modifier pattern, style guide
```

## Getting Started

### Prerequisites

- Node.js ≥ 22 (version pinned in `.nvmrc`)

### Install

```bash
git clone https://github.com/froglet-ui/ui.git
cd ui
npm install
```

This is an npm workspaces monorepo. A single `npm install` from the root installs all workspace dependencies.

### Run Storybook

```bash
npm run dev
```

Storybook starts at `http://localhost:6006`.

## Development Commands

Run all commands from the monorepo root. Most are Turbo pipelines that run across all workspaces.

| Command                | Description                      |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start Storybook dev server       |
| `npm run build`        | Build all packages               |
| `npm run test`         | Run all tests (Vitest)           |
| `npm run lint`         | Run ESLint across all packages   |
| `npm run check-types`  | TypeScript type check (no emit)  |
| `npm run format`       | Format all files with Prettier   |
| `npm run format:check` | Check formatting without writing |

## Components

`@froglet/ui` exports 8 components:

| Component       | Element                   | Description                              |
| --------------- | ------------------------- | ---------------------------------------- |
| `Button`        | `<button>`                | Interactive button element               |
| `Checkbox`      | `<input type="checkbox">` | Custom-rendered checkbox                 |
| `GridContainer` | `<div>`                   | CSS Grid layout container                |
| `GridItem`      | `<div>`                   | CSS Grid item with span controls         |
| `Input`         | `<input>`                 | Text-type input (text, email, password…) |
| `Link`          | `<a>`                     | Anchor element                           |
| `Radio`         | `<input type="radio">`    | Custom-rendered radio button             |
| `Select`        | `<select>`                | Dropdown select                          |
| `Textarea`      | `<textarea>`              | Multi-line text input                    |

## Documentation

- [CSS Composition](./docs/css-composition.md) — token naming convention
- [Modifier Classes](./docs/modifiers.md) — how to apply brand tokens via CSS classes
- [Style Guide](./docs/style-guide.md) — Froglet brand color palette and per-component token reference
- [@froglet/ui README](./packages/froglet-ui/README.md) — installation and usage for consumers

## CI

Pull requests to `main` run format check, lint, type check, and tests automatically via GitHub Actions.

## Contributing

1. Fork and create a feature branch
2. Make changes with tests
3. Run `npm run format && npm run lint && npm run check-types && npm run test`
4. Open a pull request against `main`

## License

[MIT License](LICENSE)
