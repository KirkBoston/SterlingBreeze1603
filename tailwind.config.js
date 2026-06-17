/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0077B6',
          dark: '#005F92',
        },
        accent: {
          DEFAULT: '#F4A261',
          dark: '#E08C4A',
        },
        sand: {
          DEFAULT: '#FDF6EC',
          dark: '#EDE8DF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
