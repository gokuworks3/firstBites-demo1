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
          rose: "#f97316",
          amber: "#d97706",
        },
      },
      boxShadow: {
        soft: "0 14px 40px -18px rgba(59, 31, 18, 0.38)",
        glow: "0 0 40px -8px rgba(234, 88, 12, 0.45)",
        "glow-lg": "0 0 80px -12px rgba(234, 88, 12, 0.35)",
        card: "0 4px 24px -6px rgba(59, 31, 18, 0.18), 0 1px 4px rgba(59,31,18,0.08)",
        "card-hover": "0 20px 60px -12px rgba(59, 31, 18, 0.3)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        display: ["'Playfair Display'", "serif"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(3deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", boxShadow: "0 0 0 0 rgba(234,88,12,0.5)" },
          "70%": { transform: "scale(1)", boxShadow: "0 0 0 10px rgba(234,88,12,0)" },
          "100%": { transform: "scale(0.95)", boxShadow: "0 0 0 0 rgba(234,88,12,0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "float-slow": "float-slow 5s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite",
        marquee: "marquee 28s linear infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out both",
        "spin-slow": "spin-slow 20s linear infinite",
      },
    },
  },
  plugins: [],
};
