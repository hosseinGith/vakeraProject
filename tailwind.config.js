/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-image": "url('../assets/images/-679642550-1-min.gif')",
      },
      screens: {
        mdHe: { raw: "(min-height: 760px)" },
        highHeight: { raw: "(min-height: 880px)" },
        smH: { raw: "(min-height: 650px)" },
        sm: "300px",
        md: "540px",
      },
    },
    colors: {
      primary: "#d6195a",
      fontColors: "#fff",
      mainPageMessage: "#000",
      mainYellow: "#f4bf68",
      SNStyle: "rgb(0, 88, 0)",
      loginForm: "rgba(25, 135, 84, 0.25)",
      btnLogin: "#212529",
      lowBlack: "#212121",
      lowBlue: "#cff4fc",
      borderComp: "#0a3622",
      bgTitleComp: "#d1e7dd",
      yellow: "#ffc107",
    },
  },
  plugins: [],
};
