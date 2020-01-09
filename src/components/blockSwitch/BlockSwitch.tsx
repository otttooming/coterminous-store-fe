import * as React from "react";
import { getContentBlocks } from "../../common/getContentBlocks";
import ProgressBlock from "../progressBlock/ProgressBlock";
import BlockQuote from "../blockQuote/BlockQuote";
import { Box } from "@chakra-ui/core";

export interface BlockSwitchProps {
  text: string;
}

const blockMap = {
  blockquote: BlockQuote,
  progress: ProgressBlock,
};

const BlockSwitch: React.FC<BlockSwitchProps> = ({ text }) => {
  const content = getContentBlocks(text);

  console.log(content, "content");

  return (
    <Box mb="3rem">
      {content.blocks.map((item, index) => {
        const MatchedComponent = blockMap[item.typeName];
        console.log(MatchedComponent);

        if (!MatchedComponent) {
          return null;
        }

        return <MatchedComponent key={index} {...item} />;
      })}
    </Box>
  );
};

export default BlockSwitch;
