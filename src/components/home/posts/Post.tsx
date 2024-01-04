import {H4} from "../../common/font/Headers";
import {SecondaryText} from "../../common/font/Text";
import {IPostsData} from "../../../data/PostsData";
import {
    PostBox,
    Date,
    MiniPostBox,
} from "./style";

interface PostProps {
    post: IPostsData,
}

export const Post = ({post} : PostProps) => {
    return (
        <>
            <PostBox image={post.img_url}>
                <div className="posts__image"></div>
                <div className="posts__container">
                    <Date>{post.date}</Date>
                    <H4 color={"#43464A"}>{post.title}</H4>
                    <SecondaryText width={""}>{post.description}</SecondaryText>
                    <button>Подробнее</button>
                </div>
            </PostBox>
        </>
    )
}


export const MiniPost = ({post} : PostProps) => {
    return (
        <>
            <MiniPostBox>
                <div className="posts__container">
                    <Date className="post__date">{post.date}</Date>
                    <H4 color={"#43464A"}>{post.title}</H4>
                    {post.img_url && <SecondaryText width={""}>{post.description}</SecondaryText>}
                    {post.img_url && <button>Подробнее</button>}
                </div>
            </MiniPostBox>
        </>
    )
}