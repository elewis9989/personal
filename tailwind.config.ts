/** @type {import('tailwindcss').Config} */

import { type Config } from "tailwindcss";

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1440px) { ... }
      "3xl": "2560px",
    },
    extend: {
      fontFamily: {
        "urdu-nastaliq": ["Noto Nastaliq Urdu", "serif"],
        inter: ["Inter", "sans-serif"],
        avenir: ["Avenir", "sans-serif"],
      },
      colors: {
        melon: "#F7BFB5",
        smoke: "#45434C",
        bark: "#362C28",
        "myrtle-green": "#A8BA9A",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
