import { BoxProps } from "@chakra-ui/layout";
import { mode } from "./styles-mode";

const layerStyles: Record<string, BoxProps> = {
  card: {
    ...mode("bg", "white", "gray.700"),
    shadow: "base",
  },
  "edit-tab": {
    ...mode("bg", "brand.light", "whiteAlpha.200"),
  },
};
export default layerStyles;
