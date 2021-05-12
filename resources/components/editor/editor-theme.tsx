import { useColorModeValue, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { defineTheme } from "@/services/defineTheme";
import { lightTheme } from "./themes/light";
import { darkTheme } from "./themes/dark";

export const useEditorTheme = (): any => {
    const template = useColorModeValue(
        { name: "light", styles: lightTheme },
        { name: "dark", styles: darkTheme }
    );
    const [theme, setTheme] = useState("dark");
    const { colorMode } = useColorMode();
    useEffect(() => {
        defineTheme(template.name, template.styles).then(() =>
            setTheme(template.name)
        );
    }, [colorMode]);
    return { theme };
};
