import * as React from "react";
import { graphql } from "gatsby";
import Main from "../../layouts/Main";
import { ProductTemplateQuery } from "../../generated-models";
//@ts-ignore
import { useCart } from "react-use-cart";
import styled from "styled-components";
import { Button, Heading, Image } from "@chakra-ui/core";

interface Props {
  data: ProductTemplateQuery;
}

const Grid = styled.div`
  display: grid;
  margin-top: var(--space-m);
  grid-gap: var(--space-xl);
  grid-template-columns: repeat(5, 1fr);
`;

const GridItemIllustration = styled.div`
  grid-column: 1/6;

  @media (min-width: 960px) {
    grid-column: 1/3;
  }
`;

const GridItemDescription = styled.div`
  grid-column: 1/6;

  @media (min-width: 960px) {
    grid-column: 3/6;
  }
`;

const ProductTemplate: React.FC<Props> = ({
  data: {
    cms: {
      product: {
        id,
        name,
        description,
        image: {
          mediaDetails: { width, height },
          srcSet,
        },
      },
    },
  },
}) => {
  const { addItem, inCart } = useCart();
  console.log(useCart);

  return (
    <Main hasSidebar={false}>
      <Grid>
        <GridItemIllustration>
          <Image htmlWidth={width} htmlHeight={height} srcSet={srcSet} />
        </GridItemIllustration>
        <GridItemDescription>
          <Heading as="h2">{name}</Heading>

          <div dangerouslySetInnerHTML={{ __html: description }} />
          <Button onClick={() => addItem({ id, price: 1 })}>Add to cart</Button>
        </GridItemDescription>
      </Grid>
    </Main>
  );
};

export const query = graphql`
  query ProductTemplate($id: ID!) {
    site {
      siteMetadata {
        siteName
      }
    }
    cms {
      product(id: $id) {
        id
        name
        description
        image {
          mediaDetails {
            width
            height
          }
          srcSet
        }
      }
    }
  }
`;

export default ProductTemplate;
