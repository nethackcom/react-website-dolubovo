import {baseTheme} from "../../../assets/styles/theme";
import styled from "styled-components";

interface IPostBox {
    image: string | null,
}

export const PostBox = styled.article<IPostBox>`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 20px;
  padding-right: 50px;
  border-right: 1px solid #F1F2F3;
  cursor: pointer;
  
  h4 {
    transition: .3s ease-in-out;
  }
  
  &:hover {
    h4 {
      color: ${baseTheme.colors.primary_hover}
    }
  }
  
  & .posts__image {
    background-image: url(${({image}) => image});
    width: 280px;
    height: 240px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
    transition: .3s ease-in-out;
    overflow: hidden;
  }
  
  & .posts__container {
    display: grid;
  }
  
  & button {
    width: fit-content;
  }
`

export const Date = styled.div`
  font-size: 13px;
  font-family: ${baseTheme.font_family.inter.standard};
  font-weight: 300;
  color: #828383;
`

export const MiniPostBox = styled.article`
  cursor: pointer;
  
  & h4 {
    transition: .3s ease-in-out;
  }
  
  & .posts__container {
    gap: 10px;
    display: grid;
  }
  
  &:hover h4{
    color: ${baseTheme.colors.primary_hover};
  }
`

export const GridColumns = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
`

export const GridRows = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  padding-left: 50px;
  
  & article:last-child {
    align-items: end;
    display: grid;
    border-top: 1px solid #F1F2F3;
  }
`