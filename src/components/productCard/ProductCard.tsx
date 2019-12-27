import * as React from "react";
import { Link } from "gatsby";
import { Box, Grid, Heading, Image } from "@chakra-ui/core";

export interface ProductCardProps {
  slug: string;
  image: Partial<HTMLImageElement>;
}

const ProductCard: React.FC<ProductCardProps> = ({ slug, image, children }) => {
  return (
    <Box as="li" maxW="sm" rounded="lg" overflow="hidden">
      <Link to={`/${slug}/`}>
        <Image
          htmlWidth={image.width}
          htmlHeight={image.height}
          srcSet={image.srcset}
        />

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {children}
        </Box>
      </Link>
    </Box>
  );
};

export default ProductCard;
