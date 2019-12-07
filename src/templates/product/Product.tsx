import * as React from "react";
import { graphql } from "gatsby";
import Main from "../../layouts/Main";
import { ProductTemplateQuery } from "../../generated-models";
import { Heading, Card, Image, theme, CardType, Button } from "@coterminous/ui";
//@ts-ignore
import { useCart } from "react-use-cart";
import styled from "styled-components";

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
      <Heading as="h2">{name}</Heading>
      <Grid>
        <GridItemIllustration>
          <Card
            as="div"
            type={CardType.PORTRAIT}
            content={<Image width={width} height={height} srcSet={srcSet} />}
          />
        </GridItemIllustration>
        <GridItemDescription>
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
