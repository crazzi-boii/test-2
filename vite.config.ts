import { defineConfig } from "vite";

export default defineConfig({
  test: {
    reporters: ["json", "default"],
    outputFile: "./reports/test-output.json",
    globals: true,
  },
});
