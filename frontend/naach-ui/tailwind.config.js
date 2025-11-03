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
      colors: {
        'beach': {
          50: '#f0f9ff',    // Very light sky blue
          100: '#e0f2fe',   // Light sky blue
          200: '#bae6fd',   // Sky blue
          300: '#7dd3fc',   // Medium sky blue
          400: '#38bdf8',   // Deeper sky blue
          500: '#0ea5e9',   // Ocean blue
          600: '#0284c7',   // Deep ocean blue
          700: '#0369a1',   // Dark ocean blue
          800: '#075985',   // Very dark ocean blue
          900: '#0c4a6e',   // Deepest ocean blue
        },
        'sand': {
          50: '#fefce8',    // Very light sand
          100: '#fef9c3',   // Light sand
          200: '#fef08a',   // Sand
          300: '#fde047',   // Golden sand
          400: '#facc15',   // Warm sand
          500: '#eab308',   // Medium sand
          600: '#ca8a04',   // Darker sand
          700: '#a16207',   // Brown sand
          800: '#854d0e',   // Dark brown sand
          900: '#713f12',   // Deep brown sand
        },
        'seafoam': {
          50: '#f0fdfa',    // Very light seafoam
          100: '#ccfbf1',   // Light seafoam
          200: '#99f6e4',   // Seafoam
          300: '#5eead4',   // Medium seafoam
          400: '#2dd4bf',   // Deeper seafoam
          500: '#14b8a6',   // Teal seafoam
          600: '#0d9488',   // Dark teal seafoam
          700: '#0f766e',   // Very dark teal seafoam
          800: '#115e59',   // Deepest teal seafoam
          900: '#134e4a',   // Darkest teal seafoam
        },
        'coral': {
          50: '#fef2f2',    // Very light coral
          100: '#fee2e2',   // Light coral
          200: '#fecaca',   // Coral
          300: '#fca5a5',   // Medium coral
          400: '#f87171',   // Deeper coral
          500: '#ef4444',   // Bright coral
          600: '#dc2626',   // Dark coral
          700: '#b91c1c',   // Very dark coral
          800: '#991b1b',   // Deepest coral
          900: '#7f1d1d',   // Darkest coral
        }
      },
      fontFamily: {
        'beach': ['"Baloo 2"', 'cursive'],
        'flow': ['"Pacifico"', 'cursive'],
        'ocean': ['"Quicksand"', 'sans-serif'],
        'carnival': ['"Fredoka One"', 'cursive'],
        'lobster': ['"Lobster"', 'cursive'],
        'righteous': ['"Righteous"', 'cursive'],
        'bungee': ['"Bungee"', 'cursive'],
        'comfortaa': ['"Comfortaa"', 'cursive'],
        'kalam': ['"Kalam"', 'cursive'],
        'permanent': ['"Permanent Marker"', 'cursive'],
        'dancing': ['"Dancing Script"', 'cursive'],
        'caveat': ['"Caveat"', 'cursive'],
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'wave': 'wave 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
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
        wave: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(20deg)',
          },
          '75%': {
            transform: 'rotate(-15deg)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
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
