/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pastelBlue: {
          primary: "#039be5",
          secondary: "#dde1e7",
        },
        pastelGreen: {
          primary: "#77dd77",
          secondary: "#F7DBAD",
          tertiary: "#ADC9F7",
        },
        pastelOrange: {
          primary: "#ffa071",
          secondary: "#f7d9c4",
          complementarySec: "#C4E2F7",
          triadGreen: "#E2F7C4",
        },
        dirtyWhite: "#eff0ff",
      },
    },
  },
  plugins: [],
};
