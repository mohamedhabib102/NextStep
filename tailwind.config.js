/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "bg-main": 'var(--bg-main)',
        "color-main": "var(--bg-main)",
        "custom-bg": "var(--color-active)",
      },
    },
  },
  plugins: [],
}
