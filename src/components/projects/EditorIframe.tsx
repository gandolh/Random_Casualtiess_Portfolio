type EditorIframeProps = {
    srcPath: string,
    uid: number
}

const EditorIframe = ({ srcPath }: EditorIframeProps) => {
    return (
        <>
            <div>
                <iframe src={srcPath} width="100%" height="100%"></iframe>
            </div>
        </>

    );
}

export default EditorIframe;