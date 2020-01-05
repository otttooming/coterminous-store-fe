import * as React from "react";
import { Box, Text } from "@chakra-ui/core";

export interface BlockQuoteProps {}

const BlockQuote: React.SFC<BlockQuoteProps> = ({ children }) => {
  return (
    <Box as="blockquote">
      <Text children={children} />
    </Box>
  );
};

export default BlockQuote;
