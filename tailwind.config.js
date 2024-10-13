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
        spinCircle: 'circleAnimation 0.8s linear infinite'
      },
      keyframes: {
        circleAnimation: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      }
    }
  },
  plugins: []
}
