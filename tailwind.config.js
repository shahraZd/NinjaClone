/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      screens: {
        sm: { raw: "(max-width: 1000px)" },
        // => @media (max-width: 1000px)
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        gradient: "linear-gradient(180deg,#d8d7f4 0,#ffedf7 100%)",
      },
      translate: {
        1: "1.875rem",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.12rem",
        "5xl": "3.25rem",
        "6xl": "4.25rem",
      },
      colors: {
        transparent: "transparent",
        primary: {
          100: "#e6fdf7",
          200: "#99f6e0",
          300: "#66f1d0",
          400: "#33edc1",
          500: "#00e8b1",
          600: "#00ba8e",
          700: "#008b6a",
          800: "#005d47",
          900: "#001712",
          1000: "#070F07",
        },
        primarys: {
          100: "#ecebf9",
          200: "#b1b0e8",
          300: "#8a88dd",
          400: "#6361d1",
          500: "#3c39c6",
          600: "#302e9e",
          700: "#242277",
          800: "#18174f",
          900: "#0c0b28",
          1000: "#000",
        },
        white: "#ffffff",
        black: "#070F07",
        purple: "#641DEB",
        midnight: "#142DE0",
      },
    },
  },
  plugins: [],
});
