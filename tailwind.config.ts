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
        // Blue color layering system - darker to lighter for depth
        brand: {
          '900': '#1e3a8a', // Deepest/Background
          '800': '#1e40af',
          '700': '#1d4ed8',
          '600': '#2563eb', // Base
          '500': '#3b82f6',
          '400': '#60a5fa',
          '300': '#93c5fd', // Elevated
          '200': '#bfdbfe',
          '100': '#dbeafe', // Most elevated
          '50': '#eff6ff',
        },
        surface: {
          '900': '#0f172a', // Deepest surface
          '800': '#1e293b',
          '700': '#334155',
          '600': '#475569',
          '500': '#64748b',
          '400': '#94a3b8',
          '300': '#cbd5e1', // Elevated surface
          '200': '#e2e8f0',
          '100': '#f1f5f9', // Most elevated
          '50': '#f8fafc',
        },
      },
      boxShadow: {
        // Two-layer shadow system: light on top + dark on bottom
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        'soft': '0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'medium': '0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'large': '0 10px 20px -5px rgba(0, 0, 0, 0.1), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'elevated': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
        'inner-subtle': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
export default config;
