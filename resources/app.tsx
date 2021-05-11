import { ChakraProvider } from "@chakra-ui/react";
import VtrilProgress from "vtril-progress";
import theme from "./theme";
import Fonts from "./theme/Fonts";

export default function App({ children }: any) {
    VtrilProgress.init({
        delay: 250,
        color: "#29d",
        includeCSS: true,
        showSpinner: false,
    });

    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            {children}
        </ChakraProvider>
    );
}
