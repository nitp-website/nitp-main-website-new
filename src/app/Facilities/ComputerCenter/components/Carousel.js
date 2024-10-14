"use client"
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './carousel.css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Carousel = () => {
    return (
        <>
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide><img src="https://i.postimg.cc/9QJJxpTM/cc.png" /></SwiperSlide>
            
          </Swiper>
        </>
      );
}

export default Carousel