module.exports = {
   siteMetadata: {
      siteUrl: 'https://www.benlammers.dev',
      title: 'portfolio',
   },
   plugins: [
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
