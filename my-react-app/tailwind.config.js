/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'videofusion': {
          'primary': '#E91E63',
          'secondary': '#FF6B35',
          'gradient-start': '#E91E63',
          'gradient-end': '#FF6B35',
        }
      },
      backgroundImage: {
        'gradient-videofusion': 'linear-gradient(135deg, #E91E63 0%, #FF6B35 100%)',
        'gradient-videofusion-reverse': 'linear-gradient(135deg, #FF6B35 0%, #E91E63 100%)',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'scroll': 'scroll 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    },
  },
  plugins: [],
}