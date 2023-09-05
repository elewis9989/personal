/** @type {import('tailwindcss').Config} */

import { type Config } from "tailwindcss";

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "urdu-nastaliq": ["Noto Nastaliq Urdu", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        melon: "#F7BFB5",
        smoke: "#45434C",
        bark: "#362C28",
        "myrtle-green": "#A8BA9A",
      },
    },
  },
  plugins: [],
} satisfies Config;
