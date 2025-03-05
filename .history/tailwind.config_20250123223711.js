/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      spacing: {
        'header': '64px', // ヘッダーの実際の高さに応じて調整
      }
    }
  },
  plugins: [],
} 