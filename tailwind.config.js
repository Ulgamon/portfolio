/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pastelBlue: {
          primary: "#1D1D94",
          secondary: "#dde1e7",
        },
        pastelGreen: {
          primary: "#1D941D",
          secondary: "#F7DBAD",
          tertiary: "#ADC9F7",
        },
        pastelOrange: {
          primary: "#941D1D",
          secondary: "#f7d9c4",
          complementarySec: "#C4E2F7",
          triadGreen: "#E2F7C4",
          error: "#E54D03",
        },
        dirtyWhite: "#eff0ff",
      },
    },
  },
  plugins: [],
};
