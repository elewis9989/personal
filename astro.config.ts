import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import remarkSmartypants from "remark-smartypants";
import { remarkReadingTime } from "./plugins/remark-reading-time.mjs";

import solidJs from "@astrojs/solid-js";
import expressiveCode from "astro-expressive-code";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://roze.dev",
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [tailwind(), solidJs(), expressiveCode(), mdx()],
  markdown: {
    remarkPlugins: [remarkSmartypants, remarkReadingTime],
  },
});
