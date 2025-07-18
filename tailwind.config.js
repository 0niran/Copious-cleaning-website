/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1c73ea',
        secondary: '#247ffb',
        accent: '#1ebeb6',
      },
      fontFamily: {
        'jost': ['Jost', 'sans-serif'],
        'mulish': ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [],
}