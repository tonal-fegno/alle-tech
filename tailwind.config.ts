import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #2c8fce 0%, #2c8fce 100%)",
      },
      colors: {
        primary: "#2c8fce", // Primary Color/Blue
        "dark-blue": "#001545", // Secondary Color/Dark Blue
        "body-gray": "#4C505B", // Other Color/Gray
        ink: "#000B22", // Other Color/Black
        "bg-1": "#F4F5F8", // Background Color/BG 1
        "bg-2": "#F1F5FB", // Background Color/BG 2
        "bg-3": "#F6F6F6", // Background Color/BG 3
        "border-gray": "#B2B6C2", // Other Color/Border
        "white-13": "rgba(255, 255, 255, 0.13)",
        "white-42": "rgba(255, 255, 255, 0.42)",
        // Solution detail page (dark hero/section) tokens — aliases onto dark-blue
        "brand-navy": "#001545",
        "brand-navy-dark": "#000B2E",
        "brand-navy-light": "#0A2A6B",
        "brand-bg": "#FFFFFF",
        "brand-accent-blue": "#0da2ff",
        "brand-accent-blue-dark": "#0092e0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      fontSize: {
        // Framer text styles
        h1: ["68px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        h2: ["48px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        h4: ["32px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        h6: ["24px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-20": ["20px", { lineHeight: "1.4" }],
        "body-18": ["18px", { lineHeight: "1.5" }],
        "body-16": ["16px", { lineHeight: "1.5" }],
      },
      maxWidth: {
        container: "1320px",
      },
      borderRadius: {
        card: "16px",
        section: "20px",
        "4xl": "2rem",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
      spacing: {
        "4.75": "1.1875rem",
        "6.5": "1.625rem",
        "10.5": "2.625rem",
      },
    },
  },
  plugins: [],
};

export default config;
