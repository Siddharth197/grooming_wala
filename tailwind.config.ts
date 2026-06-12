import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Offwhite & Light Backgrounds
        offwhite: '#f8f7ed',
        cream: '#f4f2e6',
        pearl: '#ffffff',
        
        // Dark typography for light mode
        deep: '#1a3324',
        'deep-card': 'rgba(255, 255, 255, 0.75)',
        mocha: '#4a5c50',
        
        // Greens
        sage: '#7ba37b',
        'sage-dark': '#5a8a5a',
        emerald: '#2d8a5e',
        'emerald-dark': '#1a5c3a',
        
        // Accents
        gold: '#d4a853',
        'gold-light': '#e8c777',
        'gold-dark': '#b0821b',
        copper: '#d57e48',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 15px 40px rgba(123, 163, 123, 0.15)',
        'glow-gold': '0 15px 40px rgba(212, 168, 83, 0.2)',
        soft: '0 10px 30px rgba(101, 82, 72, 0.08)',
        deep: '0 25px 60px rgba(0, 0, 0, 0.12)'
      },
      borderRadius: {
        card: '1.5rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem'
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease forwards',
        'slide-left': 'slideInLeft 0.7s ease forwards',
        'slide-right': 'slideInRight 0.7s ease forwards',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float-slow 20s ease-in-out infinite',
        'shimmer': 'shimmer-slide 3s ease-in-out infinite',
        'bounce-in': 'bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to: { opacity: '1', transform: 'translateX(0)' }
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(40px)' },
          to: { opacity: '1', transform: 'translateX(0)' }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};

export default config;
