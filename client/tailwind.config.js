/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: {
          50: '#48cae4',
          100: '#00a6fb',
          200: '#0582ca',
          300: '#006494',
          400: '#003554',
          500: '#051923'
        }
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
