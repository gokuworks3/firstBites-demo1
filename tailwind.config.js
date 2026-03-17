/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fresh: {
          orange: "#ea580c",
          gold: "#f59e0b",
          cream: "#fffaf0",
          brown: "#3b1f12",
          espresso: "#2a1a12",
          sand: "#fdf2df",
        },
      },
      boxShadow: {
        soft: "0 14px 40px -18px rgba(59, 31, 18, 0.38)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        display: ["'Playfair Display'", "serif"],
      },
    },
  },
  plugins: [],
};
