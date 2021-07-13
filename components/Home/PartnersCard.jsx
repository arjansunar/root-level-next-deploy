
import Image from 'next/image'
import styled from 'styled-components'

function PartnersCard({ path }) {
    return (
        <ImgWrapper>
            <Image height="50px" width="112px" alt="our partners" src={path} />
        </ImgWrapper>
    )
}

export default PartnersCard

const ImgWrapper = styled.div`
    max-width: 180px;
    border: 1px solid #E6E6E6;
    padding: 2.875rem 2.125rem;
`