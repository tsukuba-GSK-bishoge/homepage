import { defineConfig } from "astro/config";
import googleFontsOptimizer from "astro-google-fonts-optimizer";

export default defineConfig({
  integrations: [googleFontsOptimizer()],
});

// @ts-check

// https://astro.build/config
