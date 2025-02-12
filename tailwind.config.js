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
      xl: { max: '1439px' },
      'xl-max': '1340px', // Specific width for xl-max screens
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '479px' },
      xs: { max: '359px' },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        sm: '2rem',
        lg: '100px',
        xl: '100px',
        '2xl': '100px',
      },
    },
    extend: {},
  },
  plugins: [],
}
