/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar'), require('tailwindcss-animated')],
}
