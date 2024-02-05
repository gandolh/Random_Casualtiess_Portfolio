import config from '@/config';
import { Sidebar } from 'flowbite-react';
import React from 'react';
import {  HiArrowSmRight } from 'react-icons/hi';

const editorWrapper = {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    height: 'calc(100vh - 4.5rem)',
}

const Editor = () => {
    const [srcPath, setSrcPath] = React.useState<string>('');  
    
    const animations = { ...config.AnimationPath };
    const entries = Object.entries(animations);
    const prefix = `https://gandolh.github.io/GenerativeArt/`;

    const handleClick = (path: string) => () => {
        const newPath = prefix + path.replace("\\","/") + "/index.html";
        setSrcPath(newPath);
    }

    return ( <div style={editorWrapper}>
      <Sidebar className='' aria-label="Sidebar with multi-level dropdown example" style={{overflow: 'auto'}}>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
        {(entries || []).map(([key, value], i) => (
            <Sidebar.Collapse key={"SidebarCollapseEditor" + i} icon={HiArrowSmRight} label={key}>
                 {value.map((v, j) => (
                    <Sidebar.Item key={`sidebarItemEditor${i}${j}`} onClick={handleClick(v.path)}>{v.name}</Sidebar.Item>
                 ))}
                 </Sidebar.Collapse>
        ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    <div> 
        <iframe src={srcPath} width="100%" height="100%"></iframe> 
        
    </div>
    </div> );
}
 
export default Editor;