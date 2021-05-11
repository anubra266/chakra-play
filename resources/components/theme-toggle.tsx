import React from "react";
import {
    Icon,
    IconButton,
    IconButtonProps,
    Tooltip,
    useColorMode,
} from "@chakra-ui/react";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";

const ThemeToggle = (props: Partial<IconButtonProps>) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const icon = colorMode === "light" ? FaLightbulb : FaRegLightbulb;
    const action = `Toggle ${colorMode === "light" ? "Dark" : "Light"} Mode`;

    return (
        <Tooltip hasArrow label={action} placement="right">
            <IconButton
                isRound
                w="30px"
                size="sm"
                variant="ghost"
                icon={<Icon as={icon} />}
                aria-label={action}
                onClick={toggleColorMode}
                {...props}
            />
        </Tooltip>
    );
};

export default ThemeToggle;
