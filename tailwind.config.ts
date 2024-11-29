import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          100: "#FFFFFF",
          98: "#F9F9FF",
          95: "#EBF1FF",
          90: "#D4E3FF",
          80: "#A5C8FF",
          70: "#71ADFF",
          60: "#2592FF",
          50: "#0078D9",
          40: "#005FAE",
          30: "#004785",
        },
        "dodger-blue": {
          "50": "#eef8ff",
          "100": "#d9efff",
          "200": "#bce3ff",
          "300": "#8ed3ff",
          "400": "#59b8ff",
          "500": "#2592ff",
          "600": "#1b79f5",
          "700": "#1463e1",
          "800": "#174fb6",
          "900": "#19458f",
          "950": "#142b57",
        },
        lavender: {
          "50": "#faf5ff",
          "100": "#f3e7ff",
          "200": "#e8d4ff",
          "300": "#d7b2ff",
          "400": "#b46eff",
          "500": "#a551fb",
          "600": "#902eef",
          "700": "#7b1ed2",
          "800": "#691eab",
          "900": "#56198a",
          "950": "#390566",
        },
        saffron: {
          "50": "#fefbec",
          "100": "#fcf3c9",
          "200": "#f9e68e",
          "300": "#f6d353",
          "400": "#f4bf2a",
          "500": "#eda013",
          "600": "#d27a0d",
          "700": "#ae570f",
          "800": "#8e4312",
          "900": "#753812",
          "950": "#431c05",
        },
      },
      boxShadow: {
        'thick-black': '3px 3px 0px 2px rgba(0,0,0,1)',
      }
    },
  },
  plugins: [],
};
export default config;
