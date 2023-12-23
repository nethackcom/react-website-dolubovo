import styled from "styled-components";
import {baseTheme} from "../../../assets/styles/theme";

export const H1 = styled.h1`
  font-family: ${baseTheme.font_family.blogger.light};
  font-size: 58px;
  color: ${baseTheme.colors.font_primary};
`

export const H2 = styled.h1`
  font-family: ${baseTheme.font_family.blogger.light};
  font-size: 42px;
  color: ${baseTheme.colors.font_primary};
`

export const H4 = styled.h4`
  font-family: ${baseTheme.font_family.inter.standard};
  font-size: 24px;
  font-weight: 400;
  color: #fff;
`

export const H5 = styled.h5`
  font-family: ${baseTheme.font_family.blogger.light};
  font-size: 24px;
  font-weight: 400;
  line-height: 110%;
  color: #fff;
`