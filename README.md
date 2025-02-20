# Froglet UI Monorepo

A comprehensive React component library built with TypeScript, focusing on accessibility and customization.

## Overview

This monorepo contains:
- Core UI component library
- Storybook documentation
- Related tools and services

## Repository Structure

```
ui/
├── packages/
│   └── froglet-ui/     # Core UI component library
├── apps/
│   └── storybook/      # Component visualization
└── docs/               # Usage documentation
```

## Getting Started

### Prerequisites

- Node.js (version specified in `.nvmrc`)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/froglet-ui/ui.git
npm install
```

2. Install package-specific dependencies:

For the core UI library:
```bash
cd packages/froglet-ui
npm install
```

For Storybook:
```bash
cd apps/storybook
npm install
```

## Development

### Running Storybook

```bash
cd apps/storybook
npm run storybook
```

### Building the Library

From the project root:
```bash
npm run build
```

### Code Quality

Run from the project root:
```bash
npm run lint    # Run ESLint
npm run format  # Run Prettier
```

## Core Package: @froglet/ui

The main UI component library features:
- Minimal, user-focused design
- WCAG AAA accessibility compliance
- CSS custom property customization
- React and TypeScript foundation

For detailed documentation, see [@froglet/ui README](./packages/froglet-ui/README.md).

## Contributing

1. Clone the repository
2. Create a feature branch
3. Make your changes and add tests
4. Submit a detailed pull request

Note: Test integration is in progress. Updates will be provided soon.

## License

[MIT License](LICENSE)
