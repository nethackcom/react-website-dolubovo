import styled from "styled-components";
import {baseTheme} from "../../../assets/styles/theme";

export const ProductionBox = styled.div`
  background-color: #FBF9F6;
  padding: 80px 0 100px 0;
  text-align: center;
  margin-bottom: 100px;
  margin-top: 120px;
  position: relative;
  
  & .wave {
    position: absolute;
    left: 0;
    top: -100px;
    z-index: -1;
  }

  & span#text__middle {
    display: block;
    max-width: 560px;
    margin: 0 auto;
    margin-top: 10px;
  }
`

export const ProductionCardList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
`

interface ProductionCardProps {
    img: string,
}

export const ProductionCard = styled.div<ProductionCardProps>`
    width: 410px;
    height: 260px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px;
    justify-content: flex-end;
    overflow: hidden;
    border-radius: 20px;
    opacity: 0.4;
    cursor: pointer;
    transition: .3s ease-in-out;
    text-align: left;
  
    &:hover {
      opacity: 1;
      
      .production__image {
        transform: scale(1.2);
      }
    }
  
    & h1 {
      position: relative;
      z-index: 100;
    }
  
    & .production__description {
      max-width: 338px;
      color: #747D85;
      font-size: 15px;
      font-family: ${baseTheme.font_family.inter.standard};
      font-weight: 300;
      position: relative;
      z-index: 100;
    }
  
    & .production__image {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-image: 
              linear-gradient(to bottom, rgba(255,255,255,0), rgba(244,243,242,1)),
              url(${({img}) => img});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      z-index: 1;
      transition: .3s ease-in-out;
    }
`
