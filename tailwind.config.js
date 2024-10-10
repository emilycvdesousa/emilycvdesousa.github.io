/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ['./index.html', './src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {
      transitionTimingFunction: {
        'social-badge': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      colors: {
        tolopea: {
          50: '#f1f1ff',
          100: '#e6e6ff',
          200: '#d1d1ff',
          300: '#adabff',
          400: '#857cff',
          500: '#5d48ff',
          600: '#4922ff',
          700: '#3a11f0',
          800: '#300dca',
          900: '#2a0da5',
          950: '#0d0347',
        },
        offblack: {
          50: '#FAF2F0',
          300: '#8CA3A6',
          500: '#3e4e50',
        },
        goldish: {
          300: '#E4BFB4',
          400: '#D9A696',
          500: '#cd8b76',
        },
      },
      fontFamily: {
        serif: ['Glacial'],
        Inria: ['InriaBold'],
      },
    },
    screens: {
      ...defaultTheme.screens,
      xs: '375px',
    },
  },
  plugins: [],
  darkMode: 'media',
};
