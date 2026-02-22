# @froglet/ui

Open source, brandless React component library. All visual styling is driven by CSS custom properties — no colors or brand opinions are built in. Bring your own design tokens.

- React 19 + TypeScript
- WCAG-compliant semantics and keyboard support
- CSS custom property theming — no CSS-in-JS, no preprocessor required
- Fully tree-shakeable

## Installation

```bash
npm install @froglet/ui
```

Peer dependencies: React 19+.

## Quick Start

```tsx
import { Button, Input, GridContainer, GridItem } from "@froglet/ui";

function LoginForm() {
  return (
    <GridContainer columns={1} gap="1rem">
      <GridItem>
        <Input
          type="email"
          placeholder="you@example.com"
          className="input--brand"
        />
      </GridItem>
      <GridItem>
        <Button type="submit" className="button--primary">
          Sign in
        </Button>
      </GridItem>
    </GridContainer>
  );
}
```

## Components

| Export               | Element                   | Description                              |
| -------------------- | ------------------------- | ---------------------------------------- |
| `Button`             | `<button>`                | Interactive button element               |
| `ButtonProps`        | —                         | TypeScript interface for Button          |
| `Checkbox`           | `<input type="checkbox">` | Custom-rendered checkbox                 |
| `CheckboxProps`      | —                         | TypeScript interface for Checkbox        |
| `GridContainer`      | `<div>`                   | CSS Grid layout container                |
| `GridContainerProps` | —                         | TypeScript interface for GridContainer   |
| `GridItem`           | `<div>`                   | CSS Grid item with span controls         |
| `GridItemProps`      | —                         | TypeScript interface for GridItem        |
| `Input`              | `<input>`                 | Text-type input (text, email, password…) |
| `InputProps`         | —                         | TypeScript interface for Input           |
| `Link`               | `<a>`                     | Anchor element                           |
| `LinkProps`          | —                         | TypeScript interface for Link            |
| `Radio`              | `<input type="radio">`    | Custom-rendered radio button             |
| `RadioProps`         | —                         | TypeScript interface for Radio           |
| `Select`             | `<select>`                | Dropdown select                          |
| `SelectProps`        | —                         | TypeScript interface for Select          |
| `Textarea`           | `<textarea>`              | Multi-line text input                    |
| `TextareaProps`      | —                         | TypeScript interface for Textarea        |

## Theming

Components expose CSS custom properties for all visual traits. Apply a modifier class to provide brand tokens:

```css
.button--primary {
  --button-background-color: #2e8b57;
  --button-text-color: #ffffff;
  --button-border-color: #2e8b57;
  --button-border-radius: 6px;
  --button-border-width: 2px;
  --button-padding: 10px 20px;
  --button-background-color-hover: #245f45;
  --button-outline-color-focus: #5eba87;
  --button-outline-offset-focus: 3px;
  --button-background-color-disabled: #d3e9d7;
  --button-text-color-disabled: #7a9a7d;
  --button-border-color-disabled: #d3e9d7;
}
```

```tsx
<Button className="button--primary">Save</Button>
```

Each component's README lists its full CSS custom property table. See the [CSS Composition guide](https://github.com/froglet-ui/ui/blob/main/docs/css-composition.md) for token naming conventions and the [Modifier Classes guide](https://github.com/froglet-ui/ui/blob/main/docs/modifiers.md) for the general theming pattern.

## CSS Import

Styles are bundled. Import once at your application entry point:

```ts
import "@froglet/ui/styles";
```

## Development

This package is part of the [froglet-ui monorepo](https://github.com/froglet-ui/ui). To contribute:

```bash
git clone https://github.com/froglet-ui/ui.git
cd ui
npm install
npm run dev          # start Storybook
npm run test         # run tests
npm run lint         # lint
npm run check-types  # type check
```

## License

[MIT License](../../LICENSE)
