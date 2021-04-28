import { defineConfig } from "laravel-vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
    esbuild: {
        jsxInject: `import React from 'react'`,
    },
}).withPlugins(reactRefresh);
