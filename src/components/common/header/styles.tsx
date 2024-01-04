import styled from "styled-components";

interface HeaderBoxProps {
    background: boolean,
}
export const HeaderBox = styled.header<HeaderBoxProps>`
  position: sticky;
  top: 0;
  display: block;
  z-index: 1000;
  transition: .3s ease-in-out;
  background-color: ${({background}) => background ? "#fff" : "transparent"};
`

export const Menu = styled.nav`
  & ul {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 2fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: space-between;
  }
  
  & li {
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:nth-of-type(3) {
      margin-right: 0px;
    }
    &:last-of-type {
      margin-right: -80px;
      position: absolute;
      top: 30%;
      right: 0;
    }
    
    &.header_nav__logotype {
      margin-right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  & li a {
    font-size: 16px;
    color: #000;
    font-family: 'Inter', sans-serif;
  }
`;

export const Logotype = styled.div`
  transform: translateY(20px);
`;

export const ButtonSearch = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background: #fff;
  border-radius: 50%;
  border: 1px solid #dfdfdf;
`