import { action, Action } from "easy-peasy";

export type Orientation = "horizontal" | "vertical" | "preview" | "editor";

export interface OrientationModel {
    state: Orientation;
    set: Action<OrientationModel, Orientation>;
}

const orientationModel: OrientationModel = {
    state: "vertical",
    set: action((state, payload) => {
        state.state = payload;
    }),
};

export default orientationModel;
