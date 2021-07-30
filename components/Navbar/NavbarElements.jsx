import styled, { css } from 'styled-components'
import { defaultStyles } from '../../defaults/defaults';
const navColors = {
    ...defaultStyles.navStyles.navColors
}

// console.log("navColors", navColors)

export const Nav = styled.nav`
    height:90px;
    width: 100%;
    padding: 0 4rem 0 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0; 
    z-index: 10;
    overflow: hidden;
    border-bottom: 1px solid ${defaultStyles.brandColor};
    background: ${navColors.background};
    color:  ${navColors.textColor};
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }

    @media (max-width: 550px){
        padding: 0 2rem;
    }
   

`

export const Logo = styled.a`
    color: ${defaultStyles.brandColor};
    justify-self: flex-start;
    cursor: pointer;
    width: 3rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    text-decoration: none;

    & img {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 550px){
        margin-left: 0;
    }
`

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    position: relative;
    
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%,50%);
        font-size: 1.8rem;
        cursor: pointer;
        color: ${defaultStyles.brandColor};
    }
`

export const NavMenu = styled.ul`
    display: flex;  
    height: 100%;
    flex-grow: 1;
    max-width: 35rem;
    /* align-self: flex-start; */
    /* width: 40%; */
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin-bottom: 0;

   
    @media screen and (max-width: 1200px){
    width: 30rem;
    }
    @media screen and (max-width: 768px){
        display: none;
    }

    
`
export const NavItem = styled.div`
    
    /* height: 80px; */
`
export const NavLinks = styled.a`
       color: ${navColors.textColor};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    position: relative;

    &.active::after{
        content:'';
        height: 3px;
        position: absolute;
        bottom: -1.8rem;
        left:0;
        right:0;
        background: ${navColors.background};
    }
    &:hover{
        color: ${navColors.textColor}; 
    }
`

const outlineButton = css`
`

export const NavButton = styled.button`
    border-radius: 6px;
    max-width: 10rem;
    white-space: nowrap;
    padding: 8px 25px;
    background-color: transparent;
    /* color: ${({ dark }) => (dark ? '#010606' : '#fff')}; */
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '14px')};
    outline: none;
    text-decoration: none;
    border: 1px solid ${defaultStyles.brandColor};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${defaultStyles.brandColor};
    text-transform: uppercase;
    font-weight: 600;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${defaultStyles.brandColor};
        color: #fff;
        
    }

    & span{
        margin-left: 0.625rem;
        transform: translateY(2px);
    }


    @media (max-width: 1000px){
        display: none;
    }
`