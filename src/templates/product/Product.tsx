import * as React from "react";
import { graphql } from "gatsby";
import Main from "../../layouts/Main";
//@ts-ignore
import { useCart } from "react-use-cart";
import { Button, Heading, Grid, Image, Box, Tag } from "@chakra-ui/core";
import { ProductTemplateQuery } from "../../types";
import { getLocalizedText } from "../../common/getLocalizedText";

interface Props {
  data: ProductTemplateQuery;
}

const ProductTemplate: React.FC<Props> = ({
  data: {
    cms: { product },
  },
}) => {
  const { addItem, inCart } = useCart();
  console.log(useCart);

  if (!product) {
    return null;
  }

  const { id, name, description, image, price } = product;

  return (
    <Main hasSidebar={false}>
      <Grid gap={8} templateColumns="repeat(5, 1fr)">
        {image && image.mediaDetails && (
          <Image
            htmlWidth={image.mediaDetails.width || undefined}
            htmlHeight={image.mediaDetails.height || undefined}
            srcSet={image.srcSet}
            gridColumn={["1/6", "1/6", "1/3"]}
          />
        )}

        <Box gridColumn={["1/6", "1/6", "3/6"]}>
          <Heading as="h2" mb="1rem">
            {getLocalizedText(name || "")}
          </Heading>

          <div
            dangerouslySetInnerHTML={{
              __html: getLocalizedText(description || ""),
            }}
          />
          <Tag size="lg">{price}</Tag>
          {/* <Button onClick={() => addItem({ id, price: 1 })}>Add to cart</Button> */}
        </Box>
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
        ... on GraphCMS_SimpleProduct {
          price
        }

        ... on GraphCMS_VariableProduct {
          price
        }
      }
    }
  }
`;

export default ProductTemplate;
