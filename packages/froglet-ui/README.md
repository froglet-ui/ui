# @froglet/ui

A minimal, accessible React component library prioritizing WCAG AAA compliance and modern design principles.

## Features

- Modern, minimal design focused on usability
- WCAG AAA accessibility compliance
- Customizable theming via CSS custom properties
- Built with React and TypeScript

## Installation

```bash
npm install @froglet/ui

# or with yarn
yarn add @froglet/ui
```

## Quick Start

```tsx
import { Button } from "@froglet/ui";

function App() {
  return (
    <Button onClick={() => console.log("Clicked!")}>
      Click me
    </Button>
  );
}
```

## Customization

Components can be styled using CSS Custom Properties. For naming conventions and available properties, see our [CSS Composition Guide](./../../docs/css-composition.md).

## Development

This package is part of the [froglet-ui monorepo](https://github.com/froglet-ui/ui.git). To contribute:

1. Clone and install dependencies:
```bash
git clone https://github.com/froglet-ui/ui.git
npm install
```

2. Start Storybook:
```bash
cd apps/storybook
npm install
npm run storybook
```

3. Work on components:
```bash
cd packages/froglet-ui
npm install
```

### Code Quality

Run from the project root:
```bash
npm run lint    # Run ESLint
npm run format  # Run Prettier
```

## License

[MIT License](../../LICENSE)
