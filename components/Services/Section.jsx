/* eslint-disable @next/next/no-img-element */
import {
    SectionCenter,
    SectionWrapper,
    ImageWrapper,
    TextWrapper,
    Title,
    Desc,
    StyledButton
} from './SectionElements'
import { IoIosArrowForward as Arrow } from 'react-icons/io'
import { HiArrowRight as ArrowHover } from 'react-icons/hi'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styled from 'styled-components'

function Section({ imageURL, isImageRight = false, title, description, bgColor }) {

    const [hover, setHover] = useState(false)
    const router = useRouter()
    return (
        <SectionCenter bg={bgColor}>
            <SectionWrapper>
                <ImageWrapper isRight={isImageRight}>
                    <Img src={imageURL} alt={title} height="480px" width='480px' />
                </ImageWrapper>
                <TextWrapper>
                    <Title>{title}</Title>
                    <Desc>{description}</Desc>
                    <StyledButton
                        onMouseEnter={
                            () => setHover(true)
                        }
                        onMouseLeave={
                            () => setHover(false)
                        }

                        onClick={() => router.push('/contact')}
                    > Get started
                        <span> {hover ? <ArrowHover /> : <Arrow />}</span>
                    </StyledButton>
                </TextWrapper>
            </SectionWrapper >
        </SectionCenter >

    )
}

export default Section

const Img = styled(Image)`
    object-fit: contain;
`