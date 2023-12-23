import {Swiper} from "swiper/react";
import {SwiperControls} from "./SwiperControls";
import React from "react";


export const Slider = ({children}: {children: any}) => {

    return (
        <>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                slidesPerGroup={3}
                navigation
            >
                <SwiperControls />
                {
                    children
                }
            </Swiper>
        </>
    )
}