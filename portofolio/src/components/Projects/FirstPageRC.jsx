import React from "react";
import Tilt from "react-parallax-tilt";

const FirstPageRC = () => {
  return (
    <div className="ShowCaseInfoRC">
      <h1> RandomCasualtiess </h1>
      <p>
        "Random casualtiess" is a project that I've been working on for a while.
        It's a collection of small projects, animations, and games that I've made mainly in p5.js. <br/>
      </p>
      <Tilt tiltReverse={true} className="RCPoster" perspective="500">
        <img
          src="./imgs/poster1.jpg"
          draggable="false"
          className="RCPosterImg"
          alt="poster"
        />
        <center> (Hover on the image)</center>
      </Tilt>
    </div>
  );
};

export default FirstPageRC;
