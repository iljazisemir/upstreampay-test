/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "primary-color": "var(--primary-color)",
      "secondary-color": "var(--secondary-color)",
      "secondary-color-light": "var(--secondary-color-light)",
      white: "#FFFFFF",
      black: "#000000",
    },
    extend: {},
  },
  plugins: [],
};
