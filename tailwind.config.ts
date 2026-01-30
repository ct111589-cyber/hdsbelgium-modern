import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { accent: "#e63946", brand: { 700: "#0b3a66" } }
    }
  },
  plugins: []
} satisfies Config;
