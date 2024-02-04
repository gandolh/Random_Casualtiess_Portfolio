import React from "react";
import config from "@/config";
import { Button } from "flowbite-react";
import AnimationModal from "../modals/AnimationModal";
const AnimationMenu = () => {
    const [openModal, setOpenModal] = React.useState<boolean>(false);
    const [animationPath, setAnimationPath] = React.useState<AnimationPath>({name: "", path: ""});

    const handleOpenModal = (path: AnimationPath) => () => {
        setOpenModal(true);
        setAnimationPath(path);
    };
    const animations = { ...config.AnimationPath };

    const buildMenu = (animations: AnimationPaths) => {

        const entries = Object.entries(animations);
        return (<div className="AnimationMenu">
            {(entries || []).map(([key, value], i) => {
                return (
                    <div className="InnerAnimationMenu" key={"InnerAnimationMenu" + i} >
                        <h3 className="mytitleparagraph font-semibold"><center> {key}</center></h3>
                        {value.map((v, j) => (
                            <>
                            <Button 
                            size="sm" 
                            color="gray"
                            key={"hrefAnimation" + j} 
                            onClick={handleOpenModal(v)}>{v.name}</Button>
                            </>
                        ))}
                    </div>
                )
            })}

            <AnimationModal animation={animationPath} openModal={openModal} setOpenModal={setOpenModal} />
        </div>)
    }
    return (
        <div>
            <h3> <center> Animations </center></h3>
            {buildMenu(animations)}
        </div>
    );
};

export default AnimationMenu;
