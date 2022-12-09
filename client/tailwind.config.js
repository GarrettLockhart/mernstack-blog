/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          100: '#03045e',
          200: '#0077b6',
          300: '#00b4d8',
          400: '#90e0ef',
          500: '#caf0f8'
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
