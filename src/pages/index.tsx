import { graphql, Link } from "gatsby";
import * as React from "react";
import Main from "../layouts/Main";
import { Box, Grid, Heading, Image } from "@chakra-ui/core";
import { IndexQueryQuery } from "../generated-models";

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
              <Box
                as="li"
                maxW="sm"
                // borderWidth="1px"
                rounded="lg"
                overflow="hidden"
                key={index}
              >
                <Link
                  to={`/${slug}/`}
                  activeStyle={{
                    color: "red",
                  }}
                  state={{
                    pleasant: "reasonably",
                  }}
                >
                  <Image
                    htmlWidth={width}
                    htmlHeight={height}
                    srcSet={srcSet}
                  />

                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {name}
                  </Box>
                </Link>
              </Box>
            )
          )}
        </Grid>
      </Main>
    );
  }
}

export default Index;
