import { defineConfig } from "laravel-vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import visualizer from "rollup-plugin-visualizer";

export default defineConfig().withPlugins(reactRefresh, visualizer);
