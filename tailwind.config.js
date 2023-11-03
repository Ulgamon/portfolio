/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pastelBlue: {
          primary: "#79addc",
          secondary: "#dde1e7",
        },
        pastelGreen: {
          primary: "#adf7b6",
          secondary: "#c9e4de",
        },
        pastelOrange: {
          primary: "#ffc09f",
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
