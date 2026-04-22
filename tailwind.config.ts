import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0b0d",
        bg2: "#121214",
        bg3: "#17171a",
        line: "#26262b",
        line2: "#2e2e33",
        text: "#f5f5f2",
        text2: "#b8b5ad",
        text3: "#7a776f",
        accent: "#f5d000",
        accentInk: "#111111",
        success: "#7de08f",
        purple: "#b89cf7",
        blue: "#7ab7ff",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "Menlo", "monospace"],
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
