import React, { useEffect, useReducer, useState } from "react";
import { createPortal } from "react-dom";

import createCache from "@emotion/cache";
import weakMemoize from "@emotion/weak-memoize";
import { CacheProvider } from "@emotion/react";
import { useColorMode } from "@chakra-ui/color-mode";

const memoizedCreateCacheWithContainer = weakMemoize(
    (container: HTMLElement) => {
        const newCache = createCache({
            container,
            key: "with-emotion",
        });
        return newCache;
    }
);

const Frame = (props: any) => {
    const [contentRef, setContentRef] = useState<any>(null);
    const doc = contentRef?.contentWindow?.document;
    const mountNode = doc?.body;
    const insertionPoint = doc?.head;

    const [, forceUpdate] = useReducer((x) => x + 1, 0);
    const updateFrame = () => {
        //*Reload Iframe on every rerender
        forceUpdate();
    };

    //*update Frame when colorMode changes
    const { colorMode } = useColorMode();

    useEffect(() => {
        contentRef?.contentWindow?.location.reload();
        // eslint-disable-next-line
    }, [colorMode]);

    return (
        <iframe
            srcDoc={`<!DOCTYPE html>`}
            width="100%"
            height="100%"
            title="Preview"
            ref={setContentRef}
            loading="lazy"
            onLoad={updateFrame}
        >
            {insertionPoint &&
                mountNode &&
                createPortal(
                    <CacheProvider
                        value={memoizedCreateCacheWithContainer(insertionPoint)}
                    >
                        {props.children}
                    </CacheProvider>,
                    mountNode
                )}
        </iframe>
    );
};

export default Frame;
