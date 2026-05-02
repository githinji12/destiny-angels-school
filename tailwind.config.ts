import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          900: "#1E3A8A",
          800: "#2563EB",
          700: "#3B82F6",
          600: "#60A5FA",
          500: "#93C5FD",
          100: "#DBEAFE",
          50: "#EFF6FF",
        },
        peach: {
          700: "#EA580C",
          500: "#F97316",
          300: "#FDBA74",
          200: "#FED7AA",
          100: "#FFE8CC",
          50: "#FFF4E6",
        },
        // ✅ Fix: Use standard naming
        background: {
          light: "#F3F4F6",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(30, 58, 138, 0.08)",
        card: "0 8px 24px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;