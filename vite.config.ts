/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [require("autoprefixer")],
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setup.ts",
    passWithNoTests: true,
    coverage: {
      provider: "istanbul",
    },
  },
});
