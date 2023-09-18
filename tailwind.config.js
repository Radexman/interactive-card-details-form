/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          linearGradient: {
            start: "hsl(249, 99%, 64%)",
            end: "hsl(278, 94%, 30%)",
          },
          red: "hsl(0, 100%, 66%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          lightGrayishViolet: "hsl(270, 3%, 87%)",
          darkGrayishVioler: "hsl(279, 6%, 55%)",
          veryDarkViolet: "hsl(278, 68%, 11%)",
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
