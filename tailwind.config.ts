import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'pe-teal': {
          DEFAULT: '#319795',
          600: '#2C7A7B',
          800: '#234E52',
        },
        'pe-dark': '#1D4044',
      },
    },
  },
  plugins: [],
};
export default config;
