import { action, Action } from "easy-peasy";
import { Key } from "./tabs";
import { defaultCode } from "@/services/default-code";
import { models } from "@/services/models";

export type CodeProps = {
    value: string;
};

export type PlaygroundCode = Record<Key, CodeProps>;

export interface SetForModel {
    key: Key;
    type: keyof CodeProps;
    value: CodeProps["value"];
}

export interface CodeModel {
    overrides: PlaygroundCode;
    value: string;
    setForModel: Action<CodeModel, SetForModel>;
}

const codeModel: CodeModel = {
    overrides: defaultCode,
    value: models.App.defaultValue,
    setForModel: action((state, { key, type, value }) => {
        if (key === "App") {
            state.value = value;
        } else {
            state.overrides[key][type] = value;
        }
    }),
};

export default codeModel;
