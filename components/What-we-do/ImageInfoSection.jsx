import styled from "styled-components"
import Image from 'next/image'

function ImageInfoSection({ imageURL, desc, title }) {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <GridWrapper>
                <ImageWrapper>
                    <Img src={imageURL} width='580' height='360' alt={title} />
                </ImageWrapper>
                <TextWrapper>
                    <Description>
                        {desc}
                    </Description>
                </TextWrapper>
            </GridWrapper>
        </Wrapper>
    )
}

export default ImageInfoSection

const Wrapper = styled.div`
background: #A1A4A41A;
padding: 2.5rem 6rem; 

    @media (max-width: 650px){
        padding: 2.5rem 4rem; 
    }


    @media (max-width: 450px){
        padding: 2.5rem 3.5rem; 
    }
    @media (max-width: 350px){
        padding: 2.5rem 2.5rem; 
    }
;
`
const Title = styled.h2`
    font-family: Montserrat;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;

    @media (max-width: 450px){
        font-size: 30px;
    }
`
const GridWrapper = styled.div`
    margin-top: 2.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 40px;
    place-items:center;
    
    @media screen and (max-width: 860px){
        display: block;
    }
`
const ImageWrapper = styled.div`
    max-width: 580px;
`
const TextWrapper = styled.div`
    align-self: flex-start;
`
const Description = styled.p`
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;

    @media (max-width: 450px){
        font-size: 18px;
    }

`
const Img = styled(Image)`
    object-fit: cover;
`