import React from "react";
import { Spacer, Stack } from "@chakra-ui/react";

import ThemeToggle from "../theme-toggle";
import EditorLayout from "./editor-layout";
import { LogoIcon } from "../logo";
import MenuActions from "./menu-actions";

const MenuBar = () => {
    return (
        <Stack w="40px" h="full" alignItems="center" py={1}>
            <LogoIcon />
            <MenuActions />
            <Spacer />
            <EditorLayout />
            <ThemeToggle />
        </Stack>
    );
};

export default MenuBar;
