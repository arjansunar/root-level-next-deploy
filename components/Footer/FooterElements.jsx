import styled, { css } from "styled-components";
import { defaultStyles } from "../../defaults/defaults";
import { SocialIcon } from "react-social-icons";


const footerStyles = { ...defaultStyles.footer }
export const FooterTopWrapper = styled.div`
    background: ${footerStyles.background};
    color: ${footerStyles.color};
    padding: 3.375rem 4rem;
    @media screen and (max-width: 400px){
        padding: 3.3rem 2rem; 
    }
`
export const GridComponent = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);

    @media screen and (max-width: 935px){
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        /* height: 500px */
    }
`
export const GridElements = styled.div`

`
export const FooterTitle = styled.h3`
    font-family: 'Montserrat' ,sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`
const sharedSubsectionStyles = css`
    padding-top: 1.5rem;
    font-family: 'Montserrat' ,sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;

`
export const FooterDesc = styled.p`
    ${sharedSubsectionStyles}
`
export const GeoInfoWrapper = styled.div`
    ${sharedSubsectionStyles}
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* & :last-child{
    margin-bottom: 1.5rem;

    }    */
`
export const GeoInfoDescWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1.5rem;

`
export const GeoInfoDesc = styled.p`
    margin-left: 1rem;
`
export const FooterIconWrapper = styled.div`
    ${sharedSubsectionStyles}
    margin-bottom:1.5rem;
`

export const FooterSocialIcon = styled(SocialIcon)`
  background: #fff;
  border-radius: 50%;
  & .social-svg-mask {
    fill: ${defaultStyles.brandColor} !important;
  }
  margin-right: 1.5rem;
`;

export const FooterBottomWrapper = styled.div`
    background: #008080;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:#fff;
    padding: 1rem;
`
export const FooterPrivacyBlock = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;

`
export const FooterBottomCopyRight = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-transform: uppercase;
    margin-top: 1rem;
    text-align: center;

`