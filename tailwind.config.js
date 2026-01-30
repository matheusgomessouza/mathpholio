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
        sans: "var(--font-sans)",
        alt: "var(--font-display)",
      },
      colors: {
        "color-one": "#a6b0c3",
        "color-two": "#263041",
        "color-three": "#6b7280",
        "color-four": "#121824",
        "color-five": "#171f2e",
        "color-six": "#f2f5fb",
        "color-seven": "#0b0f14",
        "color-eight": "#f2f5fb",
        primary: "#5b8cff",
        "primary-strong": "#2f6bff",
        success: "#22c55e",
        warning: "#f59e0b",
        danger: "#ef4444",
        focus: "#93c5fd",
        slate: { 800: "#1E293B", 900: "#0F172A" },
        sky: { 400: "#38BDF8", 500: "#0EA5E9" },
      },
      padding: {
        wrapper: "9%",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
