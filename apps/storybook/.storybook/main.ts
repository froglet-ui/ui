import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function getAbsolutePath(value: string) {
  return path.dirname(
    fileURLToPath(import.meta.resolve(`${value}/package.json`)),
  );
}

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [getAbsolutePath("@storybook/addon-docs")],
  framework: {
    name: getAbsolutePath("@storybook/react-vite") as "@storybook/react-vite",
    options: {},
  },
  viteFinal(config) {
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@froglet/ui": path.resolve(
        __dirname,
        "../../../packages/froglet-ui/src/index.ts",
      ),
    };
    return config;
  },
};

export default config;
