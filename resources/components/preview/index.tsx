import React from "react";
import { LiveError, LivePreview, LiveProvider } from "react-live";
import Frame from "./frame";
import scope from "@/services/chakra-scope";
import { themeCode } from "@/services/parse-code";
import { useStoreState } from "@/store/hooks";

const ChakraPlayApp = () => {
    const appCode = useStoreState((state) => state.code.value);
    return (
        <LiveProvider scope={scope} code={appCode}>
            <LivePreview />
        </LiveProvider>
    );
};

const Preview = () => {
    const { overrides } = useStoreState((state) => state.code);
    const themedCode = themeCode(overrides);
    return (
        <>
            <LiveProvider scope={{ ...scope, ChakraPlayApp }} code={themedCode}>
                <LiveError />
                <Frame>
                    <LivePreview />
                </Frame>
            </LiveProvider>
        </>
    );
};

export default Preview;
