import {Container, FlexHorizontal, FlexVertical} from "../../common/common.styled";
import {H1} from "../../common/font/Headers";
import {SecondaryText} from "../../common/font/Text";
import {PrimaryButton} from "../../common/buttons/Button";

import "swiper/css";
import "swiper/css/autoplay";
import React from "react";
import {Slider} from "../../swiper/Swiper";
import {RecipesData} from "../../../data/RecipesData";
import {SwiperSlide} from "swiper/react";
import {RecipeCard} from "./RecipeCard";

export const Recipes = () => {

    return (
        <>
            <Container>
                <FlexHorizontal gap={"30px"} justify_content={"space-between"} align_items={"flex-start"}>
                    <FlexVertical gap={"20px"}>
                        <H1>Рецепты</H1>
                        <SecondaryText width={"290px"}>
                            52 отборных рецепта для всей семьи от мала до велика
                        </SecondaryText>
                        <PrimaryButton active={true} width={"190px"}>
                            Все рецепты
                        </PrimaryButton>
                    </FlexVertical>
                    <Slider>
                        {
                            RecipesData.map((recipe) => (
                                <SwiperSlide>
                                    <RecipeCard recipe={recipe} />
                                </SwiperSlide>
                            ))
                        }
                    </Slider>
                </FlexHorizontal>

            </Container>
        </>
    )
}