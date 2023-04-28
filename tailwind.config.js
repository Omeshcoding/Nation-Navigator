/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#2b3945',
        'Very-Dark-Blue': '#202c37',
        'very-dark-blue': '#111517',
        'dark-gray': '#858585',
        'light-gray': '#fafafa',
        white: '#ffffff',
      },
      boxShadow: {
        '4xl': '1px 0px 24px -8px rgba(40,37,37,0.75)',
        '-webkit': '-4px -5px 47px -8px rgba(0,0,0,0.75)',
        '-moz-box-shadow': ' -4px -5px 47px -8px rgba(0,0,0,0.75)',
      },
      fontFamily: {
        'nunito-sans': ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
