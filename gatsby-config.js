module.exports = {
  siteMetadata: {
    siteName: `Using Typescript Example`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        fieldName: `cms`,
        url: `https://dev-spiceflow.pantheonsite.io/graphql`,
        typeName: `GraphCMS`,
      },
    },
    `gatsby-plugin-chakra-ui`,
    `gatsby-plugin-emotion`,
  ],
};
