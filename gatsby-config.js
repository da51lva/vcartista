/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require('path');

module.exports = {
  plugins: [
    'gatsby-plugin-theme-ui',
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@static': path.resolve(__dirname, 'static/'),
          '@styles': path.resolve(__dirname, 'src/styles/'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@common': path.resolve(__dirname, 'src/components/common'),
          '@atoms': path.resolve(__dirname, 'src/components/common/atoms'),
          '@molecules': path.resolve(__dirname, 'src/components/common/molecules'),
          '@organisms': path.resolve(__dirname, 'src/components/common/organisms'),
          '@sections': path.resolve(__dirname, 'src/components/sections'),
          '@images': path.resolve(__dirname, 'src/assets/images'),
          '@en': path.resolve(__dirname, 'src/assets/content/en'),
          '@fonts': path.resolve(__dirname, 'src/assets/fonts')
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.svg/,
        }
      }
    },
  ],
}
