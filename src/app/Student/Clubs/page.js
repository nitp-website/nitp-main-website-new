import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const ImageSlider = () => {
    return (
        <div>
            <Swiper
                className="swiper_main"
                loop={true}
                autoplay={{ delay: 2000 }}
                pagination={{ el: '.swiper-pagination' }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
            >
                <SwiperSlide>
                    <img src="https://i.imgur.com/j5sbXCe.jpg" alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.imgur.com/ntMNtlk.jpg" alt="Slide 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.imgur.com/h28zegQ.jpg" alt="Slide 3" />
                </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            <Swiper
                className="swiper_text"
                loop={true}
                slidesPerView={1}
                allowTouchMove={false}
            >
                <SwiperSlide>
                    <p className="txt">
                        Some text for first slide<br />
                        Some text for first slide<br />
                        Some text for first slide<br />
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className="txt">
                        Some text for second slide<br />
                        Some text for second slide<br />
                        Some text for second slide<br />
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className="txt">
                        Some text for third slide<br />
                        Some text for third slide<br />
                        Some text for third slide<br />
                    </p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ImageSlider;