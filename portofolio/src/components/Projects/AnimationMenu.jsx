import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import config from "@/config";
const AnimationMenu = () => {
    const animations = { ...config.AnimationPath };

    const arrayRemove = (arr, value) => {

        return arr.filter(function (ele) {
            return ele != value;
        });
    }



    const buildMenu = (animations_json) => {

        // return JSON.stringify(animations_json);
        const entries = Object.entries(animations_json);
        return (<div className="AnimationMenu">
            {(entries || []).map(([key, value], i) => {
                return (
                    <>
                        <div className="InnerAnimationMenu" key={"InnerAnimationMenu" +i} >
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
        buildMenu(animations)
    );
};

export default AnimationMenu;
