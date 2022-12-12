/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg": "url('../src/images/main-bg.jpg')",
      }
    },
  },
  plugins: [],
}
