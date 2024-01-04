import styled from "styled-components";
import HeroBackground from "../../../assets/images/hero.png"
import {baseTheme} from "../../../assets/styles/theme";

export const HeroBox = styled.div`
  background-image: url(${HeroBackground});
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -105px;
  
  & .wave {
    margin-top: -80px;
    width: 100%;
  }
`

export const HeroHeader = styled.span`
  font-family: ${baseTheme.font_family.blogger.regular};
  font-size: 140px;
  color: #fff;
  display: block;
  text-align: center;
`

export const AfterHeroHeader = styled.div`
  font-size: 31px;
  font-family: ${baseTheme.font_family.inter.standard};
  font-weight: 400;
  line-height: 130%;
  color: #fff;
  width: 514px;
  margin-top: 10px;
  text-align: center;
`

export const BeforeHeroHeader = styled.div`
  font-size: 60px;
  font-family: "Andantino script", sans-serif;
  font-weight: 400;
  line-height: 130%;
  color: #fff;
  width: 514px;
  margin-top: 10px;
  text-align: center;
`

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  background: radial-gradient(circle, rgba(83, 62, 40, 0.15) 0%, rgba(255, 255, 255, 0) 80%), radial-gradient(circle, rgba(0, 0, 0, 0.15) 0%, rgba(255, 255, 255, 0) 80%);
`