import * as React from "react";
import { Link } from "gatsby";
import { Box, Image, Tag } from "@chakra-ui/core";

export interface ProductCardProps {
  slug: string;
  image: Partial<HTMLImageElement>;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  slug,
  image,
  price,
  children,
}) => {
  return (
    <Box as="li" maxW="sm" overflow="hidden">
      <Link to={`/${slug}/`}>
        <Box position="relative">
          <Image
            htmlWidth={image.width}
            htmlHeight={image.height}
            srcSet={image.srcset}
            rounded="lg"
          />

          <Tag
            size="sm"
            position="absolute"
            bottom="4px"
            left="4px"
            background="#322659"
          >
            {price}
          </Tag>
        </Box>

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
