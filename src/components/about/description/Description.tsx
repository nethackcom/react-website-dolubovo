import {Container} from "../../common/common.styled";
import styled from "styled-components";
import {CardDescription} from "./CardDescription";

import BucketOfMilk from "../../../assets/images/bucket_of_milk.png"
import CheeseProduction from "../../../assets/images/cheese_production.png"
import Equipment from "../../../assets/images/equipment.png"
import Man from "../../../assets/images/man_on_production.png"

const DescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
`

export const Description = () => {
    return (
        <>
            <Container>
                <DescriptionContent>
                    <CardDescription title={"Все начинается со свежего молока"} image={BucketOfMilk}>
                        <p>
                            Мы уверены, что хорошие молочные продукты начинаются с хорошего молока, а оно начинается с богатых зеленых пастбищ полных свежей травы.
                        </p>
                        <p>
                            Наши поставщики обеспечивают нам молоко из самой естественной среды, где местные жители наслаждаются нетронутым ландшафтом и чистым воздухом, в то время как коровы поглощают ароматную и свежую траву.
                        </p>
                    </CardDescription>

                    <CardDescription title={"Контролируем качество"} image={CheeseProduction} reverse={true}>
                        <p>
                            Постоянный лабораторный, технологический контроль на всех стадиях производства обеспечивает высокое качество продукции предприятия. Производственная лаборатория аккредитована на техническую компетентность в соответствии с <b>СТБ ИСО/МЭК 17025</b>.
                        </p>
                    </CardDescription>

                    <CardDescription title={"Технологичность"} image={Equipment}>
                        <p>
                            Технология переработки молока не менее важна для нас – мы используем современное итальянское оборудование, отвечающее всем стандартам и современным нормам.
                        </p>
                    </CardDescription>

                    <CardDescription title={"Безопасность и надежность"} image={Man} reverse={true}>
                        <p>
                            Безопасность и качество продукции гарантирует система безопасности пищевых продуктов на основе принципов НАССР. Система менеджмента окружающей среды в соответствии с требованиями ISO 14001, действует система управления охраной труда в соответствии с Международным стандартом OHSAS 18001. Внедрена и сертифицирована система менеджмента безопасности пищевых продуктов СТБ ИСО 22000.
                        </p>
                    </CardDescription>
                </DescriptionContent>
            </Container>
        </>
    )
}