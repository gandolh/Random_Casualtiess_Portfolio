import React, { useState, useEffect }  from "react";
import { Link } from "react-router-dom";
const AnimationMenu = () => {
    const [animations, setAnimations] = useState([])
    useEffect(() => {   
        async function fetchData(url) {
        const animationPaths = await fetch(url);
        const data =await  animationPaths.json();
        setAnimations(data);
    }
    fetchData(`${window.appsettings.SERVER_ADRESS}/getanimationpath`);
    
    },[]);
    const arrayRemove = (arr, value) => { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

    const buildAnimLink = (path)=>{
        let newPath = path;
        if(path!=undefined)
            newPath =encodeURI( arrayRemove(path.split('/'),'public').join('/'));
        return newPath;
    }

    const buildRecursiveMenu = (animations_json,iteration)=>{

        // return JSON.stringify(animations_json);
        const entries = Object.entries(animations_json);
        // console.log(entries);
        return (<div >
            
                    {(entries || []).map(([key,el],i)=>{

                        
                    return (
                    
                        !key.includes('.html') && <div id={`animMenu_${iteration}_${i}`}
                         key ={`animMenu_${iteration}_${i}`}>
                        <Link target="_blank" class={"animanchors" + (!buildAnimLink(el['index.html']) && " active" ) }
                         to={buildAnimLink(el['index.html'])}>{key}</Link>
                        {
                            typeof(el) =='object' && (buildRecursiveMenu(el))
                        }
                    </div>)
                    }
                    )
                    }
                </div>)
    }
	return (
		<div className="containerWebSCRC" id="AnimationMenu">
            <span id="recursiveMenuParent">
			    {buildRecursiveMenu(animations,0)}
            </span>
		</div>
	);
};

export default AnimationMenu;
