/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#e85a4f',
          'background': '#eae7dc',
          'text': '#8e8d8a',
          'secondary': '#d8c3a5'
        },
        fontFamily: {
          'montserrat': ['Montserrat', 'sans-serif']
        },
        animation: {
          'slide-in-left': 'slideInLeft 0.5s ease-out',
          'slide-in-right': 'slideInRight 0.5s ease-out',
          'fade-in': 'fadeIn 0.5s ease-out',
          'bounce-in': 'bounceIn 0.7s ease-out'
        },
        keyframes: {
          slideInLeft: {
            '0%': { transform: 'translateX(-100%)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' }
          },
          slideInRight: {
            '0%': { transform: 'translateX(100%)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' }
          },
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' }
          },
          bounceIn: {
            '0%': { transform: 'scale(0.5)', opacity: '0' },
            '70%': { transform: 'scale(1.1)', opacity: '0.7' },
            '100%': { transform: 'scale(1)', opacity: '1' }
          }
        }
      }
    },
    plugins: []
  };