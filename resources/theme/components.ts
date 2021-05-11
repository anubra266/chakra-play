export const components: any = {
    Modal: {
        baseStyle: ({ colorMode: c }: StyleOptions) => ({
            dialog: {
                bg: c === "dark" ? "brand.bg" : "white",
            },
        }),
    },
};

interface StyleOptions {
    colorMode: "light" | "dark";
}
