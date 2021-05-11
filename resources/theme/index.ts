import { extendTheme, ThemeConfig, ThemeOverride } from "@chakra-ui/react";
import styles from "./styles";
import colors from "./colors";
import { fonts } from "./fonts";
import layerStyles from "./foundations/layerStyles";
import { components } from "./components";

const config: ThemeConfig = {
    useSystemColorMode: false,
    initialColorMode: "dark",
};

const overrides: ThemeOverride = {
    config,
    layerStyles,
    styles,
    colors,
    fonts,
    components,
};

export default extendTheme(overrides);
