/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'Dark-Blue': '#2b3945',
        // 'Very-Dark-Blue': '#202c37',
        'Very-Dark-Blue': '#111517',
        'Dark-Gray': '#858585',
        'Very-Light-Gray': '#fafafa',
        White: '#ffffff',
      },
    },
  },
  plugins: [],
};
