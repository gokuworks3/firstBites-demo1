/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff9f3",
          100: "#fef0df",
          200: "#fddcb8",
          500: "#f17b2c",
          600: "#dd6820",
          700: "#b65018",
          900: "#5a2f13",
        },
      },
      boxShadow: {
        warm: "0 14px 34px -14px rgba(120, 63, 21, 0.35)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
