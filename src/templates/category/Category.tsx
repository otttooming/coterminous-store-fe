import * as React from "react";
import { graphql } from "gatsby";
import Main from "../../layouts/Main";
import ProductCard from "../../components/productCard/ProductCard";
import { Grid, Heading } from "@chakra-ui/core";
import { CategoryTemplateQuery } from "../../types";

interface Props {
  data: CategoryTemplateQuery;
}

const CategoryTemplate: React.FC<Props> = ({ data }) => {
  return (
    <Main>
      <Heading as="h2" mb="24px">
        Product list
      </Heading>
      <Grid
        as="ul"
        templateColumns="repeat(auto-fill, minmax(10rem, 1fr))"
        gap="16px"
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
