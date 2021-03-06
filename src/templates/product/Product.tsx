import * as React from "react";
import { graphql } from "gatsby";
import Main from "../../layouts/Main";
import {
  Button,
  Heading,
  Grid,
  Image,
  Box,
  Text,
  Badge,
  RadioButtonGroup,
} from "@chakra-ui/core";
import { ProductTemplateQuery } from "../../types";
import { getLocalizedText } from "../../common/getLocalizedText";
import { getContentBlocks } from "../../common/getContentBlocks";
import BlockSwitch from "../../components/blockSwitch/BlockSwitch";
import styled from "@emotion/styled";
import Attributes from "../../components/attributes/Attributes";

interface Props {
  data: ProductTemplateQuery;
}

const Content = styled(Box)`
  *:empty {
    display: none;
  }
`;

const CustomRadio: React.FC<any> = React.forwardRef((props, ref) => {
  const { isChecked, isDisabled, value, isAvailable, ...rest } = props;
  return (
    <Button
      ref={ref}
      variantColor={isChecked ? "green" : "gray"}
      aria-checked={isChecked}
      role="radio"
      variant={!isAvailable ? "ghost" : "solid"}
      isDisabled={!isAvailable}
      leftIcon={isChecked && "check"}
      onClick={() => console.log("onclick")}
      {...rest}
    />
  );
});

const ProductTemplate: React.FC<Props> = ({
  data: {
    cms: { product },
  },
}) => {
  if (!product) {
    return null;
  }

  const isVariableProduct = product.__typename === "GraphCMS_VariableProduct";

  const {
    name,
    description,
    image,
    galleryImages,
    price,
    attributes,
  } = product;
  const translatedDescription = getLocalizedText(description || "");
  const content = getContentBlocks(translatedDescription);

  const [selected, setSelected] = React.useState<{ [key in string]: string }>(
    {}
  );

  const [resetVariationSelect, setResetVariationSelect] = React.useState(
    Date.now()
  );

  const variationNodes =
    (product.__typename === "GraphCMS_VariableProduct" &&
      product.variations?.nodes) ||
    [];

  const vars = variationNodes
    ? variationNodes.reduce<{ [key in string]: { [key in string]: string[] } }>(
        (rootacc, rootcur) => {
          const nodes = rootcur?.attributes?.nodes;
          const id = rootcur?.id;

          if (!nodes || !id) {
            return rootacc;
          }

          const att = nodes.reduce<{ [key in string]: string[] }>(
            (acc, cur) => {
              if (!cur || !cur.name || !cur.value) {
                return acc;
              }

              const newAcc = { ...acc };

              if (newAcc[cur.name]) {
                newAcc[cur.name] = [
                  ...new Set([...newAcc[cur.name], cur.value]),
                ];
              }

              if (!newAcc[cur.name]) {
                newAcc[cur.name] = [cur.value];
              }

              return { ...newAcc };
            },
            {}
          );

          const newacc = { ...rootacc };
          newacc[id] = att;

          return newacc;
        },
        {}
      )
    : {};

  const selectedVars = Object.entries(vars).reduce<
    { [key in string]: { [key in string]: string[] } }
  >((acc, cur) => {
    const selectedAttributes = Object.entries(selected);
    const variation = Object.entries(cur[1]);

    const attributeValues = variation.flatMap((i2) => i2[1]);
    const attributeNames = variation.map((i2) => i2[0]);

    if (
      selectedAttributes
        .map((i4) => i4[0])
        .every((i) => attributeNames.includes(i)) &&
      selectedAttributes
        .map((i4) => i4[1])
        .every((i) => attributeValues.includes(i))
    ) {
      const newA = { ...acc };
      newA[cur[0]] = cur[1];

      return newA;
    }

    return acc;
  }, {});

  console.log(vars);

  const selectedOrAll = !!Object.keys(selected).length ? selectedVars : vars;

  const getIsAvailable = (name: string, value: string): boolean => {
    const allValAvailable = getUniqueVariations(selectedOrAll);
    const nameMatch = allValAvailable[name];

    if (nameMatch) {
      return nameMatch.includes(value);
    }

    return false;
  };

  const getUniqueVariations = (
    values: { [key in string]: { [key in string]: string[] } }
  ) => {
    return Object.values(values).reduce<{ [key in string]: string[] }>(
      (rootacc, rootcur) => {
        return Object.entries(rootcur).reduce<{ [key in string]: string[] }>(
          (acc, cur) => {
            const newAcc = { ...acc };

            if (newAcc[cur[0]]) {
              newAcc[cur[0]] = [...new Set([...newAcc[cur[0]], ...cur[1]])];
            }

            if (!newAcc[cur[0]]) {
              newAcc[cur[0]] = cur[1];
            }

            return { ...newAcc };
          },
          rootacc
        );
      },
      {}
    );
  };

  const uniqueVariations = getUniqueVariations(vars);

  console.log(uniqueVariations);

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

          {isVariableProduct && (
            <>
              {Object.entries(uniqueVariations).map((item) => (
                <div>
                  {item[0]}

                  <RadioButtonGroup
                    key={resetVariationSelect}
                    defaultValue="rad2"
                    onChange={(val) => {
                      console.log(item[0], val);
                      const sevalue = Object.fromEntries([
                        [item[0], val as string],
                      ]);
                      setSelected({ ...selected, ...sevalue });
                    }}
                    isInline
                  >
                    {item[1].map((sub) => (
                      <CustomRadio
                        value={sub}
                        isAvailable={getIsAvailable(item[0], sub)}
                      >
                        {sub}
                      </CustomRadio>
                    ))}
                  </RadioButtonGroup>
                </div>
              ))}

              <Button
                size="xs"
                mt="1rem"
                onClick={() => {
                  setSelected({});
                  setResetVariationSelect(Date.now());
                }}
              >
                Clear selection
              </Button>
            </>
          )}

          <Content
            mb="3rem"
            dangerouslySetInnerHTML={{
              __html: content.text || "",
            }}
          />

          <BlockSwitch text={translatedDescription} />

          <Attributes attributes={attributes} />

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
        __typename
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
        ...ProductAttributes
        ... on GraphCMS_SimpleProduct {
          price
        }

        ... on GraphCMS_VariableProduct {
          price
        }
        ...ProductVariation
      }
    }
  }
`;

export default ProductTemplate;
