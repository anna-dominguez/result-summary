/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      yellow: '#FFB21E',
      blue: '#1125D6',
      green: '#00BB8F',
      red: '#FF5555',
      darkNavy: '#303B59',
      lightBlue: '#CAC9FF',
      white: '#FFFFFF',
      black: '#000000',
    },
    fontSize: {
      headingXL: ['72px', '72px'],
      headingL: ['56px', '72px'],
      headingM: '32px',
      headingS: '24px',
      body: '18px',
      bodyS: ['16px', '21px'],
    },
    extend: {
      fontFamily: {
        sans: 'Hanken Grotesk',
      },
      boxShadow: {
        card: '0px 30px 60px rgba(61, 108, 236, 0.15)',
      },
    },
  },
  plugins: [],
}
