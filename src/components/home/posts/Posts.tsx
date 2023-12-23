import {Container} from "../../common/common.styled";
import {PostsData} from "../../../data/PostsData";
import styled from "styled-components";
import {MiniPost, Post} from "./Post";

const GridColumns = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
`

const GridRows = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  padding-left: 50px;
  
  & article:last-child {
    align-items: end;
    display: grid;
    border-top: 1px solid #F1F2F3;
  }
`

export const Posts = () => {
    return (
        <>
            <Container>
                <GridColumns>
                    <Post post={PostsData[0]}/>
                    <GridRows>
                        <MiniPost post={PostsData[1]}/>
                        <MiniPost post={PostsData[2]}/>
                    </GridRows>
                </GridColumns>
            </Container>
        </>
    )
}