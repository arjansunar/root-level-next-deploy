/* eslint-disable @next/next/no-img-element */
import styled, { css } from "styled-components"
import { defaultStyles } from '../../defaults/defaults'
function BlogCard({ imageURL, title, date, noOfComments, likes, category, excerpt }) {
    return (
        <CardWrapper>
            <ImageWrapper >

                <img src={imageURL} alt={title} />
            </ImageWrapper>
            <TextWrapper>
                <SubInfoWrapper>
                    <Date>
                        {date}
                    </Date>
                    <Likes>
                        {likes}
                    </Likes>
                    <Comments>
                        {noOfComments}
                    </Comments>
                </SubInfoWrapper>
                <Title >
                    {title}
                </Title>
                <Category>
                    {category}
                </Category>
            </TextWrapper>
        </CardWrapper>
    )
}

export default BlogCard


//gerting blog styles
const blogCardStyles = { ...defaultStyles.blogStyles.card }
const flexStyles =
    css`
        display: flex;
        justify-content: center;
        align-items: center;
    `
const CardWrapper = styled.div`
    font-family: ${blogCardStyles.fontFamily};
    margin: 1rem;
    max-width: 380px;
    box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.2);
    border-radius: 0.5rem;
    overflow: hidden;

`

const ImageWrapper = styled.div`
    object-fit: cover;
    /* height: 200px; */
    overflow: hidden;
    & img{
        width: 100%;
    }
`

const TextWrapper = styled.div`
    padding:1.2rem;
    /* ${flexStyles} */
    /* flex-direction: column; */
`
const SubInfoWrapper = styled.div`
    ${flexStyles}
    justify-content: space-between;
    width:100%;
    font-size: ${blogCardStyles.subInfo.fontSize};
    color: ${blogCardStyles.subInfo.color};
    line-height: ${blogCardStyles.subInfo.lineHeight};
    font-weight: ${blogCardStyles.subInfo.fontWeight};

`
const Date = styled.p`
    flex-grow: 1;
    align-self: flex-start;
`
const Likes = styled.p`

`
const Comments = styled.p`

`
const Title = styled.h3`
    margin-top: 1.2rem;
    font-size: ${blogCardStyles.title.fontSize};
    color: ${blogCardStyles.title.color};
    font-weight: ${blogCardStyles.title.fontWeight};
    line-height: ${blogCardStyles.title.lineHeight};
`
const Category = styled.p`
     margin-top: 1.2rem;
    font-size: ${blogCardStyles.category.fontSize};
    color: ${blogCardStyles.category.color};
    font-weight: ${blogCardStyles.category.fontWeight};
    line-height: ${blogCardStyles.category.lineHeight};

`