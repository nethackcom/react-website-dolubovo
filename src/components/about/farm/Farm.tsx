import {Container} from "../../common/common.styled";
import {H1} from "../../common/headers/Headers";
import Union from "../../../assets/images/union.png"
import styled from "styled-components";
import {baseTheme} from "../../../assets/styles/theme";

const FarmBox = styled.div`
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

export const Farm = () => {
    return (
        <>
            <FarmBox>
                <Container>
                    <H1>Производство молочных продуктов <br/> Ферма «Долюбово»</H1>

                    <div className="farm__container">
                        <div className="farm__container--list">
                            <ul>
                                <li>
                                    Каждый день, мы, сохраняя лучшее, что дала нам природа, производим молочные продукты «Ферма Долюбово».
                                </li>
                                <li>
                                    С которыми вы создаете моменты душевного единства всей семьи, вызывая восторг от многогранных вкусов, приготовленных дома блюд.
                                </li>
                                <li>
                                    Ферма «Долюбово» помогает создавать семейные традиции.
                                </li>
                            </ul>
                        </div>
                        <img src={Union} alt="" className={"union"}/>
                    </div>
                </Container>
            </FarmBox>
        </>
    )
}