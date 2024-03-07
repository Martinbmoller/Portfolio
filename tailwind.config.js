/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        500: "500px",
        1000: "1000px",
      },
    },
  },
  plugins: [],
};
