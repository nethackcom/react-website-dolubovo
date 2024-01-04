import {Container, FlexHorizontal, FlexVertical} from "../../common/common.styled";
import {H1} from "../../common/font/Headers";
import {SecondaryText} from "../../common/font/Text";
import PyaterochkaShop from "./../../../assets/images/shops/pyatorochka.png"
import PerekrostokShop from "./../../../assets/images/shops/perekrostok.png"
import MagnitShop from "./../../../assets/images/shops/magnit.svg"
import {
    ShopBox,
    MoreShopsButton,
    ShopsList,
    Shop
} from "./style";

export const Shops = () => {
    return (
        <>
            <ShopBox>
                <Container>
                    <FlexHorizontal align_items={"center"} justify_content={"space-between"} gap={"10px"}>
                        <FlexVertical gap={"20px"}>
                            <H1>Где купить</H1>
                            <SecondaryText width={"320px"}>
                                Вы можете найти магазины, в которых можно приобрести нашу продукцию
                            </SecondaryText>
                            <MoreShopsButton>Карта магазинов</MoreShopsButton>
                        </FlexVertical>
                        <ShopsList>
                            <Shop>
                                <img src={PyaterochkaShop} alt="Пятерочка"/>
                            </Shop>
                            <Shop>
                                <img src={PerekrostokShop} alt="Перекресток"/>
                            </Shop>
                            <Shop>
                                <img src={MagnitShop} alt="Пятерочка"/>
                            </Shop>
                        </ShopsList>
                    </FlexHorizontal>
                </Container>
            </ShopBox>
        </>
    )
}