import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import {  Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import image4 from './images/sandro-kradolfer-imLsDPLnr7Y-unsplash.avif'
import image5 from './images/danishpastry.avif'
import image6 from './images/julian-hochgesang-SDxDQXixgfU-unsplash.avif'
const CarouselTwo = React.forwardRef((props, ref) => {
    return (
            <Swiper
                ref={ref}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                className="swiper"
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <img src={image4} alt='img1' loading="lazy"></img>
                    <div className="swiper-lazy-preloader"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image5} alt='img2' loading="lazy"></img>
                    <div className="swiper-lazy-preloader"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image6} alt='img3' loading="lazy"></img>
                    <div className="swiper-lazy-preloader"></div>
                </SwiperSlide>
            </Swiper>
        )
})
    

export default CarouselTwo