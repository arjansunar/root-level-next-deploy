import styled from "styled-components";
import { Title } from "./FAQ";
import Image from 'next/image'
import { content } from "../../content";
import HomeCarousel from './utility/Carousel'

const testimonialContent = [
    ...content.homePage.testimonials
]

function Testimonials() {
    return (
        <Container>
            <Title>What our Client say</Title>
            <HomeCarousel>
                {testimonialContent.map((val, i) =>
                    <Testimonial {...val} key={i} />
                )}
            </HomeCarousel>

        </Container>
    )
}

export default Testimonials

const Container = styled.div`
    margin-top: 10rem;
    padding: 0 .8rem;

`
//single testimonial 
function Testimonial({ description, authorPic, authorName, authorPosition }) {
    return (
        <Wrapper>
            <QuoteDecor>
                <Image src='/assets/home/rootlevel-quote.svg' height='73px' width='66px' alt='' />
            </QuoteDecor>
            <Desc>
                {description}
            </Desc>
            <AuthorWrapper>
                <Profile>
                    <Image src={authorPic} height="88px" width="88px" alt='user profile pic' />
                </Profile>
                <InfoWrapper>
                    <Name>
                        {authorName}
                    </Name>
                    <Position>
                        {authorPosition}
                    </Position>
                </InfoWrapper>
            </AuthorWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    place-content: center;
    margin-bottom: 3.5rem;
`
const QuoteDecor = styled.div`
    display: grid;
    place-content: center;
`
const Desc = styled.p`
    margin-top: 2.5rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
    max-width: 980px;

    @media (max-width: 1000px){
        font-size: 22px;
    }

    @media (max-width: 650px){
        font-size: 20px;
    }
`
const AuthorWrapper = styled.div`
    margin-top: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Profile = styled.div`
    margin-right: 8px;
    height: 4.5rem;
    width: 4.5rem;
    border-radius: 50%;
    overflow: hidden;
    & img{
        object-fit: cover;
    }
`

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 1rem;
`

const Name = styled.h4`
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;

`
const Position = styled.h6`
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;

`