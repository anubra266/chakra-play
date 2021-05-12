import { Monaco } from "@monaco-editor/react";
/* @ts-ignore */
import SyntaxHighlightWorker from "./workers/syntax-highlight.js?worker";
const syntaxHighlightWorker = new SyntaxHighlightWorker();

export const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    const model = editor.getModel();
    //* focus editor
    editor.focus();
};
