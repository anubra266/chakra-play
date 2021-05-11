import { FaPlus } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { HiShare } from "react-icons/hi";
import { BiSave } from "react-icons/bi";
import { VscDiff } from "react-icons/vsc";

import OpenOverride from "./editor-layout/open-override";
import MenuAction from "./menu-action";

const MenuActions = () => {
    return (
        <>
            <OpenOverride />
            {/* <MenuAction title="Board Search" icon={FiSearch} /> */}
            {/* <MenuAction title="Save Board" icon={BiSave} /> */}
            {/* <MenuAction title="Social Share" icon={HiShare} /> */}
            {/* <MenuAction title="Diff Editor" icon={VscDiff} /> */}
        </>
    );
};

export default MenuActions;
