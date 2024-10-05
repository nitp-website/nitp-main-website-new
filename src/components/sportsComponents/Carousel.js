// "use client"
// import React,{useState,useEffect} from 'react'

// function Carousel({children:pics,
//     autoSlideInterval=3000,
//     autoSlide=true,}){

//     const [curr,setCurr]=useState(0)
//     const prev=()=>{
//         setCurr((curr)=>(curr===0?pics.length-1:curr-1))
//     }
//     const next=()=>{
//         setCurr((curr)=>(curr===pics.length-1?0:curr+1))
//     }
//     useEffect(()=>{
//         if(!autoSlide) return 
//         const slideInterval=setInterval(next,autoSlideInterval)
//         return ()=>clearInterval(slideInterval)
//     },[])
//     return(
//         <div className=' relative overflow-hidden'>
//             <div className='flex transition-transform ease-out duration-1000'
//             style={{transform:`translateX(-${curr*100}%)`}}>
//                 {pics}
//             </div>
//         </div>
//     )
// }

// export default Carousel
"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../components/sportsComponents/carousel.css'

// import required modules
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
             <SwiperSlide><img src="https://i.postimg.cc/j2Rcm5BV/4.jpg" /></SwiperSlide>      
            <SwiperSlide><img src="https://i.postimg.cc/Pfbj3bYD/DSC09197.jpg" /></SwiperSlide>
            <SwiperSlide><img src="https://i.postimg.cc/0jDVqSGQ/Image-1-00001.jpg" /></SwiperSlide>

            
            
          </Swiper>
        </>
      );
}

export default Carousel