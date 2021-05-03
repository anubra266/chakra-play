import { InertiaApp } from "@inertiajs/inertia-react";
import { render } from "react-dom";
import ErrorBoundary from "react-errbo";
import App from "@/app";
import "vite/dynamic-import-polyfill";

const el = document.getElementById("app");
const initialPage: any = el?.dataset.page;

render(
    <ErrorBoundary>
        <App>
            <InertiaApp
                initialPage={JSON.parse(initialPage)}
                resolveComponent={async (name) =>
                    await import(`../pages/${name}/index.tsx`).then(
                        (module) => module.default
                    )
                }
            />
        </App>
    </ErrorBoundary>,
    el
);
