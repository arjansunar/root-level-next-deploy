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
import { urlFor } from '../../lib/sanity'
import Image from 'next/image'
import { useRouter } from "next/router"

const monthNames = ["Jan", "Feb", "March", "April", "May", "June",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"
];
const getDateFormat = (date) => {
    const month = +date.substr(5, 2)
    const year = date.substr(0, 4)
    return `${monthNames[month]}, ${year}`

}

function BlogCard({ mainImage, title, publishedAt, noOfComments = 20, likes, category, excerpt, slug }) {
    const [hover, setHover] = useState(false)
    const [buttonHover, setButtonHover] = useState(false)
    const router = useRouter()
    const date = getDateFormat(publishedAt)
    return (
        <CardWrapper
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            isHovered={hover}
        >
            <ImageWrapper
                isHovered={hover}
            >

                {/* <img src={urlFor(mainImage).url()} alt={title} /> */}
                <Image src={urlFor(mainImage).url()} height='280' width='380' alt={title} />
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
                {category &&
                    <Category>
                        <span>
                            <img src="/assets/blog-card/card-category.svg" alt="" />
                        </span>
                        {category}
                    </Category>
                }
                <Excerpt>
                    {excerpt}
                </Excerpt>
                {hover ? <ReadMoreButton
                    onMouseEnter={() => setButtonHover(true)}
                    onMouseLeave={() => setButtonHover(false)}
                    onClick={() => router.push(`/blog/${slug.current}`)}
                >Read more
                    <span>{buttonHover ? <ArrowHover /> : <Arrow />}</span>

                </ReadMoreButton> : ''}

            </TextWrapper>
        </CardWrapper>
    )
}

export default BlogCard


