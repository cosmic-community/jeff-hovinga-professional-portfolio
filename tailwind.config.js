/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cosmic-dark': '#11171A',
        'cosmic-dark-hover': '#1a2326',
        'glass-white': 'rgba(255, 255, 255, 0.1)',
        'glass-border': 'rgba(255, 255, 255, 0.2)',
        'glow-green': 'rgba(34, 197, 94, 0.4)',
        'glow-emerald': 'rgba(16, 185, 129, 0.4)',
        'glow-teal': 'rgba(20, 184, 166, 0.4)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.6s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'shimmer': 'shimmer 2s infinite',
        'gradient-shift': 'gradientShift 3s ease infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        glowPulse: {
          '0%': { 
            boxShadow: '0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(34, 197, 94, 0.2)' 
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(34, 197, 94, 0.6), 0 0 80px rgba(34, 197, 94, 0.3)' 
          },
        },
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '64px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(34, 197, 94, 0.5)',
        'glow-lg': '0 0 30px rgba(34, 197, 94, 0.6)',
        'glow-xl': '0 0 40px rgba(34, 197, 94, 0.7)',
        'glow-emerald': '0 0 20px rgba(16, 185, 129, 0.5)',
        'glow-emerald-lg': '0 0 30px rgba(16, 185, 129, 0.6)',
        'glow-teal': '0 0 20px rgba(20, 184, 166, 0.5)',
        'glow-teal-lg': '0 0 30px rgba(20, 184, 166, 0.6)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        'glass-lg': '0 20px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        'floating': '0 10px 25px rgba(0, 0, 0, 0.1), 0 20px 48px rgba(0, 0, 0, 0.1)',
        'floating-hover': '0 20px 40px rgba(34, 197, 94, 0.2), 0 30px 60px rgba(16, 185, 129, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #059669 0%, #065f46 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
        'gradient-tertiary': 'linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, hsla(160,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(180,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(140,100%,93%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(170,100%,76%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(150,100%,77%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(160,100%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(175,100%,76%,1) 0px, transparent 50%)',
      },
      perspective: {
        '1000': '1000px',
        '1500': '1500px',
        '2000': '2000px',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
      transitionTimingFunction: {
        'bounce-out': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}