/* eslint-disable */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      //disable eslint for this line
      backgroundColor: {
        "primary-color": "#e0e8f6",
        "secondary-color": "#b09c8b",
        "tertiary-color": "#b8cbec",
        "quaternary-color": "#2b3f8b",
      },
      textColor: {
        "primary-color": "#CCDAF1",
        "secondary-color": "#1b4762",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        body: ["Mooli"],
      },
    },
  },
  plugins: [],
};

export default config;
