/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
    './pages/**/*.{html,js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {},
  },
  plugins: [],
}
