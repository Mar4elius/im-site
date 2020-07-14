/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "IM",
    description: "Personal website",
    author: "Igor Marchenko",
    email: "marauman@gmail.com",
    siteUrl: "https://igormachenko.com",
  },

  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
    // service worker plugin
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      //Inclusion of a web app manifest is one of the three generally accepted baseline requirements for a PWA.
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Igor Marchenko Personal Site`,
        short_name: `IM Site`,
        start_url: `https://igormachenko.com`,
        background_color: `#a7c0cd`,
        theme_color: `#a7c0cd`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
