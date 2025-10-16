"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles/Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
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
        className="mySwiper w-full h-[30vh] md:h-[530px] flex justify-center items-center "
      >
        <SwiperSlide>
          <img src="https://i.postimg.cc/0N1Yfkhc/NIRF.png" />
        </SwiperSlide>
        {/** top 2% scientist */}
        <SwiperSlide>
          <img src="https://i.postimg.cc/fTH5mybK/image.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.postimg.cc/FHQKvKyk/image.png" />
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="/homepage/MainEntrance.jpg" /> */}
          <img src="/independeceDayCelbHomePoster.webp" />
        </SwiperSlide>
                <SwiperSlide>
          <img src="https://i.postimg.cc/W38dktZ6/Fall-Festival.webp" alt="Har Ghar Tiranga 2025" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.postimg.cc/yd30JWY8/Fall-Festival-2.webp" alt="Fall Festival 2025" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://nitp-database-s3.s3.ap-south-1.amazonaws.com/MainEntrance.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://nitp-database-s3.s3.ap-south-1.amazonaws.com/MainBuilding.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.postimg.cc/h4mxzgKS/nit-patna-004.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.postimg.cc/fyY06783/nit-patna-005.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
