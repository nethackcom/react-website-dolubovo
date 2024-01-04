import styled from "styled-components";
import {Container} from "../../common/common.styled";

const Circle = styled.div`
  width: 800px;
  height: 800px;
  position: absolute;
  top: 0;
  right: 0;
  border: 1px dashed #2B2B2B;
  border-radius: 100%;
  z-index: 1;
`

export const ProductsSwiper = () => {
    return (
        <>
            <Container>
                <Circle/>
            </Container>
        </>
    )
}