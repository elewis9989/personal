import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import remarkSmartypants from "remark-smartypants";
import { remarkReadingTime } from "./plugins/remark-reading-time.mjs";

import solidJs from "@astrojs/solid-js";
import expressiveCode from "astro-expressive-code";
import vercelStatic from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://roze.dev",
  output: "static",
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [tailwind(), solidJs(), expressiveCode(), mdx()],
  markdown: {
    remarkPlugins: [remarkSmartypants, remarkReadingTime],
  },
});
