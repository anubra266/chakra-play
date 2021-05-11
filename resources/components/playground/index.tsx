import { Key, Orientation, Tab } from "@/services/types";
import { Flex } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import PlaygroundProvider, { PlayGroundProps } from "~/providers/playground";
import MenuBar from "../menu-bar";
import { defaultCode } from "@/services/default-code";

export default function Playground() {
    const [activeTab, setActiveTab] = useState<Key>("App");

    const [tabs, setTabs] = useState<Tab[]>(defaultTabs);

    const [orientation, setOrientation] = useState<Orientation>("vertical");

    const [code, setCode] = useState(defaultCode);

    const setModelValue = (model: Key, key: string, value: string) => {
        setCode((exc: any) => ({
            ...exc,
            [model]: {
                ...exc[model],
                [key]: value,
            },
        }));
    };

    const providerValue = useMemo<PlayGroundProps>(
        () => ({
            orientation,
            setOrientation,
            activeTab,
            setActiveTab,
            tabs,
            setTabs,
            code,
            setModelValue,
        }),
        [orientation, activeTab, tabs, code]
    );

    return (
        <PlaygroundProvider value={providerValue}>
            <Flex pos="fixed" boxSize="full">
                <MenuBar />
            </Flex>
        </PlaygroundProvider>
    );
}
const defaultTabs: Tab[] = [{ key: "App" }, { key: "styles" }];
