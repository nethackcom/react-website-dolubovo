import {Swiper} from "swiper/react";
import {SwiperControls} from "./SwiperControls";
import React, {useState} from "react";
import {Autoplay} from "swiper/modules";


export const Slider = ({children}: {children: any}) => {
    const [progress, setProgress] = useState(1)

    return (
        <>
            <Swiper
                modules={[Autoplay]}
                autoplay
                speed={800}
                spaceBetween={30}
                slidesPerView={3}
                slidesPerGroup={3}
                navigation
                onSlideChange={(swiper:any) => setProgress(swiper.progress + 1)}
            >
                <SwiperControls progress={progress}/>
                {
                    children
                }
            </Swiper>
        </>
    )
}