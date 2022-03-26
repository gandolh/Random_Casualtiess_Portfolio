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


    const buildRecursiveMenu = (animations_json,iteration)=>{

        // return JSON.stringify(animations_json);
        const entries = Object.entries(animations_json);
        // console.log(entries);
        return (<div style={{marginLeft:'25px'}}>
            
                    {(entries || []).map(([key,el],i)=>
                    <div key ={`animMenu_${iteration}_${i}`}>
                        {key}
                        {console.log(key,key.includes('.html')) }
                        {
                            !(key.includes('html'))  && typeof(el) =='object'?
                            (buildRecursiveMenu(el))
                            :
                            (<a href='123'>aici</a>)
                        }
                    </div>
                    )}
                </div>)
    }
	return (
		<div className="containerWebSCRC" id="AnimationMenu">
            <h3>Generative art:</h3>
			{buildRecursiveMenu(animations,0)}
		</div>
	);
};

export default AnimationMenu;
