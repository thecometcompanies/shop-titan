import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // Indigo
        "background-light": "#ffffff",
        "background-dark": "#0a0a0a",
        charcoal: "#0A0A0A",
      },
      fontFamily: {
        display: ["var(--font-inter)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-crimson)", "serif"],
      },
      borderRadius: {
        DEFAULT: "8px",
      },
      animation: {
        "carousel-scroll": "scroll 40s linear infinite",
        "gradient-flow-1": "gradientFlow1 20s ease-in-out infinite",
        "gradient-flow-2": "gradientFlow2 25s ease-in-out infinite",
        "gradient-flow-3": "gradientFlow3 30s ease-in-out infinite",
        "gradient-flow-4": "gradientFlow4 22s ease-in-out infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        gradientFlow1: {
          "0%, 100%": {
            transform: "translateX(0) translateY(0) scale(1)",
            opacity: "0.4"
          },
          "50%": {
            transform: "translateX(50px) translateY(-30px) scale(1.1)",
            opacity: "0.6"
          },
        },
        gradientFlow2: {
          "0%, 100%": {
            transform: "translateX(0) translateY(0) scale(1)",
            opacity: "0.3"
          },
          "50%": {
            transform: "translateX(-40px) translateY(40px) scale(1.05)",
            opacity: "0.5"
          },
        },
        gradientFlow3: {
          "0%, 100%": {
            transform: "translateX(0) translateY(0) scale(1)",
            opacity: "0.35"
          },
          "50%": {
            transform: "translateX(30px) translateY(-20px) scale(1.08)",
            opacity: "0.55"
          },
        },
        gradientFlow4: {
          "0%, 100%": {
            transform: "translateX(0) translateY(0) rotate(0deg)",
            opacity: "0.25"
          },
          "50%": {
            transform: "translateX(-20px) translateY(30px) rotate(2deg)",
            opacity: "0.4"
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
