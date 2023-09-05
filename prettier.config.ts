/** @type {import("prettier").Config} */

import { type Config } from "prettier";

module.exports = {
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
} satisfies Config;
