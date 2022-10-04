/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  themes: {
    colors: {
      primary: " #f6f5f3",
      secondary: "#3d3d3f",
      limegreen: "#7dce94",
      neutral: "#f9f8fd",
    },
  },
};
