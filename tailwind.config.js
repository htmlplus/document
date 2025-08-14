/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      animation: {
        shimmer: 'pulse 1.5s infinite ease-in-out'
      },
      boxShadow: {
        'custom': `
          0px 1px 1px 0px #0000001f,
          0px 0px 4px 0px #0000000a,
          0px 4px 8px 0px #00000014
        `
      },
      colors: {
        alpha: {
          'black-1': '#00000005',
          'black-2': '#0000000D',
          'black-3': '#00000014',
          'black-4': '#00000029',
          'black-6': '#0000003D',
          'black-7': '#0000007a',
          'black-8': '#000000A3',
          'black-9': '#000000B8',
          'black-10': '#000000CC',
          'black-11': '#000000EB',
          'black-12': '#000000E5',
        },
        main: {
          '1': '#FCFCFC',
          '2': '#f8f8f8',
          '3': '#f3f3f3',
          '4': '#ededed',
          '5': '#E8E8E8',
          '6': '#E2E2E2',
          '7': '#DBDBDB',
          '8': '#c7c7c7',
          '9': '#8f8f8f',
          '10': '#858585',
          '11': '#6f6f6f',
          '12': '#171717',
        },
        primary: {
          '1': '#FFF9F9',
          '2': '#FFECEC',
          '3': '#FFDEDE',
          '4': '#FFCFCF',
          '5': '#FFBEBE',
          '6': '#FFACAC',
          '7': '#FF9999',
          '8': '#F57D81',
          '9': '#EE6E73',
          '10': '#D46267',
          '11': '#A34D50',
          '12': '#3D1819',
        },
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
      xs: { max: '599px' },
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px'
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
};
