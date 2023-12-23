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

interface TextProps {
    font_family?: string,
    font_size?: string,
    font_weight?: number,
    color?: string,
}
export const Text = styled.span<TextProps>`
  font-family: ${({font_family}) => font_family};
  font-size: ${({font_size}) => font_size};
  font-weight: ${({font_weight}) => font_weight};
  color: ${({color}) => color};
`