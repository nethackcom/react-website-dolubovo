import {Container} from "../../common/common.styled";
import {TextBloggerLight} from "../../common/font/Text";
import WaveBlue from "../../../assets/images/wave_blue.svg";
import {QuoteBox, QuoteContentBox} from "./style";

export const Quote = () => {
    return (
        <>
            <QuoteBox>
                <img src={WaveBlue} alt="" className="wave" />
                <QuoteContentBox>
                    <Container>
                        <TextBloggerLight fontSize={"26px"} textAlign={"center"} color={"#fff"}>
                            <blockquote>
                                Рецепты и традиции очень важны для производства молочных продуктов Ферма Долюбово, но ключевой секрет – низменно высококачественное и чрезвычайно вкусное молоко, которое мы используем во всех наших продуктах. Ведь в конечном итоге, качество молока имеет решающее значение.
                            </blockquote>
                        </TextBloggerLight>
                    </Container>
                </QuoteContentBox>
            </QuoteBox>
        </>
    )
}