import { defineConfig } from "astro/config";
import googleFontsOptimizer from "astro-google-fonts-optimizer";

export default defineConfig({
  integrations: [googleFontsOptimizer()],
});

// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
