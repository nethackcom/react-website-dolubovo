import styled from "styled-components";
import {baseTheme} from "../../../assets/styles/theme";

interface PrimaryButtonProps {
    width: string,
    active: true | false,
}

export const PrimaryButton = styled.button<PrimaryButtonProps>`
  width: ${({width}) => width};
  font-family: ${baseTheme.font_family.inter.standard};
  font-weight: 500;
  text-transform: uppercase;
  font-size: 13px;
  padding: 20px 45px;
  border-radius: 40px;
  box-shadow: 0px 15px 20px rgba(222, 227, 233, 0.4);
  transition: .3s ease-in-out;

  color: ${({active}) =>
    active ? "#fff" : baseTheme.colors.font_primary};
  
  background-color: ${({active}) =>
          active ? "#0057A5" : "#fff"};

  &:hover {
    background-color: ${({active}) =>
            active ? baseTheme.colors.primary_hover : baseTheme.colors.primary};
    color: ${({active}) =>
            active ? baseTheme.colors.font_primary : "#fff"};
  }
`