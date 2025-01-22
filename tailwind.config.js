/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
};
