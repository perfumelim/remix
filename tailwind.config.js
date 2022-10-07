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
      },
    },
  },
  plugins: [require("daisyui")],
};
