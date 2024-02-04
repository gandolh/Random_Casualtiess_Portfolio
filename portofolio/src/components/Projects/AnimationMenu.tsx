import { Link } from "react-router-dom";
import config from "@/config";
const AnimationMenu = () => {
    const animations = { ...config.AnimationPath };

    const buildMenu = (animations: AnimationPaths) => {

        const entries = Object.entries(animations);
        return (<div className="AnimationMenu">
            {(entries || []).map(([key, value], i) => {
                return (
                    <>
                        <div className="InnerAnimationMenu" key={"InnerAnimationMenu" + i} >
                            <p className="mytitleparagraph">{key}</p>
                            {value.map((v, j) => (
                                <Link key={"hrefAnimation" + j} to={v.path} >{v.name}</Link>
                            ))}
                        </div>
                    </>
                )
            }
            )
            }
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
