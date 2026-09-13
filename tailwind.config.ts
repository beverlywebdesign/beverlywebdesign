import type { Config } from "tailwindcss";

/**
 * Built Surface tokens live in app/globals.css (@theme).
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
        paper: "#F3F1EC",
        "paper-elevated": "#FFFEFA",
        ink: "#0B0C0F",
        signal: "#1A3AFF",
        "signal-deep": "#0A1F8C",
        mist: "#D8D4CB",
        mute: "#5C5A55",
        "code-bg": "#14151A",
        "code-card": "#1C1E26",
        "code-glow": "#7C9BFF",
      },
    },
  },
  plugins: [],
};

export default config;
