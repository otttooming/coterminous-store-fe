import * as React from "react";
import { Heading, Box, Badge } from "@chakra-ui/core";
import { ProductAttributesFragment } from "../../types";

export interface AttributesProps {
  attributes: ProductAttributesFragment["attributes"];
}

const Attributes: React.FC<AttributesProps> = ({ attributes }) => {
  return (
    <Box as="section">
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
    </Box>
  );
};

export default Attributes;
