module.exports = {
   siteMetadata: {
      siteUrl: 'https://www.benlammers.dev',
      title: 'portfolio',
   },
   plugins: [
      {
         resolve: 'gatsby-plugin-google-fonts',
         options: {
            fonts: ['lato:300,400,700', 'sen:400,700'],
            display: 'swap',
         },
      },
      'gatsby-plugin-postcss',
      'gatsby-plugin-smoothscroll',
      {
         resolve: 'gatsby-source-sanity',
         options: {
            projectId: 'mwmzpjpg',
            dataset: 'production',
         },
      },
      'gatsby-plugin-image',
      'gatsby-plugin-react-helmet',
      {
         resolve: 'gatsby-plugin-manifest',
         options: {
            icon: 'src/images/icon.png',
            name: 'Ben Lammers',
            short_name: 'Ben Lammers',
            start_url: '/',
            background_color: '#FBBF24',
            theme_color: '#1A1B1C',
         },
      },
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      {
         resolve: 'gatsby-source-filesystem',
         options: {
            name: 'images',
            path: './src/images/',
         },
         __key: 'images',
      },
   ],
};
