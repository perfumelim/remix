/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        limegreen: "#7dce94",
        whiteish: "#f9f8fd",
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
      backgroundImage: {
        "green-paint":
          "url('https://images.unsplash.com/photo-1585483051403-1c902c941a29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
      },
    },
  },
  plugins: [require("daisyui")],
};
