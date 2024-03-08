import type { Config } from "tailwindcss";

const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#dce2de",
          200: "#b8c5bc",
          300: "#95a89b",
          400: "#718b79",
          500: "#4e6e58",
          600: "#3e5846",
          700: "#2f4235",
          800: "#1f2c23",
          900: "#101612"
},
      },
      spacing: {
        '1/24': '4.15%',
        '1/10': '10%'
      }
    },
  },
  plugins: [],
};
export default config;
