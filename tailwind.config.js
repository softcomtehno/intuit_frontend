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
    container: {
      center:true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    screens: {
      xs: '360px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [],
};
