import Banner from "@/components/home/Banner";
import IntroductionChat from "@/components/home/IntroductionChat";

const Home = () => {


  return (
    <>
      <div className="container-wrapper">
        <div className="container ">
          <Banner />
          <hr
             className="my-12 h-0.5 border-t-0 opacity-100 dark:opacity-50" style={{background: '#ccc'}} />
          <IntroductionChat />
        </div>
      </div>
    </>
  );
};

export default Home;
