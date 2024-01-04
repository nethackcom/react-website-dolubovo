import {IRecipesData} from "../../../data/RecipesData";
import {H4} from "../../common/font/Headers";
import {baseTheme} from "../../../assets/styles/theme";
import {Text} from "../../common/font/Text";
import {Card} from "./styles";

import TimerIcon from "../../../assets/images/icons/timer.svg";
import LikeIcon from "../../../assets/images/icons/like.svg";

interface RecipeCardProps {
    recipe: IRecipesData
}

export const RecipeCard = ({recipe}: RecipeCardProps) => {
    return (
        <>
            <Card img_url={recipe.img_url}>
                <div className="image_container"></div>
                <div className="recipe__likes">
                    <img src={LikeIcon} alt="Нравится"/>
                    <Text
                        font_family={baseTheme.font_family.inter.standard}
                        font_weight={400}
                        color={"#fff"}
                    >
                        {recipe.likes}
                    </Text>
                </div>
                <div className="card__bottom-content">
                    <div className="recipe__time">
                        <img src={TimerIcon} alt="Время приготовления"/>
                        <Text
                            font_family={baseTheme.font_family.inter.standard}
                            font_weight={400}
                            color={"#fff"}
                        >
                            {recipe.time} минуты
                        </Text>
                    </div>
                    <H4 color={"#fff"}>{recipe.title}</H4>
                </div>
            </Card>
        </>
    )
}