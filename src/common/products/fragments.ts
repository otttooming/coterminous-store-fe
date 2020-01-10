import { graphql } from "gatsby";

export const productQuery = graphql`
  fragment ProductAttributes on GraphCMS_Product {
    attributes {
      nodes {
        name
        options
      }
    }
  }
  fragment ProductVariation on GraphCMS_VariableProduct {
    variations {
      nodes {
        id
        name
        price
        stockStatus
        attributes {
          nodes {
            name
            value
          }
        }
      }
    }
  }
  fragment ProductForListing on GraphCMS_Product {
    name
    slug
    image {
      mediaDetails {
        width
        height
      }
      srcSet
    }
    galleryImages {
      edges {
        node {
          srcSet
          mediaDetails {
            width
            height
            sizes {
              width
              height
              sourceUrl
            }
          }
        }
      }
    }
    ... on GraphCMS_SimpleProduct {
      price
    }

    ... on GraphCMS_VariableProduct {
      price
    }
  }
`;
