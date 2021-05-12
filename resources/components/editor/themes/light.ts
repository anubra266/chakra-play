export const lightTheme = {
    base: "vs",
    inherit: true,
    rules: [
        { token: "", foreground: "#ff0000" },
        { token: "delimiter", foreground: "5c6773" },
        { token: "string", foreground: "#0000ff" },
        {
            token: "type.identifier.js",
            foreground: "#C792EA",
        },
        {
            token: "identifier.js",
            foreground: "#FFBF7A",
            fontStyle: "italic",
        },
        {
            token: "delimiter.js",
            foreground: "#00D9FF",
        },
        {
            token: "string.js",
            foreground: "#6AF699",
        },
        {
            token: "delimiter.angle.js",
            foreground: "#BAC7E4",
        },
        {
            token: "delimiter.bracket.js",
            foreground: "#00D9FF",
        },
        {
            token: "delimiter.bracket.embedded.js",
            foreground: "#D1C000",
        },
        {
            token: "delimiter.square.js",
            foreground: "#D1C000",
        },
        {
            token: "number.js",
            foreground: "#FFBF7A",
        },
        {
            token: "keyword.js",
            foreground: "#C792EA",
        },
        {
            token: "delimiter.parenthesis.js",
            foreground: "#BAC7E4",
        },
    ],
    colors: {
        "editor.background": "#FEFEFE",
        "editor.foreground": "#5c6773",
        "editorIndentGuide.background": "#ecebec",
        "editorIndentGuide.activeBackground": "#e0e0e0",
    },
};
