module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#A3E635',
        dark: '#071A0B',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
