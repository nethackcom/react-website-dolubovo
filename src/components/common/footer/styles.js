import styled from "styled-components";
import {baseTheme} from "../../../assets/styles/theme";

export const FooterBox = styled.footer`
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const FooterNavBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 75px;
`

export const FoooterNav = styled.nav`
  display: flex;
  align-items: center;
  
  & ul {
    display: flex;
    align-items: center;
    gap: 75px;
    font-weight: 400;
  }
  
  & a {
    color: #43464A;
  }
`

export const FooterContacts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  
  & .footer-contacts__number {
    color: #43464A;
    font-size: 46px;
    font-family: "Blogger Sans Light";
  }
  
  & .footer-contacts__address {
    width: 345px;
    font-weight: 300;
    color: #43464A;
    font-size: 16px;
  }
  
  & .footer-contacts__title {
    color: #8F9399;
    font-size: 13px;
    font-weight: 300;
    margin-bottom: 15px;
  }
  
  & .footer-contacts__social_network {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`

export const ButtonSocialNetwork = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  box-shadow: 0px 15px 20px rgba(222, 227, 233, 0.4);
  transition: .3s ease-in-out;
  
  &:hover {
    background-color: #0057A5;
  }
`

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(142, 150, 162, 0.1);
  padding: 30px 0;
  margin-top: 40px;
  
  & div {
    color: #8F9399;
    font-size: 13px;
    font-weight: 300;
  }
  
  & .footer-bottom__copyright {
    margin-right: 100px;
  }
  
  & .footer-bottom__policy {
    margin-right: auto;
  }
  
  & .footer-bottom__company {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
`

export const Subscription = styled.div`
  background-color: ${baseTheme.colors.primary};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 130px;
  padding: 45px;
  margin-bottom: 30px;
  margin-top: 100px;
  
  & .subscription__container-form {
    position: relative;
    display: flex;
    align-items: center;
    flex: auto;
  }
  
  & .subscription__container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 130px;
  }
  
  & h5 {
    width: 470px;
  }
`

export const SubscriptionInput = styled.input`
  width: 100%;
  min-height: 50px;
  background-color: #00417A;
  font-size: 13px;
  font-family: ${baseTheme.font_family.inter.standard};
  font-weight: 300;
  color: #fff;
  padding: 15px 30px;
  border-radius: 75px;
`

export const SubscriptionButton = styled.button`
  width: 220px;
  height: 50px;
  background-color: #fff;
  font-size: 13px;
  color: #43464A;
  font-family: ${baseTheme.font_family.blogger.medium};
  border-radius: 40px;
  text-transform: uppercase;
  transition: .3s ease-in-out;
  position: absolute;
  top: 0;
  right: 0;
  
  &:hover {
    background-color: ${baseTheme.colors.primary_hover};
    color: #fff;
  }
`