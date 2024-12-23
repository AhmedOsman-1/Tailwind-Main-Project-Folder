/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    colors:{
      "blue": "#007bff",
      "indigo":"#6610f2",
      "orange": "#fd7e14",
      "white": "#fff",
      "gray": "#6c757d",
      "primary":"#007bff",
      "secondary":"#6c757",
      "light": "#f8f9fa",
      "dark": "#343a40"
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'league': ['League Spartan', 'sans-serif'],
        'open': ['Open Sans', 'sans-serif'],
      },
      container: {
        center:true,
        padding: '2rem'
      },
    },
  },
  plugins: [],
}

