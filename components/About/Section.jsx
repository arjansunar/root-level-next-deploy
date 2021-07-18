/* eslint-disable @next/next/no-img-element */
import { SectionWrapper } from './SectionElements'
import {
    ImageWrapper,
    TextWrapper,
    Tag,
    Title,
    Desc
} from './SectionElements'
import Image from 'next/image'

function Section({ imageURL, isImageRight = false, tag, title, description }) {
    return (
        <SectionWrapper>
            <ImageWrapper isRight={isImageRight}>
                <Image src={imageURL} alt={title} height='580px' width='580px' />
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

