import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import {  Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import image1 from './images/andreas-rasmussen-oBmlsTW2pHY-unsplash.avif'
import image2 from './images/febiyan--hwDGRQzAeM-unsplash.avif'
import image3 from './images/serge-taeymans-FEpZRUSqTTk-unsplash.avif'

const CarouselOne = React.forwardRef((props, ref) => {
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
                <img src={image1} alt='img1' loading="lazy"></img>
                <div className="swiper-lazy-preloader"></div>
            </SwiperSlide>
            <SwiperSlide>
                <img src={image2} alt='img2' loading="lazy"></img>
                <div className="swiper-lazy-preloader"></div>
            </SwiperSlide>
            <SwiperSlide>
                <img src={image3} alt='img3' loading="lazy"></img>
                <div className="swiper-lazy-preloader"></div>
            </SwiperSlide>
        </Swiper>
        )
})
    

export default CarouselOne