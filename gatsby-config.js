require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: `FortNet Project`,
    description: `FortNet - Fortification and population network in coastal Chaonia, Northern Epirus (Albania) between Iron Age and the Medieval period. PRIN 2022 Research Project by Università di Bologna and Sapienza Università di Roma`,
    author: `Julian Bogdani <julian.bogdani@uniroma1.it>`,
    siteName: `FortNet a PRIN 2022 Project`,
    siteUrl: `https://fortnet.lad-sapienza.it`,
    titleTemplate: `%s | FortNet Project`,
    twitter: `@JulianBogdani`,
    defaultImage: `images/fortnet-logo.jpg`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/src/usr/contents`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/usr/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: { implementation: require("sass") },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `FortNet Project`,
        short_name: `FortNet`,
        start_url: `/`,
        background_color: `#1e40af`,
        theme_color: `#2563eb`,
        display: `minimal-ui`,
        icon: `src/usr/images/fortnet.png`,
        cache_busting_mode: `none`,
        include_favicon: true,
      },
    },
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
  ],
}
