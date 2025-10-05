import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import path from "path";

export default defineConfig({
  plugins: [react(), visualizer()],
  test: {
    // Using 'v8' as the coverage provider for faster and native code coverage in Node.js.
    // Other providers like 'istanbul' are available, but 'v8' is recommended for simplicity and performance.
    coverage: {
      provider: "v8",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
