/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        vanillagrey: " #f6f5f3",
        darkgrey: "#3d3d3f",
        limegreen: "#7dce94",
        whiteish: "#f9f8fd",
        customGreen: {
          200: "#9DC88D",
          400: "#4D774E",
          600: "#164A41",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
