import styled, { css } from "styled-components";
import { defaultStyles } from '../../defaults/defaults';


const backgroundStylesWithImage = css`
    background: ${({ imageProps }) => (`url("${imageProps.imageURL}") no-repeat`)} ;
    background-size: cover;
    &::before{
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #2c3e7ba6;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    /* min-height: 75vh; */
    display: flex;
    color: ${defaultStyles.textColor};
    padding: 5rem 8rem 5rem 4rem ;
    position: relative;
    background: ${({ bg }) => (bg ? `${bg}` : '#102B7B')};
    ${({ imageProps }) => ((imageProps && imageProps.imageURL) && backgroundStylesWithImage)}
    
    @media screen and (max-width: 1200px){
        flex-direction: column;
        align-items: center;
        padding: 5rem 15%;
    }
    @media (max-width: 550px){
        padding: 4rem 2rem;
    }
   
`
export const TextSection = styled.div`
    position: relative;
    max-width: 47rem;
`

//hero Section title styles 
const heroTitleStyles = { ...defaultStyles.heroSection.title };
export const HeroTitle = styled.h1`
    font-weight: ${heroTitleStyles.fontWeight};
    font-size: ${heroTitleStyles.fontSize};
    line-height: ${heroTitleStyles.lineHeight};
    margin-bottom: 3.8rem;

    @media (max-width: 750px){
        margin-bottom: 3rem;
    }

    @media (max-width: 550px){
        margin-bottom: 2rem;
        font-size: calc(${heroTitleStyles.fontSize}* .8);
        line-height: calc(${heroTitleStyles.lineHeight}*.8);
    }
`
// hero section subtilte styles 
const heroSubTitleStyles = { ...defaultStyles.heroSection.subTitle };

export const HeroSubtitle = styled.h2`
    font-weight: ${heroSubTitleStyles.fontWeight};
    font-size: ${heroSubTitleStyles.fontSize};
    line-height: ${heroSubTitleStyles.lineHeight};
    margin-bottom: 2rem;

    @media (max-width: 550px){
        margin-bottom: 1.5rem;
        font-size: calc(${heroSubTitleStyles.fontSize}* .9);
        line-height: calc(${heroSubTitleStyles.lineHeight}*.9);
    }
`
//hero section desc styles 
const heroDescStyles = { ...defaultStyles.heroSection.description };

export const HeroP = styled.p`
    font-weight: ${heroDescStyles.fontWeight.reg};
    font-size: ${heroDescStyles.fontSize};
    line-height: ${heroDescStyles.lineHeight};
    
    @media (max-width: 550px){
        margin-bottom: 1.5rem;
        font-size: calc(${heroDescStyles.fontSize}* .9);
        line-height: calc(${heroDescStyles.lineHeight}*.9);
    }
`

export const HeroPicWrapper = styled.div`
    /* align-self: flex-end; */
    width: 100%;
    flex-shrink: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1200px){
        margin-top: 4rem;
    }

    & img{
        width: 100%;
        max-width: 400px;
    } 
`