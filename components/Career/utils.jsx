import styled from "styled-components";


export const TitleWrapper = styled.div`
    display: grid;
    place-content: center;
`
export const Title = styled.h2`
    font-family: Montserrat;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: center; 
    color: #43475A;
    position: relative;

    &::before{
        position: absolute;
        content: '';
        bottom: -.2rem;
        width: 1ch;
        height: 4px;   
        left: 3px;
        border-radius: 1px;
        background: #008080;
    }
`