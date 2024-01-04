import styled from "styled-components";
import {baseTheme} from "../../../assets/styles/theme";

export const ShopBox = styled.div`
  background-color: #FBF9F6;
  padding: 95px 0;
  margin-top: 100px;
  margin-bottom: 100px;
`

export const ShopsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`

export const Shop = styled.div`
  width: 300px;
  height: 170px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    & img {
      -webkit-filter: none;
      filter: none;
      opacity: 1;
    }    
  }
  
  & img {
    width: 221px;
    height: auto;
    opacity: 0.5;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    transition: .3s ease-in-out;
  }
`

export const MoreShopsButton =  styled.a`
  color: #425261;
  font-family: ${baseTheme.font_family.blogger.regular};
  font-size: 16px;
`