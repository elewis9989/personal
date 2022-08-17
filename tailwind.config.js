/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'yellow-pastel': '#fffde3',
        'pink-pastel': '#ffb8d887',
        'purple-pastel': '#D4C3F9',
        'blue-pastel': '#372772',
        'gray-pastel': '#8695A4',
      },
      fontFamily: {
        Gloria: ['Gloria Hallelujah', 'ui-sans-serif', 'system-ui'],
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
      },
    },
  },
  plugins: [],
};
