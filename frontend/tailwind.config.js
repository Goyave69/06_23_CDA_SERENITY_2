/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgLogin: "url('./src/assets/img/baniere-medical.jpg')",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        rLight: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
