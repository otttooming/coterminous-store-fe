import * as React from "react";
import { graphql } from "gatsby";
import Main from "../../layouts/Main";
//@ts-ignore
import { useCart } from "react-use-cart";
import {
  Button,
  Heading,
  Grid,
  Image,
  Box,
  Text,
  Badge,
} from "@chakra-ui/core";
import { ProductTemplateQuery } from "../../types";
import { getLocalizedText } from "../../common/getLocalizedText";
import { getContentBlocks } from "../../common/getContentBlocks";
import BlockSwitch from "../../components/blockSwitch/BlockSwitch";
import styled from "@emotion/styled";

interface Props {
  data: ProductTemplateQuery;
}

const Content = styled(Box)`
  *:empty {
    display: none;
  }
`;

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

  const {
    id,
    name,
    description,
    image,
    galleryImages,
    price,
    attributes,
  } = product;
  const translatedDescription = getLocalizedText(description || "");
  const content = getContentBlocks(translatedDescription);

  return (
    <Main hasSidebar={false}>
      <Grid gap={8} templateColumns="repeat(5, 1fr)">
        <Box gridColumn={["1/6", "1/6", "1/3"]}>
          {image && image.mediaDetails && (
            <Image
              borderRadius="16px"
              htmlWidth={image.mediaDetails.width || undefined}
              htmlHeight={image.mediaDetails.height || undefined}
              srcSet={image.srcSet}
            />
          )}

          <Box
            display="grid"
            gridGap="32px"
            gridTemplateColumns="repeat(2, 1fr)"
            marginTop="32px"
          >
            {galleryImages?.nodes?.map((gallery, index) => (
              <Image
                key={index}
                borderRadius="16px"
                htmlWidth={gallery?.mediaDetails?.width || undefined}
                htmlHeight={gallery?.mediaDetails?.height || undefined}
                srcSet={gallery?.srcSet}
              />
            ))}
          </Box>
        </Box>

        <Box gridColumn={["1/6", "1/6", "3/6"]}>
          <Heading as="h2" mb="1rem">
            {getLocalizedText(name || "")}
          </Heading>

          <Box mb="2rem" display="flex" alignItems="center">
            <Text fontSize="1.5rem" mr="1rem">
              {price}
            </Text>
            <Badge variant="outline" variantColor="green">
              Laos
            </Badge>
          </Box>

          <Content
            mb="3rem"
            dangerouslySetInnerHTML={{
              __html: content.text || "",
            }}
          />

          <BlockSwitch text={translatedDescription} />

          <Heading as="h3" size="lg" mb="1rem">
            Details
          </Heading>

          <Box display="grid" gridTemplateColumns="repeat(3,1fr)" gridGap="8px">
            {attributes?.nodes?.map(item => {
              return (
                <Box mb="1rem">
                  <Heading as="h4" size="sm">
                    {item?.name}
                  </Heading>
                  <div>
                    {item?.options?.map(item => {
                      return (
                        <Badge mr="8px" variant="outline">
                          {item}
                        </Badge>
                      );
                    })}
                  </div>
                </Box>
              );
            })}
          </Box>

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
        galleryImages {
          nodes {
            mediaDetails {
              width
              height
            }
            srcSet
          }
        }
        attributes {
          nodes {
            name
            options
          }
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
