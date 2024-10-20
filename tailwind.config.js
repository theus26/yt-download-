/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  prefix: 'tw-',
  important: true,
  theme: {
    extend: {
      borderRadius: {
        'custom-lg': '3.8rem'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-fast': 'spin 0.5s linear infinite'
      }
    }
  },
  plugins: []
}
