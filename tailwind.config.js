/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: '#root',
  theme: {
    fontFamily: {
      serif: ['Jost', 'serif'],
      sans: ['Jost', 'sans'],
    },
    colors: {
      green: '#00956F',
      blue: '#2A2173',
      white: 'white',
      black: 'black',
      gray: '#CFD1DF',
    },
    screens: {
      xs: { max: '359px' },
      sm: { max: '479px' },
      md: { max: '767px' },
      lg: { max: '1023px' },
      xll: { max: '1200px' },
      xl: { max: '1439px' },
      'xl-max': '1340px', // Specific width for xl-max screens
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
