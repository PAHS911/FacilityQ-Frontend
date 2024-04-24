/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      screens: {
        xl:"1660px",
        lx:"1440px",
        lg: "1292px",
        ml: "1024px",
        sl:"850px",
        ss:"701px",
        sx:"597px",
        ms:"530px",
        ls:"435px",
        xs:"375px",
      },
    },
  },
  plugins: [],
};
