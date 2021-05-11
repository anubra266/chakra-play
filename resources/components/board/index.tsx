import React from "react";
import { useStoreState } from "@/store/hooks";
import { Box, useColorModeValue } from "@chakra-ui/react";
import "react-reflex/styles.css";
import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";
import EditorPane from "./editor-pane";
import PreviewPane from "./preview-pane";

const Board = () => {
    const splitterBg = useColorModeValue("white", "brand.bg");
    const orientation: any = useStoreState((state) => state.orientation.state);
    const isFullPreview = ["preview", "editor"].includes(orientation);

    return (
        <Box
            boxSize="full"
            sx={{
                ".reflex-container > .reflex-splitter": {
                    borderColor: splitterBg,
                    _hover: {
                        borderColor: splitterBg,
                    },
                    _active: {
                        borderColor: splitterBg,
                    },
                    display: isFullPreview && "none",
                },
                ".preview": {
                    flex: orientation === "preview" && "1 !important",
                    display: orientation === "editor" && "none",
                    overflow: "hidden",
                },
                ".editor": {
                    flex: orientation === "editor" && "1 !important",
                    display: orientation === "preview" && "none",
                    overflow: "hidden",
                },
            }}
        >
            <ReflexContainer orientation={orientation}>
                <ReflexElement
                    minSize={360}
                    className="editor"
                    propagateDimensions={true}
                >
                    <EditorPane />
                </ReflexElement>

                <ReflexSplitter />

                <ReflexElement minSize={360} className="preview">
                   <PreviewPane />
                </ReflexElement>
            </ReflexContainer>
        </Box>
    );
};

export default Board;
