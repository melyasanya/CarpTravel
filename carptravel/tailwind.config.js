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
    },
    extend: {
      fontFamily: {
        Karantina: "Karantina, sans-serif",
      },
    },
  },
  plugins: [],
};
