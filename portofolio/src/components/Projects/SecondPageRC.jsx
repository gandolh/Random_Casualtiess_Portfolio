import React from "react";
// Import Swiper React components
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const SecondPageRC = () => {
  const slideIds = [1, 2, 3, 4, 5, 6];
  return (
    <>
        <Swiper
          className="SwiperRC"
          effect={'coverflow'}
          modules={[Navigation, Pagination, EffectCoverflow]}
          grabCursor={true}
          navigation
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={0}
          slidesPerView={2}
          >
          {slideIds.map((i) => (
            <SwiperSlide key={i}>
              <img src={`./imgs/swiper_${i}.jpg`} alt="swiper_img" />
            </SwiperSlide>
          ))}
        </Swiper>
    </>
  );
};

export default SecondPageRC;
