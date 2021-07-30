import styled, { css } from 'styled-components'

export const FlexContainer= styled.div`
    display: flex;
    justify-content: space-between;
`
export const Wrapper = styled.div`
    font-family: 'Montserrat', sans-serif;
    max-width: 1180px;
    width: 90vw;
    /* width: 1180px; */
    margin: 0 auto;
    display: grid;
    grid-template-columns: 680px 1fr;

    @media (max-width: 1180px){
    grid-template-columns: 1.25fr 1fr;
    }

    @media (max-width: 820px){
    grid-template-columns: 1fr;
    }

    @media (max-width: 380px){
        width: 95vw;
    }
    /* grid-template-rows: 760px; */
`
export const OverviewWrapper = styled.div`
    padding: 2rem;
    background: #F4F4F4;
    @media (max-width: 380px){
        padding: 2rem 1.5rem;
    }
`

export const ApplyWrapper = styled.div`
    padding: 32px;
    background: #F9FAFB;

`
export const Title = styled.h2`
    font-size: 22px;
    font-weight: 600;
    line-height: 28px;
    text-transform: uppercase;

    @media (max-width: 380px){
    font-size: 20px;
    }
`

export const Label = styled.h6`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;

`
export const ButtonWrapper = styled.div`
    margin-top: 24px;
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
    grid-gap: 24px;
    min-height: 76px;
`
export const Button = styled.div`

`
const activeStyles = css`
    background: #008080;
    color: #fff;
`
const closeBtnStyles= css`
    min-width: fit-content; 
    font-size: 1rem; 
    padding: 8px 10px; 
    margin-top: -0.3rem;
    cursor: pointer;
`
export const StyledButton = styled.button`
    margin-top:8px;
    font-size: 18px;
    padding: 12px;
    min-width: 178px;
    border:none;
    background: #E5E5E5;
    ${({ active }) => (active ? activeStyles : '')}
    ${({closeBtn})=> (closeBtn && closeBtnStyles)}
`
export const Desc = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    text-align: left;
    max-width: 535px;
    margin: 1rem 0 30px 0 ;
`
export const List = styled.ul`
    margin-top: 1rem;
    padding-left: 2rem;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;

`
export const ListItem = styled.li`

`