import { action, Action } from "easy-peasy";
import { Key } from "./tabs";
import { defaultCode } from "@/services/default-code";

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
    value: PlaygroundCode;
    set: Action<CodeModel, PlaygroundCode>;
    setForModel: Action<CodeModel, SetForModel>;
}

const codeModel: CodeModel = {
    value: defaultCode,
    set: action((state, payload) => {
        state.value = payload;
    }),
    setForModel: action((state, { key, type, value }) => {
        state.value[key][type] = value;
    }),
};

export default codeModel;
