import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, Plugin } from "vite";

export default defineConfig({
  plugins: [visualizer() as Plugin],
});
