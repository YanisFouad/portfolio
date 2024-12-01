/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './App.vue'],
  darkMode: 'selector',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': '#D60F9A',
      'primary-light': '#DE3FAD',
      'secondary': '#D1D8FF',
      'secondary-light': '#DAE0FF',
      'tertiary': '#002E6D',
      'tertiary-light': '#33588D',
      'primary-dark': '#282828',
      'primary-light-dark': '#4D4D4D',
      'secondary-dark': '#D60F9A',
      'secondary-light-dark': '#DE3FAD',
      'tertiary-dark': '#3C3FEF',
      'tertiary-light-dark': '#6668F2',
      'black': '#000000',
      'white': '#FFFFFF',
      'gray': {
        100: '#F7FAFC',
        200: '#EDF2F7',
        300: '#E2E8F0',
        400: '#CBD5E0',
        500: '#A0AEC0',
        600: '#718096',
        700: '#4A5568',
        800: '#2D3748',
        900: '#1A202C',
      },
      transparent: 'transparent',
    },
    fontFamily: {
      bricolage: ['Bricolage Grotesque', 'sans-serif'],
      caveat: ['Caveat', 'cursive'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'dark-theme': "url('/img/dark-theme.svg')",
      },
      animation: {
        'dropExpand': 'dropExpand 1s ease-in-out',
        'bounce': 'bounce 3s infinite ease-in-out',
      },
      keyframes: {
        bounce: {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '40%': {
            transform: 'translateY(30px)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
          '60%': {
            transform: 'translateY(15px)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        }
      },
      rotate: {
        '16': '16deg',
        '-16': '-16deg',
      },
      width: {
        '1/10vw': '10vw',
      },
      height: {
        '105vh': '105vh',
      }
    },
  },
  plugins: [],
}