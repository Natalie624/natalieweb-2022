require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title:
      'Natalie Cervantes - Digital Product Management, Agile Coach, Web Development',
    description:
      'Guiding web strategy and product development for todays agile businesses',
    author: '@softwarenomad',
    siteUrl: `https://nataliecervantes.com`,
  },
  plugins: [
    'gatsby-plugin-netlify',
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `none`,
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //     environment: 'development-2021-02-18',
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Natalie Cervantes`,
        short_name: `NAC`,
        start_url: `/`,
        background_color: `#FBFBFB`,
        theme_color: `#FBFBFB`,
        display: `standalone`,
        icon: `src/images/square-logo.png`, // This path is relative to the root of the site.
        cache_busting_mode: `none`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
          omitKeys: [
            'xmlnsDc',
            'xmlnsCc',
            'xmlnsRdf',
            'xmlnsSvg',
            'xmlnsSodipodi',
            'xmlnsInkscape',
            'xmlnsSerif',
            'serifId',
          ],
        },
      },
    },
  ],
};
