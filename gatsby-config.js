module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["roboto:300,500,700", "sen:400,700"],
        display: "swap",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-react-helmet",
  ],
}
