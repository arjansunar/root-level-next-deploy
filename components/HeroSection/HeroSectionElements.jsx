import styled, { css } from "styled-components";
import { defaultStyles } from '../../defaults/defaults';


const backgroundStylesWithImage = css`
    background: ${({ imageProps }) => (`url("${imageProps.imageURL}") no-repeat center`)} ;
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
const backgroundStylesWithOutImage = css`
`
export const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    /* min-height: 75vh; */
    display: flex;
    color: ${defaultStyles.textColor};
    padding: 10rem 4.375rem 5.375rem 4.375rem ;
    position: relative;
    background: ${({ bg }) => (bg ? `${bg}` : '#102B7B')};
    ${({ imageProps }) => ((imageProps && imageProps.imageURL) && backgroundStylesWithImage)}
    
    @media screen and (max-width: 1200px){
        flex-direction: column;
        align-items: center;
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
`
// hero section subtilte styles 
const heroSubTitleStyles = { ...defaultStyles.heroSection.subTitle };

export const HeroSubtitle = styled.h2`
    font-weight: ${heroSubTitleStyles.fontWeight};
    font-size: ${heroSubTitleStyles.fontSize};
    line-height: ${heroSubTitleStyles.lineHeight};
    margin-bottom: 2rem;
`
//hero section desc styles 
const heroDescStyles = { ...defaultStyles.heroSection.description };

export const HeroP = styled.p`
    font-weight: ${heroDescStyles.fontWeight.reg};
    font-size: ${heroDescStyles.fontSize};
    line-height: ${heroDescStyles.lineHeight};
    
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
  
`