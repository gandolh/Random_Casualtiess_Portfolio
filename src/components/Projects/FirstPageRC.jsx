import React from "react";
import Tilt from "react-parallax-tilt";

const FirstPageRC = () => {
  return (
    <div className="ShowCaseInfoRC">
      <h1> RandomCasualtiess </h1>
      <p>
        "Random casualtiess" reprezinta pentru mine intreaga perioada in care
        am studiat tainele JavaScript-ului si grafica programatica.<br/>
        In sliderul alaturat si mai jos sunt prezentate cateva exemple de cum am folosit p5.js
        pentru a realiza imagini pe un obiect de tip Canvas.
      </p>
      <Tilt tiltReverse={true} className="RCPoster" perspective="1000">
        <img
          src="./imgs/poster1.jpg"
          draggable="false"
          className="RCPosterImg"
          alt="poster"
        />
      </Tilt>
    </div>
  );
};

export default FirstPageRC;
