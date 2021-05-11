import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Input,
    useDisclosure,
    Stack,
    Flex,
} from "@chakra-ui/react";
import { useContext, useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { models } from "@/services/models";
import { PlaygroundContext } from "~/providers/playground";
import MenuAction from "../menu-action";

const OpenOverride = () => {
    const { setTabs, setActiveTab, tabs } = useContext(PlaygroundContext);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [override, setOverride] = useState("");
    const initialRef = useRef(null);

    const searchModels = (key: string) => {
        return (
            !models[key].noExtend &&
            key.toLocaleLowerCase().indexOf(override.toLocaleLowerCase()) >=
                0 &&
            override.trim() !== ""
        );
    };

    useEffect(() => {
        setOverride("");
    }, [isOpen]);

    const openOverride = (key: any) => {
        const tab = { key };
        const tabIsOpen = tabs.findIndex(({ key: k }) => k === key) >= 0;
        if (!tabIsOpen) setTabs((t) => [...t, tab]);
        setActiveTab(key);
        onClose();
    };
    return (
        <>
            <MenuAction title="Open Override" icon={FaPlus} onClick={onOpen} />
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                initialFocusRef={initialRef}
            >
                <ModalOverlay />
                <ModalContent pb={5}>
                    <ModalHeader>Open Override</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody as="form">
                        <Input
                            pr="4.5rem"
                            type="text"
                            placeholder="Enter Override key"
                            ref={initialRef}
                            value={override}
                            vatianr="flushed"
                            onChange={(ev: any) => setOverride(ev.target.value)}
                            focusBorderColor="brand.400"
                        />
                        <Stack mt={5} spacing={2}>
                            {Object.keys(models)
                                .filter(searchModels)
                                .map((key: any) => {
                                    return (
                                        <Flex
                                            key={`search${key}`}
                                            shadow="md"
                                            p={2}
                                            cursor="pointer"
                                            rounded="md"
                                            borderWidth="1px"
                                            borderColor="transparent"
                                            transition="all .3s ease-in-out"
                                            _hover={{
                                                borderColor: "brand.400",
                                            }}
                                            onClick={() => openOverride(key)}
                                        >
                                            {key}
                                        </Flex>
                                    );
                                })}
                        </Stack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default OpenOverride;
