import React from "react";
import {Link} from "react-router-dom";
import logotype from "../../../assets/images/logotype.png";
import search from "../../../assets/images/icons/search.svg"
import {ButtonSearch, HeaderBox, Menu} from "./styles";
import {Logotype} from "./styles";
import {Container} from "../common.styled";

export const Header = () => {
    return (
        <>
            <HeaderBox>
                <Container>
                    <Menu>
                        <ul>
                            <li>
                                <Link to="#">Продукция</Link>
                            </li>
                            <li>
                                <Link to="about">О бренде</Link>
                            </li>
                            <li>
                                <Link to="#">Производство</Link>
                            </li>
                            <li className="header_nav__logotype">
                                <Logotype>
                                    <Link to="">
                                        <img src={logotype} alt="Домашняя"/>
                                    </Link>
                                </Logotype>
                            </li>
                            <li>
                                <Link to="#">Рецепты</Link>
                            </li>
                            <li>
                                <Link to="contacts">Контакты</Link>
                            </li>
                            <li>
                                <Link to="#">Где купить</Link>
                            </li>
                            <li>
                                <ButtonSearch>
                                    <img src={search} alt="Поиск..."/>
                                </ButtonSearch>
                            </li>
                        </ul>
                    </Menu>
                </Container>
            </HeaderBox>
        </>
    )
}