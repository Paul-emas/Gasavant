/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1800px",
      },
      colors: {
        primary: {
          50: "#E6F0FC",
          100: "#B0D1F7",
          200: "#8ABAF3",
          300: "#559BED",
          400: "#3487E9",
          500: "#0169E4",
          600: "#0160CF",
          700: "#014BA2",
          800: "#013A7D",
          900: "#013A7D",
        },
        neutral: {
          0: "#ffffff",
          10: "#fafafa",
          20: "#f5f5f6",
          30: "#ebebec",
          40: "#dedfe0",
          50: "#bfc1c4",
          60: "#b0b2b6",
          70: "#a3a6aa",
          80: "#94979c",
          90: "#85898e",
          100: "#757a80",
          200: "#666b72",
          300: "#575d64",
          400: "#4a5058",
          500: "#3b424a",
          600: "#2e353e",
          700: "#1c242e",
          800: "#0d1520",
          900: "#000914",
        },
        error: {
          50: "#fbe8e8",
          100: "#f3b9b9",
          300: "#e56767",
          500: "#d81c1c",
          700: "#991414",
        },
      },
      fontSize: {
        "3.2xl": "13px",
        "4.1xl": "40px",
        "4.5xl": "19px",
        "5.5xl": "57px",
      },
      fontFamily: {
        switz: [`Switzer`, ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: { extend: { margin: ["first", "last"] } },
  plugins: [],
};
