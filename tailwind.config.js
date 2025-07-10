/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        main: {
          'DEFAULT': 'gray',
          'lighten-1': 'hsla(0deg, 0%, 0%, 0.35)',
          'lighten-2': 'hsla(0deg, 0%, 0%, 0.2)',
          'lighten-3': 'hsla(0deg, 0%, 0%, 0.07)'
        },
        primary: {
          DEFAULT: '#ee6e73',
          'lighten-1': '#f8a6a6',
          'lighten-3': '#f9dbdb',
          'lighten-5': '#ee6e721e',
        },
      }
    },
    screens: {
      'xs': { 'min': '0px' },
      'sm': { 'min': '576px' },
      'md': { 'min': '768px' },
      'lg': { 'min': '992px' },
      'xl': { 'min': '1200px' },
      'xxl': { 'min': '1400px' },
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
};
