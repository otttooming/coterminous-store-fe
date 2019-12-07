import { graphql } from "gatsby";

export const productQuery = graphql`
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
  }
`;
