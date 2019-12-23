import * as React from "react";
import { graphql, Link } from "gatsby";
import { CategoryTemplateQuery } from "../../generated-models";
import Main from "../../layouts/Main";
import { Image, GridItem, Heading, Grid, theme, Card } from "@coterminous/ui";

interface Props {
  data: CategoryTemplateQuery;
}

const CategoryTemplate: React.FC<Props> = ({ data }) => {
  return (
    <Main>
      <Heading as="h2">Product list</Heading>
      <Grid
        as="ul"
        gridTemplateColumns="repeat(auto-fill, minmax(14rem, 1fr))"
        gridGap={theme.space.xl}
      >
        {data.cms.productCategory.products.edges.map(
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
};

export const query = graphql`
  query CategoryTemplate($id: ID!) {
    site {
      siteMetadata {
        siteName
      }
    }
    cms {
      productCategory(id: $id) {
        name
        products(where: { stockStatus: IN_STOCK }) {
          edges {
            node {
              ...ProductForListing
            }
          }
        }
      }
    }
  }
`;

export default CategoryTemplate;
