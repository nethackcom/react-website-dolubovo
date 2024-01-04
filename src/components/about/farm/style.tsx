import styled from "styled-components";
import {baseTheme} from "../../../assets/styles/theme";

export const FarmBox = styled.div`
  margin-top: 80px;
  margin-bottom: -100px;
  
  & .farm__container {
    display: flex;
    justify-content: space-between;
    gap: 50px;
    margin-top: 50px;
  }
  
  h1 {
    text-align: center;
  }

  & .farm__container--list {
    margin-top: 50px;
  }
  
  & .farm__container--list ul {
    display: flex;
    flex-direction: column;
    gap: 50px;
    
    li {
      display: flex;
      font-family: ${baseTheme.font_family.blogger.light};
      font-size: 26px;
      line-height: 130%;
      color: ${baseTheme.colors.font_primary};
    }
  }
  
  & .farm__container--list ul {
    li::before {
      width:6px;
      min-width: 6px;
      height: 6px;
      display: block;
      content: "";
      border-radius: 100%;
      margin-right: 30px;
      margin-top: 15px;
      background: ${baseTheme.colors.primary};
    }
  }
  
  & .union {
    position: relative;
    z-index:100;
  }
`