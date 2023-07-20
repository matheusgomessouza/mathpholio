/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{jsx,tsx}",
    "./src/components/**/*.{jsx,tsx}",
    "./src/app/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-khand)",
        alt: "var(--font-anton)",
      },
      colors: {
        black: "#000",
        gray: "#636363",
        "light-gray": "#8C8C8C",
        "medium-gray": "#4D4D4D",
        "darker-gray": "#2E2E2E",
        background: "#D9D9D9",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
