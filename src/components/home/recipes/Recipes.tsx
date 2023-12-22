import {Container, FlexHorizontal, FlexVertical} from "../../common/common.styled";
import {H1} from "../../common/headers/Headers";
import {SecondaryText} from "../../common/headers/Text";
import {PrimaryButton} from "../../common/buttons/Button";

import "swiper/css";
import "swiper/css/autoplay";
import React from "react";
import {Slider} from "../../swiper/Swiper";

export const Recipes = () => {

    return (
        <>
            <Container>

                <FlexVertical gap={"20px"}>
                    <H1>Рецепты</H1>
                    <SecondaryText width={"290px"}>
                        52 отборных рецепта для всей семьи от мала до велика
                    </SecondaryText>
                    <PrimaryButton active={true} width={"190px"}>
                        Все рецепты
                    </PrimaryButton>
                </FlexVertical>

                <Slider />

            </Container>
        </>
    )
}