/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // your source files:
    "./src/**/*.{js,jsx,ts,tsx}",
    // (optional) if you ever use HeroUI components:
    "./node_modules/@heroui/react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        slideUp: {
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
