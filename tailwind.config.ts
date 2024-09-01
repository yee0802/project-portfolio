import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "move-up": {
          from: {
            transform: "translateY(10px)",
            opacity: "0.001",
          },
          to: {
            transform: "translateY(0px)",
            opacity: "1",
          },
        },
        "move-down": {
          from: {
            transform: "translateY(-10px)",
            opacity: "0.001",
          },
          to: {
            transform: "translateY(0px)",
            opacity: "1",
          },
        },
        "fade-in": {
          from: {
            opacity: "0.001",
          },
          to: {
            opacity: "1",
          },
        },
      },
      animation: {
        "move-up": "move-up 1s linear forwards",
        "move-down": "move-down 1s linear forwards",
        "fade-in": "fade-in 1s linear forwards 1s",
      },
      colors: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
