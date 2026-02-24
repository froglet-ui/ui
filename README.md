# Froglet UI Monorepo

Open source, brandless React component library. All visual styling is driven by CSS custom properties — no colors or brand opinions are built in. Bring your own design tokens.

**Docs:** [froglet.io](https://froglet.io)

## Repository Structure

```
ui/
├── packages/
│   └── froglet-ui/     # @froglet/ui — the published npm package
├── apps/
│   ├── storybook/      # Component documentation and visual testing
│   └── web/            # froglet.io marketing and docs site
└── docs/               # CSS composition, modifier pattern, style guide
```

## Getting Started

### Prerequisites

- Node.js ≥ 24 (version pinned in `.nvmrc`)

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

`@froglet/ui` exports 20 components:

| Component       | Element                    | Description                              |
| --------------- | -------------------------- | ---------------------------------------- |
| `Alert`         | `<div role="alert">`       | Contextual feedback messages             |
| `Badge`         | `<span>`                   | Short status indicators                  |
| `Box`           | `<div>`                    | Generic layout container                 |
| `Button`        | `<button>`                 | Interactive button element               |
| `Checkbox`      | `<input type="checkbox">`  | Custom-rendered checkbox                 |
| `Collapse`      | `<div>`                    | Show/hide collapsible content            |
| `Dialog`        | `<dialog>`                 | Modal dialog overlay                     |
| `Divider`       | `<hr>`                     | Horizontal rule separator                |
| `GridContainer` | `<div>`                    | CSS Grid layout container                |
| `GridItem`      | `<div>`                    | CSS Grid item with span controls         |
| `Input`         | `<input>`                  | Text-type input (text, email, password…) |
| `Label`         | `<label>`                  | Form field label                         |
| `Link`          | `<a>`                      | Anchor element                           |
| `Progress`      | `<div role="progressbar">` | Progress indicator                       |
| `Radio`         | `<input type="radio">`     | Custom-rendered radio button             |
| `Select`        | `<select>`                 | Dropdown select                          |
| `Switch`        | `<button role="switch">`   | Toggle switch                            |
| `Table`         | `<table>`                  | Semantic data table                      |
| `Tabs`          | `<div>`                    | Tabbed content panels                    |
| `Textarea`      | `<textarea>`               | Multi-line text input                    |
| `Tooltip`       | `<span>`                   | Floating contextual tip                  |

## Documentation

- [froglet.io](https://froglet.io) — component docs and live demos
- [CSS Composition](./docs/css-composition.md) — token naming convention
- [Modifier Classes](./docs/modifiers.md) — how to apply brand tokens via CSS classes
- [Style Guide](./docs/style-guide.md) — Froglet brand color palette and per-component token reference
- [@froglet/ui README](./packages/froglet-ui/README.md) — installation and usage for consumers

## CI

Pull requests to `main` run format check, lint, type check, and tests automatically via GitHub Actions.

## Release

This package uses [Changesets](https://github.com/changesets/changesets) for versioning and changelog management.

1. Add a changeset describing what changed:
   ```bash
   npx changeset
   ```
2. Apply the version bump and update CHANGELOG:
   ```bash
   npx changeset version
   ```
3. Commit and push, then trigger the **"Publish to npm"** workflow in GitHub Actions.

## Contributing

1. Fork and create a feature branch
2. Make changes with tests
3. Run `npm run format && npm run lint && npm run check-types && npm run test`
4. Open a pull request against `main`

## License

[MIT License](LICENSE)
