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

        let submenu;
        // return JSON.stringify(animations_json);
        console.log(animations_json);
        const values = Object.values(animations_json);
        return (<div style={{marginLeft:'25px'}}>{Object.keys(animations_json)[0]}
                    {(values || []).map((el)=>
                    <div>
                        {typeof(el) == 'object'  ?buildRecursiveMenu(el):<a href={el}>aici</a>}
                    </div>
                    )}
                </div>)
    }
	return (
		<div className="containerWebSCRC" id="AnimationMenu">
            <h3>Generative art:</h3>
			{buildRecursiveMenu(animations)}
		</div>
	);
};

export default AnimationMenu;
