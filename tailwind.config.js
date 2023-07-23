/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx,css}"],
  theme: {
    extend: {
      spacing: {
        18: "4.5rem",
      },
      fontFamily: {
        LilitaOne: ["Lilita One", "Cursive"],
      },
      colors: {
        custom_green: "#9FFF5E",
      },
      height: {
        "9/10": "90%",
      },
      width: {
        "9/10": "90%",
      },
    },
    plugins: [],
  },
};
