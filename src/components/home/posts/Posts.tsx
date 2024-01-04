import {Container} from "../../common/common.styled";
import {PostsData} from "../../../data/PostsData";
import {MiniPost, Post} from "./Post";
import {GridRows, GridColumns} from "./style";


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