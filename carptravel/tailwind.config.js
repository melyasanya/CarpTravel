/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      modalBackground: "#010a05bf",
      white: "#ffffff",
      white200: "#ffffff33",
      white500: "#ffffff80",
      background: "#020f0880",
      backgroundInput: "#ffffff0d",
      incorrect: "#FF5757",
    },
    extend: {
      fontFamily: {
        Karantina: "Karantina, sans-serif",
      },
      screens: {
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
