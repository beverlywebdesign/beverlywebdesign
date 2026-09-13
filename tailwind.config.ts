import type { Config } from "tailwindcss";

/**
 * Iteration v2 tokens live in app/globals.css (@theme).
 * This file is kept for editor tooling and is not the Tailwind v4 source of truth.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F7F7F5",
        elevated: "#FFFFFF",
        "paper-elevated": "#FFFFFF",
        ink: "#111111",
        signal: "#1A3AFF",
        line: "#D6D6D2",
        mute: "#4A4A46",
      },
    },
  },
  plugins: [],
};

export default config;
