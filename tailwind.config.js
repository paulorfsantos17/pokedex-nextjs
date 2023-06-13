/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bgdark': '#1c1c1c', 
        'white': '#fafafa',
        'black': '#000000',
        'primary-light':'#2C2E44',
        'secondary-light':'#7d7d7d',
        'third-light': '#b4b4b4',
        'checked-light' : '#D7E6EB',
        type: {
          'grass': '#78C850',
          'grass-border': '#297C00'
        }
        
      }
    },
  },
  plugins: [],
}
