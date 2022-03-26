import React, { useState, useEffect }  from "react";
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

    const buildRecursiveMenu = (animations_json)=>{
        console.log(animations_json);
        return JSON.stringify(animations_json);
        // const keys = Object.keys(animations_json);
        // if(keys.length > 0){
        //     for(let key in keys){
        //         if(animations_json[key])
        //         return <ul>{buildRecursiveMenu(animations_json[key])}</ul>;

        //     }
        // }
        
    }

	return (
		<div className="containerWebSCRC" id="AnimationMenu">
            <h3>Generative art:</h3>
			{buildRecursiveMenu(animations)}
		</div>
	);
};

export default AnimationMenu;
