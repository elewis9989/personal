import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
// import remarkCodeTitles from "remark-code-titles";
import mdx from "@astrojs/mdx";
import remarkSmartypants from "remark-smartypants";
import { remarkReadingTime } from "./plugins/remark-reading-time.mjs";

import solidJs from "@astrojs/solid-js";
import vercelStatic from "@astrojs/vercel/static";
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercelStatic(),
  integrations: [tailwind(), solidJs(), expressiveCode(), mdx()],
  markdown: {
    remarkPlugins: [remarkSmartypants, remarkReadingTime],
  },
});
