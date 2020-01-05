import * as React from "react";
import { Box, Heading, Progress } from "@chakra-ui/core";

export interface ProgressBlockProps {
  title: string;
  complete: string;
}

const ProgressBlock: React.FC<ProgressBlockProps> = ({ title, complete }) => {
  return (
    <Box maxWidth="480px" mb="1rem">
      <Heading as="h4" mb="8px" size="sm">
        {title}
      </Heading>

      <Progress
        borderRadius="8px"
        overflow="hidden"
        size="sm"
        value={Number(complete)}
      />
    </Box>
  );
};

export default ProgressBlock;
