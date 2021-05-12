import { Monaco } from "@monaco-editor/react";

export const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    const model = editor.getModel();
    //* focus editor
    editor.focus();
};
