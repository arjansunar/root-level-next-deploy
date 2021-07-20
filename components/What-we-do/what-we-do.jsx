import Hero from '../HeroSection'
import { content } from '../../content'
import SectionInfo from './SectionInfo'
import ImageInfoSection from './ImageInfoSection'
import styled from 'styled-components'
import InfoCard from './InfoCard'
// import Image from 'next/image'
import Carousel from './Carousel'
const whatWeDoContent = { ...content.whatWeDoPage }

function WhatWeDo() {
    return (
        <div>
            <Hero
                {...whatWeDoContent.heroSection}
            />

            {/* <ImageWrapper>
                <Image src='/assets/how-we-work.png' width='1180' height='212' alt='how we work' />
            </ImageWrapper> */}
            <Carousel>
                {whatWeDoContent.imageInfoSection.map((val, i) =>
                    <ImageInfoSection
                        {...val}
                        key={i}
                    />
                )}
            </Carousel>


            <SectionIconWrapper>
                <SectionInfo
                    title='We are an innovation partner that cares'
                    desc='Rhoncus pretium, varius viverra tristique. Aliquet facilisis ridiculus porttitor nullam. Eu sed nunc bibendum condimentum diam, tempus mauris. Id quis sed molestie et pellentesque quam nunc. Tortor odio diam tristique vestibulum erat lacus. Fringilla quam netus neque placerat quisque bibendum.'
                />
                <CardGridWrapper>
                    <InfoCard
                        iconPath='/assets/what-we-do-user-centric.svg'
                        title='User Centric'
                        desc="Integrity and transparency are the foundation of long term relationships. If we say we'll do something, we will. If we say we're good at something, we are."

                    />
                    <InfoCard
                        iconPath='/assets/what-we-do-user-centric.svg'
                        title='Innovation Driven'
                        desc="Integrity and transparency are the foundation of long term relationships. If we say we'll do something, we will. If we say we're good at something, we are."

                    />
                    <InfoCard
                        iconPath='/assets/what-we-do-user-centric.svg'
                        title='Excellent Engineering'
                        desc="Integrity and transparency are the foundation of long term relationships. If we say we'll do something, we will. If we say we're good at something, we are."

                    />
                </CardGridWrapper>

            </SectionIconWrapper>

        </div>
    )
}

export default WhatWeDo

// const ImageWrapper = styled.div`
//     display: grid;
//     place-content: center;
//     margin-bottom: 3.7rem;
// `
const SectionIconWrapper = styled.div`
    background: #35B5AC1F;
    padding: .5rem 5rem;

`
const CardGridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    grid-column-gap: 8%;
    margin: 3rem auto 5rem auto;
    max-width: 1080px;
    @media screen and (max-width: 860px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`