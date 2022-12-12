/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // デフォルトの設定を上書きする。
    extend: {
      // デフォルトの設定に追加する。
      colors: {
        primary: {
          500: "#0d6efd",
          600: "#0b5ed7",
        }
      }
    },
  },
  plugins: [],
}
