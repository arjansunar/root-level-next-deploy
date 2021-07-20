import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    font-family: 'Montserrat', sans-serif;
    /* max-width: 1180px; */
    width: 1180px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 680px 1fr;
    /* grid-template-rows: 760px; */
`
export const OverviewWrapper = styled.div`
    padding: 2rem;
    background: #F4F4F4;
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
    grid-gap: 24px;
    min-height: 76px;
    max-width: 76px;
`
export const Button = styled.div`

`
const activeStyles = css`
    background: #008080;
    color: #fff;
`
export const StyledButton = styled.button`
    margin-top:8px;
    font-size: 18px;
    padding: 12px;
    min-width: 178px;
    border:none;
    background: #E5E5E5;
    ${({ active }) => (active ? activeStyles : '')}
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