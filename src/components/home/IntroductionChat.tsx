const IntroductionChat = () => {
    const anchorStyle = { color: '#1F2937', textDecoration: 'underline' };

    return (
        <div className="chat-body">
            <div className="chat-body-msg">Who are you?</div>
            <div className="chat-body-msg">A web dev with a hobby for procedural drawings.</div>
            <div className="chat-body-msg">What is this?</div>
            <div className="chat-body-msg">A portfolio for the simulations i made from times ago with JavaScript.
                If you want to see some more you can click the Instagram button on right corner.</div>
            <div className="chat-body-msg">Where can i see all animations?</div>
            <div className="chat-body-msg">
                Here is the visual page: <a style={anchorStyle} href="/visual">Visual</a>
                <br /> Here is the GitHub for the code: <a style={anchorStyle} target="_blank" href="https://github.com/gandolh/Random_Casualtiess_Portfolio/tree/main/portofolio/public/GenerativeArt">Code</a>
            </div>
        </div>
    );
}

export default IntroductionChat;