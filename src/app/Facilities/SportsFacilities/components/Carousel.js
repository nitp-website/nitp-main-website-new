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
            <SwiperSlide><img src="https://i.postimg.cc/23pT7V6p/Receiving-Championship-trophy-from-Union-Minister-of-State-Ministry-of-Education-Shri-Subhas-Sarka.jpg" /></SwiperSlide>      
            <SwiperSlide><img src="https://i.postimg.cc/j2Rcm5BV/4.jpg" /></SwiperSlide>
            <SwiperSlide><img src="https://i.postimg.cc/zXXpkynK/DSC09197.jpg" /></SwiperSlide>
            <SwiperSlide><img src="https://i.postimg.cc/gcwWsQJ4/2017-18-A.jpg" /></SwiperSlide>
            <SwiperSlide><img src="https://i.postimg.cc/prs1Q2jR/2022-23A.jpg" /></SwiperSlide>
            <SwiperSlide><img src="https://i.postimg.cc/d1rY9TQv/2017-18-B.jpg" /></SwiperSlide>
            
          </Swiper>
        </>
      );
}

export default Carousel