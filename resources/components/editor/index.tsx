import { models } from "@/services/models";
import { useStoreActions, useStoreState } from "@/store/hooks";
import { Box } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import Editor from "@monaco-editor/react";
import React from "react";

const CodeEditor = () => {
    const activeTab = useStoreState((state) => state.tabs.active);
    const setModelValue = useStoreActions(
        (actions) => actions.code.setForModel
    );

    function handleEditorDidMount(editor: any, monaco: any) {
        editor.focus();
    }
    function handleEditorChange(value: any, _event: any) {
        setModelValue({ key: activeTab, type: "value", value });
    }

    const file = models[activeTab];

    return (
        <Box boxSize="full">
            <Editor
                language="javascript"
                loading={<Spinner />}
                defaultValue={file.defaultValue}
                path={activeTab}
                onMount={handleEditorDidMount}
                onChange={handleEditorChange}
                saveViewState
                options={{
                    autoIndent: true,
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
