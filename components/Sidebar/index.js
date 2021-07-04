/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Link from 'next/link'
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarLink, SideBarMenu } from './SidebarElements'

function index({ isOpen, toggle }) {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <Link href="/what-we-do">
                        <SideBarLink onClick={toggle}>
                            What we do
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
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default index
