import {Container} from "../../common/common.styled";
import {H1, H2} from "../../common/font/Headers"
import {SecondaryText} from "../../common/font/Text";
import MilkImage from "../../../assets/images/milk.png"
import Technologies from "../../../assets/images/technologies.png"
import Quality from "../../../assets/images/quality.png"
import Wave from "../../../assets/images/wave.svg";
import {
    ProductionBox,
    ProductionCard,
    ProductionCardList
} from "./style";

export const Production = () => {
    return (
        <>
            <ProductionBox>
                <img src={Wave} alt="wave" className="wave"/>
                <Container>
                    <H1 textAlign={"center"}>Производство и качество <br/>молочных продуктов</H1>
                    <SecondaryText width={"560px"} id="text__middle">
                        Ферма «Долюбово» производит традиционные продукты, сочетая фермерское отношение c современными технологиями.
                    </SecondaryText>
                    <ProductionCardList>
                        <ProductionCard img={MilkImage}>
                            <div className="production__image"></div>
                            <H2>Молоко</H2>
                            <div className="production__description">
                                Только свежее молоко от коров из естественно среды обитания
                            </div>
                        </ProductionCard>
                        <ProductionCard img={Technologies}>
                            <div className="production__image"></div>
                            <H2>Производство</H2>
                            <div className="production__description">
                                Используем современное итальянское оборудование Sfoggiatchh Srl
                            </div>
                        </ProductionCard>
                        <ProductionCard img={Quality}>
                            <div className="production__image"></div>
                            <H2>Контроль качества</H2>
                            <div className="production__description">
                                Соответсвует стандартам ISO 8196 - 3:2009
                            </div>
                        </ProductionCard>
                    </ProductionCardList>
                </Container>
            </ProductionBox>
        </>
    )
}