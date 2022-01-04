module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      fontFamily: {
         display: ['Sen', 'sans-serif'],
         body: ['Lato', 'sans-serif'],
      },
      screens: {
         xs: '480px',
      },
      extend: {
         colors: {
            github: '#333333',
            'github-hover': '#4d5d5d',
            linkedin: '#2867B2',
            'linkedin-hover': '#3a80d3',
            twitter: '#1DA1F2',
            'twitter-hover': '#4db5f5',
         },
      },
   },
   plugins: [],
};
