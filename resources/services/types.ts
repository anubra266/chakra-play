import { defaultModels } from "@/services/models";

export type Key = keyof typeof defaultModels;
export type Tab = { key: Key };
export type Orientation = "horizontal" | "vertical" | "preview" | "editor";
export type CodeModel = {
    value: string;
    visible?: boolean;
};
export type PlaygroundCode = Record<Key, CodeModel>;
