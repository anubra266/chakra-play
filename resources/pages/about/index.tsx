import { InertiaLink } from "@inertiajs/inertia-react";

export default function About() {
    return (
        <div>
            <h1>About Me</h1>
            <InertiaLink href={route("home")}>Home</InertiaLink>
        </div>
    );
}
