/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "club-background": "#404040",
        "club-yellow": "#FFF000",
        black: "#212529",
        white: "#FFFFFF",
        "gray": "#787878",
        "light-gray": "#E0E0E0",
        "dark-gray": "#262525B0",
      },
    },
    plugins: [],
  },
};
