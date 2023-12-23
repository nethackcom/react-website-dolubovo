import {FlexHorizontal} from "../common/common.styled";
import {useSwiper} from "swiper/react";
import React, {useEffect} from "react";
import styled from "styled-components";
import {baseTheme} from "../../assets/styles/theme";
import {useState} from "react";

const SwiperCounter = styled.div`
  display: flex;
  font-family: ${baseTheme.font_family.blogger.light};
  
  & small {
    font-size: 12px;
    color: #A9B2BA;
    line-height: 1;
  }
`

const Controls = styled.div`
  width: 130px;
  padding: 15px 20px;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  position: absolute;
  bottom: 45px;
  left: 0px;
  display: block;
  
  & button {
    display: flex;
    
    & path {
      transition: .3s ease-in-out;
    }
    
    &:hover {
      & path {
        fill: ${baseTheme.colors.primary};
      }
    }
  }
`

export const SwiperControls = () => {
    const swiper = useSwiper();
    const [length, setLength] = useState(0)
    const [progress, setProgress] = useState(1)

    const prev = () => {
        swiper.slidePrev()
        setProgress(swiper.progress + 1);
    }

    const next = () => {
        swiper.slideNext()
        setProgress(swiper.progress + 1);
    }

    useEffect(() => {
        setLength((swiper.slides.length) / swiper.params.slidesPerGroup)
    }, [])

    return (
        <>
            <Controls>
                <FlexHorizontal gap={"10px"} justify_content={"center"} align_items={"center"}>
                    <button onClick={() => prev()}>
                        <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 4.5L4.5 0V9L0 4.5Z" fill="#C7CCD1"/>
                        </svg>
                    </button>
                    <SwiperCounter>
                        <span>{progress}</span>
                        <small>/{length}</small>
                    </SwiperCounter>
                    <button onClick={() => next()}>
                        <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 4.5L0.5 9V0L5 4.5Z" fill="#C7CCD1"/>
                        </svg>
                    </button>
                </FlexHorizontal>
            </Controls>
        </>
    )
}