import '@/styles/Banner.css'
const Banner = () => {
    return ( <div className="banner">
        <div></div>
        <div className="bannerText">
        <p className="welcome">Welcome to</p>
        <h1 className="mainTitle">Random Casualtiess Portfolio</h1>
        </div>
        <img alt="ilustration" src="imgs/hello.svg" className="ilustration" draggable="false"></img>
        <div></div>
    </div> );
}
 
export default Banner;