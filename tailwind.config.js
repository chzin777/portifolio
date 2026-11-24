/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#09090B",
          900: "#0C0C12",
          850: "#111118",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee 40s linear infinite reverse",
        aurora: "aurora 18s ease-in-out infinite alternate",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        aurora: {
          "0%": { transform: "translate3d(-8%, -4%, 0) rotate(0deg) scale(1)" },
          "50%": { transform: "translate3d(6%, 4%, 0) rotate(8deg) scale(1.08)" },
          "100%": { transform: "translate3d(-4%, 6%, 0) rotate(-6deg) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
