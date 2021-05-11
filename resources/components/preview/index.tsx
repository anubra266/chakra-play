import React from "react";
import { LiveError, LivePreview, LiveProvider } from "react-live";
import Frame from "./frame";
import scope from "@/services/chakra-scope";
import { themeCode } from "@/services/parse-code";
import { useStoreState } from "@/store/hooks";

const ChakraPlayApp = () => {
    const code = useStoreState((state) => state.code.value);
    return (
        <LiveProvider scope={scope} code={code.App.value}>
            <LivePreview />
        </LiveProvider>
    );
};

const Preview = () => {
    const code = useStoreState((state) => state.code.value);
    const themedCode = themeCode(code);
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
