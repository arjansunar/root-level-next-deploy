import styled from "styled-components";
import { Title } from "./FAQ";
import PartnersCard from "./PartnersCard";

const partnerImages = [
    { path: '/assets/home/partners/partner-1.svg' },
    { path: '/assets/home/partners/partner-2.svg' },
    { path: '/assets/home/partners/partner-3.svg' },
    { path: '/assets/home/partners/partner-4.svg' },
    { path: '/assets/home/partners/partner-4.svg' },
    { path: '/assets/home/partners/partner-3.svg' },
    { path: '/assets/home/partners/partner-2.svg' },
    { path: '/assets/home/partners/partner-1.svg' },

]

function PartnerSection() {
    return (
        <Section>
            <Title>Our Partners</Title>
            <ImageWrapper>
                {partnerImages.map((val, i) => <PartnersCard {...val} key={i} />)}
            </ImageWrapper>
        </Section>
    )
}

export default PartnerSection

const Section = styled.section`
    margin-top: 10rem;
`
const ImageWrapper = styled.div`

    display: grid;
    grid-template-columns: repeat(4,1fr);
    place-items: center;
    max-width: 780px;
    grid-column-gap: 20px;
    grid-row-gap: 24px;
    margin: 0 auto;

`