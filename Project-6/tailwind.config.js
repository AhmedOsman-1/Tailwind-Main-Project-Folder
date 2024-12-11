/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    container: {
      padding: '2rem',
      center: true,
    },
    extend: {
          backgroundImage: {
            'bg-img': "url('/img/Lines.png')",
        },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        
      },
    },
  },
  plugins: [],
}

