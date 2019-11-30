import * as React from "react";
import { graphql } from "gatsby";
import Main from "../../layouts/Main";
import { ProductTemplateQuery } from "../../generated-models";
import {
  Heading,
  Grid,
  GridItem,
  Card,
  Image,
  theme,
  CardType,
  Button,
} from "@coterminous/ui";
//@ts-ignore
import { useCart } from "react-use-cart";

interface Props {
  data: ProductTemplateQuery;
}

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
    <Main>
      <Heading as="h2">{name}</Heading>
      <Grid
        gridTemplateAreas={`"left right"`}
        gridTemplateColumns="480px 1fr"
        gridGap={theme.space.xl}
      >
        <GridItem area="left">
          <Card
            as="div"
            type={CardType.PORTRAIT}
            content={<Image width={width} height={height} srcSet={srcSet} />}
          />
        </GridItem>
        <GridItem area="right">
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <Button onClick={() => addItem({ id, price: 1 })}>Add to cart</Button>
        </GridItem>
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
