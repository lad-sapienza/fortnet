/**
 * User Configuration File
 *
 * Overrides/extends the core scms-core configuration in astro.config.mjs.
 */

export const userConfig = {
  site: 'https://fortnet.lad-sapienza.it',

  integrations: [],

  vite: {},

  markdown: {},
};

/**
 * Site Metadata
 *
 * Used throughout the site for SEO, social media cards, and general site information.
 * Ported from the previous Gatsby `siteMetadata` in gatsby-config.js.
 */
export const siteMetadata = {
  title: 'FortNet Project',
  titleTemplate: '%s | FortNet Project',
  description:
    "FortNet - Fortification and population network in coastal Chaonia, Northern Epirus (Albania) between Iron Age and the Medieval period. PRIN 2022 Research Project by Università di Bologna and Sapienza Università di Roma",
  author: 'Julian Bogdani <julian.bogdani@uniroma1.it>',
  siteName: 'FortNet a PRIN 2022 Project',
  defaultImage: '/images/fortnet-logo.jpg',
  twitter: '@JulianBogdani',
};
