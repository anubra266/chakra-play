import { Flex } from "@chakra-ui/layout";
import React from "react";
import Preview from "~/preview";

const PreviewPane = () => {
    return (
        <Flex pos="absolute" boxSize="full">
            <Preview />
        </Flex>
    );
};

export default PreviewPane;
