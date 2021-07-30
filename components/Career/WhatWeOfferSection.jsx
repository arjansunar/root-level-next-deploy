import styled from "styled-components"
import { defaultStyles } from '../../defaults/defaults'
import { Title, TitleWrapper } from "./utils"

import Image from 'next/image'
import { content } from "../../content"
import { call } from "function-bind"

const whatWeOfferContent = [...content.careerPage.whatWeOffer]
function WhatWeOfferSection({ sectionTitle, sectionSubtitle }) {
    return (
        <StyledSection>
            <SectionTitle>{sectionTitle}</SectionTitle>
            <SectionSubtitle>{sectionSubtitle}</SectionSubtitle>

            <ImageSection>
                <TitleWrapper>
                    <Title>What we offer </Title>
                </TitleWrapper>
                <ImageWrapper>
                    {whatWeOfferContent.map((val, i) =>
                        <ImageCard key={i}>
                            <Image src={val.image} height='272px' width='380px' alt='' />
                            <TextWrapper>
                                <TextTitle>
                                    {val.title}
                                </TextTitle>
                                <TextDesc>
                                    {val.description}
                                </TextDesc>
                            </TextWrapper>
                        </ImageCard>
                    )}
                </ImageWrapper>
            </ImageSection>
        </StyledSection>
    )
}

export default WhatWeOfferSection


const StyledSection = styled.section`
   font-family: ${defaultStyles.careerPage.fontFamily};
`
const whatWeOfferStyles = { ...defaultStyles.careerPage.whatWeOfferSection }
const SectionTitle = styled.h2`
    font-size: ${whatWeOfferStyles.title.fontSize};
    font-style: ${whatWeOfferStyles.title.fontStyle};
    font-weight: ${whatWeOfferStyles.title.fontWeight};
    letter-spacing: ${whatWeOfferStyles.title.letterSpacing};
    text-align: ${whatWeOfferStyles.title.textAlign};
    color: #008080;
    margin-top: 5rem;

    @media (max-width: 550px){
        font-size: calc(${whatWeOfferStyles.title.fontSize}*.8);
    }

`
const SectionSubtitle = styled.h3`
    font-size: ${whatWeOfferStyles.subTitle.fontSize};
    font-style: ${whatWeOfferStyles.subTitle.fontStyle};
    font-weight: ${whatWeOfferStyles.subTitle.fontWeight};
    letter-spacing: ${whatWeOfferStyles.subTitle.letterSpacing};
    text-align: ${whatWeOfferStyles.subTitle.textAlign};
    margin-top: 1rem;

`

const ImageSection = styled.div`
    margin-top: 3.5rem;
`
const ImageWrapper = styled.div`
    margin: 2.5rem auto 0 auto;
    max-width: 1180px;
    padding: 0 0.5rem;
    display: grid;
    grid-template-columns: repeat(3 , 1fr);
    grid-column-gap: 20px;

    @media (max-width: 860px){
        display: flex;
        flex-direction: column;
        width: fit-content;
    }
`

const ImageCard = styled.div`
    max-width: 380px;


    @media (max-width: 860px){
        margin-bottom: 1rem ;
    }
`

const TextWrapper = styled.div`
    text-align:center;
    margin-top: 1.5rem;
`
const TextTitle = styled.h3`
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0em;
`
const TextDesc = styled.p`
    margin-top: 0.75rem;
    padding: 0.5rem 1rem;
    /* text-align: left; */
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: #666666;
`