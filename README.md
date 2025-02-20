## Froglet UI Monorepo

Welcome to the Froglet UI monorepo! This repository contains the code for the Froglet UI component library,
as well as related tools and services. The monorepo structure allows for centralized development of the UI
components and related applications like Storybook, ensuring consistency and ease of updates across all packages.

## Structure

This monorepo includes multiple packages and apps. Here’s a quick overview of the structure:

- `packages/froglet-ui`: The core UI component library, built with React and TypeScript.
- `apps/storybook`: The Storybook app for viewing and interacting with the components in isolation.
- `docs/`: Documentation for the UI library, including guidelines for usage and customization.

## Installation

To get started with the monorepo, follow the steps below.
Clone the Repository

```bash
git clone https://github.com/froglet-ui/ui.git
npm install
```

Install Dependencies for Specific Packages

You can install dependencies for individual packages, for example:

Install dependencies for the core UI package

```bash
cd packages/froglet-ui
npm install
```

Install dependencies for Storybook

```bash
cd apps/storybook
npm install
```

## Running Storybook

Once dependencies are installed, you can run Storybook to view the components:

From the project root, navigate to the Storybook app

```bash
cd apps/storybook
npm run storybook
```

Storybook will launch, and you can interact with the components in isolation.

## Running the Project

You can also build and test the core library using the following command from the root:

To build the production version of the UI library, run the following command from the root:

```bash
npm run build
```

## Development

Make sure you are using Node.jsspecified in the `.nvmrc` file for optimal compatibility.

### Linting and Formatting

We use ESLint for linting and Prettier for formatting. To lint and format your code, run:

From the root of the project

```bash
npm run lint
npm run format
```

## Running Tests

We are working on integrating automated tests into the project. Stay tuned for future updates on this section.

## Contributing

We welcome contributions to Froglet UI! Here’s how you can get started:

- Fork the repository.
- Create a feature branch.
- Make your changes and write tests.
- Submit a pull request with a detailed description of your changes.

## Packages

### @froglet/ui

This is the core package containing the UI components. It is designed to be minimal, accessible, and
customizable using CSS custom properties.

See the [@froglet/ui README](./packages/froglet-ui/README.md) for more details on usage, customization, and contributing.

### Features

- Minimal design with a focus on usability.
- Customizable using CSS custom properties.
- WCAG AAA accessibility where possible.
- Built with React and TypeScript.

## License

MIT License. See [LICENSE](LICENSE) for details.
