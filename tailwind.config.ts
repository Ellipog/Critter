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
        light: {
          bg: {
            primary: "#FFFFFF",
            secondary: "#F3F4F6",
          },
          text: {
            primary: "#1F2937",
            secondary: "#6B7280",
          },
          accent: {
            green: "#10B981",
            lightGreen: "#D1FAE5",
          },
          border: "#E5E7EB",
        },
        dark: {
          bg: {
            primary: "#1F2937",
            secondary: "#111827",
          },
          text: {
            primary: "#F9FAFB",
            secondary: "#D1D5DB",
          },
          accent: {
            green: "#10B981",
            darkGreen: "#065F46",
          },
          border: "#374151",
        },
      },
    },
  },
  plugins: [],
};
export default config;
