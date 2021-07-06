/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import React, { useState } from 'react'
import { Nav, NavContainer, Logo, MobileIcon, NavItem, NavLinks, NavMenu, NavButton } from "./NavbarElements"
import { FaBars } from 'react-icons/fa'
import { IoIosArrowForward as Arrow } from 'react-icons/io'
import { HiArrowRight as ArrowHover } from 'react-icons/hi'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
// import Image from 'next'

function NavBar({ toggle }) {
    const router = useRouter()
    const [hover, setHover] = useState(false)
    // console.log("hover? ", hover)
    return (
        <header>
            <Nav>
                <NavContainer>
                    <Link href="/">
                        <Logo>
                            <img src="/assets/rootlevel-logo.svg" alt='brand logo' />
                            {/* <Image src='/assests/rootlevel-logo.svg' height='20px' width='20px' alt='brand logo' /> */}
                        </Logo>
                    </Link>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem >
                            <Link href="/what-we-do">
                                <NavLinks>What we do</NavLinks>
                            </Link>
                        </NavItem>
                        <NavItem >
                            <Link href="/services">
                                <NavLinks>Services</NavLinks>
                            </Link>
                        </NavItem>
                        <NavItem >
                            <Link href="/blog">
                                <NavLinks>Blog</NavLinks>
                            </Link>
                        </NavItem>
                        <NavItem >
                            <Link href="/about-us">
                                <NavLinks>About Us</NavLinks>
                            </Link>
                        </NavItem>
                    </NavMenu>
                    <NavButton
                        onClick={() => router.push("/contact")}
                        onMouseEnter={
                            () => setHover(true)
                        }
                        onMouseLeave={
                            () => setHover(false)
                        }
                    >
                        Get Started <span>{hover ? <ArrowHover /> : <Arrow />}</span>
                    </NavButton>
                </NavContainer>
            </Nav>
        </header>
    )
}

export default NavBar
