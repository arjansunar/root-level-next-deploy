import styled from "styled-components";

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-column-gap: 20px;
    grid-row-gap: 40px;

    @media screen and (max-width: 1100px){
        grid-template-columns: repeat(2,1fr);
    }

    @media screen and (max-width: 750px){
        grid-template-columns: 1fr;
    }
`

export const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 5rem 2.5rem 5rem;
`
