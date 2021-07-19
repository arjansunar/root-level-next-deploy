/* eslint-disable @next/next/no-img-element */
import styled from "styled-components"
import Image from 'next/image'

function IconWrapper({ iconPath, bgColor, size, color }) {
    return (
        <Wrapper width={size} bg={bgColor}>
            <Image src={iconPath} width='53' height='53' alt='icons' />
        </Wrapper>
    )
}

export default IconWrapper

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    background: ${({ bg }) => (bg ? bg : '#A1A4A4')};
    width: ${({ width }) => (width ? width : '120px')};
    height: ${({ width }) => (width ? width : '120px')};
    color: ${({ color }) => (color ? color : '#fff')};
    border-radius: 50%;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.6);
    
    @media screen and (max-width: 860px){
        margin:0 auto;
    }
`