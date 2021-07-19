import styled from 'styled-components'
import Card from './card'
import { Title, TitleWrapper } from "../Career/utils"
import { content } from '../../content'



function CardWrapper({ cardContent }) {
    return (
        <Wrapper>

            <TitleWrapper>
                <Title>Our Services</Title>
            </TitleWrapper>
            <GridWrapper>
                {cardContent.map((val, i) => <Card {...val} key={i} />)}

            </GridWrapper>
        </Wrapper>
    )
}

export default CardWrapper

const Wrapper = styled.section`
    margin-top: 5rem;
    font-family: 'Montserrat', sans-serif;
    padding: 0 1rem;
`
const GridWrapper = styled.div`

    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 20px;
    max-width: 1180px;
    margin: 0 auto;
    margin-top: 2.5rem;

    width: fit-content;

    @media (max-width: 900px){
        grid-template-columns: repeat(2,1fr);
    }
    @media (max-width: 660px){
        grid-template-columns: repeat(1,1fr);
    }
`