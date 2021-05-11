import React from "react";
import { Flex } from "@chakra-ui/react";
import store from "@/store";
import MenuBar from "../menu-bar";
import { StoreProvider } from "easy-peasy";
import Board from "../board";

export default function Playground() {
    return (
        <StoreProvider store={store}>
            <Flex pos="fixed" boxSize="full">
                <MenuBar />
                <Board />
            </Flex>
        </StoreProvider>
    );
}
