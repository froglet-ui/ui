# Contributing to Froglet UI

Thank you for your interest in contributing. This guide covers everything you need to get started.

## Prerequisites

- Node.js >= 24 (see `.nvmrc`)
- npm >= 10

## Setup

```bash
git clone https://github.com/froglet-ui/ui.git
cd ui
npm install
```

## Development

All commands run from the monorepo root via Turbo:

| Command               | What it does                      |
| --------------------- | --------------------------------- |
| `npm run dev`         | Start Storybook at localhost:6006 |
| `npm run test`        | Run Vitest tests                  |
| `npm run lint`        | ESLint across all packages        |
| `npm run check-types` | TypeScript type check (no emit)   |
| `npm run format`      | Prettier format                   |
| `npm run build`       | Build all packages                |

## Making Changes

### Component source (`packages/froglet-ui/src/`)

- **No hardcoded colors or sizes.** Every visual trait must be a CSS custom property.
- **No CSS-in-JS.** Styles live in `<Name>.css` alongside the component.
- **Modifier pattern.** Variant styles are applied by consumers via CSS classes (e.g. `<Button className="button--primary">`). Components accept and merge `className` onto the root element.
- **TypeScript-first.** Export the props interface. Forward refs on all interactive elements.
- **Accessible by default.** Target WCAG 2.1 AA. Use native HTML semantics; add ARIA only where native semantics fall short.

### Stories (`apps/storybook/`)

Each component should have a Default story (unstyled) and a Froglet story (themed with Froglet brand tokens). Component-specific CSS lives in `apps/storybook/src/assets/css/`.

### Tests

Tests live alongside components (`<Name>.test.tsx`). Use `@testing-library/react` with accessible queries. Run `npm run test` before opening a PR.

## Branching and Commits

- Branch off `main`. Branch names: `feat/<scope>`, `fix/<scope>`, `chore/<scope>`, `docs/<scope>`.
- Commits follow [Conventional Commits](https://www.conventionalcommits.org/) — enforced by commitlint.
- Do not commit directly to `main`.

## Versioning

This project uses [Changesets](https://github.com/changesets/changesets). If your change affects the published package (`@froglet/ui`), add a changeset:

```bash
npx changeset
```

Choose the appropriate bump type (patch / minor / major) and describe the change. Commit the generated `.changeset/*.md` file with your PR.

## Opening a Pull Request

1. Run `npm run format && npm run lint && npm run check-types && npm run test` and ensure all pass.
2. Push your branch and open a PR against `main`.
3. Fill out the PR template.
4. A maintainer will review and merge.

## Reporting Issues

Found a bug? [Open an issue](https://github.com/froglet-ui/ui/issues) using the Bug Report template.

Accessibility-specific issues: please include the `[a11y]` label and the details described in [ACCESSIBILITY.md](./ACCESSIBILITY.md).
