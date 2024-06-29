/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: '#root',
  theme: {
    fontFamily: {
      serif: ['Manrope', 'serif'],
      sans: ['Manrope', 'sans'],
    },
    colors: {
      green: '#00956F',
      blue: '#2A2173',
      white: 'white',
      black: 'black',
      gray: '#CFD1DF',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [],
};
