import EditorIframe from '@/components/projects/EditorIframe';
import config from '@/config';
import { Sidebar } from 'flowbite-react';
import React from 'react';
import { HiArrowSmRight, HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight } from 'react-icons/hi';
const editorWrapper = {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    height: 'calc(100vh - 4.5rem)',
}

const Editor = () => {
    const [srcPath, setSrcPath] = React.useState<string>('');
    const [sidebarCollapsed, setSidebarCollapsed] = React.useState<boolean>(false);
    const [iframeUid, setIframeUid] = React.useState<number>(1);
    const animations = { ...config.AnimationPath };
    const entries = Object.entries(animations);
    const prefix = `https://gandolh.github.io/GenerativeArt/`;

    const handleClick = (path: string) => () => {
        const newPath = prefix + path.replace("\\", "/") + "/index.html";
        setSrcPath(newPath);
        setIframeUid(1);
    }

    const handleToggleSidebar = () => {
        setSidebarCollapsed((prev) => !prev)
        setIframeUid(prev => prev + 1);
    }

    return (<div style={editorWrapper}>
        <Sidebar className='' aria-label="Sidebar with multi-level dropdown example" style={{ overflow: 'auto' }} collapsed={sidebarCollapsed} >
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item
                        icon={sidebarCollapsed ? HiOutlineChevronDoubleRight : HiOutlineChevronDoubleLeft}
                        onClick={() => handleToggleSidebar()}>
                        {sidebarCollapsed ? 'Expand' : 'Collapse'}
                    </Sidebar.Item>

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
        <EditorIframe srcPath={srcPath} uid={iframeUid} />
    </div>);
}

export default Editor;