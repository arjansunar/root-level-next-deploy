/* eslint-disable @next/next/no-img-element */
import { SectionWrapper } from './SectionElements'
import {
    ImageWrapper,
    TextWrapper,
    Tag,
    Title,
    Desc
} from './SectionElements'
function Section({ imageURL, isImageRight = false, tag, title, description }) {
    return (
        <SectionWrapper>
            <ImageWrapper isRight={isImageRight}>
                <img src={imageURL} alt="" />
            </ImageWrapper>
            <TextWrapper>
                <Tag>{tag}</Tag>
                <Title>{title}</Title>
                <Desc>{description}</Desc>
            </TextWrapper>
        </SectionWrapper>
    )
}

export default Section

