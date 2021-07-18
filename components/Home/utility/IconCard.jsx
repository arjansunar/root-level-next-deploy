import styled from "styled-components"
import Image from "next/image"
import { defaultStyles } from '../../../defaults/defaults';
function IconCard({ title, description, imgPath }) {
    return (
        <CardWrapper>
            <IconWrapper>
                <Image src={imgPath} alt='' height='48px' width="48px" />
            </IconWrapper>
            <Title>{title}</Title>
            <Desc>{description}</Desc>
        </CardWrapper>
    )
}

export default IconCard

const CardWrapper = styled.div`
    max-width: 380px;
    padding: 1rem;
    display: grid;
    place-content: center;
    height: fit-content;
`

const IconWrapper = styled.div`
    /* margin-top: 1rem; */
    height: 84px;
    width: 84px;
    padding: 18px;
    border:1px solid ${defaultStyles.brandColor};
    border-radius: 50%;
    justify-self: center;
`
const Title = styled.h3`
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    margin-top: 2rem;

`
const Desc = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    margin-top: 1rem;

`