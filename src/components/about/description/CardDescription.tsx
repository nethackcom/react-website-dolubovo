import {H2} from "../../common/font/Headers";
import {TextInterLight} from "../../common/font/Text";
import {Card} from "./style";

interface CardDescriptionProps {
    children: any,
    title: string,
    image: string,
    reverse?: boolean,
}

export const CardDescription = ({children, title, image, reverse}:CardDescriptionProps) => {
    console.log(title)
    return (
        <>
            <Card reverse={reverse}>
                <img src={image} alt=""/>
                <div className="description-card__content">
                    <H2>{title}</H2>
                    <TextInterLight fontSize={"18px"}>
                        {
                            children
                        }
                    </TextInterLight>
                </div>
            </Card>
        </>
    )
}