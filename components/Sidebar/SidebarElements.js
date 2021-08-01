import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { NavButton } from '../Navbar/NavbarElements'
import { defaultStyles } from '../../defaults/defaults'


export const HeaderContainer= styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 5rem 0 3rem;
    border-bottom: 2px solid ${defaultStyles.brandColor};

    @media (max-width: 550px){
        padding: 0 2rem;
    }
`
export const SideBarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100vw;
    height: fit-content;
    overflow-y: scroll;
    /* background: #0d0d0d; */
    background: #fff;

    display: grid;
    grid-template-rows: 90px 1fr;
    align-items: center;
    top: 0px;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    height: ${({ isOpen }) => (isOpen ? 'fit-content' : '0')};
    /* top: ${({ isOpen }) => (isOpen ? '90px' : 'calc(-100% + 90px)')}; */
`

export const CloseIcon = styled(FaTimes)`
    color: ${defaultStyles.brandColor};
    margin-right: 1.5rem;
    margin-top: .5rem;

`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
export const SideBarWrapper = styled.div`
    color: #000;
`

export const SideBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5,80px);
    text-align: center;
    padding-left:0;

    @media screen and (max-width: 480 ){
        grid-template-rows: repeat(4,60px); 
    }
`

export const SideBarLink = styled.a`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    
    transition: 0.2s ease-in-out;
    color: inherit;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`

export const BtnWrapper = styled.span`
    display:flex;
    align-items:center;
    justify-content:center;
`
export const StyledBtn= styled(NavButton)`
    justify-self: center;
    @media screen and (max-width: 1000px){
        display: flex;
    }
`