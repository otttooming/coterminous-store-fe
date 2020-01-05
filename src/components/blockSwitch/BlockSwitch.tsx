import * as React from "react";
import { getContentBlocks } from "../../common/getContentBlocks";
import ProgressBlock from "../progressBlock/ProgressBlock";

export interface BlockSwitchProps {
  text: string;
}

const blockMap = {
  progress: ProgressBlock,
};

const BlockSwitch: React.FC<BlockSwitchProps> = ({ text }) => {
  const content = getContentBlocks(text);

  console.log(content, "content");

  return (
    <>
      {content.blocks.map((item, index) => {
        const MatchedComponent = blockMap[item.typeName];
        console.log(MatchedComponent);

        if (!MatchedComponent) {
          return null;
        }

        return <MatchedComponent key={index} {...item} />;
      })}
    </>
  );
};

export default BlockSwitch;
