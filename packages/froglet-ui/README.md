# @froglet/ui

A minimal, accessible UI component library for React, optimized for WCAG AAA compliance and modern design.

## Installation

```bash
npm install @froglet/ui
# or
yarn add @froglet/ui
```

## Usage

```tsx
import { Button } from "@froglet/ui";

<Button onClick={() => console.log("Clicked!")}>Click me</Button>;
```

Use the provided CSS Custom Properties to easily adjust the component's styling.
See [CSS Naming](./../../docs/css-composition.md) for details.

## Development

This is a monorepo, which means it contains multiple packages.
See full details at [froglet-ui/ui](https://github.com/froglet-ui/ui.git).

To get started with development:

1. Clone the repository:

   ```bash
   git clone https://github.com/froglet-ui/ui.git
   npm install
   ```

   You can format and lint from the root.

   ```bash
   npm run lint
   npm run format
   ```

2. Run Storybook (from project root):

```bash
cd apps/storybook
npm install
npm run storybook
```

3. Create or update components (from project root)

```bash
cd packages/froglet-ui
npm install
```

## Features

- **Minimal design** with a focus on usability
- **Customizable** using CSS custom properties
- **WCAG AAA accessibility** where possible
- Built with **React** and **TypeScript**

## License

MIT License. See [LICENSE](../../LICENSE) for details.
