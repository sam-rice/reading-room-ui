import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        // "theme-beige-600": "#D7CFB1",
        "theme-beige-500": "#E4DABB",
        "theme-beige-400": "#F0EAD7",
        "theme-beige-300": "#EFE7CC",
        "theme-gray-500": "#808080",
        "theme-gray-400": "#9E9E9E",
        "theme-gray-300": "#C9C9C9",
        "theme-gray-200": "#D9D9D9"
      },
      borderRadius: {
        "theme-small": "4px",
        "theme-large": "8px"
      },
      textColor: {
        "theme-gray-500": "#808080",
        "theme-gray-400": "#9E9E9E",
        "theme-gray-300": "#959595"
      }
    },
  },
  plugins: [],
};
export default config;
