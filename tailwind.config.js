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
        brand: {
          blue: {
            default: "#023e8a",
            lighter: "#0077b6",
            darker: "#03045e",
          },
          yellow: {
            default: "#ffd000",
            lighter: "#ffdd00",
            darker: "#ffb700",
          },
          red: {
            default: "rgb(234, 11, 15)",
            lighter: "rgb(255, 43, 10)",
            light: "rgb(255, 11, 11)",
            dark: "rgb(182, 8, 11)",
            darker: "rgb(157, 7, 10)",
          },
          dark: {
            default: "rgb(28, 29, 30)",
            lighter: "rgb(40, 41, 42)",
            light: "rgb(33, 34, 35)",
          },
        },
      },
      backgroundImage: {
        hero: "url('/assets/hero.jpg')",
      },
      fontFamily: {
        nunito: "var(--font-nunito)",
        oswald: "var(--font-oswald)",
      },
    },
  },
  plugins: [],
};
