/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {},
    extend: {
      animation: {
        shimmer: 'pulse 1.5s infinite ease-in-out'
      },
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

          '2': '#f8f8f8',
          '3': '#f3f3f3',
          '4': '#ededed',
          '8': '#c7c7c7',
          '9': '#8f8f8f',
          '10': '#858585',
          '11': '#6f6f6f',
          '12': '#171717',
        },
        alpha: {
          'black-2': '#0000000d',
          'black-3': '#00000014',
          'black-4': '#00000029',
          'black-7': '#0000007a',
          'black-12': '#000000e5',
        }
      },
      keyframes: {
        pulse: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0.4 },
          '100%': { opacity: 1 }
        }
      },
    },
    screens: {
      'xs': '0px',
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1400px',
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
};
