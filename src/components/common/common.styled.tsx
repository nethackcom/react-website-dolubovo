import styled from "styled-components";

export const Container = styled.div`
  width: 1328px;
  margin: 0 auto;
  padding: 0px 30px;
`

interface FlexVerticalProps {
    gap: string,
}
export const FlexVertical = styled.div<FlexVerticalProps>`
  width: fit-content;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: ${({gap=0}) => gap};
`

interface FlexHorizontalProps {
    align_items: string,
    justify_content: string,
    gap: string,
}
export const FlexHorizontal = styled.div<FlexHorizontalProps>`
  display: flex;
  align-items: ${({align_items}) => align_items};
  justify-content: ${({justify_content}) => justify_content};
  gap: ${({gap}) => gap};
  position: relative;
`