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
        "theme-beige-500": "#D7CFB1",
        "theme-beige-400": "#F0EAD7",
        "theme-gray-500": "#808080",
        "theme-gray-400": "#9E9E9E"
      },
      borderRadius: {
        "theme-small": "4px",
        "theme-large": "8px"
      },
      textColor: {
        "theme-gray-400": "#9E9E9E"
      }
    },
  },
  plugins: [],
};
export default config;
