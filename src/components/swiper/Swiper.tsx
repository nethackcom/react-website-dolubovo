import {Swiper, SwiperSlide} from "swiper/react";
import {SwiperControls} from "./SwiperControls";
import React from "react";


export const Slider = () => {

    return (
        <>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                slidesPerGroup={3}
                navigation
            >
                <SwiperControls />

                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
            </Swiper>
        </>
    )
}