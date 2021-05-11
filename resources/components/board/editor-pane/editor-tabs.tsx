import {
    Box,
    CloseButton,
    Flex,
    FlexProps,
    Text,
    useColorModeValue as mode,
} from "@chakra-ui/react";
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useRef, useState } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { move } from "@/services/array-move";
import { useStoreActions, useStoreState } from "@/store/hooks";
import Arrow from "./arrow";
import { Key } from "@/store/tabs";

const EditorTabs = () => {
    const tabs = useStoreState((state) => state.tabs.items);
    const active = useStoreState((state) => state.tabs.active);
    const setTabs = useStoreActions((actions) => actions.tabs.set);
    const setActive = useStoreActions((actions) => actions.tabs.setActive);
    const removeTab = useStoreActions((actions) => actions.tabs.remove);

    const [droppable, setDroppable] = useState<
        Record<string, Partial<FlexProps>>
    >({});

    const tabsBorderColor = mode("gray.50", "whiteAlpha.50");

    const tabsColor = mode("gray.600", "gray.300");

    const scroller = useRef<any>();

    const closeTab = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        tab: Key
    ) => {
        const tabId = tabs.findIndex(({ key }) => key === tab);
        //? remove tab to be closed from tabs array
        removeTab(tab);
        //? find new possible active tab
        const prevId = tabId - 1;
        const nextId = tabId + 1;
        const newActiveTabId = prevId >= 0 ? prevId : nextId;
        const newActiveTab = tabs[newActiveTabId];
        //? set new active tab if closed tab was active
        if (tab === active) setActive(newActiveTab.key);
        e.stopPropagation();
    };

    const handleDragStart = (ev: any) => {
        //? set dragged tab as active tab
        setActive(ev.currentTarget.id);
        //? store dragged tab key in event storage
        ev.dataTransfer.setData("key", ev.currentTarget.id);
    };

    const handleDragOver = (ev: any) => {
        ev.preventDefault();
        //? set highlight styles on droppable tab
        setDroppable({ [ev.currentTarget.id]: droppableStyles });
    };

    const handleDragLeave = () => {
        //? remove highlight styles when drag is not over tab
        setDroppable({});
    };

    const handleDrop = (ev: any) => {
        //? remove highlight styles when drag is finished
        setDroppable({});
        //? get dragged tab
        const dragTab = ev.dataTransfer.getData("key");
        //? get drop target tab
        const dropTab = ev.currentTarget.id;
        //? get array index of drag and drop tabs respectively
        const dragTabId = tabs.findIndex((tab) => tab.key === dragTab);
        const dropTabId = tabs.findIndex((tab) => tab.key === dropTab);
        //? rearrange tabs array to match drop position
        const rearrangedTabs = move(tabs, dragTabId, dropTabId);
        setTabs(rearrangedTabs);
    };

    //? styles for active tab
    const activeStyles: Partial<FlexProps> = {
        color: mode("black", "white"),
        bg: mode("gray.200", "blackAlpha.600"),
        borderTopColor: "brand.400",
        borderTopWidth: "2px",
        transition: "all .1s ease-in-out",
    };

    //? highlight styles for droppable tab
    const droppableStyles: Partial<FlexProps> = {
        color: mode("black", "white"),
        bg: mode("brand.200", "brand.700"),
        transition: "all .1s ease-in-out",
    };
    return (
        <Box
            h="40px"
            w="full"
            sx={{
                ".arrow-disabled": {
                    opacity: 0,
                    transition: "all .3s ease-in-out",
                },
            }}
        >
            <ScrollMenu
                ref={scroller}
                hideArrows
                hideSingleArrow
                scrollToSelected
                scrollBy={1}
                dragging={false}
                alignCenter={false}
                selected={active}
                arrowDisabledClass="arrow-disabled"
                onSelect={(k: any) => setActive(k)}
                arrowLeft={<Arrow as={ChevronLeftIcon} />}
                arrowRight={<Arrow as={ChevronRightIcon} />}
                data={tabs.map(({ key }) => {
                    const isActiveTab = active === key;
                    return (
                        <Flex
                            key={key}
                            draggable
                            onDragStart={handleDragStart}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            borderBottomWidth="1px"
                            borderRightWidth="1px"
                            h="full"
                            borderColor={tabsBorderColor}
                            py={2}
                            px={3}
                            align="center"
                            color={tabsColor}
                            {...(isActiveTab && activeStyles)}
                            role="group"
                            id={key}
                            {...droppable[key]}
                        >
                            <Text fontSize="sm"> {key}.js </Text>
                            {key.toLocaleLowerCase() !== "app" && (
                                <CloseButton
                                    size="sm"
                                    ml={2}
                                    opacity={isActiveTab ? 1 : 0}
                                    _groupHover={{
                                        opacity: 1,
                                    }}
                                    onClick={(e) => closeTab(e, key)}
                                />
                            )}
                        </Flex>
                    );
                })}
            />
        </Box>
    );
};

export default EditorTabs;
