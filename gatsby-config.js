/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

let env = process.env.NODE_ENV || "development"
require("dotenv").config({ path: `./.env.${env}` })

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
      // docs  https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics/
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-121439989-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: false,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "imarchenko.com",
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
