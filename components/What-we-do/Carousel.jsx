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
            <Icons>
                {icons.map((val, i) => (
                    (i == currentSlide) ?

                        <IconButton key={i} onClick={() => handleSlideChange(i)}>
                            <IconWrapper
                                size='120px'
                                iconPath={val.iconPath}
                                bgColor='#35B5AC'
                            />
                            <Title active={true} >{val.title}</Title>
                        </IconButton> :
                        <IconButton key={i} onClick={() => handleSlideChange(i)}>
                            <IconWrapper
                                size='120px'
                                iconPath={val.iconPath}
                            />
                            <Title active={false}>{val.title}</Title>

                        </IconButton>




                ))}

            </Icons>

            {/* <Icons>
                <IconWrapper
                    isButton={true}
                    size='120px'
                    iconPath='/assets/what-we-do-user-centric.svg' />
            </Icons> */}
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

const Icons = styled.div`
    margin-top: 5rem;
    margin-bottom: 3.625rem;
    display: flex;
`
const IconButton = styled.div`
    cursor: pointer;
    max-width: 120px;
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