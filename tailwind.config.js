/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '200px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      'Bellefair':['Bellefair', 'sans-serif'],
      'BarlowCondensed':['Barlow Condensed', 'sans-serif'],
      'Barlow':['Barlow', 'sans-serif']
    }
  },
  plugins: [],
}

