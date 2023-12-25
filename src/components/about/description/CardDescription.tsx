import styled from "styled-components";
import {H2} from "../../common/headers/Headers";
import {TextInterLight} from "../../common/headers/Text";

interface CardProps {
    reverse?: boolean,
}

const Card = styled.div<CardProps>`
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

interface CardDescriptionProps {
    children: any,
    title: string,
    image: string,
    reverse?: boolean,
}

export const CardDescription = ({children, title, image, reverse}:CardDescriptionProps) => {
    console.log(title)
    return (
        <>
            <Card reverse={reverse}>
                <img src={image} alt=""/>
                <div className="description-card__content">
                    <H2>{title}</H2>
                    <TextInterLight fontSize={"18px"}>
                        {
                            children
                        }
                    </TextInterLight>
                </div>
            </Card>
        </>
    )
}