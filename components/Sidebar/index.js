/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Link from 'next/link'
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarLink, SideBarMenu, StyledBtn } from './SidebarElements'
import { useRouter } from 'next/dist/client/router'

function MobileMenu({ isOpen, toggle }) {
    const router = useRouter()
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <Link href="/">
                        <SideBarLink onClick={toggle}>
                            Home
                        </SideBarLink>
                    </Link>

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
                <StyledBtn onClick={() => router.push("/contact")}>Get Started</StyledBtn>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default MobileMenu
