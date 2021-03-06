import styled from "styled-components"
import { Title } from "./FAQ"
import IconCard from "./utility/IconCard"


function IconCards({ cardContent }) {
    return (
        <StyledSection>
            <Title>Our Work Ethic</Title>
            <CardsWrapper>
                {cardContent.map((val, i) => <IconCard {...val} key={i} />)}
            </CardsWrapper>
        </StyledSection>
    )
}

export default IconCards

const CardsWrapper = styled.div`
    margin-top: 3rem;
    display: grid;
    max-width: 1180px;
    margin: 0 auto;
    grid-template-columns: repeat(3 ,1fr);
    align-items: flex-start;

    //add media queries for responsiveness
    @media (max-width: 500px){
        grid-template-columns: 1fr;
        justify-items: center;
        /* grid-auto-rows: auto; */
    }
`
const StyledSection = styled.section`
    margin-top: 10rem;
`