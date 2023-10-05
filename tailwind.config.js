/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        completed: "#54B435",
        pending: "#FF944A",
        cancelled: "#F24443"
      }
    },
  },
  plugins: [],
}