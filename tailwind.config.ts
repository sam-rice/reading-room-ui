import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "theme-text": "text 5s ease infinite",
        "theme-slow-spin": "spin 35s linear infinite"
      },
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
        "theme-gray-50": "#F2F2F2",
      },
      borderRadius: {
        "theme-small": "4px",
        "theme-large": "8px",
      },
      borderColor: {
        "theme-gray-400": "#9E9E9E",
        "theme-gray-200": "#D9D9D9",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      textColor: {
        "theme-gray-500": "#808080",
        "theme-gray-400": "#9E9E9E",
        "theme-gray-300": "#959595",
      },
    },
  },
  plugins: [],
}
export default config
