import app from "./default-codes/App";
import {
    borders,
    breakpoints,
    colors,
    components,
    config,
    direction,
} from "./default-codes/b-d";
import { fonts, fontSizes, fontWeights } from "./default-codes/e-k";
import {
    layerStyles,
    letterSpacings,
    lineHeights,
    radii,
} from "./default-codes/l-r";
import {
    shadows,
    sizes,
    space,
    styles,
    textStyles,
    transition,
    zIndices,
} from "./default-codes/s-z";

export const defaultModels = {
    App: {
        noExtend: true,
        name: "App",
        defaultValue: app,
    },
    //TODO Come back here
    //Fonts: { noExtend: true, defaultValue: `{}` },

    config: { defaultValue: config },
    components: { defaultValue: components },
    styles: { defaultValue: styles },
    colors: {
        name: "colors",
        defaultValue: colors,
    },
    fonts: { defaultValue: fonts },
    textStyles: { defaultValue: textStyles },
    layerStyles: { defaultValue: layerStyles },
    breakpoints: { defaultValue: breakpoints },
    sizes: { defaultValue: sizes },
    shadows: { defaultValue: shadows },
    space: { defaultValue: space },
    borders: { defaultValue: borders },
    transition: { defaultValue: transition },
    letterSpacings: { defaultValue: letterSpacings },
    lineHeights: { defaultValue: lineHeights },
    fontWeights: { defaultValue: fontWeights },
    fontSizes: { defaultValue: fontSizes },
    zIndices: { defaultValue: zIndices },
    radii: { defaultValue: radii },
    direction: { defaultValue: direction },
};

export const models: Record<string, any> = defaultModels;
