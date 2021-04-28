import { InertiaApp } from "@inertiajs/inertia-react";
import { render } from "react-dom";

const el = document.getElementById("app");
const initialPage: any = el?.dataset.page;

render(
    <InertiaApp
        initialPage={JSON.parse(initialPage)}
        resolveComponent={(name) =>
            import(`@/pages/${name}`).then((module) => module.default)
        }
    />,
    el
);
