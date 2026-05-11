/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "#4f46e5",
        secondary: "#9333ea",
        accent: "#db2777",
        border: "hsl(var(--border))",
        neon: {
          blue: "#2563eb",
          purple: "#7c3aed",
          pink: "#db2777",
        }
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #00f3ff, 0 0 10px #00f3ff" },
          "100%": { boxShadow: "0 0 20px #00f3ff, 0 0 40px #00f3ff" },
        }
      },
      backgroundImage: {
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backdropBlur: {
        xs: "2px",
      }
    },
  },
  plugins: [],
}

