import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
// import googleFontsOptimizer from 'astro-google-fonts-optimizer'; // ← 一時的に無効化

export default defineConfig({
  site: "https://bishojo.gsk-tsukuba.net",
  integrations: [sitemap()],
});
