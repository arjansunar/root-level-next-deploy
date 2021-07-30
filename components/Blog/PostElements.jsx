import styled from "styled-components";
import Image from "next/image"

export const PostWrapper = styled.article`
    font-family: 'Montserrat', sans-serif;
    max-width: 820px;
    padding: 2rem 1rem 7rem 3rem;

    @media (max-width: 800px){
        padding: 2rem 3rem;
    }
    @media (max-width: 500px){
        padding: 2rem 2rem;
    }
    @media (max-width: 400px){
        padding: 2rem 1.5rem;
    }
`
export const PostHeadSection = styled.div`
    margin-top: 2rem;
`
export const PostInfo = styled.div`
    color: #ACAFBA;    
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;


`
export const Title = styled.h1`
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: 60px;
    letter-spacing: 0em;
    text-align: left;
    color: #1E2A37;
    margin-top:1rem;

    @media (max-width: 500px){
        font-size: 40px;
        line-height: 48px;

    }

    @media (max-width: 400px){
        font-size: 38px;
        line-height: 45px;
    }
`
export const MainImage = styled(Image)`
    margin-top: 1.5rem;
`
//need styles for h1 to h4, p, a, li, blockquote 
export const PostContent = styled.main`
    margin-top: 1.5rem;

    & div {
        /* background-color: red; */

        line-height: 1.75;
        color: #292929;

        p{
            margin-top: 1rem;
        }

        h1 , h2 {
            margin-top: 3.625rem;

            @media (max-width: 500px){
                margin-top: 2.7rem;
            }
        }

        h3, h4{
            margin-top: 3rem;
        }
        img {
            margin-top: 3rem;
            max-width: 100%;
        }

        a, a:hover, a:focus, a:active {
            text-decoration: underline;
            color: inherit;
        }

        ul {
            padding-left: 2.5rem;
            margin-top: 1.25rem;
        }

        blockquote {
            margin-top: 2.625rem;
            font-style: italic;
            padding: .8rem 1rem;
            background-color: #F9F9F9;
            border-left: 3px solid black;
        }
    }
    
`

export const SectionWrapper = styled.section`
    display: flex;
    justify-content: center;
`

export const ShareButtonWrapper = styled.div`
    /* background-color: red; */
    margin-left: -3rem;
`

export const ButtonContainer = styled.div`
    position: sticky;
    display: flex;
    flex-direction: column;
    height:3rem;
    width: 3rem;

`
export const LikeButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    font-size: 1.2rem;

    & span{
        margin-right: .3rem;
        margin-top: 2px;
    }
`