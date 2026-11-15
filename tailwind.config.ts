import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        refinery: {
          pitch: "#070B14",
          navy: "#0F172A",
          surface: "#0D1527",
          card: "#131F37",
          elevated: "#1A294A",
          border: "rgba(148, 163, 184, 0.18)",
          tealBorder: "rgba(20, 184, 166, 0.3)",
        },
        clean: {
          base: "#F8FAFC",
          surface: "#FFFFFF",
          card: "#F1F5F9",
          elevated: "#E2E8F0",
          border: "#CBD5E1",
          text: "#0F172A",
          muted: "#64748B",
        },
        mineral: {
          lithium: "#06B6D4",
          cobalt: "#3B82F6",
          neodymium: "#A855F7",
          copper: "#F97316",
        },
        teal: {
          50: "#F0FDFA",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
          700: "#0F766E",
          800: "#115E59",
          900: "#134E4A",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "var(--font-jetbrains-mono)",
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(20, 184, 166, 0.25)",
        "glow-lg": "0 0 45px -10px rgba(20, 184, 166, 0.35)",
        metallic: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
