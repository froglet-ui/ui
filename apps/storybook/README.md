# @froglet/ui Storybook

Component documentation and visual testing for `@froglet/ui`.

## Running Locally

From the monorepo root:

```bash
npm run dev
```

Storybook starts at `http://localhost:6006`.

## What's Here

- **Default stories** — each component rendered unstyled, showing the raw structure
- **Froglet stories** — components themed with the Froglet brand token set
- **Controls panel** — interactive prop playground on most stories
- **Docs tab** — auto-generated API docs from component README and TypeScript interfaces

## Storybook CSS

Component-specific Storybook styles live in `src/assets/css/`:

| File                     | Purpose                                   |
| ------------------------ | ----------------------------------------- |
| `global.storybook.css`   | Design tokens: palette, shape, typography |
| `alert.storybook.css`    | Alert Froglet variant tokens              |
| `badge.storybook.css`    | Badge Froglet variant tokens              |
| `box.storybook.css`      | Box Froglet variant tokens                |
| `button.storybook.css`   | Button Froglet variant tokens             |
| `checkbox.storybook.css` | Checkbox Froglet variant tokens           |
| `collapse.storybook.css` | Collapse Froglet variant tokens           |
| `dialog.storybook.css`   | Dialog Froglet variant tokens             |
| `divider.storybook.css`  | Divider Froglet variant tokens            |
| `grid.storybook.css`     | Grid item demo visualization class        |
| `input.storybook.css`    | Input Froglet variant tokens              |
| `label.storybook.css`    | Label Froglet variant tokens              |
| `link.storybook.css`     | Link Froglet variant tokens               |
| `progress.storybook.css` | Progress Froglet variant tokens           |
| `radio.storybook.css`    | Radio Froglet variant tokens              |
| `select.storybook.css`   | Select Froglet variant tokens             |
| `switch.storybook.css`   | Switch Froglet variant tokens             |
| `table.storybook.css`    | Table Froglet variant tokens              |
| `tabs.storybook.css`     | Tabs Froglet variant tokens               |
| `textarea.storybook.css` | Textarea Froglet variant tokens           |
| `tooltip.storybook.css`  | Tooltip Froglet variant tokens            |

CSS is imported directly in each story file. There is no central `index.css`.

## Build

To build the static Storybook site:

```bash
npm run build -w apps/storybook
```

Output is written to `apps/storybook/storybook-static/`. The static site is automatically deployed to GitHub Pages on every push to `main`.
