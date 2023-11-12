/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#19425F",
      },
      secondary: {
        DEFAULT: "#F2F2F2",
      },
      accent: {
        DEFAULT: "#F2C94C",
      },
      red: {
        DEFAULT: "#FF0000",
      },
      black: {
        DEFAULT: "#000000",
        hover: "#222222",
      },
      blue: {
        light: "#C3E6FF",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
      transparent: {
        DEFAULT: "transparent",
      },
    },
    extend: {
      fontFamily: {
        mont: ['"Montserrat"', "sans-serif"],
        sans: ['"Salsa"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
