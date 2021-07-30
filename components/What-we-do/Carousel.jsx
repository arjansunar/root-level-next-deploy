import { useState } from 'react'
import styled from 'styled-components'
import { StyledCarousel } from '../Home/utility/Carousel'
import IconWrapper from './IconWrapper'


const icons = [
    {
        title: 'Analysis and Planning',
        iconPath: '/assets/what-we-do/icons-sdlc/requirement.svg',
    },
    {
        title: 'Design & prototyping',
        iconPath: '/assets/what-we-do/icons-sdlc/design.svg',
    },
    {
        title: 'Development',
        iconPath: '/assets/what-we-do/icons-sdlc/development.svg',
    },
    {
        title: 'Testing',
        iconPath: '/assets/what-we-do/icons-sdlc/testing.svg',
    },
    {
        title: 'Launch',
        iconPath: '/assets/what-we-do/icons-sdlc/launch.svg',
    },

]
export default function WhatWeDoCarousel({ children }) {

    const [currentSlide, setCurrentSlide] = useState(0)

    const handleSlideChange = (index) => {
        setCurrentSlide(index)
    }
    return (
        <>
            <IconContainer>
                <Icons>
                    {icons.map((val, i) => (
                        (i == currentSlide) ?

                            <IconButton key={i} onClick={() => handleSlideChange(i)}>
                                <IconWrapper
                                    size='100px'
                                    iconPath={val.iconPath}
                                    bgColor='#35B5AC'
                                />
                                <Spacer />

                                <Title active={true} >{val.title}</Title>
                            </IconButton> :
                            <IconButton key={i} onClick={() => handleSlideChange(i)}>
                                <IconWrapper
                                    size='100px'
                                    iconPath={val.iconPath}
                                />
                                <Spacer />
                                <Title active={false}>{val.title}</Title>

                            </IconButton>




                    ))}

                </Icons>
            </IconContainer>
            <Spacer height='2rem' />

            <StyledCarousel
                showArrows={false}
                showIndicators={false}
                showThumbs={false}
                showStatus={false}
                selectedItem={currentSlide}
            >
                {children}
            </StyledCarousel>
        </>
    )
}

export const Spacer = styled.div`
    height: ${({ height }) => (height ? height : '1rem')}
`

const Icons = styled.div`
    /* margin-top: 5rem;
    margin-bottom: 3.625rem; */
    display: flex;
    grid-gap: 2rem;
    justify-content: center;
    align-items: flex-start;
    max-width: 1180px;
    flex-wrap: wrap;
    margin: 0rem 2rem 3.625rem 2rem;
    box-shadow: 0px 3px 8px 0px #0000001A;
    padding: 3rem 4rem;
    border-radius: 1rem;

    @media (max-width: 650px){
        padding: 3rem 1rem;

    }

`
const IconContainer = styled.div`
    display: grid;
    place-content: center;
`
const IconButton = styled.div`
    cursor: pointer;
    max-width: 120px;
    display: grid;
    place-content: center;
`
const Title = styled.h4`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: ${({ active }) => (active ? '#000' : '#A1A4A4')}
`