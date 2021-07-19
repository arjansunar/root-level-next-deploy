/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import styled from 'styled-components'
import { defaultStyles } from '../../defaults/defaults'

function Card({ title, description, imagePath, svg }) {
    return (
        <CardWrapper>
            <ImageWrapper>
                <Image src={imagePath} height='44px' width='38px' alt={title} />
            </ImageWrapper>
            <Title>{title}</Title>
            <Desc>{description}</Desc>
        </CardWrapper>
    )
}

export default Card

const CardWrapper = styled.div`
    max-width: 380px;
    padding: 2.375rem 1.5rem 3.5rem 2.8rem;
    box-shadow: 0px 3px 8px 0px #0000001A;

`
const ImageWrapper = styled.div`
    /* fill: red; */
`
const Title = styled.h3`
    margin-top: 2.8rem;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    color: #0A1F44;

`
const Desc = styled.h3`
    margin-top: 1.5rem;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #5B716D;
`