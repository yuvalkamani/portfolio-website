/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: "'Russo One', sans-serif",
      },
      colors: {
        gr: "#000328",
        gl: "#00458e",
        gpl: "#ff0f7b",
        gpr: "#f89b29",
        gel: "#0965c0",
        ger: "#c53a94",
        bgray: "#111111",
        silverwhite: "#DADBDD",
        dgray: "#101010",
        abcol: "#28282B",
        abgl: "#0965c0",
        abgr: "#c53a94",
      },
    },
  },
  plugins: [],
};
