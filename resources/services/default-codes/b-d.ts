export const colors = `const colors = {
  brand: {
    100: "#f7fafc",
    // ...
    900: "#1a202c",
  },
};

export default colors;`;

export const config = `const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
  cssVarPrefix: "chakra"
};

export default config;`;

export const components = `const components = {
  Button: {
    // style object for base or default style
    baseStyle: {},
    // styles for different sizes ("sm", "md", "lg")
    sizes: {},
    // styles for different visual variants ("outline", "solid")
    variants: {},
    // default values for \`size\` and \`variant\`
    defaultProps: {
      size: "",
      variant: "",
    },
  },
};

export default components;`;

export const breakpoints = `const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

export default breakpoints;`;

export const borders = `const borders = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid",
};

export default borders;`;


export const direction = `const direction = "ltr";

export default direction;`;
