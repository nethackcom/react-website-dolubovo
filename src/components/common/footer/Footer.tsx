import React from "react";
import {FooterNavBox, FoooterNav, FooterContacts, FooterBox, ButtonSocialNetwork, FooterBottom} from "./styles";
import {PrimaryButton} from "../buttons/Button";
import {Container} from "../common.styled";
import logotype from "../../../assets/images/logotype.png";
import {Link} from "react-router-dom";

import vk_logotype from "../../../assets/images/icons/social-network/vk.svg";
import facebook_logotype from "../../../assets/images/icons/social-network/facebook.svg";
import insta_logotype from "../../../assets/images/icons/social-network/insta.svg";

export const Footer = () => {
    return (
        <>
            <Container>
                <FooterBox>
                    <FooterNavBox>
                        <div className="footer-nav__logotype">
                            <img src={logotype} alt="Домашняя"/>
                        </div>
                        <FoooterNav>
                            <ul>
                                <li>
                                    <Link to="#">Продукция</Link>
                                </li>
                                <li>
                                    <Link to="#">О бренде</Link>
                                </li>
                                <li>
                                    <Link to="#">Производство</Link>
                                </li>
                                <li>
                                    <Link to="#">Рецепты</Link>
                                </li>
                                <li>
                                    <Link to="#">Контакты</Link>
                                </li>
                            </ul>
                        </FoooterNav>
                        <PrimaryButton active={false} width={""}>
                            Обратная связь
                        </PrimaryButton>
                    </FooterNavBox>
                    <FooterContacts>
                        <div className="footer-contacts__number">
                            <div className="footer-contacts__number_title footer-contacts__title">По вопросам качества</div>
                            8 800 333 24 78
                        </div>
                        <div className="footer-contacts__address">
                            <div className="footer-contacts__address_title footer-contacts__title">Физический адрес:</div>
                            192236, г. Санкт-Петербург,
                            ул. Софийская, дом 8, корпус 1, строение 4,
                            помещение 14-Н, офис 7.07.
                        </div>
                        <div className="footer-contacts__social_network">
                            <ButtonSocialNetwork>
                                <img src={vk_logotype} alt="Vkontakte"/>
                            </ButtonSocialNetwork>
                            <ButtonSocialNetwork>
                                <img src={facebook_logotype} alt="Facebook"/>
                            </ButtonSocialNetwork>
                            <ButtonSocialNetwork>
                                <img src={insta_logotype} alt="Instagram"/>
                            </ButtonSocialNetwork>
                        </div>
                    </FooterContacts>
                    <FooterBottom>
                        <div className="footer-bottom__copyright">2020 © Долюбово</div>
                        <div className="footer-bottom__policy">Политика обработки персональных данных</div>
                        <div className="footer-bottom__company">Создание и поддержка - <span>INDEX</span></div>
                    </FooterBottom>
                </FooterBox>
            </Container>
        </>
    )
}