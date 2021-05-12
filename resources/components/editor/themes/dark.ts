const bg = "212836";

export const darkTheme = {
    base: "vs-dark",
    inherit: true,
    rules: [
        {
            background: bg,
            token: "",
        },
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
        "editor.foreground": "#b3b3b3",
        "editor.background": `#${bg}`,
        "editorError.foreground": "#ff4579",
        "editor.lineHighlightBackground": "#67769630",
        "editor.rangeHighlightBackground": "#37c88637",
        "editorCursor.foreground": "#3333FF",
        "editorWhitespace.foreground": "#CCCCCC1A",
        "editor.findMatchBackground": "#666666",
        "editor.findMatchHighlightBackground": "#333333",
        "editor.foldBackground": "#333333",
        "editor.hoverHighlightBackground": "#333333",
        "editor.inactiveSelectionBackground": "#333333",
        "editor.selectionBackground": "#333333",
        "editor.selectionForeground": "#b3b3b3",
        "editor.selectionHighlightBackground": "#333333",
        "editor.wordHighlightBackground": "#333333",
        "editor.wordHighlightStrongBackground": "#333333",
    },
};
