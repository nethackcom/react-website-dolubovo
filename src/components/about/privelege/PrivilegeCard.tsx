import {H3} from "../../common/font/Headers";
import {TextInterRegular} from "../../common/font/Text";
import {Card} from "./style";

interface PrivilegeCardProps {
    title: string,
    icon: string,
    text: string,
}

export const PrivilegeCard = ({title, icon, text}:PrivilegeCardProps) => {
    return (
        <>
            <Card icon={icon}>
                <div className="privilege-icon"></div>
                <div className="privilege-content">
                    <H3>{title}</H3>
                    <div className="privilege-content--text">
                        <TextInterRegular fontSize={"14px"} color={"rgba(67, 70, 74, 0.5)"}>
                            {text}
                        </TextInterRegular>
                    </div>
                </div>
            </Card>
        </>
    )
}