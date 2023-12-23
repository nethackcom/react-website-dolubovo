import styled from "styled-components";
import {Container, FlexHorizontal, FlexVertical} from "../../common/common.styled";
import {H1} from "../../common/headers/Headers";
import {SecondaryText} from "../../common/headers/Text";
import PyaterochkaShop from "./../../../assets/images/shops/pyatorochka.png"
import PerekrostokShop from "./../../../assets/images/shops/perekrostok.png"
import MagnitShop from "./../../../assets/images/shops/magnit.svg"
import {baseTheme} from "../../../assets/styles/theme";

const ShopBox = styled.div`
  background-color: #FBF9F6;
  padding: 95px 0;
  margin-top: 100px;
  margin-bottom: 100px;
`

const ShopsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`

const Shop = styled.div`
  width: 300px;
  height: 170px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    & img {
      -webkit-filter: none;
      filter: none;
      opacity: 1;
    }    
  }
  
  & img {
    width: 221px;
    height: auto;
    opacity: 0.5;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    transition: .3s ease-in-out;
  }
`

const MoreShopsButton =  styled.a`
  color: #425261;
  font-family: ${baseTheme.font_family.blogger.regular};
  font-size: 16px;
`

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