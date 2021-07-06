/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import {
    CardWrapper,
    ImageWrapper,
    TextWrapper,
    SubInfoWrapper,
    Category,
    Comments,
    Date,
    Likes,
    Excerpt,
    ReadMoreButton,
    Title
} from './BlogCardElements'
import { IoIosArrowForward as Arrow } from 'react-icons/io'
import { HiArrowRight as ArrowHover } from 'react-icons/hi'

function BlogCard({ imageURL, title, date, noOfComments, likes, category, excerpt }) {
    const [hover, setHover] = useState(false)
    const [buttonHover, setButtonHover] = useState(false)

    return (
        <CardWrapper
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            isHovered={hover}
        >
            <ImageWrapper
                isHovered={hover}
            >

                <img src={imageURL} alt={title} />
            </ImageWrapper>
            <TextWrapper isHovered={hover}>
                <SubInfoWrapper>
                    <Date>
                        {date}
                    </Date>
                    <Likes>
                        <span>
                            <img src="/assets/blog-card/card-like.svg" alt="" />
                        </span>
                        {likes}
                    </Likes>
                    <Comments>
                        <span>
                            <img src="/assets/blog-card/card-comment.svg" alt="" />
                        </span>
                        {noOfComments}
                    </Comments>
                </SubInfoWrapper>
                <Title >
                    {title}
                </Title>
                <Category>
                    <span>
                        <img src="/assets/blog-card/card-category.svg" alt="" />
                    </span>
                    {category}
                </Category>
                <Excerpt>
                    {excerpt}
                </Excerpt>
                {hover ? <ReadMoreButton
                    onMouseEnter={() => setButtonHover(true)}
                    onMouseLeave={() => setButtonHover(false)}
                >Read more
                    <span>{buttonHover ? <ArrowHover /> : <Arrow />}</span>

                </ReadMoreButton> : ''}

            </TextWrapper>
        </CardWrapper>
    )
}

export default BlogCard


