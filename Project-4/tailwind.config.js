/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        title: ['League Spartan', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        'primary': '#111111',
        'secondary': '#f9f9f9',
    },
  },
  plugins: [],
}
}

