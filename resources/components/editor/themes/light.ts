export const lightTheme = {
    base: "vs",
    inherit: true,
    rules: [
        { token: "", foreground: "#ff0000" },
        { token: "delimiter", foreground: "5c6773" },
        { token: "string", foreground: "#0000ff" },
        {
            token: "type.identifier.js",
            foreground: "#267F99",
        },
        {
            token: "identifier.js",
            foreground: "#FF0000",
            fontStyle: "italic",
        },
        {
            token: "delimiter.js",
            foreground: "#A31515",
        },
        {
            token: "string.js",
            foreground: "#A31515",
        },
        {
            token: "delimiter.angle.js",
            foreground: "#800000",
        },
        {
            token: "delimiter.bracket.js",
            foreground: "#0000FF",
        },
        {
            token: "delimiter.square.js",
            foreground: "#000000",
        },
        {
            token: "number.js",
            foreground: "#098658",
        },
        {
            token: "keyword.js",
            foreground: "#AF00DB",
        },
        {
            token: "delimiter.parenthesis.js",
            foreground: "#000000",
        },
        {
            token: "comment.js",
            foreground: "#008000",
        },
    ],
    colors: {
        "editor.background": "#FEFEFE",
        "editor.foreground": "#5c6773",
        "editorIndentGuide.background": "#ecebec",
        "editorIndentGuide.activeBackground": "#e0e0e0",
    },
};
