import type { Config } from "tailwindcss"
const plugin = require('tailwindcss/plugin')

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      textShadow: {
        sm: '0 1px 2px #000',
        DEFAULT: '0 2px 4px #000',
        lg: '0 8px 16px #000',
      },
      colors: {
        primary: {
          100: "#d7f6cc",
          200: "#afed99",
          300: "#86e366",
          400: "#5eda33",
          500: "#36d100",
          600: "#2ba700",
          700: "#207d00",
          800: "#165400",
          900: "#0b2a00"
        },
      },
      spacing: {
        '1/24': '4.15%',
        '1/10': '10%'
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value : string) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
} satisfies Config

export default config