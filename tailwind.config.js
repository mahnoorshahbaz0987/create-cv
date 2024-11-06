/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 9px 15px rgba(100, 100, 123, .07)',
        'box': '0 4px 16px rgba(15,20,31,.16)',
        'custom1':'1px 1px 1px #9d9696',

      },
      backgroundSize: {
        'size': '141px auto'
      },
      keyframes: {
        progressAnimation : {
          '0%' :{width: '0%'},
          '100%':{width:'100%'}
        }
      },
      animation: {
        progressAnimation: 'progressAnimation 20000ms linear forwards'
      },
      backgroundPosition : {
        'position': '50% 50%' 
      },
      backgroundImage: {
        'image':'linear-gradient(0deg,#338699 28%,rgba(51,134,153,0) 80%)'
      },
      transitionProperty : {
        'transition':'opacity .3s'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.translate-z-0': {
          transform: 'translateZ(0)',
        },
        '.transition-opacity': {
          'transition-property': 'opacity',
          'transition-duration': '300ms',
        },
        '.translate-y-0': {
          transform: 'translateY(0)!important'
        }
        
      });
    },
    function ({ addComponents }) {
      addComponents({
        '.cover-letter-guide .cover-letter-guide-image:after': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundImage: 'linear-gradient(0deg, #338699 28%, rgba(51, 134, 153, 0) 80%)',
        },
      });
    },
  ],
}

