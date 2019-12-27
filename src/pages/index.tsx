import { graphql } from "gatsby";
import * as React from "react";
import Main from "../layouts/Main";
import { Grid, Heading } from "@chakra-ui/core";
import { IndexQueryQuery } from "../generated-models";
import ProductCard from "../components/productCard/ProductCard";

interface IndexPageProps {
  data: IndexQueryQuery;
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
      }
    }
    cms {
      products(where: { stockStatus: IN_STOCK }) {
        edges {
          node {
            ...ProductForListing
          }
        }
      }
    }
  }
`;

class Index extends React.Component<IndexPageProps, {}> {
  public render() {
    const { data } = this.props;

    return (
      <Main>
        <Heading as="h2">Product list</Heading>
        <Grid
          as="ul"
          templateColumns="repeat(auto-fill, minmax(10rem, 1fr))"
          gap="16px"
        >
          {data.cms.products.edges.map(
            (
              {
                node: {
                  slug,
                  name,
                  image: {
                    srcSet,
                    mediaDetails: { width, height },
                  },
                },
              },
              index
            ) => (
              <ProductCard
                key={index}
                slug={slug}
                image={{ width, height, srcset: srcSet }}
              >
                {name}
              </ProductCard>
            )
          )}
        </Grid>
      </Main>
    );
  }
}

export default Index;
