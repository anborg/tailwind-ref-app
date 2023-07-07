/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: {
    relative: true, //all paths relative to location of this config file [if false, paths are relative to CWD]
    files: [
      //DO NOT include css
      "public/index.html",
      "components/**/*.{html,js}", //
      "pages/**/*.{html,js}",
      "src/**/*.js", // for any javascript files that maipulate css classes
    ],
  }, //
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true, //make container center global
      padding: "2rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
};
