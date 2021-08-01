/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Link from 'next/link'
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarLink, SideBarMenu, StyledBtn, HeaderContainer, BtnWrapper} from './SidebarElements'
import { useRouter } from 'next/dist/client/router'
import { Logo } from '../Navbar/NavbarElements'

function MobileMenu({ isOpen, toggle }) {
    const router = useRouter()
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <HeaderContainer>
                <Link href="/">
                    <Logo>
                        <img src="/assets/rootlevel-logo.svg" alt='brand logo' />
                        {/* <Image src='/assests/rootlevel-logo.svg' height='20px' width='20px' alt='brand logo' /> */}
                    </Logo>
                </Link>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
            </HeaderContainer>
            <SideBarWrapper>
                <SideBarMenu>  
                  <Link href="/services">
                        <SideBarLink onClick={toggle}>
                            Services
                        </SideBarLink>
                    </Link>
                    <Link href="/blog">
                        <SideBarLink onClick={toggle}>
                            Blog
                        </SideBarLink>
                    </Link>
                    <Link href="/about-us">
                        <SideBarLink onClick={toggle}>
                            About Us
                        </SideBarLink>
                    </Link>

                    <Link href="/career">
                        <SideBarLink onClick={toggle}>
                            Career
                        </SideBarLink>
                    </Link>
                <BtnWrapper>
                    <StyledBtn onClick={() => router.push("/contact")}>Get Started</StyledBtn>
                </BtnWrapper>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default MobileMenu
