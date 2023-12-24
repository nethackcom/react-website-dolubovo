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

interface TextBloggerLightProps {
    fontSize: string,
    textAlign?: string,
    color?: string,
}

export const TextBloggerLight = styled.span<TextBloggerLightProps>`
  font-family: ${baseTheme.font_family.blogger.light};
  font-size: ${({fontSize}) => fontSize};
  font-weight: 300;
  color: ${({color}) => color ?? baseTheme.colors.font_primary};
  text-align: ${({textAlign}) => textAlign ?? "left"};
`

interface TextInterLight {
    fontSize: string,
    textAlign?: string,
    color?: string,
}

export const TextInterLight = styled.span<TextInterLight>`
  font-family: ${baseTheme.font_family.inter.standard};
  font-size: ${({fontSize}) => fontSize};
  font-weight: 300;
  color: ${({color}) => color ?? baseTheme.colors.font_primary};
  text-align: ${({textAlign}) => textAlign ?? "left"};
  line-height: 140%;
`