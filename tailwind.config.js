/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          200: '#32C87D',
        },
        shade: {
          50: '#A1A1A1',
          100: '#C4C4C4',
          200: '#3F3F3F',
          300: '#E3E3E3',
          400: '#EAEAEA',
          500: '#061E38',
        },
        danger: {
          100: '#FF2636',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
