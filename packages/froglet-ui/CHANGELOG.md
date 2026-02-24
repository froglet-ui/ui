# @froglet/ui

## 1.0.0

### Major Changes

Initial public release of `@froglet/ui` — an open source, accessible React component library with full CSS custom property theming.

**20 components shipped:**

- **Alert** — status messages with configurable role and variant
- **Badge** — small count or label indicator
- **Box** — generic layout container
- **Button** — accessible button with forwarded ref
- **Checkbox** — controlled and uncontrolled checkbox input
- **Collapse** — disclosure pattern built on `<details>`/`<summary>`
- **Dialog** — modal dialog built on the native `<dialog>` element
- **Divider** — semantic horizontal or vertical rule
- **Grid** — `GridContainer` + `GridItem` CSS grid primitives
- **Input** — single-line text input
- **Label** — form label wired to an input via `htmlFor`
- **Link** — anchor with consistent focus styling
- **Progress** — accessible `<progress>` bar
- **Radio** — controlled and uncontrolled radio input
- **Select** — native `<select>` with custom property styling
- **Switch** — toggle built on a styled checkbox
- **Table** — semantic table with sortable column support
- **Tabs** — keyboard-navigable tab panel
- **Textarea** — multi-line text input
- **Tooltip** — lightweight tooltip using the Popover API

**Design principles:**

- Zero hardcoded colors or sizes — every visual trait is a CSS custom property
- No CSS-in-JS — styles ship as a single `index.css` alongside the JS bundle
- Modifier pattern — variants applied by consumers via CSS class names
- WCAG 2.1 AA accessibility target — native HTML semantics, ARIA only where needed
- TypeScript-first — all prop interfaces exported; forwarded refs on interactive elements
- React 19 peer dependency
