import WaveWhite from "../../../assets/images/wave-white.svg";
import {
    HeroBox,
    HeroContainer,
    BeforeHeroHeader,
    HeroHeader,
    AfterHeroHeader,
} from "./style";

export const Hero = () => {
    return (
        <>
            <HeroBox>
                <HeroContainer>
                    <BeforeHeroHeader>
                        Создавая традиции
                    </BeforeHeroHeader>
                    <HeroHeader>
                        Ферма «Долюбово»
                    </HeroHeader>
                    <AfterHeroHeader>
                        Бережно производим молочные продукты из натурального сырья
                    </AfterHeroHeader>
                </HeroContainer>
                <img src={WaveWhite} alt="" className={"wave"}/>
            </HeroBox>
        </>
    )
}