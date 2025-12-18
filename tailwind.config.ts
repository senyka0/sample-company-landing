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
        primary: {
          DEFAULT: '#a3b087',
          dark: '#435663',
          light: '#fff8d4',
        },
        secondary: {
          DEFAULT: '#313647',
          dark: '#435663',
        },
        text: {
          DEFAULT: '#313647',
          light: '#435663',
          muted: '#888',
        },
        background: {
          DEFAULT: '#ffffff',
          alt: '#f5f5f5',
          dark: '#313647',
          cream: '#fff8d4',
        },
      },
    },
  },
  plugins: [],
};
export default config;
