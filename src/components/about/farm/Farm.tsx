import {Container} from "../../common/common.styled";
import {H1} from "../../common/font/Headers";
import Union from "../../../assets/images/union.png"
import {FarmBox} from "./style";

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