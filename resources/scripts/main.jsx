/*
|--------------------------------------------------------------------------
| Main entry point
|--------------------------------------------------------------------------
| Files in the "resources/scripts" directory are considered entrypoints
| by default.
|
| -> https://vitejs.dev
| -> https://github.com/innocenzi/laravel-vite
*/
import { render } from "react-dom";
import App from "@/views/App";
const el = document.getElementById("app");
render(<App />, el);
//# sourceMappingURL=main.jsx.map