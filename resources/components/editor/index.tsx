import { models } from "@/services/models";
import { useStoreActions, useStoreState } from "@/store/hooks";
import { Box, Spinner } from "@chakra-ui/react";
import Editor from "@monaco-editor/react";
import React from "react";
import { handleEditorDidMount } from "./editor-events";
import { useEditorTheme } from "./editor-theme";

const CodeEditor = () => {
    const activeTab = useStoreState((state) => state.tabs.active);
    const setModelValue = useStoreActions(
        (actions) => actions.code.setForModel
    );

    function handleEditorChange(value: any, _event: any) {
        setModelValue({ key: activeTab, type: "value", value });
    }

    const file = models[activeTab];
    const { theme } = useEditorTheme();
    return (
        <Box boxSize="full">
            <Editor
                language="javascript"
                loading={<Spinner />}
                theme={theme}
                defaultValue={file.defaultValue}
                path={activeTab}
                onMount={handleEditorDidMount}
                onChange={handleEditorChange}
                saveViewState
                options={{
                    autoIndent: "full",
                    wordWrap: "off",
                    smoothScrolling: true,
                    dragAndDrop: true,
                    formatOnPaste: false,
                    formatOnType: false,
                }}
            />
        </Box>
    );
};

export default CodeEditor;
