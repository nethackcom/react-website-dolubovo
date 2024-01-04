import styled from "styled-components";

interface CardProps {
    img_url: string,
}

export const Card = styled.div<CardProps>`
  width: 300px;
  height: 410px;
  border-radius: 20px;
  background-color: #ddd;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 30px;
  justify-content: flex-end;
  overflow: hidden;
  cursor: pointer;
  
  & .image_container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image:
            linear-gradient(to top, rgba(126, 102, 80, 1), rgba(151, 132, 120, 0), rgba(151, 132, 120, 0.3)),
            url("${({img_url}) => img_url}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
    transition: .3s ease-in-out;
  }
  
  &:hover {
    & .image_container {
      transform: scale(1.2);
    }
  }
  
  & .recipe__likes {
    position: absolute;
    right: 20px;
    top: 20px;
    display: flex;
    align-items: center;
    gap: 5px;
    z-index: 100;
  }
  
  & .recipe__time {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  
  & .card__bottom-content {
    min-height: 90px;
    z-index: 100;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`