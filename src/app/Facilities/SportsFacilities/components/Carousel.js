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
            <SwiperSlide><img src="https://i.postimg.cc/N0X5dSBy/90428021-2599567553631866-3209756388901257216-n.jpg" /></SwiperSlide>
            <SwiperSlide><img src="https://i.postimg.cc/zXXpkynK/DSC09197.jpg" /></SwiperSlide>
            <SwiperSlide><img src="https://i.postimg.cc/gcwWsQJ4/2017-18-A.jpg" /></SwiperSlide>
            <SwiperSlide><img src="https://i.postimg.cc/prs1Q2jR/2022-23A.jpg" /></SwiperSlide>
            <SwiperSlide><img src="https://i.postimg.cc/d1rY9TQv/2017-18-B.jpg" /></SwiperSlide>
            <SwiperSlide><img src="https://i.postimg.cc/2S4sT7gk/82612025-2537041906551098-351842986448912384-n.jpg" /></SwiperSlide>
            <SwiperSlide><img src="https://i.postimg.cc/kgz2Fq33/81942976-2526947357560553-7933705877419196416-n.jpg" /></SwiperSlide>
            <SwiperSlide><img src="https://i.postimg.cc/DyCJ01xz/81342642-2529108884011067-568312555097817088-n.jpg" /></SwiperSlide>
          </Swiper>
        </>
      );
}

export default Carousel