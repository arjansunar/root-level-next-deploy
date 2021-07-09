import styled from "styled-components"
import IconWrapper from "./IconWrapper"

function InfoCard({ iconPath, title, desc }) {
    return (
        <Wrapper>
            <IconWrapper
                bgColor='#fff'
                size='120px'
                iconPath={iconPath}
            />
            <Title>
                {title}
            </Title>
            <Desc>
                {desc}
            </Desc>
        </Wrapper>
    )
}

export default InfoCard

const Wrapper = styled.div`
    max-width: 300px;
    @media screen and (max-width: 860px){
        text-align:center;
        margin-top: 2rem;
    }
`
const Title = styled.h4`
    margin-top: 2rem;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: 0em;
    /* text-align: left; */
`

const Desc = styled.p`
    margin-top: 2rem;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    /* text-align: left; */
    color: #767683;

`