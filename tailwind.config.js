/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '380px',
        '2xs': '320px'
      },
      colors: {
        primary: {
          disabled: '#d3dbde',
          400: '#e3ebee',
          700: '#07877d',
          800: '#4CA813',
          900: '#2cdd4d'
        },
        accent: {
          700: '#BDFF00'
        },
        blue: {
          400: '#9599B3'
        },
        dangerous: {
          700: '#dc1e1e',
        },
        secondary: {
          50: '#000000',
          100: '#202426',
          200: '#222222',
          500: '#707070',
          600: '#DDDDDD',
          700: '#FFFFFF'
        },
      },
      fontSize: {
        xl: '40px', // h1
        lg: '36px', // h2
        md: '24px', // h3
        sm: '20px', // h4
        xs: '16px', // h5
        xxs: '10px', // h6
      },
      lineHeight: {
        xl: '48px', // h1
      },
    },
  },
  plugins: [],
};

/*

sizes line_height
10 auto
16 auto
20 auto
24 auto
36 auto
40 48px

*/