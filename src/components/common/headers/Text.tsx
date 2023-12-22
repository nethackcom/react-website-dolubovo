import styled from "styled-components";
import {baseTheme} from "../../../assets/styles/theme";

interface SecondaryTextProps {
    width: string;
}

export const SecondaryText = styled.span<SecondaryTextProps>`
  width: ${({ width }) => width};
  font-family: ${baseTheme.font_family.inter.standard};
  font-weight: 400;
  color: ${baseTheme.colors.font_secondary};
  font-size: 15px;
  line-height: 140%;
`