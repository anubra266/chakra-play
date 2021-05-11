import React from "react";
import { IconButton, IconButtonProps } from "@chakra-ui/button";
import { useBoolean } from "@chakra-ui/hooks";
import Icon from "@chakra-ui/icon";
import { Stack } from "@chakra-ui/layout";
import {
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverProps,
    PopoverTrigger,
} from "@chakra-ui/popover";

import { BsLayoutSplit, BsLayoutTextSidebar } from "react-icons/bs";
import { MdPhonelink } from "react-icons/md";
import { IoBrowsersOutline } from "react-icons/io5";
import { VscSplitVertical } from "react-icons/vsc";
import { Tooltip } from "@chakra-ui/tooltip";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { IconType } from "react-icons";
import { useStoreActions, useStoreState } from "@/store/hooks";
import { Orientation } from "@/store/orientation";

type EditorLayoutProps = Partial<IconButtonProps> & {
    placement?: PopoverProps["placement"];
};

const EditorLayout = (props: EditorLayoutProps) => {
    const orientation = useStoreState((state) => state.orientation.state);
    const setOrientation = useStoreActions(
        (actions) => actions.orientation.set
    );

    const { placement = "right-start", ...rest } = props;
    const [isResponsiveMode, setResponsiveMode] = useBoolean();
    const layout = layouts.find((l) => l.key === orientation);
    const bg = useColorModeValue("white", "brand.bg");

    return (
        <>
            <Popover trigger="hover" placement={placement}>
                <PopoverTrigger>
                    <IconButton
                        isRound
                        w="30px"
                        size="sm"
                        variant="ghost"
                        icon={<Icon as={layout?.icon} />}
                        title={`Switch Layout - ${layout?.title}`}
                        aria-label="Switch Layout"
                        {...rest}
                    />
                </PopoverTrigger>
                <PopoverContent w="fit-content" bg={bg}>
                    <PopoverArrow bg={bg} />
                    <PopoverBody>
                        <Stack>
                            {layouts
                                .filter((l) => l.key !== orientation)
                                .map(({ key, title, icon }) => (
                                    <Tooltip
                                        key={key}
                                        hasArrow
                                        label={title}
                                        placement="right"
                                    >
                                        <IconButton
                                            isRound
                                            w="30px"
                                            size="sm"
                                            variant="ghost"
                                            icon={<Icon as={icon} />}
                                            aria-label={title}
                                            onClick={() => setOrientation(key)}
                                        />
                                    </Tooltip>
                                ))}
                        </Stack>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
            <Tooltip
                hasArrow
                label={`Toggle Responsive Mode - ${
                    isResponsiveMode ? "ON" : "OFF"
                }`}
                placement="right"
            >
                <IconButton
                    isRound
                    w="30px"
                    size="sm"
                    variant={isResponsiveMode ? "solid" : "ghost"}
                    colorScheme={isResponsiveMode ? "brand" : "gray"}
                    icon={<Icon as={MdPhonelink} />}
                    aria-label="Responsive Mode"
                    onClick={setResponsiveMode.toggle}
                />
            </Tooltip>
        </>
    );
};

export default EditorLayout;

type Layout = {
    key: Orientation;
    title: string;
    icon: IconType;
};
export const layouts: Layout[] = [
    {
        key: "horizontal",
        title: "Horizontal Split",
        icon: VscSplitVertical,
    },
    {
        key: "vertical",
        title: "Vertical Split",
        icon: BsLayoutSplit,
    },
    {
        key: "preview",
        title: "Full Preview",
        icon: IoBrowsersOutline,
    },
    {
        key: "editor",
        title: "Full Editor",
        icon: BsLayoutTextSidebar,
    },
];
