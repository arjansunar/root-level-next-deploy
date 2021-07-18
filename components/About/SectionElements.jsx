import styled from "styled-components";
import { defaultStyles } from "../../defaults/defaults";

//getting the section styles 
const sectionStyles = { ...defaultStyles.aboutSection }
export const SectionsWrapper = styled.div`
    margin: 4rem 5%;
    display: grid;
    place-items: center;
`
//single section styles
export const SectionWrapper = styled.div`
    max-width: 1180px;
    margin: 2rem 0;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-areas: "col1 col2";
    grid-column-gap: 20px;
    font-family: ${sectionStyles.fontFamily};
    height: fit-content;

`

export const ImageWrapper = styled.div`
    grid-area: ${({ isRight }) => (isRight ? `col2` : `col1`)};
    max-width: 580px;
    overflow: hidden;
    border-radius: 8px;
    & img{
        width: auto;
        height: 100%;
    }
`
export const TextWrapper = styled.div`
    padding: 3rem 2rem 0 2rem;
    max-width: 580px;
    border-radius: 8px;
    background-color: ${sectionStyles.textBgColor};
     
`
export const Tag = styled.h3`
    font-weight: ${sectionStyles.tag.fontWeight};
    font-size: ${sectionStyles.tag.fontSize};
    line-height: ${sectionStyles.tag.lineHeight};
    color: ${sectionStyles.tag.color};
`
export const Title = styled.h2`
    font-weight: ${sectionStyles.title.fontWeight};
    font-size: ${sectionStyles.title.fontSize};
    line-height: ${sectionStyles.title.lineHeight};
    color: ${sectionStyles.title.color};
    margin-top:1rem
`
export const Desc = styled.p`
    font-weight: ${sectionStyles.description.fontWeight};
    font-size: ${sectionStyles.description.fontSize};
    line-height: ${sectionStyles.description.lineHeight};
    color: ${sectionStyles.description.color};
    margin-top: 1.5rem;
`