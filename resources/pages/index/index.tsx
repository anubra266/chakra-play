import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import VtrilProgress from "vtril-progress";

export default function Home() {
    const gotoAbout = () =>
        VtrilProgress.disable(() => Inertia.visit(route("about")));

    return (
        <div>
            <h1>Welcome {route().current("")}!</h1>
            <InertiaLink href={route("about")}>About</InertiaLink>
            <br />
            <span style={{ cursor: "pointer" }} onClick={gotoAbout}>
                About without Progress bar
            </span>
        </div>
    );
}
