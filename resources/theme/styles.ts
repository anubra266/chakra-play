import { StyleProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
    global: (props: any): Record<string, StyleProps> => ({
        body: {
            fontFamily: "body",
            color: mode("black", "white")(props),
            bg: mode("white", "brand.bg")(props),
        },
        html: {
            minH: "100%",
        },
    }),
};
export default styles;
