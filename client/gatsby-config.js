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
      {
         resolve: 'gatsby-source-sanity',
         options: {
            projectId: 'mwmzpjpg',
            dataset: 'production',
         },
      },
      'gatsby-plugin-image',
      {
         resolve: 'gatsby-plugin-manifest',
         options: {
            icon: 'src/images/icon.png',
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
