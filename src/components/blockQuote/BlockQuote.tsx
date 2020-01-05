import * as React from "react";
import { Box, Text } from "@chakra-ui/core";
import styled from "@emotion/styled";

export interface BlockQuoteProps {}

const Wrapper = styled.blockquote`
  position: relative;
  font-size: 16px;
  border-radius: 4px;
  padding: 4px 16px;
  padding-left: 48px;

  &:before {
    content: "\“";
    position: absolute;
    left: 16px;
    font-size: 40px;
    top: 50%;
    height: 40px;
    transform: translateY(-50%);
  }
`;

const BlockQuote: React.SFC<BlockQuoteProps> = ({ children }) => {
  return (
    <Wrapper>
      <Text children={children} />
    </Wrapper>
  );
};

export default BlockQuote;
