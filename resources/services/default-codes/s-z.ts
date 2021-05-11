export const styles = `const styles = {
    global: (props) => ({
        body: {
          fontFamily: "body",
          color: mode("gray.800", "whiteAlpha.900")(props),
          bg: mode("white", "gray.800")(props),
          lineHeight: "base",
        },
        "*::placeholder": {
          color: mode("gray.400", "whiteAlpha.400")(props),
        },
        "*, *::before, &::after": {
          borderColor: mode("gray.200", "whiteAlpha.300")(props),
          wordWrap: "break-word",
        },
    }),
};
  
export default styles;`;

export const sizes = `const sizes = {
    container: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
    },
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
};
  
export default sizes;`;

export const shadows = `const shadows = {
    xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    none: "none",
    "dark-lg":
        "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px",
};
  
export default shadows;`;

export const space = `const space = {
    px: "1px",
    0: "0",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
};
  
export default space;`;

export const textStyles = `const textStyles = {
    h1: {
        // you can also use responsive styles
        fontSize: ["48px", "72px"],
        fontWeight: "bold",
        lineHeight: "110%",
        letterSpacing: "-2%",
    },
    h2: {
        fontSize: ["36px", "48px"],
        fontWeight: "semibold",
        lineHeight: "110%",
        letterSpacing: "-1%",
    },
};
  
export default textStyles;`;

export const transition = `const transition = {
    property: {
        common:
          "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
        colors: "background-color, border-color, color, fill, stroke",
        dimensions: "width, height",
        position: "left, right, top, bottom",
        background: "background-color, background-image, background-position",
      },
    easing: {
        "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
        "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
        "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    duration: {
        "ultra-fast": "50ms",
        faster: "100ms",
        fast: "150ms",
        normal: "200ms",
        slow: "300ms",
        slower: "400ms",
        "ultra-slow": "500ms",
      },
};
  
export default transition;`;

export const zIndices = `const zIndices = {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
};
  
export default zIndices;`;
