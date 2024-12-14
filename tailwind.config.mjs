/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#E4F1AC',
          900: '#A7D477'
        },
        secondary: {
          100: '#FF748B',
          900: '#F72C5B'
        }
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}

export default config
