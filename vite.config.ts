import { defineConfig } from "laravel-vite";
// import vue from "@vitejs/plugin-vue";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default {
    ...defineConfig(),
    esbuild: {
        jsxInject: `import React from 'react'`,
    },
    plugins: [reactRefresh()],
};
