import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { NavButton } from '../Navbar/NavbarElements'

export const SideBarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100vw;
    height: fit-content;
    overflow-y: scroll;
    /* background: #0d0d0d; */
    background: linear-gradient(295.03deg, #3A61BD 12.79%, #372F71 91.46%);

    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;

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
    color: #fff;
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
    color: #fff;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`

export const StyledBtn= styled(NavButton)`
    justify-self: center;
    @media screen and (max-width: 1000px){
        display: flex;
    }
`