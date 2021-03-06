/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require('path');

module.exports = {
  plugins: [`gatsby-plugin-styled-components`, {
    resolve: `gatsby-plugin-alias-imports`,
    options: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@common': path.resolve(__dirname, 'src/components/common'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@sections': path.resolve(__dirname, 'src/components/sections'),
        '@styles': path.resolve(__dirname, 'src/styles/'),
        '@static': path.resolve(__dirname, 'static/'),
      },
    },
  },],


}
