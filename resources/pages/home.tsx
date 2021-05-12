import React from "react";
import loadable from "@loadable/component";

const Playground = loadable(() => import("~/playground"));

export default function Home() {
    return (
        <>
            <Playground />
        </>
    );
}
