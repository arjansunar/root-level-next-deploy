import styled from "styled-components";
import { Title } from "./FAQ";
import Image from 'next/image'

const testimonialContent = [
    {
        description: '“Arcu mattis vel nunc in. Metus pretium egestas fermentum ut adipiscing vitae lorem nulla varius. Lectus risus posuere libero nulla. Nec tempor ut dolor vulputate nisl. Egestas aliquet in ac us. Lectus risus posuere libero nulla. Nec tempor ut dolor vulputate nisl. Egestas aliq sit consequat ”',
        authorPic: 'hello hello eheelpajfkajdfajdbadshfadljsglakjdfhaklsdjfhakdfaldjfhlksjch    ',
        authorName: 'Richard Feynman',
        authorPosition: 'CEO, Saleways',
    }
]

function Testionials() {
    return (
        <div>
            <Title>What our Client say</Title>
            <Testionial {...testimonialContent[0]} />
        </div>
    )
}

export default Testionials


//single testimonial 
function Testionial({ description, authorPic, authorName, authorPosition }) {
    console.log(description);
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
                    {authorPic}
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
`
const QuoteDecor = styled.div`
    display: grid;
    place-content: center;
`
const Desc = styled.p`
    margin-top: 1.5rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
`
const AuthorWrapper = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

`

const Profile = styled.div`
    margin-right: 8px;
    max-width:88px;
    word-wrap: break-word;
`

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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