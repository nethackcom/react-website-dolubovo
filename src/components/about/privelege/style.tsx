import styled from "styled-components";

interface CardProps {
    icon: string,
}

export const Card = styled.div<CardProps>`
  padding: 40px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  align-items: start;
  gap: 40px;
  min-height: 245px;
  box-shadow: 0px 4px 64px rgba(241,239,235,0.5);
  transition: .3s ease-in-out;
  cursor: pointer;
  outline: none;
  border: 1px solid rgba(255,255,255,0);
  
  &:hover {
    border: 1px solid rgba(241,239,235,1);
  }

  & .privilege-icon {
    background-image: url(${({icon}) => icon});
    width: 85px;
    height: 85px;
    background-repeat: no-repeat;
    flex:none;
  }
  
  & .privilege-content h3 {
    margin-bottom: 10px;
  }
`