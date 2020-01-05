import * as React from "react";
import { Box, Text, Heading, Icon } from "@chakra-ui/core";
import styled from "@emotion/styled";

export interface BlockQuoteProps {}

const Wrapper = styled.blockquote`
  position: relative;
  font-size: 16px;
  border-radius: 4px;
  padding: 4px 16px;
  padding-left: 32px;

  &:before {
    content: "\“";
    position: absolute;
    left: 0;
    font-size: 40px;
    top: 50%;
    height: 40px;
    transform: translateY(-50%);
  }
`;

const BlockQuote: React.SFC<BlockQuoteProps> = ({ children }) => {
  return (
    <Box as="blockquote" mb="1rem">
      <Heading as="h3" size="lg">
        Opinion
      </Heading>
      <Wrapper>
        <Text children={children} />
      </Wrapper>
    </Box>
  );
};

export default BlockQuote;
