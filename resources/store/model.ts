import codeModel, { CodeModel } from "./code";
import orientationModel, { OrientationModel } from "./orientation";
import tabsModel, { TabModel } from "./tabs";

export interface StoreModel {
    orientation: OrientationModel;
    tabs: TabModel;
    code: CodeModel;
}

const model: StoreModel = {
    orientation: orientationModel,
    tabs: tabsModel,
    code: codeModel,
};

export default model;
