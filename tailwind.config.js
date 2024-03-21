/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playFair: ["Playfair-Display"],
        Montserrat: ["Montserrat", "sans-serif"],
        manrope: ["Manrope"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night"],
  },
};
