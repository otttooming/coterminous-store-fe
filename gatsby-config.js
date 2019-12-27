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
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-chakra-ui`,
    `gatsby-plugin-emotion`,
  ],
};
