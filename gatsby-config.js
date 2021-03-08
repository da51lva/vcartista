/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require('path');

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
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
          '@sections': path.resolve(__dirname, 'src/components/sections'),
          '@images': path.resolve(__dirname, 'src/assets/images'),
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
