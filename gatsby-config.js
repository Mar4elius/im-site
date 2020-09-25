/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    //This snippet with resolve, options, name, and path allows me to query the
    // /img directory inside of /src with GraphQL, which is how I’ll use it with the images in my filesystem.
    //https://medium.com/@kyle.robert.gill/ridiculously-easy-image-optimization-with-gatsby-js-59d48e15db6e
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
    // service worker plugin
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}

console.log(__dirname)
