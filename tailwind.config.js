/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  prefix: 'tw-',
  important: true,
  theme: {
    extend: {
      borderRadius: {
        'custom-lg': '5.8rem'
      }
    }
  },
  plugins: []
}
