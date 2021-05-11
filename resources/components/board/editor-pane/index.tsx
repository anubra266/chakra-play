import React from "react";
import { Flex } from "@chakra-ui/react";
// import CodeEditor from "@/editor";
import EditorTabs from "./editor-tabs";

const EditorPane = (props: any) => {
    const { width } = props.dimensions;
    return (
        <Flex direction="column" w={width} h="full">
            <EditorTabs />
            <Flex boxSize="full">{/* <CodeEditor /> */}</Flex>
        </Flex>
    );
};

export default EditorPane;
