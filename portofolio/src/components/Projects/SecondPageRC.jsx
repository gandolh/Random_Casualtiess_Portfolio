import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "@nodeModule/swiper/swiper.min.css";
import "@nodeModule/swiper/modules/navigation.min.css";

// import Swiper core and required modules
import { Navigation } from "swiper/modules";

// install Swiper modules
const SecondPageRC = () => {

  return (
    <>
      <div>

        <Swiper navigation={true} className="SwiperRC" loop={true}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <SwiperSlide key={i}>
              <img src={`./imgs/swiper_${i}.jpg`} alt="swiper_img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SecondPageRC;
