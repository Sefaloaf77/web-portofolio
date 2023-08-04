/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      strokeWidth: {
        5: "5px",
        3: "3px",
      },
      boxShadow: {
        solid: "0.2em 0.2em #000",
        solidHover: "0.0em 0.0em #000",
      },
      colors: {
        primary: "#282B38",
        secondary: "#35394A",
        ownOrange: "#FFC814",
        ownOrangeHover: "#FFD95C",
      },
      // letterSpacing: {
      //   widest: ".25em",
      // },
    },
  },
  plugins: [require("daisyui")],
};
