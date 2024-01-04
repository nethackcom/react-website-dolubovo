import styled from "styled-components";

interface CardProps {
    reverse?: boolean,
}

export const Card = styled.div<CardProps>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 70px;
  flex-direction: ${({reverse}) => reverse  && "row-reverse"};
  
  h2 {
    margin-bottom: 10px;
    max-width: 500px;
  }
  
  p {
    max-width: 500px;
    &:first-child {
      margin-bottom: 10px;
    }
  }
`

export const DescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
`