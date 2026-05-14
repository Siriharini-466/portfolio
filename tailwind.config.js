// === tailwind.config.js ===

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      colors: {
        "brand-purple": "#7c3aed",
        "brand-blue": "#2563eb",
        "brand-cyan": "#06b6d4",
      },
      boxShadow: {
        "glow-purple": "0 0 24px rgba(124, 58, 237, 0.45), 0 0 60px rgba(124, 58, 237, 0.18)",
        "glow-blue": "0 0 24px rgba(37, 99, 235, 0.45), 0 0 60px rgba(37, 99, 235, 0.18)",
        "glow-cyan": "0 0 22px rgba(6, 182, 212, 0.45), 0 0 50px rgba(6, 182, 212, 0.16)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
      },
    },
  },
  plugins: [],
}
