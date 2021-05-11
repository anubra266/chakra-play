import React from "react";
import { Icon, IconButton } from "@chakra-ui/react";

const Arrow = (props: { as: any }) => {
    return (
        <IconButton
            icon={<Icon {...props} />}
            aria-label="scroll tabs"
            variant="ghost"
            size="xs"
            rounded="none"
            _focus={{ shadow: "none" }}
        />
    );
};

export default Arrow;
