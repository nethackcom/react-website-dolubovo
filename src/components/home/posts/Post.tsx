import styled from "styled-components";
import {H4} from "../../common/headers/Headers";
import {SecondaryText} from "../../common/headers/Text";
import {IPostsData} from "../../../data/PostsData";
import {baseTheme} from "../../../assets/styles/theme";

interface IPostBox {
    image: string | null,
}

const PostBox = styled.article<IPostBox>`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 20px;
  padding-right: 50px;
  border-right: 1px solid #F1F2F3;
  cursor: pointer;
  
  h4 {
    transition: .3s ease-in-out;
  }
  
  &:hover {
    h4 {
      color: ${baseTheme.colors.primary_hover}
    }
  }
  
  & .posts__image {
    background-image: url(${({image}) => image});
    width: 280px;
    height: 240px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
    transition: .3s ease-in-out;
    overflow: hidden;
  }
  
  & .posts__container {
    display: grid;
  }
  
  & button {
    width: fit-content;
  }
`

const Date = styled.div`
  font-size: 13px;
  font-family: ${baseTheme.font_family.inter.standard};
  font-weight: 300;
  color: #828383;
`

const MiniPostBox = styled.article`
  cursor: pointer;
  
  & h4 {
    transition: .3s ease-in-out;
  }
  
  & .posts__container {
    gap: 10px;
    display: grid;
  }
  
  &:hover h4{
    color: ${baseTheme.colors.primary_hover};
  }
`

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