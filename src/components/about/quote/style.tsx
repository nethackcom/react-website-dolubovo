import styled from "styled-components";
import {baseTheme} from "../../../assets/styles/theme";
import Quotes from "../../../assets/images/quotes.svg";
import Jug from "../../../assets/images/jug.svg";
import Cow from "../../../assets/images/cow.svg";

export const QuoteBox = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 130px;
  
    & .wave {
      width: 100%;
      height: 100%;
      margin-bottom: -50px;
    }
  
  &::before {
    position: absolute;
    bottom: -20px;
    left: -5%;
    width: 450px;
    height: 454px;
    display: block;
    content: "";
    background-image: url(${Jug});
    background-repeat: no-repeat;
    background-size: contain;
  }

  &::after {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 395px;
    height: 321px;
    display: block;
    content: "";
    background-image: url(${Cow});
    background-repeat: no-repeat;
    background-size: contain;
  }
`

export const QuoteContentBox = styled.div`
  background-color: ${baseTheme.colors.primary};
  // background-image: url(${Jug}), url(${Cow});
  // background-repeat: no-repeat;
  // background-position: left, right;
  
  & blockquote {
    padding: 50px 0 150px 0;
    max-width: 720px;
    margin: 0 auto;
    
    &::before {
      display: block;
      margin: 0 auto 20px auto;
      position: sticky;
      content: "";
      width: 47px;
      height: 31px;
      background-image: url(${Quotes});
    }
  }
`