import styled from "styled-components";
import { defaultStyles } from "../../defaults/defaults";
import { NavButton } from "../Navbar/NavbarElements";

//getting the section styles 
const sectionStyles = { ...defaultStyles.serviceSection }

export const Divider = styled.div`
    height: 3rem;
`

export const SectionCenter = styled.div`
    padding: 0 5%;
    display: grid;
    place-items: center;
    background: ${({ bg }) => (bg ? bg : 'none')};

    @media screen and (max-width: 860px){
        padding: 0;
    }
`
//single section styles
export const SectionWrapper = styled.div`
    max-width: 1180px;
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-areas: "col1 col2";
    /* grid-column-gap: 30px; */
    font-family: ${sectionStyles.fontFamily};

    @media screen and (max-width: 860px){
        display: block;
    }
`

export const ImageWrapper = styled.div`
    grid-area: ${({ isRight }) => (isRight ? `col2` : `col1`)};
    max-width: 580px;
    overflow: hidden;

    @media screen and (max-width: 860px){
        width:90%;
        margin:0 auto;
    }
`
export const TextWrapper = styled.div`
    padding: 2rem 2rem 3.125rem 2rem;
    max-width: 580px;
    display: flex;
    flex-direction: column;
    justify-content:center;
     
    @media screen and (max-width: 860px){
        text-align: center;
        padding-top: 2rem;
    }
`
export const Title = styled.h2`
    font-weight: ${sectionStyles.title.fontWeight};
    font-size: ${sectionStyles.title.fontSize};
    line-height: ${sectionStyles.title.lineHeight};
    color: ${sectionStyles.color};

    @media screen and (max-width: 860px){
        font-size: 2rem;
    }
    /* margin-top:1rem */
`
export const Desc = styled.p`
    font-weight: ${sectionStyles.description.fontWeight};
    font-size: ${sectionStyles.description.fontSize};
    line-height: ${sectionStyles.description.lineHeight};
    color: ${sectionStyles.color};
    margin-top: 1rem;
    @media screen and (max-width: 860px){
        font-size: 1rem;
    }
`

export const StyledButton = styled(NavButton)`
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 14px;
    margin-top: 3.75rem;
    width: fit-content;
    max-width: none;
    background: ${defaultStyles.brandColor};
    color: #fff;
    text-transform: uppercase;

    @media screen{
        display:flex;
        align-items:center
    }
    & span{
        margin-top:-2px;
    }

      
    @media screen and (max-width: 860px){
        margin: 2.5rem auto 0 auto;
    }

`