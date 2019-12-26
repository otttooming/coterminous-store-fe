import { graphql, Link } from "gatsby";
import * as React from "react";
import Main from "../layouts/Main";
import { Image, GridItem, Heading, Grid, theme, Card } from "@coterminous/ui";
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
          gridTemplateColumns="repeat(auto-fill, minmax(10rem, 1fr))"
          gridGap={theme.space.s}
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
              <GridItem key={index}>
                <Link
                  to={`/${slug}/`}
                  activeStyle={{
                    color: "red",
                  }}
                  state={{
                    pleasant: "reasonably",
                  }}
                >
                  <Card
                    content={
                      <Image width={width} height={height} srcSet={srcSet} />
                    }
                  >
                    {name}
                  </Card>
                </Link>
              </GridItem>
            )
          )}
        </Grid>
      </Main>
    );
  }
}

export default Index;
