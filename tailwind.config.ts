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
        "theme-beige-500": "#E4DABB",
        "theme-beige-400": "#F0EAD7",
        "theme-beige-300": "#EFE7CC",
        "theme-beige-200": "#FDF8E9",
        "theme-gray-500": "#808080",
        "theme-gray-400": "#9E9E9E",
        "theme-gray-300": "#C9C9C9",
        "theme-gray-200": "#D9D9D9",
        "theme-gray-100": "#EDEDED",
        "theme-gray-50": "#F2F2F2"
      },
      borderRadius: {
        "theme-small": "4px",
        "theme-large": "8px"
      },
      borderColor: {
        "theme-gray-400": "#9E9E9E",
        "theme-gray-200": "#D9D9D9"
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
