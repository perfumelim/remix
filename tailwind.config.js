const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      limegreen: "#7dce94",
      whiteish: "#f9f8fd",
      zinc: colors.zinc,
      green: colors.green,
      emerald: colors.emerald,
      customGreen: {
        200: "#9DC88D",
        400: "#4D774E",
        600: "#164A41",
      },
      customGrey: {
        100: "#f6f5f3",
        200: "#daded4",
        300: "#3c403d",
        400: "#3d3d3f",
      },
    },
    extend: {
      grayscale: {
        60: "60%",
      },
      transitionProperty: {
        filter: "filter",
      },
    },
  },
  plugins: [],
};
