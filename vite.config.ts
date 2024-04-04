/// <reference types="vitest" />

import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    cssMinify: "lightningcss",
  },
  css: {
    transformer: "lightningcss",
    lightningcss: {
      targets: browserslistToTargets(browserslist()),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./test/setup.ts",
    passWithNoTests: true,
    coverage: {
      provider: "v8",
    },
  },
});
