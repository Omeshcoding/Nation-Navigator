/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#2b3945',
        // 'Very-Dark-Blue': '#202c37',
        'very-dark-blue': '#111517',
        'dark-gray': '#858585',
        'light-gray': '#fafafa',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};
