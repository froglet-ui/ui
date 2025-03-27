import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: {
    entry: "src/index.ts",
    resolve: true,
  },
  sourcemap: true,
  clean: true,
  target: "esnext",
  external: ["react", "react-dom"],
  outDir: "dist",
  splitting: false,
  treeshake: true,
  minify: true,
  banner: {
    js: "'use client';",
  },
  esbuildOptions(options) {
    options.outbase = "src";
    options.keepNames = true;
  },
});
