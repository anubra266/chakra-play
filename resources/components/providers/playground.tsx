import { createContext, Dispatch, ProviderProps, SetStateAction } from "react";
import { Key, Orientation, PlaygroundCode, Tab } from "@/services/types";

export interface PlayGroundProps {
    orientation: Orientation;
    setOrientation: Dispatch<SetStateAction<Orientation>>;
    activeTab: Key;
    setActiveTab: Dispatch<SetStateAction<Key>>;
    tabs: Tab[];
    setTabs: Dispatch<SetStateAction<Tab[]>>;
    code: PlaygroundCode;
    setModelValue: (model: Key, key: any, value: any) => void;
}

export const PlaygroundContext = createContext({} as PlayGroundProps);

const PlaygroundProvider = (props: ProviderProps<PlayGroundProps>) => {
    return <PlaygroundContext.Provider {...props} />;
};

export default PlaygroundProvider;
