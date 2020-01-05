import * as React from "react";
import { Grid, Heading } from "@chakra-ui/core";
import ProductCard from "../../components/productCard/ProductCard";
import { getLocalizedText } from "../../common/getLocalizedText";

export interface ProductListProps {
  title: string;
  products: any;
}

const ProductList: React.FC<ProductListProps> = ({ title, products }) => {
  return (
    <div>
      <Heading as="h2" mb="24px">
        {title}
      </Heading>
      <Grid
        as="ul"
        templateColumns="repeat(auto-fill, minmax(10rem, 1fr))"
        gap="16px"
      >
        {products.edges.map(
          (
            {
              node: {
                slug,
                name,
                image: {
                  srcSet,
                  mediaDetails: { width, height },
                },
                price,
              },
            },
            index
          ) => (
            <ProductCard
              key={index}
              slug={slug}
              image={{ width, height, srcset: srcSet }}
              price={price}
            >
              {getLocalizedText(name)}
            </ProductCard>
          )
        )}
      </Grid>
    </div>
  );
};

export default ProductList;
