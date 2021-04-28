import { InertiaApp } from "@inertiajs/inertia-react";
import { render } from "react-dom";
import App from "@/app";

const el = document.getElementById("app");
const initialPage: any = el?.dataset.page;

render(
    <App>
        <InertiaApp
            initialPage={JSON.parse(initialPage)}
            resolveComponent={async (name) =>
                await import(`../pages/${name}`).then(
                    (module) => module.default
                )
            }
        />
    </App>,
    el
);
