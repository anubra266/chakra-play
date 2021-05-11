import { action, Action } from "easy-peasy";
import { defaultModels } from "@/services/models";

export type Key = keyof typeof defaultModels;

export type Tab = { key: Key };

export interface TabModel {
    items: Tab[];
    add: Action<TabModel, Tab>;
    remove: Action<TabModel, Key>;
    set: Action<TabModel, Tab[]>;
    active: Key;
    setActive: Action<TabModel, Key>;
}

const tabModel: TabModel = {
    items: [{ key: "App" }, { key: "styles" }],
    active: "App",
    add: action((state, payload) => {
        state.items.push(payload);
    }),
    remove: action((state, payload) => {
        const tab = state.items.findIndex(({ key }) => key == payload);
        state.items.splice(tab, 1);
    }),
    set: action((state, payload) => {
        state.items = payload;
    }),
    setActive: action((state, payload) => {
        state.active = payload;
    }),
};

export default tabModel;
