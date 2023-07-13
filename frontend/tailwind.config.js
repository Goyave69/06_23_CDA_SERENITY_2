/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgLogin: "url('./src/assets/img/medecin-welcome.webp')",
      },
    },
  },
  plugins: [],
};
