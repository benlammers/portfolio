const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
   darkMode: 'class',
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      fontFamily: {
         display: ['Sen', 'sans-serif'],
         body: ['Lato', 'sans-serif'],
      },
      screens: {
         xs: '480px',
         ...defaultTheme.screens,
      },
      extend: {
         colors: {
            github: '#333333',
            'github-hover': '#4d5d5d',
            linkedin: '#2867B2',
            'linkedin-hover': '#3a80d3',
            twitter: '#1DA1F2',
            'twitter-hover': '#4db5f5',
            'dark-gray': '#1A1B1C',
            'dark-gray-2': '#272727',
         },
      },
   },
   plugins: [],
};
