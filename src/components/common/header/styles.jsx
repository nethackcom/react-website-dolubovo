import styled from "styled-components";

export const HeaderBox = styled.header`
  position: relative;
`

export const Menu = styled.nav`
  & ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  & li {
    margin-right: 60px;
    &:nth-of-type(3) {
      margin-right: 0px;
    }
    &:nth-of-type(4) {
      margin-left: auto;
    }
    &:last-of-type {
      margin-right: -6px;
    }
    
    &.header_nav__logotype {
      margin-left: 130px;
      margin-right: 130px;
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
`