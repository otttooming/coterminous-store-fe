import * as React from "react";
import { Box, Heading, Progress } from "@chakra-ui/core";

export interface ProgressBlockProps {
  title: string;
  complete: string;
}

const ProgressBlock: React.FC<ProgressBlockProps> = ({ title, complete }) => {
  return (
    <Box maxWidth="480px" mb="1rem">
      <Heading as="h3" mb="8px" size="md">
        {title}
      </Heading>

      <Progress
        borderRadius="8px"
        overflow="hidden"
        size="lg"
        value={Number(complete)}
      />
    </Box>
  );
};

export default ProgressBlock;
