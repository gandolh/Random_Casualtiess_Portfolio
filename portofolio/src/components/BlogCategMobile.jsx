import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import './BlogCategMobile.css'
const BlogCategMobile = (props) => {

  return (
    <Swiper>
      {props.blogCateg.map((category) => (
        <SwiperSlide key={i}>
          <div
            className={'tabMobile'}
            key={category.id}
          >
            <p> {category.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BlogCategMobile;
