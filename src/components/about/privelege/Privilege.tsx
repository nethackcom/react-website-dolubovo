import styled from "styled-components";
import {Container} from "../../common/common.styled";
import {H1} from "../../common/font/Headers";
import {PrivilegeCard} from "./PrivilegeCard";
import Medal from "../../../assets/images/icons/privelege/medal.svg";
import Document from "../../../assets/images/icons/privelege/document.svg";
import HandShake from "../../../assets/images/icons/privelege/handshake.svg";
import Hands from "../../../assets/images/icons/privelege/hands.svg"

const PrivilegeBox = styled.div`
  margin-top: 180px;
  
  & h1 {
    margin-bottom: 30px;
  }
  
  & .privilege-grid-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
  }
`

export const Privilege = () => {
    return (
        <>
            <PrivilegeBox>
                <Container>
                    <H1 textAlign={"center"}>Наши ценности</H1>
                    <div className="privilege-grid-content">
                        <PrivilegeCard
                            icon={Medal}
                            title={"Cоциальная ответственность"}
                            text={"Команда Фермы Долюбово всегда этически подходит в планировании ресурсов и всегда помнит о об улучшении качества жизни своего окружения для роста благополучия."}
                        />
                        <PrivilegeCard
                            icon={Document}
                            title={"Отзывчивость"}
                            text={"Мы оперативно реагируем на сообщений от всех заинтересованных сторон для улучшения качества нашей продукции и процессов. Мы рады отзывам и критике, потому что это помогает нам развиваться."}
                        />
                        <PrivilegeCard
                            icon={HandShake}
                            title={"Сотрудничество"}
                            text={"Сотрудники, партнеры, покупатели, контролирующие органы являются частью нашего процесса по созданию лучших молочных продуктов."}
                        />
                        <PrivilegeCard
                            icon={Hands}
                            title={"Честность"}
                            text={"Команда Фермы верит в принципы этики, честности и преданности делу. Мы живем по этим стандартам."}
                        />
                    </div>
                </Container>
            </PrivilegeBox>
        </>
    )
}