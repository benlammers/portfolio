module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      fontFamily: {
         display: ['Sen', 'sans-serif'],
         body: ['Lato', 'sans-serif'],
      },
      extend: {
         colors: {
            github: '#333333',
            linkedIn: '#2867B2',
            twitter: '#1DA1F2',
         },
         keyframes: {
            'fly-from-above-1': {
               '0%': {
                  transform: 'translate(-220px, -100%) rotate(-28deg)',
                  opacity: 0,
               },
               '100%': {
                  transform: 'translate(0, 0) rotate(-28deg)',
                  opacity: 1,
               },
            },
            'fly-from-above-2': {
               '0%': {
                  transform: 'translate(-400px, -100%) rotate(-28deg)',
                  opacity: 0,
               },
               '100%': {
                  transform: 'translate(0, 0) rotate(-28deg)',
                  opacity: 1,
               },
            },
            'fly-from-below-1': {
               '0%': {
                  transform: 'translate(300px, 100%) rotate(-28deg)',
                  opacity: 0,
               },
               '100%': {
                  transform: 'translate(0, 0) rotate(-28deg)',
                  opacity: 1,
               },
            },
         },
         animation: {
            'fly-from-above-1': 'fly-from-above-1 0.5s ease-in-out forwards',
            'fly-from-above-2': 'fly-from-above-2 1s ease-in-out 1s forwards',
            'fly-from-below-1': 'fly-from-below-1 0.5s ease-in-out 0.5s forwards',
         },
      },
   },
   plugins: [],
};
