/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'c-blue': '#264653',
        'c-teal': '#2a9d8f',
        'c-yellow': '#e9c46a',
        'c-orange': '#f4a261',
        'c-red': '#e76f51'
      }
    },
    screens: {
      tiny: '360px',
      xsm: '500px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },

  plugins: []
};
