/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blood-red": "#D90429",
        "heart-red": "#EF233C",
        steel: "#8D99AE",
        "steel-500": "#C0C6D1",
        stone: "#2B2D42",
        cloud: "#F5F5F5",
        white: "#FFFFFF",
      },
      fontFamily: {
        display: ["Trade Winds", "sans-serif"],
        sans: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        light: 300,
      },
    },
    screens: {
      desktop: "1420px",
    },
  },
  plugins: [],
};
